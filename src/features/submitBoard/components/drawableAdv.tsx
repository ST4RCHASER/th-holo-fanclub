import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { IoIosSave, IoMdDownload } from "react-icons/io";

type DrawableProps = {
    onSave: (image: string, background: string) => void;
    onUpdate?: (image: string) => void;
}

export const DrawableAdv = ({ onSave, onUpdate }: DrawableProps) => {
    const [isDrawingBoardOpen, setIsDrawingBoardOpen] = useState(false);
    const [lastaCanvasImage, setLastCanvasImage] = useState('');
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const clickDeleteButton = () => {
        if (iframeRef.current) {
            // Find button has class sc-eDLKkx lcXHbl and img src /static/media/delete.ee04eea3615f063a1b91b824e4df3473.svg then click that button
            iframeRef.current.contentWindow?.document.querySelectorAll('button.sc-eDLKkx.lcXHbl').forEach((button) => {
                const img = button.querySelector('img');
                if (img && img.src.includes('/static/media/delete.ee04eea3615f063a1b91b824e4df3473.svg')) {
                    (button as HTMLButtonElement).click();
                }
            }
            )
        }
    }

    const getCanvasImage = () => {
        if (iframeRef.current) {
            // Find the canvas element then get the image data
            const canvas = iframeRef.current.contentWindow?.document.querySelector('canvas#canvas.lower-canvas') as HTMLCanvasElement;
            if (canvas) {
                const image = canvas.toDataURL();
                setLastCanvasImage(image);
                return image;
            }
        }
        return '';
    }


    const setup = () => {
        // Find the button with class sc-eDLKkx lcXHbl then delete it
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.document.querySelectorAll('button.sc-eDLKkx.lcXHbl').forEach((button) => {
                // Is have save word in the button then remove it
                if (button.innerHTML.includes('Save')) {
                    button.remove();
                }
            })
            // <div class="sc-jTQCzO gIJOtp"><button class="sc-eDLKkx lcXHbl"><img src="/static/media/focus.2d0899e2b6cdf3ded6e4776d4e079890.svg" alt="Recenter"></button></div>
            iframeRef.current.contentWindow?.document.querySelectorAll('div.sc-jTQCzO.gIJOtp>button.sc-eDLKkx.lcXHbl').forEach((button) => {
                const img = button.querySelector('img');
                if (img && img.src.includes('/static/media/focus.2d0899e2b6cdf3ded6e4776d4e079890.svg')) {
                    button.remove();
                }
            }
            )
            // sc-guDLey gBbdoV is nevbar
            iframeRef.current.contentWindow?.document.querySelectorAll('div.sc-guDLey.gBbdoV').forEach((navbar) => {
                // Replace it with a new button
                const newButton = document.createElement('button');
                newButton.innerHTML = 'Finish drawing';
                newButton.className = 'sc-eDLKkx lcXHbl';
                newButton.addEventListener('click', () => {
                    setIsDrawingBoardOpen(false);
                    setLastCanvasImage(getCanvasImage());
                })
                newButton.style.padding = '8px 16px';
                newButton.style.border = 'none';
                newButton.style.borderRadius = '4px';
                newButton.style.backgroundColor = '#4CAF50';
                newButton.style.color = 'white';
                newButton.style.cursor = 'pointer';
                navbar.innerHTML = '';
                // Add flex box set save button to the right
                (navbar as HTMLElement).style.display = 'flex';
                (navbar as HTMLElement).style.justifyContent = 'flex-end';
                (navbar as HTMLElement).style.padding = '8px';
                navbar.appendChild(newButton);
            }
            )
        }
    }

    useEffect(() => {
        const autoClear = setInterval(() => {
            setup();
        }, 1000);
        // On touch or mouse up, get the image and send it to the parent
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.document.addEventListener('mouseup', () => {
                const image = getCanvasImage();
                if (image) {
                    if (onUpdate) {
                        onUpdate(image);
                    }
                }
            });
        }

        window.onbeforeunload = function () {
            return 'Are you sure you want to leave?';
        };

        return () => {
            // Cleanup
            if (iframeRef.current) {
                iframeRef.current.contentWindow?.document.removeEventListener('mouseup', () => { });
            }
            window.onbeforeunload = null;
            clearInterval(autoClear);
        }
    }, [iframeRef.current]);

    return <div>
        <iframe src="/drawer/index.html" className={`w-full h-screen fixed left-0 top-0 bg-white z-20 ${isDrawingBoardOpen ? 'block' : 'hidden'}`} ref={iframeRef}></iframe>
        <div className="w-full items-center bg-white overflow-hidden border rounded-md px-24 shadow-md relative cursor-pointer" onClick={() => {
            setIsDrawingBoardOpen(true);
            setup();
        }}>
            <div className="lg:text-2xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 text-white p-6 rounded-md shadow-2xl border z-10">
                Click me to enter the drawing board
            </div>
            <img src={lastaCanvasImage || 'https://m1r.ai/b6zX.jpg'} alt="Enter" className={
                lastaCanvasImage ? 'w-full' : 'blur-3xl w-full'
            } />
        </div>
        <div className="flex gap-4 mt-4 justify-end">
            <Button variant="secondary" onClick={() => {
                const base64 = lastaCanvasImage;
                if (base64) {
                    // save it to client's computer
                    const link = document.createElement('a');
                    link.href = base64;
                    link.download = 'drawing-' + new Date().toISOString() + '.png';
                    link.click();
                }
            }
            }
                disabled={!lastaCanvasImage}
            >
                <IoMdDownload />
                Save image
            </Button>
            <Button
                onClick={() => {
                    onSave(lastaCanvasImage, lastaCanvasImage);
                }}
                disabled={!lastaCanvasImage}
            >
                <IoIosSave />
                Submit
            </Button>
        </div>
    </div>
}