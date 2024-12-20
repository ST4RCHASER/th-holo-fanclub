import { Outlet } from 'react-router';

import { DefaultLayout } from '@/components/layouts';

export const ErrorBoundary = () => {
    return <div>Something went wrong!</div>;
};

const AppRoot = () => {
    return (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>
    );
};

export default AppRoot;