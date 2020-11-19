import { ReactElement, ReactNode } from "react";
import Head from 'next/head';
import Header from "./Sections/Header";


export default function PageFrame({children}: {children: ReactNode}): ReactElement {
    return <div className={'page'}>
        <Head>
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>

        <Header />

        <div className={'content'}>
            {children}
        </div>

        <style jsx>{`
            .content {
                padding-top: 4rem;
            }    
        `}</style>

        <style jsx global>{`
            html, body {
                margin: 0;
                padding: 0;
                font-size: 20px;
            }
            * {
                box-sizing: border-box;
                font-family: 'Roboto Condensed', sans-serif;
                color: var(--darkGrey);
            }
            :root {
                --orange: #f19e0e;
                --darkGrey: #373737;
                --lightGrey: #f4f4f4;
                --blue: #162036;
                --yellow: #EAD811;
                --darkBlue: #07122b;
            }
        `}</style>
    </div>
}