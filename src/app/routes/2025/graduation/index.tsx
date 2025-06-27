import { Head } from '@/components/seo';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';
import { useState } from 'react';
import { MdOutlineArrowCircleRight } from "react-icons/md";

const SubmitMessageRoute = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentHover, setCurrentHover] = useState<number>(-1);
    return (
        <>
            <Head title='Chloe & Fauna Graduation' description="Chloe&Fauna Graduation landing" />
            <div className='h-screen w-screen bg-black lg:hidden'>
                <Link to={paths.YEAR_2025.graduation.fauna.root.getHref()}>
                    <div className='relative w-full h-1/2 overflow-hidden ibm-plex-sans-bold font-bold cursor-pointer'>
                        <div className='h-full w-full bg-clear-1 bg-cover bg-no-repeat bg-center absolute blur-sm opacity-50 scale-110'>
                        </div>
                        <div className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl'>
                            <div className='flex justify-center'>
                                <img src="https://m1r.ai/O1Iy.png" alt="Ceres Fauna" className='w-28' />
                            </div>
                            <div className='uppercase text-center mt-2'>
                                <div>
                                    Ceres Fauna
                                </div>
                                <Button
                                    className='mt-2'
                                    variant="secondary"
                                >
                                    <MdOutlineArrowCircleRight className='h-8 w-auto' /> Enter
                                </Button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={paths.YEAR_2025.graduation.chloe.root.getHref()}>
                    <div className='relative w-full h-1/2 overflow-hidden ibm-plex-sans-bold font-bold'>
                        <div className='h-full w-full bg-clear-2 bg-cover bg-no-repeat bg-center absolute blur-sm opacity-50 scale-110'>
                        </div>
                        <div className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl'>
                            <div className='flex justify-center'>
                                <img src="https://m1r.ai/mb83.png" alt="Ceres Fauna" className='w-24' />
                            </div>
                            <div className='uppercase text-center mt-2'>
                                <div>
                                    Chloe Sakamata
                                </div>
                                <Button
                                    className='mt-2'
                                    variant="secondary"
                                >
                                    <MdOutlineArrowCircleRight className='h-8 w-auto' /> Enter
                                </Button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="lg:flex h-screen w-screen bg-black hidden relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false)
                    setCurrentHover(-1)
                }}
            >
                <div
                    className={`group relative flex-1 bg-left bg-cover transition-all duration-1000 ease-in-out hover:flex-[2] hover:opacity-100 overflow-hidden ${!isHovered ? 'opacity-80' : 'opacity-30'}`}
                    onMouseEnter={() => setCurrentHover(0)}
                >
                    <Link to={paths.YEAR_2025.graduation.fauna.root.getHref()}>
                        <div className={`uppercase absolute z-20 text-white text-xl ibm-plex-sans-bold font-bold  transition-all duration-1000  top-1/2 right-[15%] transform -translate-y-1/2 opacity-0 ${currentHover === 0 ? 'opacity-100' : ''}`}>
                            <div className='border-8 border-white p-4 backdrop-blur-md xl:backdrop-blur-none'>
                                <div className='text-left'>
                                    Ceres
                                </div>
                                <div className='text-right text-6xl'>
                                    Fauna
                                </div>
                            </div>
                            <div className='mt-2 flex justify-center'>
                                <MdOutlineArrowCircleRight className='h-12 w-auto' />
                            </div>
                        </div>
                        <div className={`w-full h-full absolute z-10 bg-no-repeat scale-150 transition-all duration-1000 bg-contain stand-2 ${currentHover === 0 ? ' active' : ''}`} >
                        </div>
                        <div className={`w-full h-full transition-all duration-1000 bg-contain bg-1 ${currentHover === 0 ? 'blur' : ''} ${currentHover === 0 ? 'opacity-80' : ''}`}>
                        </div>
                    </Link>
                </div>
                <div className={`group relative flex-1 bg-right bg-cover transition-all duration-1000 ease-in-out hover:flex-[2] hover:opacity-100 overflow-hidden ${!isHovered ? 'opacity-80' : 'opacity-30'}`}
                    onMouseEnter={() => setCurrentHover(1)}
                >
                    <Link to={paths.YEAR_2025.graduation.chloe.root.getHref()}>
                        <div className={`uppercase absolute z-20 text-white text-xl ibm-plex-sans-bold font-bold  transition-all duration-1000  top-1/2 left-[15%] transform -translate-y-1/2 opacity-0 ${currentHover === 1 ? 'opacity-100' : ''}`}>
                            <div className='border-8 border-white p-4 backdrop-blur-md xl:backdrop-blur-none'>
                                <div className='text-right'>
                                    Sakamata
                                </div>
                                <div className='text-left text-6xl'>
                                    Chloe
                                </div>
                            </div>
                            <div className='mt-2 flex justify-center'>
                                <MdOutlineArrowCircleRight className='h-12 w-auto' />
                            </div>
                        </div>
                        <div className={`w-full h-full absolute z-10 bg-no-repeat scale-150 transition-all duration-1000 bg-contain stand-1 ${currentHover === 1 ? 'active' : ''}`} />
                        <div className={`w-full h-full transition-all duration-1000 ${currentHover === 1 ? 'blur' : ''} ${currentHover === 1 ? 'opacity-80' : ''}`}
                            style={{ backgroundImage: 'url("https://m1r.ai/AqbE.webp")', backgroundPosition: 'center 200px', backgroundSize: 'contain', scale: '2', }}
                        >
                        </div>
                    </Link>
                </div>
            </div >
        </>
    );
};

export default SubmitMessageRoute;
