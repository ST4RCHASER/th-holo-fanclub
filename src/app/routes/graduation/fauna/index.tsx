import { DefaultLayout } from '@/components/layouts';
import { MessageBoardLayout } from '@/components/layouts/messageBoard';
import { Head } from '@/components/seo';
import { SubmitData } from '@/types/api';
import { stringToTextNewLine } from '@/utils/string';
import { useState } from 'react';

const FaunaMessageRoute = () => {
    const getRandomRotate = () => {
        const rotate = Math.floor(Math.random() * 10) - 3.5;
        return rotate;
    }
    const getRandomColor = () => {
        const colors = ['#84DFA9', '#F18195', '#34445E', '#F2D8AF', '#70854B']
        return colors[Math.floor(Math.random() * colors.length)];
    }
    const [messages, setMessages] = useState<SubmitData[]>([
        {
            name: 'ZENCENX',
            message: `Thank you Fauna, good luck for the future. !`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'Kidokcalb',
            message: `I wish you happiness in your new path~!`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'Khase',
            message: `Thanks for all precious moments for 4 years. Good luck and I wish you being always happy from now on. Love you, Fauna💚`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'scib',
            message: `Thank you for everything Fauna💚`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'Aof',
            message: `Fauna-san, congratulations on 1 million subs. I wish you success, meet good people, and be happy. The things you gave us, both fun and happiness, will always be in our memories. Good luck.`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: '- Miru -',
            message: `Thank you for everything, Fauna. Good luck on your journey. You will always be in our hearts <3.

Please, take care 😄

and Congratulations on your 1 million subscribers !!!`,
            image: '',
            drawImage: '',
            type: 'draw',
            talent: 'fauna'
        },
        {
            name: 'jjleesuwan',
            message: `Thank you, Fauna, for all the hard work and dedication you’ve put into everything you’ve done. Your ASMR videos, ASMR live streams, and other live streams have been a source of joy and comfort for me, and I want you to know how much I truly appreciate them. As you move forward to new chapters in life, I wish you all the success, happiness, and fulfillment you deserve. No matter where your journey takes you, you’ll always have my support.`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'SiMurgH',
            message: `Dear Fauna,

Your ASMR blessed my nights and your Hitman streams lifted my emotion.

It saddens me to see you go but I believe you have a reason.

Thank you for all the good time.

With love,
SiMurgH`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'LAZYラジー',
            message: `Konfauna🌿... It's tough to say goodbye but goodbye is just goodbye. However, these moments and memories are precious treasures that will never fade away from my heart.

We definitely miss you. Wish you good luck. Someday, we may meet you again.

And lastly, we really love you Fauna!!💚💚💚

Man I love Fauna... ll`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'Rei48_jp',
            message: `Dear Fauna,

How are you recently? I hope you will be fine.
I felt sad when I heard you are leaving.
But I respect your decision.
I wish you'll be find something you love to do and make you happy.

Your happiness is my happiness.

Good luck and please take care, Mother Nature.`,
            image: '',
            drawImage: '',
            type: 'draw',
            talent: 'fauna'
        },
        {
            name: 'Mephisto123',
            message: `Thank you so much Fauna, for always make my morning gaming session a little less lonely with your yapping session. I might be a new Hololive fan, falling into the rabbit hole 7 months ago, but every moments from your streams will always be one of the funniest moment I've experienced on internet. I wish you luck in whatever you will do in the future. Faunwell!!!`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'Heiliss',
            message: `We Always Love you.
Till We Meet Again.
See You, Fua Fua.`,
            image: 'https://m1r.ai/xSR4N.png',
            drawImage: '',
            type: 'draw',
            talent: 'fauna'
        },
        {
            name: 'Randneazt',
            message: `Thank you for everything Fauna!
I’ll listen to your ASMR in my sleep so I can dream of you.
Till we meet again, someday, some how
Faunwell`,
            image: 'https://m1r.ai/P2KP.png',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'I’m your sapling',
            message: `Hello Fauna my beloved
Over the years,you’ve brought me countless smiles,and inspiration. Thank you for your hard work,your dedication to making everything the best it can be,and your thoughtfulness toward those around you.I love you for being exactly who you are more than anything in the world.In just a few days,I won’t be getting notifications from your channel anymore.It’s so sad,but I wish you all the happiness on your new path. Pls take good care of yourself.I still remember your soft voice,the voice that always keep deeply inside my memories.Thank you Fauna my happiness vitamin.
Faunwell`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'CannonConoki',
            message: `Fauna voice, whether she’s singing or doing ASMR, always makes us feel calm and warm. During the 3D Live on September 17, 2023, I really loved the song Fukashigi no Carte performed by Fauna and Watame. When Fauna sang Vanilla Salt, I felt that she was beautiful and truly radiant.

Fauna's Dungeon is such an amazing idea. I love seeing the Hololive members bonding and enjoying time together.

Thank you for always bringing joy and healing our hearts. You make Hololive an even warmer and more special place. I’m truly happy that Ceres Fauna is part of the Promise Council and Hololive.`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: '22comet',
            message: `Konfauna!
I did not have a favourite member in HoloEN, but you became a comfort watch for me whenever I wanted to see someone relaxing yet funny.
I feel lucky to have had the chance to cheer for you in the previous HoloFes and to be one of the first to shout, 'Man, I love Fauna.'
I wish you the best of luck in your future endeavours and hope to come across you again someday.
Thank you for the past three years, and Faunwell!`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'Estel',
            message: `To Ceres Fauna

Thank you for all of your hard work for this 3 years. It's a really wonderful memories and fully of happiness. I'm really like to continue to watch your performance next year but when i saw the annouced it really sad but i'm understand and it's okay because all good things must come to an end in someday. So I'm really glad that i'm know you watch your stream, listen to your music and asmr. I can say it that i'm really love you!!!
so please take care of yourself and wish you a happiness.

from one of saplings who lived in thailand
Estel.`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'Smailt',
            message: ``,
            image: '',
            drawImage: 'https://m1r.ai/9xhU.png',
            type: 'draw',
            talent: 'fauna'
        },
    ]);
    return (
        <>
            <Head title='Fauna Graduation' description="Fauna message board" />
            <MessageBoardLayout>
                <DefaultLayout >
                    <div className='font-sans'>
                        <div className='mt-8'>
                            <div className='border-8 border-[#84DFA9] p-8 rounded relative mx-8'>
                                <div className='absolute -top-4 -left-4 w-12 h-12 rounded-full flex justify-center items-center'>
                                    <img src="https://m1r.ai/SGTQ.png" style={{
                                        transform: 'scale(-1, 1)'
                                    }} alt="" />
                                </div>
                                <div className='flex justify-center md:gap-16'>
                                    <div className='flex justify-center mt-4'>
                                        <img src="https://m1r.ai/kVrAU.webp" className='w-48' alt="" />
                                    </div>
                                    <div className='text-center text-lg my-auto'>
                                        Thank you for 3 years of effort.
                                        <br />
                                        We will always remember every smile and the memories you have given to us.
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <div className='inline'>
                                        — Holo Fans TH
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 text-center text-4xl'>
                            Creations for you
                        </div>
                        <div className='p-8 rounded mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                            {
                                messages.map((message, index) => (
                                    <div key={index} className='md:p-4 xl:p-6 duration-300 transition-all hover:rotate-0' style={{
                                        transform: `rotate(${getRandomRotate()}deg)`
                                    }}>
                                        <div className="border-4 border-[#84DFA9] rounded-md p-4 shadow-lg bg-[#FAF5E5]" style={{
                                            borderColor: getRandomColor()
                                        }}>
                                            <div className='text-xl font-bold'>
                                                {
                                                    message.name
                                                }
                                            </div>
                                            <div className='border border-black opacity-30 my-4'></div>
                                            <div>
                                                {
                                                    message.message && stringToTextNewLine(message.message)
                                                }
                                            </div>
                                            {
                                                (message.drawImage || message.image) && <div className='mt-4'>
                                                    <a href={message.drawImage || message.image} target='_blank' rel='noreferrer'>
                                                        <img src={message.drawImage || message.image} alt={message.name || message.message} />
                                                    </a>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </DefaultLayout>
            </MessageBoardLayout >

        </>
    );
};

export default FaunaMessageRoute;