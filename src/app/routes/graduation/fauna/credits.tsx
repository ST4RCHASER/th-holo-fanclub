import { DefaultLayout } from '@/components/layouts';
import { MessageBoardLayout } from '@/components/layouts/messageBoard';
import { Head } from '@/components/seo';
import Credits from '@/features/credits/ components/credits';

const FaunaCreditsRoute = () => {
    return (
        <>
            <Head title='Credits' description="Fauna message board" />
            <MessageBoardLayout theme='fauna'>
                <DefaultLayout >
                    <div className='font-sans'>
                        <div className='mt-12 text-center text-4xl text-black'>
                            Credits
                        </div>
                        <Credits />
                    </div>
                </DefaultLayout>
            </MessageBoardLayout >

        </>
    );
};

export default FaunaCreditsRoute;