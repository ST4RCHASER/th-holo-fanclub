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
        chloe: {
            root: {
                path: '/graduation/chloe',
                getHref: () => '/graduation/chloe',
            },
            submit: {
                path: '/graduation/chloe/submit',
                getHref: () => '/graduation/chloe/submit',
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