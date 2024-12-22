import * as React from 'react';
import { Link } from '../ui/link';
import { paths } from '@/config/paths';

type DefaultLayoutProps = {
    children: React.ReactNode;
};


export const MessageBoardLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className='min-h-screen fauna-bg bg-gradient-to-b from-[#f9fbea] to-[#f8ced9]'>
            <nav className='w-screen bg-[#7DBA85] text-white sticky top-0 z-50 shadow-lg'>
                <div className='container mx-auto  flex justify-between'>
                    <Link to={paths.graduation.fauna.root.getHref()}>
                        <img src="https://m1r.ai/O1Iy.png" className='w-10 mt-2' alt="Logo" />
                    </Link>
                    <ul className="flex font-medium justify-end p-4">
                        <li>
                            <a href="#" className="block px-3 text-white rounded" >Home</a>
                        </li>
                        <li>
                            <a href="#" className="block px-3 text-white rounded" >Messages</a>
                        </li>
                        <li>
                            <a href="#" className="block px-3 text-white rounded" >Friendship</a>
                        </li>
                        <li>
                            <a href="#" className="block  px-3 text-white rounded" >Credits</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <div className='w-screen h-20' style={{ backgroundImage: 'url("https://m1r.ai/OErv.webp")', backgroundSize: 'contain' }} /> */}
            {children}
            <div className='w-full p-12 text-center'>
                <div className='inline'>
                    This fan website is not affiliated with hololive and COVER Corp.
                </div>
                <div>
                    {
                        new Date().getFullYear()
                    } | HoloFans TH
                </div>
            </div>
            <div className='w-screen h-20' style={{ backgroundImage: 'url("https://m1r.ai/OErv.webp")', backgroundSize: 'contain', transform: 'scale(-1, -1)' }} />
        </div>
    );
};