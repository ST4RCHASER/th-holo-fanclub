
import * as React from 'react';
import { Navbar } from '../ui/navbar';
import { useCounter } from '@/features/counter/api/counter';
import { numberWithCommas } from '@/utils/string';

type DefaultLayoutProps = {
    children: React.ReactNode;
    theme?: 'chloe' | 'fauna';
};


export const MessageBoardLayout = ({ children, theme }: DefaultLayoutProps) => {
    const counter = useCounter({ id: 'holofanth_chloe_fauna_graduation' });
    return (
        <div className={`min-h-screen fauna-bg bg-gradient-to-b ${theme == 'chloe' ? 'from-[#918A8A] to-[#444444]' : 'from-[#f9fbea] to-[#f8ced9]'}`}>
            <Navbar theme={theme} />
            {children}
            <div className={`w-full p-12 text-center ${theme == 'chloe' ? 'bg-[#3D3939] border-t-8 border-[#B44D43] text-white' : 'text-black'}`}>
                <div className='inline'>
                    This fan website is not affiliated with hololive and COVER Corp.
                </div>
                <div>
                    {
                        new Date().getFullYear()
                    } | HoloFans TH
                </div>
                <div className="bg-[#582802] flex items-center w-[max-content] text-white text-xs px-2 py-1 rounded mt-2 mx-auto "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" data-sentry-element="MdOutlineBarChart" data-sentry-source-file="footer.tsx" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path></svg><span className='ml-2'>{numberWithCommas(+(counter.data?.count || 0))}</span></div>
            </div>
            {
                theme === 'chloe' ? (
                    <div className='w-screen h-20' style={{ backgroundImage: 'url("https://m1r.ai/70S3.png")', backgroundSize: 'contain' }} />
                ) : (
                    <div className='w-screen h-20' style={{ backgroundImage: 'url("https://m1r.ai/OErv.webp")', backgroundSize: 'contain', transform: 'scale(-1, -1)' }} />
                )
            }
        </div>
    );
};