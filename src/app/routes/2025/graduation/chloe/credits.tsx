import { DefaultLayout } from '@/components/layouts';
import { MessageBoardLayout } from '@/components/layouts/messageBoard';
import { Head } from '@/components/seo';
import Credits from '@/features/credits/ components/credits';

const ChloeCreditsRoute = () => {
    return (
        <>
            <Head title='Credits' description="Chloe message board" />
            <MessageBoardLayout theme='chloe'>
                <DefaultLayout >
                    <div className='font-sans'>
                        <div className='mt-12 text-center text-4xl text-white'>
                            Credits
                        </div>
                        <Credits />
                    </div>
                </DefaultLayout>
            </MessageBoardLayout >

        </>
    );
};

export default ChloeCreditsRoute;