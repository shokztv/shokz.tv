import { ReactElement } from "react";
import { Article } from "../../pages";
import Picture from "../Picture";
import Author from "./SingleArticleView/Author";
import EditorContent from "./SingleArticleView/EditorContent";

interface Props {
    article: Article;
}

export default function SingleArticleView({article}: Props): ReactElement {
    return <div className={'singleArticle'}>
        <h1>{article.title}</h1>


        <div className={'articleContent'}>
            <div className={'articleCoverWrapper'}>
                <div className={'articleCover'}>
                    <Picture src={article.cover} webp={article.coverWEBP} jp2={article.coverJP2} alt={article.title}/>
                </div>
            </div>

            <Author article={article} />
                                
            <EditorContent text={article.body} />
        </div>

        <style jsx>{`   
            h1 {
                margin-bottom: 1.25rem;
            }

            .articleCoverWrapper {
                margin: 0 1rem .5rem 0;
                width: 512px;
                float: left;
            }
            
            @media only screen and (max-width: 768px) {
                h1 {
                    text-align: center;
                }
                .articleCoverWrapper {
                    float: none;
                    margin: 0 auto;
                    max-width: 512px;
                    width: 100%;
                    margin-bottom: 1rem;
                }
            }
        `}</style>
    </div>;
}