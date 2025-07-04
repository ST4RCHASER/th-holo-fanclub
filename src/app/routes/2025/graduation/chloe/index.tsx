import { DefaultLayout } from '@/components/layouts';
import { MessageBoardLayout } from '@/components/layouts/messageBoard';
import { Head } from '@/components/seo';
import { SubmitData } from '@/types/api';
import { stringToTextNewLine } from '@/utils/string';
import { useState } from 'react';

const ChloeMessageRoute = () => {
    const getRandomRotate = () => {
        const rotate = Math.floor(Math.random() * 10) - 3.5;
        return rotate;
    }
    const getRandomColor = () => {
        const colors = ['#4A4646', '#B44D48', '#F3CC59', '#705B57']
        return colors[Math.floor(Math.random() * colors.length)];
    }
    const [messages, setMessages] = useState<SubmitData[]>([
        {
            name: 'JK95',
            message: `クロヱちゃん、今までありがとうね。
またどこかで会いますよに。`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'Urzia',
            message: `この3年間、ありがとうございました！　本当、本当にすごく楽しかったです！　どこへ行こうとも、何をしようとも、私は沙花叉に応援し続けるよ！
愛してるぞ！！`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'ZENCENX',
            message: `Thank you for your hard work. Good luck in the future.
we love you`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'Kidokcalb',
            message: `I wish you happiness. We will always here to support you~!`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'mark Admin Sakamata kusakunai yo',
            message: `Thank you for always making me happy.
The oshi I love the most is Chloe. `,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'scib',
            message: `Hi Chloe
I'm overseafan. You have a great voice. I love coming to listen to you sing.
Thank you for everything Chloe❤️🖤`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'ハナムル',
            message: `3年間お疲れ様でした！今までよくできました、本当にありがとうね。 
私、日本語がまだまだなので、配信とか話す事が全部聞き取れなくても、辛いの日には沙花叉のライブ、ボイスで私の心を慰められた。 心から感謝しています。 

これから、沙花叉のライブと新曲聞く事ができなくても、ちょっと寂しくても、沙花叉がどの道を選んでも、この飼育員は(この私は)応援つづけます。xoxo 

飼育員より`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'ネーと',
            message: `沙花叉クロヱへ 

こんにちは
 私は海外のファンです、日本語はまで上手くないので申し訳ございません 今までお疲れ様です、ほんとう本当にありがとうございます！！ 沙花叉配信の時は凄く楽しかったです！歌うの時楽しかったです！ 沙花叉のことを全部大好きです！！

 これからも私は沙花叉を応援しています! 

ネーとより`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'SiMurgH',
            message: `Dear Chloe,

As part of HoloXer, my heart aches as you are saying farewell.

Your songs never fail to amaze me by how good your voice is.

I hope we will see each other soon.

With love,
SiMurgH`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: '- Miru -',
            message: `クロエさん, 今までありがとうございました。頑張ってください。あなたがどこへ行こうとも、私たちの心の中にはいつもあなたがいると信じています。旅立ちは悲しいけれど、あなたが私たちにもたらしてくれた大切な思い出と笑顔を忘れずに、笑顔でいることを約束します。`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'Rei48_jp',
            message: `沙花叉クロヱさんへ、

3年間にいて素晴らしい時間を本当にありがとうございます。
色々な配信のを見ました。
特に沙花叉さんの歌枠のいつも見てました。
すっごく素敵だったです。

これからも頑張ってね。
いつも応援してあげます。`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: '22comet',
            message: `ばっくばっくばく～ん!
Thank you for giving me so many great memories over the past three years. You are one of my favourite members and my oshi in HoloX.
I might not have had many chances to watch your streams due to language barriers, but I love your voice, design, and personality. I am a big fan of your songs!
Whatever you choose to do in the future, I hope you succeed, and perhaps we will see you again someday.
ありがとう!`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'CannonConoki',
            message: `The first time I was truly impressed by you was when I saw the Marine Senchou illustration you posted on Twitter. It was during a time when you were challenging yourself, yet you always make an effort to prioritize those around you whether it’s the Hololive members or your fans.
The letter you wrote to Lui during the 3D Live on June 21, 2022, deeply moved me. I still think that it was an incredibly precious thing that you did for Lui.
I love Hololive for how close and warm everyone is.
I’m truly happy that Sakamata Chloe is part of HoloX and Hololive. We will always love you, now and forever.`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'Estel (エステル)',
            message: `沙花叉クロヱちゃんへ

3年間の活動本当にお疲れ様でした～！　
すごく最高の時間だよ！！　ありがとうございます～～！！！

僕はクロヱちゃんの配信が大好き、とくに歌枠の配信。
これからはクロヱちゃんの活動をもっと見たいけど、
でもクロヱちゃんは決断したことなら僕は尊敬しています。

僕はクロヱちゃんが大好きだ！！！！
これからはクロヱちゃんこと一生忘れない！！
そして、体を大事に。
最後、たまにお風呂入ってくださいねｗｗｗ

バンコクのファンから
Estel (エステル)、`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'LAZYラジー',
            message: `🎣Thanks you for everything, Sakamata!! Your streams are amazing!!(sometimes too yabai!!) 

I love your songs like 擬態ごっこ、人生リセットボタンぽちーw. I also love 暁光クロニクル too.
I love them all but we don't have that much chances to listen those songs in real time. However, we will always keep listening to your songs, even after you have concluded your activities. 

We definitely miss you. Wish you good luck. Someday, we hope to meet you again. 

We really love you, Chloe!! ❤❤❤`,
            image: '',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        }, {
            name: 'スッパシット (タイ人です)',
            message: `Hello Sakamata-san, I feel like I'm a slow-witted person. When I like someone, if they haven't graduated yet, they'll be someone who's about to graduate. But if that's the way you choose, I will ready to watch over you and support you along this way. Finally, I, an ordinary person, would like to do something for you, who are special. I decided to try drawing your fan art, practicing one picture a day. But because of my duty to do my thesis, I will make it a simple line drawing, because I have never drawn fan art before. So I hope the next year, both of us will have a good graduation.`,
            image: 'https://m1r.ai/xX6D.png',
            drawImage: '',
            type: 'write',
            talent: 'fauna'
        },
        {
            name: 'Markmy',
            message: '',
            image: '',
            drawImage: 'https://m1r.ai/lzBTN.png',
            type: 'draw',
            talent: 'fauna'
        }
    ]);
    return (
        <>
            <Head title='Chloe Graduation' description="Chloe message board" />
            <MessageBoardLayout theme='chloe'>
                <DefaultLayout >
                    <div className='font-sans'>
                        <div className='mt-8'>
                            <div className='border-8 border-[#B44D48] p-8 rounded relative mx-8 bg-[#FAE9E1]'>
                                <div className='absolute -top-4 -left-4 w-12 h-12 rounded-full flex justify-center items-center'>
                                    <img src="https://m1r.ai/SGTQ.png" style={{
                                        transform: 'scale(-1, 1)'
                                    }} alt="" />
                                </div>
                                <div className='flex justify-center md:gap-16'>
                                    <div className='flex justify-center mt-4'>
                                        <img src="https://m1r.ai/uhsn.webp" className='w-64' alt="" />
                                    </div>
                                    <div className='text-center text-lg my-auto'>
                                        この3年間お疲れ様でした。
                                        <br />
                                        沙花叉の笑顔と思い出をきっと忘れないよ。
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <div className='inline'>
                                        — HoloFans TH
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 text-center text-4xl text-white'>
                            Creations for you
                        </div>
                        <div className='p-8 rounded mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                            {
                                messages.map((message, index) => (
                                    <div key={index} className='md:p-4 xl:p-6 duration-300 transition-all hover:rotate-0' style={{
                                        transform: `rotate(${getRandomRotate()}deg)`
                                    }}>
                                        <div className="border-4 border-[#B44D48] rounded-md p-4 shadow-lg bg-[#FAE9E1]" style={{
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

export default ChloeMessageRoute;