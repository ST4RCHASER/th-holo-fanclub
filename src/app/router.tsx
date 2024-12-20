import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { paths } from '@/config/paths';
import { ProtectedRoute } from '@/lib/auth';

import {
    default as AppRoot,
    ErrorBoundary as AppRootErrorBoundary,
} from './routes/app/root';

const convert = (queryClient: QueryClient) => (m: any) => {
    const { clientLoader, clientAction, default: Component, ...rest } = m;
    return {
        ...rest,
        loader: clientLoader?.(queryClient),
        action: clientAction?.(queryClient),
        Component,
    };
};

export const createAppRouter = (queryClient: QueryClient) =>
    createBrowserRouter([
        {
            path: paths.home.path,
            lazy: () => import('./routes/landing').then(convert(queryClient)),
        },
        {
            path: paths.graduation.root.path,
            element: (
                <div className='font-sans'>
                    <AppRoot />
                </div>
            ),
            ErrorBoundary: AppRootErrorBoundary,
            children: [
                {
                    path: paths.graduation.chloe.root.path,
                    lazy: () =>
                        import('./routes/graduation/chloe').then(convert(queryClient)),
                },
                {
                    path: paths.graduation.chloe.submit.path,
                    lazy: () =>
                        import('./routes/graduation/chloe/submit').then(
                            convert(queryClient),
                        ),
                },
                {
                    path: paths.graduation.fauna.root.path,
                    lazy: () =>
                        import('./routes/graduation/fauna').then(convert(queryClient)),
                },
                {
                    path: paths.graduation.fauna.submit.path,
                    lazy: () =>
                        import('./routes/graduation/fauna/submit').then(
                            convert(queryClient),
                        ),
                },
            ]
        },
        {
            path: paths.app.root.path,
            element: (
                <ProtectedRoute>
                    <AppRoot />
                </ProtectedRoute>
            ),
            ErrorBoundary: AppRootErrorBoundary,
            children: [
                // {
                //     path: paths.app.dashboard.path,
                //     lazy: () =>
                //         import('./routes/app/dashboard').then(
                //             convert(queryClient),
                //         ),
                // },
            ],
        },
        {
            path: '*',
            lazy: () => import('./routes/notFound').then(convert(queryClient)),
        },
    ]);

export const AppRouter = () => {
    const queryClient = useQueryClient();

    const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

    return <RouterProvider router={router} />;
};