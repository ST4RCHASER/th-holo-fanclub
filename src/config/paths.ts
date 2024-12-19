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
        fanuna: {
            root: {
                path: '/graduation/fanuna',
                getHref: () => '/graduation/fanuna',
            },
            submit: {
                path: '/graduation/fanuna/submit',
                getHref: () => '/graduation/fanuna/submit',
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