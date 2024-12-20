import CanvasDraw from 'react-canvas-draw';
import { Button } from '@/components/ui/button';
import { IoIosSave, IoMdDownload, IoMdUndo } from "react-icons/io";
import { ImBin } from "react-icons/im";
import { UploadIcon } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useState, useEffect, useRef } from 'react';
import { addPrefix } from '@/utils/string';

type DrawableProps = {
    prefix?: string;
    onSave: (image: string, background: string) => void;
    onUpdate?: (image: string) => void;
}

export const Drawable = ({ prefix, onSave, onUpdate }: DrawableProps) => {
    const preSetColors = ['#444444', '#9b59b6', '#3498db', '#2ecc71', '#1abc9c', '#f1c40f', '#e67e22', '#e73c61'];
    const [color, setColor] = useState('#444444');
    const [customColor, setCustomColor] = useState('#444444');
    const [isUsingCustomColor, setIsUsingCustomColor] = useState(false);
    const [brushSize, setBrushSize] = useState(5);
    const canvasRef = useRef<CanvasDraw | null>(null);
    const [background, setBackground] = useState('');
    const [canvasSize, setCanvasSize] = useState({ width: 512, height: 512 });
    const canvasContainerRef = useRef(null);

    const setPresetColor = (color: string) => {
        setColor(color);
        setIsUsingCustomColor(false);
    }

    useEffect(() => {
        const updateCanvasSize = () => {
            if (canvasContainerRef.current) {
                const containerWidth = canvasContainerRef.current['offsetWidth'];
                const containerHeight = window.innerHeight * 0.6; // Adjust height relative to the viewport
                setCanvasSize({
                    width: containerWidth,
                    height: containerHeight,
                });
            }
        };


        updateCanvasSize(); // Set initial size
        setTimeout(updateCanvasSize, 100); // Set size after render
        window.addEventListener('resize', updateCanvasSize); // Update on window resize

        return () => {
            window.removeEventListener('resize', updateCanvasSize); // Cleanup on unmount
        };
    }, []);

    return <div>
        <div>
            <div className='justify-center gap-14 py-4 grid grid-cols-3 ml-14 lg:ml-8 lg:grid-cols-9'>
                {
                    preSetColors.map((loadedColor) => (
                        <button key={loadedColor} className={'duration-300 transition-all w-8 h-8 rounded-full bg-[' + loadedColor + '] shadow-md shadow-[' + loadedColor + ']/80' + (color === loadedColor ? ' scale-125' : '')}
                            style={{ backgroundColor: loadedColor, appearance: 'none', border: 'none', boxShadow: '0 0 0 2px ' + loadedColor + '80' }}
                            onClick={
                                () => setPresetColor(loadedColor)
                            } />
                    ))
                }
                <div>
                    <div className={`duration-300 transition-all w-8 h-8 rounded-full shadow-md shadow-[#444444]/80 ${isUsingCustomColor ? `scale-125 bg-[${customColor}]` : 'rainbow'}`} style={
                        {
                            appearance: 'none', border: 'none', boxShadow: '0 0 0 2px ' + customColor + '80',
                            ...isUsingCustomColor && { backgroundColor: customColor }
                        }
                    }>
                        <input type="color" value={customColor}
                            className="w-8 h-8 rounded-full border-none cursor-pointer opacity-0"
                            onChange={(e) => {
                                setCustomColor(e.target.value);
                                setIsUsingCustomColor(true);
                            }}
                            style={{ appearance: 'none', backgroundColor: customColor }}
                        ></input>
                    </div>
                </div>
            </div>

            <div className="text-center text-4xl font-bold py-8 flex justify-between gap-2 px-8">
                <div className='border w-8 h-8 rounded-full border-gray-300 flex justify-center items-center overflow-hidden'>
                    <div style={{
                        overflow: 'hidden',
                        borderRadius: '50%',
                        backgroundColor: color,
                        // Calculate size based on brush size to % of 8px
                        width: brushSize * 0.8 + 'px',
                        height: brushSize * 0.8 + 'px',
                    }}>
                    </div>
                </div>
                <Slider defaultValue={[10]} max={32} min={1} step={1} value={[brushSize]} className='w-5/6' onValueChange={(x) => {
                    setBrushSize(x[0]);
                }} />
                <Button variant="outline" size="icon" onClick={() => {
                    canvasRef.current?.undo();
                }
                }>
                    <IoMdUndo />
                </Button>
                <Button variant="outline" size="icon" onClick={() => {
                    // @ts-expect-error - canvasRef is not null
                    canvasRef.current?.eraseAll();
                }
                }>
                    <ImBin />
                </Button>
            </div>
        </div>
        <div
            ref={canvasContainerRef}
            className="box-border border-gray-300 border rounded"
            style={{
                maxWidth: '100%',
                overflow: 'hidden',
            }}
        >
            <CanvasDraw
                className="canvas-draw"
                ref={canvasRef}
                brushColor={isUsingCustomColor ? customColor : color}
                canvasWidth={canvasSize.width}
                canvasHeight={canvasSize.height}
                hideInterface={true}
                hideGrid={true}
                immediateLoading={true}
                brushRadius={brushSize}
                imgSrc={background}
                onChange={(x) => {
                    localStorage.setItem(addPrefix(prefix, 'savedDrawing'), x.getSaveData());
                    if (onUpdate) {
                        // @ts-expect-error - canvasRef is not null
                        onUpdate(x.getDataURL());
                    }
                }}
                saveData={localStorage.getItem(addPrefix(prefix, 'savedDrawing')) || undefined}
            />
        </div>
        <div className='flex justify-end gap-4 py-4 px-4'>
            <div className='flex justify-start w-full'>
                <Button variant="secondary" onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.onchange = (e) => {
                        const file = (e.target as HTMLInputElement).files?.[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                setBackground(e.target?.result as string);
                            };
                            reader.readAsDataURL(file);
                        }
                    };
                    input.click();
                }}>
                    <UploadIcon />
                    Upload background image
                </Button>
            </div>
            <Button variant="secondary" onClick={() => {
                const canvas = canvasRef.current;
                // @ts-expect-error - canvasRef is not null
                const base64 = canvas?.getDataURL();
                if (base64) {
                    // save it to client's computer
                    const link = document.createElement('a');
                    link.href = base64;
                    link.download = 'drawing-' + new Date().toISOString() + '.png';
                    link.click();
                }
            }
            }>
                <IoMdDownload />
                Save image
            </Button>
            <Button
                onClick={() => {
                    const canvas = canvasRef.current;
                    // @ts-expect-error - canvasRef is not null
                    const base64 = canvas?.getDataURL();
                    if (base64) {
                        onSave(base64, background);
                    }
                }}
            >
                <IoIosSave />
                Submit
            </Button>
        </div>
    </div>;
}