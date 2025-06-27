import { Link } from '../ui/link';
import { paths } from '@/config/paths';

type DefaultLayoutProps = {
    theme?: 'chloe' | 'fauna';
};


export const Navbar = ({ theme }: DefaultLayoutProps) => {
    return (
        <nav className={`w-screen ${theme == 'chloe' ? 'bg-[#B44D43]' : 'bg-[#7DBA85]'} text-white sticky top-0 z-50 shadow-lg`}>
            <div className='container mx-auto  flex justify-between  cursor-pointer'>
                <Link to={theme === 'chloe' ? paths.YEAR_2025.graduation.chloe.root.getHref() : paths.YEAR_2025.graduation.fauna.root.getHref()}>
                    <img src={theme === 'chloe' ? 'https://m1r.ai/mb83.png' : 'https://m1r.ai/O1Iy.png'} className='w-10 mt-2' alt="Logo" />
                </Link>
                <ul className="flex font-medium justify-end p-4">
                    <li>
                        <Link to={paths.YEAR_2025.graduation.chloe_fauna.getHref()}>
                            <div className="block px-3 text-white rounded cursor-pointer" >Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={theme === 'chloe' ? paths.YEAR_2025.graduation.chloe.root.getHref() : paths.YEAR_2025.graduation.fauna.root.getHref()}>
                            <div className="block px-3 text-white rounded cursor-pointer" >Messages</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={theme === 'chloe' ? paths.YEAR_2025.graduation.chloe.book.getHref() : paths.YEAR_2025.graduation.fauna.book.getHref()}>
                            <div className="block px-3 text-white rounded cursor-pointer" >Friendship</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={theme === 'chloe' ? paths.YEAR_2025.graduation.chloe.credits.getHref() : paths.YEAR_2025.graduation.fauna.credits.getHref()}>
                            <div className="block px-3 text-white rounded cursor-pointer" >Credits</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};