import { ReactElement } from "react";
import { Article } from "../../pages";
import Container from "../Container";
import Picture from "../Picture";
import SectionHeader from "../SectionHeader";
import Link from 'next/link';
import { reduceBody } from "../Articles/ArticleScroll";

export default function Articles({ articles }: { articles: Article[] }): ReactElement {
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
                    <div className={'articleContent'}>{reduceBody(headerArticle.body)}</div>
                </div>
            </div>
        </Link>

        <div className={'hr'} />

        <div className={'articleRow'}>
            {recentArticles.map(({ id, title, cover, coverWEBP, coverJP2, slug }) => <Link href={'/artikel/[slug]'} as={'/artikel/' + slug} key={id} >
                <div className={'article'}>
                    <h3>{title}</h3>
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
                justify-content: space-between;
            }

            h3 {
                text-align: left;
                margin-bottom: .5rem;
                margin-top: 0rem;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;  
                overflow: hidden;
            }

            h2 {
                margin-top: 0rem;
            }

            .articleContent {
                line-height: 1.4rem;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;  
                overflow: hidden;
            }

            @media only screen and (max-width: 800px) {
                .headerArticle {
                    flex-direction: column;
                }

                .articleThumbnail {
                    margin-bottom: 2rem;
                    width: 95%;
                }

                .headerArticleInfo {
                    width: 95%;
                }

                .articleRow {
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                }

                .article {
                    width: 48%;
                    margin-bottom: 2rem;
                }
            }

            @media only screen and (max-width: 600px) {

                .article {
                    width: 95%;
                    margin-bottom: 2rem;
                }
            }
        `}</style>
    </Container>
}