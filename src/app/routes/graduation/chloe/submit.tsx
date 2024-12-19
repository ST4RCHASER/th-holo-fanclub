import { Head } from '@/components/seo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';

import { Drawable } from '@/features/submitBoard/components/drawable';
import { Writeable } from '@/features/submitBoard/components/writeable';
import { addPrefix } from '@/utils/string';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useSubmitBoard } from '@/features/submitBoard/api/submitBoard';
import { useUploadImages } from '@/lib/uploadImage';
import { base64ToPngFile } from '@/utils/file';

const SubmitMessageRoute = () => {
    const [tabValue, setTabValue] = useState('typing');
    const [recipient, setRecipient] = useState('');
    const submit = useSubmitBoard();
    const upload = useUploadImages();
    const [bg, setBg] = useState('');

    const clearSavedMessage = () => {
        localStorage.setItem(addPrefix('chloe', 'savedRTValue'), '');
        localStorage.setItem(addPrefix('chloe', 'savedNameValue'), '');
        localStorage.setItem(addPrefix('chloe', 'savedDrawing'), '{"lines":[]}');
    }
    const handleWriteableSave = async (message: string, image: string) => {
        // Save message
        let url = '';
        if (image) {
            const file = await upload.mutateAsync({
                body: [base64ToPngFile(image, 'chloe-attachment-' + new Date().toISOString() + '.png')]
            })
            if (file) {
                url = file[0];
            }
        }
        submit.mutate({
            body: {
                type: 'Writing',
                talent: 'chloe',
                name: recipient,
                drawImage: '',
                image: url,
                message: message,
            }
        })
        clearSavedMessage();
    }
    const handleDrawableSave = async (image: string, background: string) => {
        let url = '';
        let bgUrl = '';
        if (image) {
            const file = base64ToPngFile(image, 'chloe-draw-' + new Date().toISOString() + '.png');
            const fileList = await upload.mutateAsync({
                body: [file]
            })
            if (fileList) {
                url = fileList[0];
            }
        }
        if (background) {
            const bgFile = base64ToPngFile(background, 'chloe-draw-bg-' + new Date().toISOString() + '.png');
            const bgFileList = await upload.mutateAsync({
                body: [bgFile]
            })
            if (bgFileList) {
                bgUrl = bgFileList[0];
            }
        }
        submit.mutate({
            body: {
                type: 'Drawing',
                talent: 'chloe',
                name: recipient,
                image: bgUrl,
                drawImage: url,
                message: '',
            }
        })
        clearSavedMessage();
    }

    useEffect(() => {
        const loadSave = () => {
            const savedRTValue = localStorage.getItem(addPrefix('chloe', 'savedNameValue'));
            if (savedRTValue) {
                setRecipient(savedRTValue);
            }
        }
        setTimeout(() => {
            loadSave();
        }, 100)
    }, []);

    const currentDate = new Date();
    const endDate = new Date('2024-12-31T23:59:59');
    const isClosed = currentDate > endDate;
    if (isClosed) {
        return (
            <div className="w-full items-center bg-white">
                <div className="text-center text-4xl font-bold py-8">
                    The submission is closed
                    <div className="text-lg py-4">
                        Thanks for participating in the project. We are no longer accepting new messages.
                    </div>
                    <div>
                        <a href="/graduation/chloe" className="text-blue-500 text-lg">Back to message board</a>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <Head description="Submit message to chloe" />
            <div>
                <img src={bg} alt="" className='fixed -z-20 w-screen h-screen blur-3xl top-0 left-0' />
            </div>
            <div>
                <img src="https://m1r.ai/b6zX.jpg" alt="" className={`fixed -z-10 w-screen h-screen blur-3xl top-0 left-0 duration-700 transition-all ${tabValue === 'typing' ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <div className="w-full items-center bg-white rounded">
                <div className="text-center text-4xl font-bold py-8">
                    {tabValue === 'typing' ? 'Type a message' : 'Draw a message'} to
                </div>
                <Tabs defaultValue="typing" value={tabValue} onValueChange={setTabValue}>
                    <div className="flex justify-center">
                        <TabsList>
                            <TabsTrigger value="typing">Typing</TabsTrigger>
                            <TabsTrigger value="draw">Draw</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="typing">
                        <div className="max-w-4xl mx-auto px-4 py-2">
                            <Label htmlFor="recipient" className='text-sm'>You name</Label>
                            <Input id="recipient" placeholder="Enter your name" onChange={(e) => {
                                setRecipient(e.target.value)
                                localStorage.setItem(addPrefix('chloe', 'savedNameValue'), e.target.value);
                            }} value={recipient} />
                        </div>
                        <Writeable prefix='chloe' onSave={handleWriteableSave} />
                    </TabsContent>
                    <TabsContent value="draw">
                        <div className="mx-auto px-4 py-4 mb-4">
                            <Label htmlFor="recipient" className='text-sm'>You name</Label>
                            <Input id="recipient" placeholder="Enter your name" onChange={(e) => {
                                setRecipient(e.target.value)
                                localStorage.setItem(addPrefix('chloe', 'savedNameValue'), e.target.value);
                            }} value={recipient} />
                        </div>
                        <Drawable prefix='chloe' onSave={handleDrawableSave} onUpdate={setBg} />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
};

export default SubmitMessageRoute;
