import { Head } from '@/components/seo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';

import { Drawable } from '@/features/submitBoard/components/drawable';
import { Writeable } from '@/features/submitBoard/components/writeable';
import { addPrefix } from '@/utils/string';
import { Input } from '@/components/ui/input';
import { useSubmitBoard } from '@/features/submitBoard/api/submitBoard';
import { useUploadImages } from '@/lib/uploadImage';
import { base64ToPngFile } from '@/utils/file';
import { DrawableAdv } from '@/features/submitBoard/components/drawableAdv';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Loader2, PenBoxIcon, PenIcon, SaveAllIcon, TypeIcon } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { ImCancelCircle } from 'react-icons/im';
import { SubmitData } from '@/types/api';
import { paths } from '@/config/paths';

const SubmitMessageRoute = () => {
    const [tabValue, setTabValue] = useState('typing');
    const [recipient, setRecipient] = useState('');
    const { toast } = useToast();
    const submit = useSubmitBoard({
        mutationConfig: {
            onSuccess: () => {
                setIsSuccessDialogOpen(true);
                clearSavedMessage();
                setFinalSave(null);
            },
            onError: (error) => {
                toast({
                    title: 'Failed to submit message',
                    description: error.message,
                })
            }
        }
    });
    const upload = useUploadImages();
    const [bg, setBg] = useState('');
    const [finalSave, setFinalSave] = useState<SubmitData | null>(null);
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

    const clearSavedMessage = () => {
        localStorage.setItem(addPrefix('chloe', 'savedRTValue'), '');
        localStorage.setItem(addPrefix('chloe', 'savedNameValue'), '');
        localStorage.setItem(addPrefix('chloe', 'savedDrawing'), '{"lines":[]}');
    }
    const doSubmit = async () => {
        let url = '';
        let bgUrl = '';
        if (finalSave?.drawImage) {
            const file = base64ToPngFile(finalSave?.drawImage, 'chloe-draw-' + new Date().toISOString() + '.png');
            const fileList = await upload.mutateAsync({
                body: [file]
            })
            if (fileList) {
                url = fileList[0];
            }
        }
        if (finalSave?.image) {
            const bgFile = base64ToPngFile(finalSave?.image, 'chloe-draw-bg-' + new Date().toISOString() + '.png');
            const bgFileList = await upload.mutateAsync({
                body: [bgFile]
            })
            if (bgFileList) {
                bgUrl = bgFileList[0];
            }
        }
        submit.mutate({
            body: {
                type: finalSave?.type || 'Unknown',
                talent: 'chloe',
                name: recipient,
                image: bgUrl,
                drawImage: url,
                message: finalSave?.message || '',
            }
        })
    }
    const handleWriteableSave = async (message: string, image: string) => {
        if (!message) {
            return;
        }
        setFinalSave({
            name: recipient,
            message: message,
            image: image,
            drawImage: '',
            type: 'Writing',
            talent: 'chloe',
        });
    }
    const handleDrawableSave = async (image: string, background: string) => {
        if (!image) {
            return;
        }

        setFinalSave({
            name: recipient,
            message: '',
            image: background,
            drawImage: image,
            type: 'Drawing',
            talent: 'chloe',
        });
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

    const stringToTextNewLine = (text: string) => {
        return text.split('\n').map((str, index) => {
            return (
                <div key={index} className='break-all'>
                    {str}
                </div>
            )
        })
    }

    const currentDate = new Date();
    const endDate = new Date('2024-12-28T16:59:59Z');
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
                        <Link to={paths.graduation.chloe.root.getHref()} className="text-blue-500 text-lg">Back to message board</Link>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <Head title='Send message to chloe' description="Submit message to chloe" />
            <div>
                <Dialog open={isSuccessDialogOpen} onOpenChange={
                    (isOpen) => {
                        if (!isOpen) {
                            setIsSuccessDialogOpen(false);
                        }
                    }
                }>
                    <DialogContent className='w-screen'>
                        <DialogHeader>
                            <DialogTitle>Message submitted</DialogTitle>
                            <DialogDescription>
                                <div
                                    className="text-lg text-center flex items-center justify-center"
                                >
                                    <CheckCircle2 size={64} className="text-green-500" />
                                </div>
                                <div className='text-center mt-4 text-md'>
                                    Thanks you for joining the project. Your message has been submitted successfully.
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="justify-between">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Submit another message
                                </Button>
                            </DialogClose>
                            <Link to={paths.graduation.chloe.root.getHref()} className="text-blue-500">
                                <Button type="button">
                                    Back to project
                                </Button>
                            </Link>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <Dialog open={
                    finalSave !== null
                } onOpenChange={
                    (isOpen) => {
                        if (!isOpen) {
                            setFinalSave(null);
                        }
                    }
                }>
                    <DialogContent className='w-screen'>
                        <DialogHeader>
                            <DialogTitle>Preview</DialogTitle>
                            <DialogDescription>
                                This is preview of your message before submitting
                            </DialogDescription>
                        </DialogHeader>
                        <div className="border-8 border-[#5C2222] rounded-md p-4 shadow-xl overflow-auto max-h-[80vh]">
                            {
                                finalSave?.name && <div>
                                    <div className="text-xl font-bold">
                                        {finalSave?.name}
                                    </div>
                                    <div className='border-b-2 border-gray-300 my-2'></div>
                                </div>
                            }
                            {
                                finalSave?.message && <div>
                                    {stringToTextNewLine(finalSave?.message || '')}
                                </div>
                            }
                            {
                                finalSave?.image && finalSave.type === 'Writing' && <div>
                                    <img src={finalSave?.image} alt="" className="w-full h-auto" />
                                </div>
                            }
                            <div className='relative'>
                                {
                                    finalSave?.drawImage && finalSave.type === 'Drawing' && <div>
                                        <img src={finalSave?.drawImage} alt="" className="w-full h-auto bg-cover bg-no-repeat bg-center" style={{
                                            backgroundImage: `url('${finalSave?.image}')`,
                                        }} />
                                    </div>
                                }
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-start lg:justify-between">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    <ImCancelCircle />
                                    Nah, I change my mind
                                </Button>
                            </DialogClose>
                            <Button type="submit" variant="default" onClick={doSubmit} disabled={submit.isPending || !finalSave || upload.isPending}>
                                {
                                    (submit.isPending || upload.isPending) && (
                                        <Loader2 className="animate-spin" />
                                    )
                                }
                                <SaveAllIcon />
                                Let's go
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <div>
                <img src={bg} alt="" className='fixed -z-30 w-screen h-screen blur-xl top-0 left-0 scale-125' />
            </div>
            <div>
                <img src="https://m1r.ai/Owui.jpeg" alt="" className={`fixed -z-30 w-screen h-screen blur-3xl top-0 left-0 duration-700 transition-all scale-110 ${tabValue === 'typing' ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <div className="w-full items-center bg-white rounded border p-4 shadow-md relative">
                <div className='flex justify-start absolute top-0 left-0 rounded-br-md overflow-hidden'>
                    <div className='bg-[#CDDF90] p-2'>
                        <Link to="/graduation/fauna/submit" className='flex items-center'>
                            <img src="https://m1r.ai/O1Iy.png" className='w-8 h-auto mr-2 animate-bounce' />
                            Looking for Fauna? Click here</Link>
                    </div>
                </div>
                <div className="text-center text-4xl font-bold py-8">
                    {tabValue === 'typing' ? 'Type a message' : 'Draw a message'} to Sakamata Chloe
                </div>
                <Tabs defaultValue="typing" value={tabValue} onValueChange={setTabValue}>
                    <div className="flex justify-center">
                        <TabsList>
                            <TabsTrigger value="typing">
                                <TypeIcon className='w-4 mr-1' />
                                Typing
                            </TabsTrigger>
                            <TabsTrigger value="draw"><PenIcon className='w-4 mr-1' /> Draw</TabsTrigger>
                            {
                                tabValue?.includes('draw') && (
                                    <TabsTrigger value="draw_fallback"><PenBoxIcon className='w-4 mr-1' /> Draw (Fallback)</TabsTrigger>
                                )
                            }
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
                        <DrawableAdv onSave={handleDrawableSave} onUpdate={setBg} />
                    </TabsContent>
                    <TabsContent value="draw_fallback">
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
