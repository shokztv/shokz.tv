import { ReactElement } from "react";
import { Article } from "../../../pages";
import Picture from "../../Picture";
import { formatDate } from "../ArticleScroll";

export default function Author({article}: {article: Article}): ReactElement {
    const author = article.author;

    return <div className={'author'}>
        <div className={'userAvatar'}>
            <Picture src={author.avatar} webp={author.avatarWEBP} jp2={author.avatarJP2} alt={author.name}/>
        </div>
        <div className={'name'}>
            <div className={'userName'}>
                Autor:&nbsp;<a className={'link'} href={author.profileUrl} target={'_blank'} rel={'noreferrer'}>{author.name}</a>
            </div>
            {author.title.length > 0 && <div className={'userTitle'}><i>{author.title}</i></div>}
            <div className={'publishInfo'}>veröffentlicht am {formatDate(article && article.created)}</div>
        </div>

        <style jsx>{`
            .author {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }    
            .userAvatar {
                position: relative;
                height: 70px;
                width: 70px;
                border-radius: 35px;
                overflow: hidden;
            }
            .name {
                margin-left: 20px;
            }
            .userName {
                font-size: 18px;
                display: flex;
            }
            .userTitle {
                font-size: 16px;
            }
            .publishInfo {
                font-size: 14px;
            }
            .link {
                text-decoration: none;
                color: rgb(10, 28, 63);
            }
        `}</style>
    </div>;
}