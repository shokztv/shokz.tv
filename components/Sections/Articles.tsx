import { ReactElement } from "react";
import { Article } from "../../pages";
import Container from "../Container";
import Picture from "../Picture";
import SectionHeader from "../SectionHeader";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const TruncatedHtml = dynamic(
    () => import('../TruncatedHtml'),
    { ssr: false }
)

export default function Articles({articles}: {articles: Article[]}): ReactElement {
    const headerArticle = articles[0];
    const recentArticles = articles.slice(1);

    return <Container bg={'grey'}>
        <SectionHeader>Artikel</SectionHeader>

        <Link href={'/artikel/[slug]'} as={'/artikel/' + headerArticle.slug}>
            <div className={'headerArticle'}>
                <div className={'articleThumbnail'}>
                    <Picture src={headerArticle.cover} webp={headerArticle.coverWEBP} jp2={headerArticle.coverJP2} alt={headerArticle.title} rounded />
                </div>

                <div className={'headerArticleInfo'}>
                    <h2>{headerArticle.title}</h2>
                    <div className={'articleContent'}>{headerArticle.body && <TruncatedHtml content={headerArticle.body}/>}</div>
                </div>
            </div>
        </Link>

        <div className={'hr'} />

        <div className={'articleRow'}>
            {recentArticles.map(({id, title, cover, coverWEBP, coverJP2, slug}) => <Link href={'/artikel/[slug]'} as={'/artikel/' + slug} key={id} >
                <div className={'article'}>
                    <h4><TruncatedHtml content={title} maxLine={2} /></h4>
                    <div className={'articleRowThumbnail'}>
                        <Picture src={cover} webp={coverWEBP} jp2={coverJP2} alt={title} rounded />
                    </div>
                </div>
            </Link>)}
        </div>

        <style jsx>{`
            .article, .headerArticle {
                cursor: pointer;
            }
            
            .headerArticle {
                display: flex;
                align-items: center;
            }    

            .articleThumbnail, .headerArticleInfo {
                padding: 0 1rem;
                width: 50%;
            }

            .articleThumbnail {
                aspect-ratio: 16 / 9;
                max-width: 552px;
            }

            .headerArticleInfo {
                flex-grow: 1;
            }

            .hr {
                margin: 3rem 1rem;
                border-bottom: 1px solid #CCC;
            }

            .articleRow {
                display: flex;
                justify-content: space-between;
            }

            .article {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                padding: 0 1rem;
            }

            h4 {
                text-align: left;
                margin-bottom: .5rem;
                margin-top: 0rem;
            }

            h2 {
                margin-top: 0rem;
            }

            .articleContent {
                line-height: 1.4rem;
            }
        `}</style>
    </Container>
}