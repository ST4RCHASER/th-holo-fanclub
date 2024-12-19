import * as React from 'react';

type DefaultLayoutProps = {
    children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <>
            <div className="container mx-auto">
                {children}
            </div>
        </>
    );
};