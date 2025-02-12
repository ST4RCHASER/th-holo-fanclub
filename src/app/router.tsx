import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter, redirect } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { paths } from '@/config/paths';
import { ProtectedRoute } from '@/lib/auth';

import {
    default as AppRoot,
    ErrorBoundary as AppRootErrorBoundary,
} from './routes/app/root';
import { DefaultLayout } from '@/components/layouts';

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
            path: '/gra-cf',
            loader: () => {
                return redirect(paths.graduation.chloe_fauna.getHref());
            }
        },
        // End of redirects
        {
            path: paths.home.path,
            lazy: () => import('./routes/landing').then(convert(queryClient)),
        },
        {
            path: paths.graduation.root.path,
            lazy: () =>
                import('./routes/graduation').then(convert(queryClient)),
        },

        {
            path: paths.graduation.chloe_fauna.path,
            lazy: () =>
                import('./routes/graduation').then(convert(queryClient)),
        },
        {
            path: paths.graduation.chloe.root.path,
            lazy: () =>
                import('./routes/graduation/chloe').then(convert(queryClient)),
        },
        {
            path: paths.graduation.fauna.credits.path,
            lazy: () =>
                import('./routes/graduation/fauna/credits').then(convert(queryClient)),
        },
        {
            path: paths.graduation.chloe.credits.path,
            lazy: () =>
                import('./routes/graduation/chloe/credits').then(convert(queryClient)),
        },
        {
            path: paths.graduation.chloe.book.path,
            lazy: () =>
                import('./routes/graduation/chloe/book').then(convert(queryClient)),
        },
        {
            path: paths.graduation.fauna.root.path,
            lazy: () =>
                import('./routes/graduation/fauna').then(convert(queryClient)),
        },
        {
            path: paths.graduation.fauna.book.path,
            lazy: () =>
                import('./routes/graduation/fauna/book').then(convert(queryClient)),
        },
        {
            path: paths.graduation.root.path,
            element: (
                <div className='font-sans'>
                    <DefaultLayout>
                        <AppRoot />
                    </DefaultLayout>
                </div>
            ),
            ErrorBoundary: AppRootErrorBoundary,
            children: [
                {
                    path: paths.graduation.chloe.submit.path,
                    lazy: () =>
                        import('./routes/graduation/chloe/submit').then(
                            convert(queryClient),
                        ),
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