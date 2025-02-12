import Axios, { InternalAxiosRequestConfig } from 'axios';

import { env } from '@/config/env';
import { paths } from '@/config/paths';
import { useToast } from '@/hooks/use-toast';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    if (config.headers) {
        config.headers.Accept = 'application/json';
    }

    // config.withCredentials = true;
    return config;
}

export const api = Axios.create({
    baseURL: env.API_URL,
});
export const emptyApi = Axios.create()

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const { toast } = useToast();
        const message = error.response?.data?.message || error.message;
        toast({
            title: 'Error',
            description: message,
        });

        if (error.response?.status === 401) {
            const searchParams = new URLSearchParams();
            const redirectTo =
                searchParams.get('redirectTo') || window.location.pathname;
            window.location.href = paths.auth.login.getHref(redirectTo);
        }

        return Promise.reject(error);
    },
);