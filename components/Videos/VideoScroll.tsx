import { ReactElement } from "react";
import { Video } from "../../pages";
import Picture from "../Picture";

interface Props {
    videos: Video[];
}

export default function VideoScroll({videos}: Props): ReactElement {
    return <div className={'vodGrid'}>
        {videos.map(({id, title, source, thumbnail, thumbnailJP2, thumbnailWEBP}) => <a key={id} className={'videoItem'} href={source} target={'_blank'} rel={'noopener'}>
            <Picture alt={title} jp2={thumbnailJP2} src={thumbnail} webp={thumbnailWEBP} rounded />
        </a>)}

        <style jsx>{`
            .vodGrid {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 2rem;
            }    
        `}</style>
    </div>
}