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
        // Use in qr code
        {
            path: paths.YEAR_2025.graduation.chloe_fauna.short,
            loader: () => {
                return redirect(paths.YEAR_2025.graduation.chloe_fauna.getHref());
            }
        },
        // Becuse facebook has already post the message with this old link
        {
            path: paths.YEAR_2025.graduation.chloe.submit.old,
            loader: () => {
                return redirect(paths.YEAR_2025.graduation.chloe.submit.path);
            }
        },
        {
            path: paths.YEAR_2025.graduation.fauna.submit.old,
            loader: () => {
                return redirect(paths.YEAR_2025.graduation.fauna.submit.path);
            }
        },
        // Remove 2025 to dictionary page
        {
            path: paths.YEAR_2025.graduation.root.path,
            loader: () => {
                return redirect(paths.graduation.root.path);
            }
        },
        // End of redirects
        {
            path: paths.home.path,
            lazy: () => import('./routes/landing').then(convert(queryClient)),
        },
        {
            path: paths.graduation.root.path,
            lazy: () => import('./routes/graduation').then(convert(queryClient)),
        },
        {
            path: paths.YEAR_2025.graduation.chloe_fauna.path,
            lazy: () =>
                import('./routes/2025/graduation').then(convert(queryClient)),
        },
        {
            path: paths.YEAR_2025.graduation.chloe.root.path,
            lazy: () =>
                import('./routes/2025/graduation/chloe').then(convert(queryClient)),
        },
        {
            path: paths.YEAR_2025.graduation.fauna.credits.path,
            lazy: () =>
                import('./routes/2025/graduation/fauna/credits').then(convert(queryClient)),
        },
        {
            path: paths.YEAR_2025.graduation.chloe.credits.path,
            lazy: () =>
                import('./routes/2025/graduation/chloe/credits').then(convert(queryClient)),
        },
        {
            path: paths.YEAR_2025.graduation.chloe.book.path,
            lazy: () =>
                import('./routes/2025/graduation/chloe/book').then(convert(queryClient)),
        },
        {
            path: paths.YEAR_2025.graduation.fauna.root.path,
            lazy: () =>
                import('./routes/2025/graduation/fauna').then(convert(queryClient)),
        },
        {
            path: paths.YEAR_2025.graduation.fauna.book.path,
            lazy: () =>
                import('./routes/2025/graduation/fauna/book').then(convert(queryClient)),
        },
        {
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
                    path: paths.YEAR_2025.graduation.chloe.submit.path,
                    lazy: () =>
                        import('./routes/2025/graduation/chloe/submit').then(
                            convert(queryClient),
                        ),
                },
                {
                    path: paths.YEAR_2025.graduation.fauna.submit.path,
                    lazy: () =>
                        import('./routes/2025/graduation/fauna/submit').then(
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