import { Head } from '@/components/seo';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"


const LandingRoute = () => {
    return (
        <>
            <Head description="th.Holofan.club" />
            <div className='ibm-plex-sans-regular fixed top-8 left-8 z-30'>
                <img src="/web-app-manifest-192x192.png" alt="" className='w-24 h-24' />
                <div className='flex gap-4'>
                    <div className=''>
                        <div className='text-pink-300 font-bold drop-shadow-[0_0_16px_white]' style={{
                            writingMode: 'vertical-lr'
                        }}>
                            CONTENTS
                        </div>
                        <div className='border-l-2 border-pink-300 h-32 ml-3 mt-4 drop-shadow-[0_0_16px_white]'></div>
                    </div>
                    <ul>
                        <li className='mt-4'>
                            <a href="#home" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white]'>HOME</a>
                        </li>
                        <li className='mt-4'>
                            <a href="#about" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white]'>ABOUT</a>
                        </li>
                        <li className='mt-4'>
                            <a href="#projects" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white]'>ACTIVE PROJECT</a>
                        </li>
                        <li className='mt-4'>
                            <a href="#past-projects" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white]'>PAST PROJECTS</a>
                        </li>
                        <li className='mt-4'>
                            <a href="#sns" className='text-pink-300 font-bold drop-shadow-[0_0_8px_white]'>SNS</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="ibm-plex-sans-regular min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 flex flex-col items-center">
                <div id="home" className='h-[80vh] w-full relative'>
                    <div className='bg-[url(https://m1r.ai/edted.jpg)] h-full w-full bg-cover bg-center blur-in'></div>
                </div>
                <div className='relative h-64 w-full slide-in'>
                    <div className='bg-[#4BCCF9] border-b-[#FF7B7B] border-b-[32px] w-1/2 h-full absolute left-0 origin-bottom-right [transform:skewY(10deg)_translateX(0.5px)_translateZ(0)]' />
                    <div className='bg-[#4BCCF9] border-b-[#FF7B7B] border-b-[32px] w-1/2 h-full absolute right-0 origin-bottom-left [transform:skewY(-10deg)]' />
                </div>
                <div className='content slide-in w-full mx-auto text-center'>
                    <section id='about' className='pb-12'>
                        <div className='relative py-12 w-fit mx-auto'>
                            <div className='absolute z-10 w-full h-full flex flex-col items-center mt-12 font-black text-3xl drop-shadow-[0_0_8px_white]'>ABOUT</div>
                            <div className='text-8xl mt-4 opacity-40 font-black bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_white]'>
                                弊社について
                            </div>
                        </div>
                        <div className='text-xl'>
                            We are a passionate group of Hololive and Holostars fans based in Thailand.<br />
                            Our mission is to connect and celebrate the VTuber community through creative fan projects and memorable events.<br />
                            From organizing online campaigns to hosting in-person gatherings, we strive to bring fans together.<br />
                            We believe in spreading joy, positivity, and support for our favorite talents.<br />
                            <br />
                            *Not affiliated with any talents or COVER Corp.
                        </div>
                    </section>
                    <section id='projects' className='pb-12'>
                        <div className='relative py-12 w-fit mx-auto'>
                            <div className='absolute z-10 w-full h-full flex flex-col items-center mt-12 font-black text-3xl drop-shadow-[0_0_8px_white]'>ACTIVE PROJECT</div>
                            <div className='text-8xl mt-4 opacity-40 font-black bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_white]'>
                                現在のプロジェクト
                            </div>
                        </div>
                        <div className='text-xl'>
                            - No any active project -
                        </div>
                    </section>
                    <section id='past-projects' className='pb-12'>
                        <div className='relative py-12 w-fit mx-auto'>
                            <div className='absolute z-10 w-full h-full flex flex-col items-center mt-12 font-black text-3xl drop-shadow-[0_0_8px_white]'>OUR PAST PROJECT</div>
                            <div className='text-8xl mt-4 opacity-40 font-black bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_white]'>
                                原作プロジェクト
                            </div>
                        </div>
                        <div>
                            <Carousel className="w-full" plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}>
                                <CarouselContent className="-ml-1">
                                    {Array.from({ length: 10 }).map((_, index) => (
                                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className='absolute z-20  h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-between container'>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </div>
                            </Carousel>
                        </div>
                    </section>
                    <section id='sns' className='pb-12'>
                        <div className='relative py-12 w-fit mx-auto'>
                            <div className='absolute z-10 w-full h-full flex flex-col items-center mt-12 font-black text-3xl drop-shadow-[0_0_8px_white]'>SNS</div>
                            <div className='text-8xl mt-4 opacity-40 font-black bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_white]'>
                                エスエヌエス
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center gap-6 mt-6 z-10 absolute w-full">
                                <a href="https://www.facebook.com/holofansTH/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
                                    Facebook
                                </a>
                                <a href="https://x.com/HoloFansTh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black hover:bg-gray-900 text-white font-bold shadow transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-6 h-6"><path d="M1199.61 0L741.68 553.66L1167.96 1227H803.13L524.13 797.09L191.47 1227H0.39L484.09 624.97L75.04 0H448.7L698.41 389.6L1000.13 0zM1132.13 1107.13L366.13 119.87H267.87L1032.13 1107.13H1132.13Z" /></svg>
                                    X (Twitter)
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className='mt-32 w-screen h-64'>
                    <div className='w-full h-full bg-[#4BCCF9] border-[#FF7B7B] border-t-[32px] text-white'>
                        <div className='flex px-4 py-4'>
                            <div className='px-4 mx-auto w-1/2'>
                                <div className='flex'>
                                    <img src="/web-app-manifest-192x192.png" alt="" className='w-24 h-24 bg-white p-2 rounded-full' />
                                    <div className='text-2xl font-bold mt-8 ml-4'>HOLO FANS TH</div>
                                </div>
                                <div className='mt-4'>This fan website is not affiliated with hololive and COVER Corp</div>
                                <div className='mt-4 text-xs text-right'>© {new Date().getFullYear()} HOLO FANS TH </div>
                            </div>
                            <div className='w-1/2 mt-6'>
                                Social Media
                                <hr />
                                <div className='flex gap-4'>
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
                        </div>
                    </div>
                </footer>
            </div >
        </>
    );
};

export default LandingRoute;