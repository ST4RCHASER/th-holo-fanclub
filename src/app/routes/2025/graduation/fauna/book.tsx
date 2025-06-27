import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import flipbookViewer from "https://esm.sh/flipbook-viewer";
// @ts-ignore
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import { Navbar } from '@/components/ui/navbar';
import { Head } from '@/components/seo';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.min.js';

type PDFPage = {
    img: HTMLImageElement;
    num: number;
    width: number;
    height: number;
};

type PDFBook = {
    pdf: pdfjsLib.PDFDocumentProxy;
    numPages: () => number;
    getPage: (n: number, cb: (err: Error | null, page?: PDFPage) => void) => void;
};

const loadPDF = async (url: string, setBook: React.Dispatch<React.SetStateAction<PDFBook | null>>): Promise<void> => {
    const cache: (PDFPage | undefined)[] = [];

    const warmCache = async (pdf: pdfjsLib.PDFDocumentProxy, n: number): Promise<void> => {
        if (n <= pdf.numPages) {
            await getPage(pdf, n, () => warmCache(pdf, n + 1));
        }
    };

    const getPage = async (
        pdf: pdfjsLib.PDFDocumentProxy,
        n: number,
        cb: (err: Error | null, page?: PDFPage) => void
    ): Promise<void> => {
        if (!n || n > pdf.numPages) return cb(null);

        if (cache[n]) return cb(null, cache[n]);

        try {
            const page = await pdf.getPage(n);
            const scale = 1.2;
            const viewport = page.getViewport({ scale });
            const outputScale = window.devicePixelRatio || 1;

            const canvas = document.createElement('canvas');
            canvas.width = Math.floor(viewport.width * outputScale);
            canvas.height = Math.floor(viewport.height * outputScale);
            canvas.style.width = `${Math.floor(viewport.width)}px`;
            canvas.style.height = `${Math.floor(viewport.height)}px`;
            canvas.style.background = 'black';
            canvas.style.backgroundColor = 'black';

            const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
            const context = canvas.getContext('2d');
            if (!context) throw new Error('Failed to get canvas context');


            // Explicitly clear the canvas with transparency
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = 'rgba(0, 0, 0, 0)'; // Set transparent background
            context.fillRect(0, 0, canvas.width, canvas.height);

            const renderContext = { canvasContext: context, transform, viewport, background: '#FFFFE0' };

            await page.render(renderContext).promise;

            // Adjust the green channel
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                // Increase green channel (data[i + 1])
                // data[i + 1] = Math.min(255, data[i + 1] + 100); // Add 50 to green, cap at 255
            }
            context.putImageData(imageData, 0, 0);

            const img = new Image();
            img.src = canvas.toDataURL();
            img.addEventListener('load', () => {
                const pageData: PDFPage = {
                    img,
                    num: n,
                    width: img.width,
                    height: img.height,
                };
                cache[n] = pageData;
                cb(null, pageData);
            });
        } catch (err) {
            cb(err as Error);
        }
    };

    try {
        const pdf = await pdfjsLib.getDocument(url).promise;
        await warmCache(pdf, 1);

        setBook({
            pdf,
            numPages: () => pdf.numPages,
            getPage: (n, cb) => getPage(pdf, n, cb),
        });
    } catch (err) {
        console.error(err || 'PDF parsing failed');
    }
};

const FlipbookViewer: React.FC = () => {
    const appRef = useRef<HTMLDivElement | null>(null);
    const [book, setBook] = useState<PDFBook | null>(null);
    const [viewer, setViewer] = useState<any>(null);

    const getCurrentDisplaySize = () => {
        if (!appRef.current) return { width: 0, height: 0 };

        const { width, height } = appRef.current.getBoundingClientRect();
        return { width, height };
    }

    useEffect(() => {
        const initializeViewer = async () => {
            if (!book || !appRef.current) return;

            flipbookViewer.init(book, appRef.current, getCurrentDisplaySize(), (err: Error | null, viewerInstance?: any) => {
                if (err) {
                    console.error(err);
                } else {
                    setViewer(viewerInstance);
                    // viewerInstance.on('seen', (n: number) => console.log('Page number:', n));
                }
            });
        };

        initializeViewer();
    }, [book]);

    useEffect(() => {
        loadPDF('https://m1r.ai/NOms.pdf', setBook);
        // Keyboard event
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') viewer?.flip_forward();
            if (e.key === 'ArrowLeft') viewer?.flip_back();
            if (e.key === 'z') viewer?.zoom();
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', () => viewer?.resize(getCurrentDisplaySize()));


        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', () => viewer?.resize(getCurrentDisplaySize()));
        }
    }, []);

    const handleNext = () => {
        console.log(viewer)
        viewer?.flip_forward();
    }
    const handlePrev = () => viewer?.flip_back();
    const handleZoom = () => viewer?.zoom();

    return (
        <div className='overflow-hidden'>
            <Head title='Fauna Friendship' description="Fauna Friendship" />
            <div className='top-0 z-50'>
                <Navbar theme='fauna' />
            </div>
            <div className='w-screen h-screen flex bg-transparent fixed z-20'>
                <div onClick={handlePrev} className='w-1/2 h-full text-white flex justify-center items-center cursor-pointer'>
                </div>
                <div onClick={handleNext} className='w-1/2 h-full text-white flex justify-center items-center cursor-pointer'>
                </div>
            </div>
            <div ref={appRef} className='w-full h-screen bg-transparent' style={{ backgroundColor: 'transparent' }}></div>
            {/* <div className='absolute bottom-0 left-0 w-full flex justify-between p-4 bg-black text-white z-50'>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
                <button onClick={handleZoom}>Zoom</button>
                <div>

                </div>
            </div> */}
        </div>
    );
};

export default FlipbookViewer;



