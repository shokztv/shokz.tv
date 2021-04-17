import { ReactElement, ReactNode } from "react";
import Head from 'next/head';
import Header from "./Sections/Header";
import { Article } from "../pages";
import { JsonLd } from "react-schemaorg";
import { Article as JsonArticle, Organization, WebPage } from "schema-dts";
import dayjs from 'dayjs';



function JsonLDWebPage() {
    return <JsonLd<WebPage>
        item={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            //@ts-ignore
            "publisher": {
                "@id": "#publisher",
            },
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@id": "https://dota2.shokz.tv/",
                            "@type": "WebPage",
                            "url": "https://dota2.shokz.tv/",
                            "name": "shokzTV",
                        },
                    }, {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@id": "https://dota2.shokz.tv/artikel/",
                            "@type": "WebPage",
                            "url": "https://dota2.shokz.tv/artikel/",
                            "name": "Artikel",
                        },
                    }],
            },
        }}
    />;
}

function JsonLDArticle({ article }: { article: Article }) {
    const tags = article.tags ? article.tags.map(({ name }) => name) : [];
    return <>
        <JsonLd<JsonArticle>
            item={
                {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": article.title,
                    "image": `https://web-api.shokz.tv/${article.cover}`,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://dota2.shokz.tv/artikel/" + article.slug,
                    },
                    "datePublished": dayjs.unix(article.created).toISOString(),
                    "dateModified": dayjs.unix(article.created).toISOString(),
                    "author": {
                        "@type": "Person",
                        "url": article.author.profileUrl,
                        "name": article.author.name,
                    },
                    "keywords": tags.join(', '),
                    //@ts-ignore
                    "publisher": {
                        "@id": "#publisher",
                    },
                }} />
    </>;
}


interface Props {
    children: ReactNode;
    title?: string;
    seoArticle?: Article;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
}

export default function PageFrame({ children, title, ogTitle, ogDescription, ogImage, seoArticle }: Props): ReactElement {
    return <div className={'page'}>
        <Head>
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />

            <title>shokzTV {title && ` - ${title}`}</title>
            <meta charSet="UTF-8" />
            <meta name="google" content="notranslate" />
            <meta httpEquiv="Content-Language" content="de" />
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />

            <meta property="og:site_name" content="shokzTV - Die deutschsprachige Dota 2 Startseite" />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content="https://dota2.shokz.tv/" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />

            <meta name="description"
                content="Die deutschsprachige Dota 2 Startseite | Events, Neuigkeiten, Interviews, Videos & mehr | Exklusiver Partner der ESL Meisterschaft in Dota 2" />
            <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
            <meta name="theme-color" content="#0A1C3F" />
            <link rel="preconnect" href="//web-api.shokz.tv/" />

            <JsonLd<Organization>
                item={{
                    "@context": 'https://schema.org',
                    "@type": "Organization",
                    "@id": "#publisher",
                    name: "shokzTV",
                    url: "https://dota2.shokz.tv/",
                    logo: {
                        "@type": 'ImageObject',
                        url: "https://dota2.shokz.tv/images/logo.png",
                    },
                    sameAs: [
                        "https://www.instagram.com/shokztv/",
                        "https://twitter.com/shokztv/",
                        "https://www.twitch.tv/shokztv",
                        "https://www.youtube.com/channel/UCbSSQP3v0syCn9_-e089HgA",
                    ],
                }}
            />
            {seoArticle && <>
                <JsonLDArticle article={seoArticle} />
                <JsonLDWebPage />
            </>}
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