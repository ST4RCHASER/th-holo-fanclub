import { DefaultLayout } from '@/components/layouts';
import { MessageBoardLayout } from '@/components/layouts/messageBoard';
import { Head } from '@/components/seo';
import { SubmitData } from '@/types/api';
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
            name: 'Holo Fans TH',
            message: 'Hello, This is a test message',
            image: 'https://m1r.ai/uhsn.webp',
            drawImage: 'https://m1r.ai/uhsn.webp',
            type: 'fan',
            talent: 'holo'
        },
        {
            name: 'Holo Fans TH',
            message: 'Hello, This is a test message',
            image: 'https://m1r.ai/uhsn.webp',
            drawImage: 'https://m1r.ai/uhsn.webp',
            type: 'fan',
            talent: 'holo'
        },
        {
            name: 'Holo Fans TH',
            message: 'Hello, This is a test message',
            image: 'https://m1r.ai/uhsn.webp',
            drawImage: 'https://m1r.ai/uhsn.webp',
            type: 'fan',
            talent: 'holo'
        },
        {
            name: 'Holo Fans TH',
            message: 'Hello, This is a test message',
            image: 'https://m1r.ai/uhsn.webp',
            drawImage: 'https://m1r.ai/uhsn.webp',
            type: 'fan',
            talent: 'holo'
        },
        {
            name: 'Holo Fans TH',
            message: 'Hello, This is a test message',
            image: 'https://m1r.ai/uhsn.webp',
            drawImage: 'https://m1r.ai/uhsn.webp',
            type: 'fan',
            talent: 'holo'
        }
    ]);
    return (
        <>
            <Head description="Submit message to chloe" />
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
                                完でッ町重カヌ平国け女載ヘケ若愛いせ子首主ヌモナツ団断ぱ選8温ヲメホマ表意なず身70必らラぞ昇新ぽ統下ハク相研ラ回間7率クイ変派座同ぜべ。来ルホサム地以紙そつほ間視テユ違松行れ像来コナ海取げ各究うン治問アヌ気成テアニ会入ぽゅ権3広容欲ずろぼ。例キイテト休紙しよ埼政まぴラ井研豊収づに突96経だト来率ずンくっ掲辺政目テ遠吾暖よ。

                                郷モフイ量下むす銃方キ念近辺を古上れ済月モホコナ流2来たかの回統マル原9様ホ分因暮覧ヲリユ試作要ミヤ暮告ラ吉来ちばん視必冤冶きちイ。覧いねんむ心死ルラコイ行防つゅず映推公リ来頁シ足長けぜ顔団マリナソ由歴載づリびよ有都だんゅろ庁索ひな刊人賃ユヱ政夏やぜべ価住必第ヌム残賀ぱち申毎ねとーづ図変ぱひゆし。

                                申ホ者足エミテカ正開カロオ女開オヘニユ無改もよすほ昔修は真予ーつにあ族視へとろぞ遊毎辺しれょ提要ラヒウ合転イメモ編遠ちぞ館備近伐りをお。競そと指94埼コニカ指子責2葉テロ演換レ明真ウ来任ぱどスも縮切うさ公間さぶいせ文製う十審いょ官振リいフの。苦じぼ剛在ず犠事39能1講やスが好手ヲレ影蝶像ノ上表ミ電断保べうほ然員ヤノ当万け融森ちいず豊新違ヘホ査秘ぐ。

                                紀上メウセヲ八界調ラケ周覧半サロ著今ヘ笑検橋ク提全経づ権島ユアル空春よンほ記育メテヱイ般2強きイ。変イょち売会エカリ政京ワエリ格個イそふ復街べをむ夜模ル自必フセム転車ロ報質がかそ展記ク芸数号ふ自疑マレハヤ際者がゅッ害師ケ変最ト降地スルーへ付到ずげんき住彰則廟箱わせ。質けぞつ台座36報岡確位68昇値ぱイ員4一野ごぐ記社コ持来きこわい誉将げてッ組遺マミホ別27成募レやせル。

                                習イ回知めどこふ賀者9冬マ節円ユトエ芋覧よや全洋せ計本どそゅ選編表事て書牧会ッスフ一考どゆげぽ覚証胞ヨ再合ぽるえ彰品カキメク行世砂翼港おば。口ぱだ再字ニ座経ミクコ施転ヒハ政界ぎ使塚観モ鮮6予ぎ分会ウタミス前構い羅女ど品案もづみ筆打忠誉け。3支ヱタケセ最作しねぎ作保ワユイ方違サハ図知ナメ広48集けう画面術2任べひ就変面モリホ連勝リそげが含偏啓懇殖びちだド。
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
                                    <div key={index} className='md:p-4 xl:p-6 duration-300 transition-all' style={{
                                        transform: `rotate(${getRandomRotate()}deg)`
                                    }}>
                                        <div className="border-4 border-[#84DFA9] rounded-md p-4 shadow-lg bg-[#FAF5E5]" style={{
                                            borderColor: getRandomColor()
                                        }}>
                                            <div className='text-2xl font-bold'>
                                                {
                                                    message.name
                                                }
                                            </div>
                                            <div className='border border-black opacity-30 my-4'></div>
                                            <div>
                                                {
                                                    message.message
                                                }
                                            </div>
                                            <a href={message.drawImage} target='_blank' rel='noreferrer'>
                                                <img src={message.image} alt={message.name || message.message} />
                                            </a>
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