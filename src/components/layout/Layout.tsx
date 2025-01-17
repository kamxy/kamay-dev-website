import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <main className="pt-16">{children}</main>
            {/* Footer will be added here */}
        </div>
    );
};

export default Layout; 