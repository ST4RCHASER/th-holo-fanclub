export const paths = {
    home: {
        path: '/',
        getHref: () => '/',
    },
    graduation: {
        root: {
            path: '/graduation',
            getHref: () => '/graduation',
        },
        chloe_fauna: {
            path: '/graduation/chloe-fauna',
            getHref: () => '/graduation/chloe-fauna',
        },
        chloe: {
            root: {
                path: '/graduation/chloe',
                getHref: () => '/graduation/chloe',
            },
            submit: {
                path: '/graduation/chloe/submit',
                getHref: () => '/graduation/chloe/submit',
            },
            book: {
                path: '/graduation/chloe/book',
                getHref: () => '/graduation/chloe/book',
            },
            credits: {
                path: '/graduation/chloe/credits',
                getHref: () => '/graduation/chloe/credits',
            }
        },
        fauna: {
            root: {
                path: '/graduation/fauna',
                getHref: () => '/graduation/fauna',
            },
            submit: {
                path: '/graduation/fauna/submit',
                getHref: () => '/graduation/fauna/submit',
            },
            book: {
                path: '/graduation/fauna/book',
                getHref: () => '/graduation/fauna/book',
            },
            credits: {
                path: '/graduation/fauna/credits',
                getHref: () => '/graduation/fauna/credits',
            }
        }
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