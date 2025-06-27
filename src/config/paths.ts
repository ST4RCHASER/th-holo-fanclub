export const paths = {
    home: {
        path: '/',
        getHref: () => '/',
    },
    graduation: {
        root: {
            path: '/graduation',
            getHref: () => '/graduation',
        }
    },
    YEAR_2025: {
        graduation: {
            root: {
                path: '/2025/graduation',
                getHref: () => '/2025/graduation',
            },
            chloe_fauna: {
                short: '/gra-cf',
                path: '/2025/graduation/chloe-fauna',
                getHref: () => '/2025/graduation/chloe-fauna',
            },
            chloe: {
                root: {
                    path: '/2025/graduation/chloe',
                    getHref: () => '/2025/graduation/chloe',
                },
                submit: {
                    path: '/2025/graduation/chloe/submit',
                    old: '/graduation/chloe/submit',
                    getHref: () => '/2025/graduation/chloe/submit',
                },
                book: {
                    path: '/2025/graduation/chloe/book',
                    getHref: () => '/2025/graduation/chloe/book',
                },
                credits: {
                    path: '/2025/graduation/chloe/credits',
                    getHref: () => '/2025/graduation/chloe/credits',
                }
            },
            fauna: {
                root: {
                    path: '/2025/graduation/fauna',
                    getHref: () => '/2025/graduation/fauna',
                },
                submit: {
                    path: '/2025/graduation/fauna/submit',
                    old: '/graduation/chloe/submit',
                    getHref: () => '/2025/graduation/fauna/submit',
                },
                book: {
                    path: '/2025/graduation/fauna/book',
                    getHref: () => '/2025/graduation/fauna/book',
                },
                credits: {
                    path: '/2025/graduation/fauna/credits',
                    getHref: () => '/2025/graduation/fauna/credits',
                }
            }
        },
    },
    auth: {
        register: {
            path: '/auth/register',
            getHref: (redirectTo?: string | null | undefined) =>
                `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
        },
        login: {
            path: '/auth/login',
            getHref: (redirectTo?: string | null | undefined) =>
                `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
        },
    },
    app: {
        root: {
            path: '/app',
            getHref: () => '/app',
        },
    },
} as const;