import { Button } from '@/components/ui/button';
import { IoIosSave } from "react-icons/io";
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { addPrefix } from '@/utils/string';

type WriteableProps = {
    prefix?: string;
    onSave: (message: string, image: string) => void;
}

export const Writeable = ({ prefix, onSave }: WriteableProps) => {
    const MAX_CHARACTERS = 600;
    const [rtValue, setRTValue] = useState('');
    const [image, setImage] = useState('');


    useEffect(() => {
        const update = () => {
            setRTValue(localStorage.getItem(addPrefix(prefix, 'savedRTValue')) || '');
        };


        update(); // Set initial size
        setTimeout(update, 100); // Set size after render
    }, []);

    return <div>
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                    style={{ fontSize: '24px', lineHeight: '32px' }}
                    placeholder="Type your message here."
                    id="message"
                    rows={14}
                    value={rtValue}
                    onChange={(x) => {
                        setRTValue(x.target.value)
                        localStorage.setItem(addPrefix(prefix, 'savedRTValue'), x.target.value);
                    }}
                />
                <p
                    className={`text-sm text-right ${rtValue.length > MAX_CHARACTERS
                        ? 'text-red-500'
                        : 'text-muted-foreground'
                        }`}
                >
                    {rtValue.length}/{MAX_CHARACTERS} characters
                </p>
            </div>
            <div className='flex justify-between gap-4 py-4'>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture" className='-mt-6'>Attach image</Label>
                    <Input id="picture" type="file"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                    setImage(e.target?.result as string);
                                };
                                reader.readAsDataURL(file);
                            }
                        }
                        }
                    />
                </div>
                <Button disabled={rtValue.length > MAX_CHARACTERS} onClick={() => {
                    onSave(rtValue, image);
                    localStorage.setItem(addPrefix(prefix, 'savedRTValue'), '');
                }}>
                    <IoIosSave />
                    Submit
                </Button>
            </div>
            <div>
                {
                    image && <img src={image} alt="Attached image" />
                }
            </div>
        </div>
    </div>;
}