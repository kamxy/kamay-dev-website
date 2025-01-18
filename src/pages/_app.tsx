import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { SEO_CONFIG } from '@/lib/seo';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...SEO_CONFIG} />
            <Component {...pageProps} />
        </>
    );
}
