import { Head } from '@/components/seo';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { useState, useEffect, useRef } from 'react';

const ACTIVE_PROJECTS = [
    {
        title: "miComet 5th Anniversary",
        date: "2025-08-05",
        imageUrl: "https://m1r.ai/9ycj.webp",
        url: "https://www.facebook.com/holofansTH/posts/pfbid02LyKdbxcSxUCHTYQjWjtB4Aekyn3J1q2op8udkiHDPjuX1pkoUi9P8wbhWZJkNjtxl",
        className: ''
    },
    {
        title: "miComet 5th Anniversary",
        date: "2025-09-18",
        imageUrl: "https://m1r.ai/pX70e.png",
        url: "https://www.facebook.com/permalink.php?story_fbid=pfbid02Wf6w6qN8tPE44dCnLmCYHqGTPmMiL8wn8Z7YEkQdRwPFxebbnuYECoxGkMUHMRFZl&id=100082701176404",
        className: ''
    }
]
const FILTERED_ACTIVE_PROJECTS = ACTIVE_PROJECTS.filter(project => new Date(project.date) > new Date())
const PAST_PROJECTS = [
    // {
    //     title: "Aqua iro summer ⭐",
    //     date: "2024-08-28",
    //     imageUrl: "https://m1r.ai/tvB2.webp",
    //     url: "https://archive-th.holofan.club/2024/aqua-iro-summer"
    // },
    // {
    //     title: "Fauna & Chloe Friendship book",
    //     date: "2024-12-22",
    //     imageUrl: "https://m1r.ai/NiIwT.webp",
    //     url: "https://archive-th.holofan.club/2024/fauna-chloe-friendship-book"
    // },
    // {
    //     title: "Calliope Birthday 2025",
    //     date: "2025-03-04",
    //     imageUrl: "https://m1r.ai/mrC0.webp",
    //     url: "https://archive-th.holofan.club/2025/calliope-birthday"
    // },
    // {
    //     title: "Biboo Birthday 2025",
    //     date: "2025-04-14",
    //     imageUrl: "https://m1r.ai/Pu5ak.jpg",
    //     url: "https://archive-th.holofan.club/2025/biboo-birthday"
    // },
    // {
    //     title: "Watame Birthday 2025",
    //     date: "2025-04-14",
    //     imageUrl: "https://m1r.ai/bwxm.png",
    //     url: "https://archive-th.holofan.club/2025/watame-birthday"
    // }
]

const LandingRoute = () => {
    const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
    const projectMenuRef = useRef<HTMLDivElement>(null);
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://blog-th.holofan.club/api/posts.json').then(x => {
            x.json().then(y => {
                console.log(y)
                if (y?.data && y?.success) {
                    const projects = y.data.posts?.filter(z => z.tags.includes('activities')).map(z => {
                        return {
                            title: z.title,
                            date: new Date(z.pubDate)?.toISOString().split('T')[0],
                            imageUrl: z.image?.url,
                            url: `https://blog-th.holofan.club/posts/${z.id}`
                        }
                    })
                    setProjects(projects)
                }
            })
        })

        const handleClickOutside = (event: MouseEvent) => {
            if (projectMenuRef.current && !projectMenuRef.current.contains(event.target as Node)) {
                setIsProjectMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getRandomRotate = () => {
        const rotate = Math.floor(Math.random() * 10) - 3.5;
        return rotate;
    }
    return (
        <>
            <Head description="th.Holofan.club" />
            <div className='ibm-plex-sans-regular fixed top-8 left-8 z-30 hidden lg:block'>
                <img src="/web-app-manifest-192x192.png" alt="" className='w-16 h-16 md:w-24 md:h-24' />
                <div className='flex gap-2 md:gap-4'>
                    <div className=''>
                        <div className='text-pink-300 font-bold drop-shadow-[0_0_16px_white] text-xs md:text-base' style={{
                            writingMode: 'vertical-lr'
                        }}>
                            CONTENTS
                        </div>
                        <div className='border-l-2 border-pink-300 h-16 md:h-32 ml-1 md:ml-3 mt-2 md:mt-4 drop-shadow-[0_0_16px_white]'></div>
                    </div>
                    <ul>
                        <li className='mt-2 md:mt-4'>
                            <a href="#home" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white] text-xs md:text-base'>HOME</a>
                        </li>
                        <li className='mt-2 md:mt-4'>
                            <a href="#about" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white] text-xs md:text-base'>ABOUT</a>
                        </li>
                        <li className='mt-2 md:mt-4'>
                            <a href="#projects" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white] text-xs md:text-base'>ACTIVE PROJECT</a>
                        </li>
                        <li className='mt-2 md:mt-4'>
                            <a href="#past-projects" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white] text-xs md:text-base'>PAST PROJECTS</a>
                        </li>
                        <li className='mt-2 md:mt-4'>
                            <a href="#sns" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white] text-xs md:text-base'>SNS</a>
                        </li>
                        <li className='mt-2 md:mt-4'>
                            <a href="https://blog-th.holofan.club" target='_blank' className='text-pink-300 font-bold drop-shadow-[0_0_8px_white] text-xs md:text-base'>ARCHIVE</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Mobile top bar */}
            <div className='fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 py-2 lg:hidden shadow'>
                <img src="/web-app-manifest-192x192.png" alt="" className='w-10 h-10' />
                <div className='flex gap-3'>
                    <a href="#home" className='text-pink-400 font-bold text-xs'>HOME</a>
                    <a href="#about" className='text-pink-400 font-bold text-xs'>ABOUT</a>
                    <div className='relative' ref={projectMenuRef}>
                        <button
                            onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)}
                            className='text-pink-400 font-bold text-xs flex items-center gap-1'
                        >
                            PROJECTS
                            <svg
                                className={`w-3 h-3 transition-transform ${isProjectMenuOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isProjectMenuOpen && (
                            <div className='absolute top-full left-0 mt-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-pink-200 min-w-[140px]'>
                                <a
                                    href="#projects"
                                    className='block px-3 py-2 text-pink-400 font-bold text-xs hover:bg-pink-50 rounded-t-lg'
                                    onClick={() => setIsProjectMenuOpen(false)}
                                >
                                    ACTIVE PROJECT
                                </a>
                                <a
                                    href="#past-projects"
                                    className='block px-3 py-2 text-pink-400 font-bold text-xs hover:bg-pink-50 rounded-b-lg'
                                    onClick={() => setIsProjectMenuOpen(false)}
                                >
                                    PAST PROJECT
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="#sns" className='text-pink-400 font-bold text-xs'>SNS</a>
                </div>
            </div>
            <div className="ibm-plex-sans-regular min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 flex flex-col items-center pt-16 lg:pt-0">
                <div id="home" className='h-[40vh] md:h-[80vh] w-full relative'>
                    <div className='bg-[url(https://m1r.ai/edted.jpg)] h-full w-full bg-cover bg-center blur-in'></div>
                </div>
                <div className='relative h-64 w-full slide-in'>
                    <div className='bg-[#4BCCF9] border-b-[#FF7B7B] border-b-[32px] w-1/2 h-full absolute left-0 origin-bottom-right [transform:skewY(10deg)_translateX(0.5px)_translateZ(0)]' />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-30 text-3xl font-bold text-white md:hidden'>HoloFans TH</div>
                    <div className='bg-[#4BCCF9] border-b-[#FF7B7B] border-b-[32px] w-1/2 h-full absolute right-0 origin-bottom-left [transform:skewY(-10deg)]' />
                </div>
                <div className='content slide-in w-full mx-auto text-center'>
                    <section id='about' className='pb-12'>
                        <div className='relative py-6 md:py-12 w-fit mx-auto'>
                            <div className='absolute z-10 w-full flex flex-col items-center mt-4 md:mt-12 font-black text-xl md:text-3xl drop-shadow-[0_0_8px_white]'>ABOUT</div>
                            <div className='text-4xl md:text-8xl mt-2 md:mt-4 opacity-40 font-black bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_white]'>
                                私たちについて
                            </div>
                        </div>
                        <div className='text-base md:text-xl px-2 md:px-0'>
                            We are a passionate group of Hololive and Holostars fans based in Thailand.<br />
                            Our mission is to connect and celebrate the VTuber community through creative fan projects and memorable events.<br />
                            From organizing online campaigns to hosting in-person gatherings, we strive to bring fans together.<br />
                            We believe in spreading joy, positivity, and support for our favorite talents.<br />
                            <br />
                            *Not affiliated with any talents or COVER Corp.
                        </div>
                    </section>
                    <section id='projects' className='pb-12'>
                        <div className='relative py-6 md:py-12 w-fit mx-auto'>
                            <div className='absolute z-10 w-full flex flex-col items-center mt-4 md:mt-12 font-black text-xl md:text-3xl drop-shadow-[0_0_8px_white]'>ACTIVE PROJECT</div>
                            <div className='text-4xl md:text-8xl mt-2 md:mt-4 opacity-40 font-black bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_white]'>
                                進行中のプロジェクト
                            </div>
                        </div>
                        {
                            FILTERED_ACTIVE_PROJECTS?.length ? (
                                <div className='flex justify-center'>
                                    <div className='text-center flex flex-col h-fit'>
                                        {
                                            FILTERED_ACTIVE_PROJECTS.map((project, index) => (
                                                <a href={project.url} target="_blank" key={index} className={`h-auto max-w-96 hover:scale-105 mb-8 duration-300 ${project?.className ? ` ${project.className}` : ''}`} >
                                                    <img src={project.imageUrl} alt="" className='w-full h-full' />
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            ) : (
                                <div className='text-base md:text-xl px-2 md:px-0'>
                                    - No any active project -
                                </div>
                            )
                        }
                    </section>
                    <section id='past-projects' className='pb-12'>
                        <div className='relative py-6 md:py-12 w-fit mx-auto'>
                            <div className='absolute z-10 w-full flex flex-col items-center mt-4 md:mt-12 font-black text-xl md:text-3xl drop-shadow-[0_0_8px_white]'>OUR PAST PROJECT</div>
                            <div className='text-4xl md:text-8xl mt-2 md:mt-4 opacity-40 font-black bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_white]'>
                                過去のプロジェクト
                            </div>
                        </div>
                        <div>
                            <Carousel className="w-full" plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}>
                                <CarouselContent className="-ml-1">
                                    {projects.map((_, index) => (
                                        <CarouselItem key={index} className="pl-1 basis-4/5 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                            <div className='hover:scale-105 transition-all duration-300 w-full h-full' style={{
                                                transform: `rotate(${getRandomRotate()}deg)`
                                            }}>
                                                <a className="p-4 w-full h-full" href={_.url} target="_blank">
                                                    <div className='shadow-lg rounded-lg overflow-hidden mx-8'>
                                                        <img src={_.imageUrl} alt={_.title} className='aspect-square object-cover' />
                                                        <div className='flex justify-between px-4 w-full h-full'>
                                                            <a className='py-4' href={_.url} target="_blank">
                                                                {_.title}
                                                            </a>
                                                            <div className='text-xs h-full mt-8'>
                                                                {_.date}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className='hidden absolute z-20  h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-between container'>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </div>
                            </Carousel>
                        </div>
                    </section>
                    <section id='sns' className='pb-12'>
                        <div className='relative py-6 md:py-12 w-fit mx-auto'>
                            <div className='absolute z-10 w-full flex flex-col items-center mt-4 md:mt-12 font-black text-xl md:text-3xl drop-shadow-[0_0_8px_white]'>SNS</div>
                            <div className='text-4xl md:text-8xl mt-2 md:mt-4 opacity-40 font-black bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_white]'>
                                SNS
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center gap-2 md:gap-6 mt-6 z-10 absolute w-full">
                                <a href="https://www.facebook.com/holofansTH/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 md:px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow transition text-xs md:text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
                                    Facebook
                                </a>
                                <a href="https://x.com/HoloFansTh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 md:px-4 py-2 rounded-lg bg-black hover:bg-gray-900 text-white font-bold shadow transition text-xs md:text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M1199.61 0L741.68 553.66L1167.96 1227H803.13L524.13 797.09L191.47 1227H0.39L484.09 624.97L75.04 0H448.7L698.41 389.6L1000.13 0zM1132.13 1107.13L366.13 119.87H267.87L1032.13 1107.13H1132.13Z" /></svg>
                                    X (Twitter)
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className='mt-32 w-screen h-72'>
                    <div className='w-full h-full bg-[#4BCCF9] border-[#FF7B7B] border-t-[32px] text-white text-xs md:text-base'>
                        <div className='flex flex-col md:flex-row px-2 md:px-4 py-4'>
                            <div className='px-2 md:px-4 mx-auto w-full md:w-1/2'>
                                <div className='flex'>
                                    <img src="/web-app-manifest-192x192.png" alt="" className='w-12 h-12 md:w-24 md:h-24 bg-white p-2 rounded-full' />
                                    <div className='text-lg md:text-2xl font-bold mt-4 md:mt-8 ml-2 md:ml-4'>HOLOFANS TH</div>
                                </div>
                                <div className='mt-2 md:mt-4'>This fan website is not affiliated with hololive and COVER Corp</div>
                                <div className='mt-2 md:mt-4 text-xs text-right'>© {new Date().getFullYear()} HOLOFANS TH </div>
                            </div>
                            <div className='w-full md:w-1/2 mt-4 md:mt-6'>
                                <div>
                                    Social Media
                                    <hr />
                                    <div className='flex gap-2 md:gap-4'>
                                        <div className='mt-2 ml-2'>
                                            <a href="https://www.facebook.com/holofansTH/" target="_blank" rel="noopener noreferrer" className='text-sm'>Facebook</a>
                                        </div>
                                        <div className='mt-2 ml-2'>
                                            <a href="https://x.com/HoloFansTh" target="_blank" rel="noopener noreferrer" className='text-sm'>X (Twitter)</a>
                                        </div>
                                        <div className='mt-2 ml-2'>
                                            <a href="https://x.com/HoloFansTh" target="_blank" rel="noopener noreferrer" className='text-sm'>Discord</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    Others
                                    <hr />
                                    <div className='flex gap-2 md:gap-4'>
                                        <div className='mt-2 ml-2'>
                                            <a href="https://blog-th.holofan.club" target="_blank" rel="noopener noreferrer" className='text-sm'>Archives</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    );
};

export default LandingRoute;