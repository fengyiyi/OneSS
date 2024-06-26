import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

import CopyDialog from "@/components/CopyModal/CopyDialog";
import customSetting from "@/setting/customSetting";


export default function MyApp({Component, pageProps}: AppProps,) {
    return (
        <>
            <Head>
                <title>{customSetting.siteName}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no, viewport-fit=cover"/>
            </Head>

            <Component {...pageProps}/>

            <CopyDialog/>
        </>
    );
}
