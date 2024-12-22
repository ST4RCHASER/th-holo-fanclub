import * as React from 'react';

type EmptyLayoutProps = {
    children: React.ReactNode;
};

export const EmptyLayout = ({ children }: EmptyLayoutProps) => {
    return (
        <>
            {children}
        </>
    );
};