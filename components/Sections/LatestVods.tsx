import { ReactElement } from "react";
import { Video } from "../../pages";
import Container from "../Container";
import Picture from "../Picture";
import SectionHeader from "../SectionHeader";

export default function LatestVods({videos}: {videos: Video[]}): ReactElement {
    return <Container>
        <SectionHeader>Neuste Videos</SectionHeader>

        <div className={'videoContainer'}>
            {videos.slice(0, 3).map(({id, thumbnail, thumbnailWEBP, thumbnailJP2, source}, idx) => <div className={'vod'} key={id}>
                <a href={source} target={'_blank'}>
                    <Picture src={thumbnail} webp={thumbnailWEBP} jp2={thumbnailJP2} alt={`thumbnail-${idx}`} />
                </a>
            </div>)}
        </div>

        <style jsx>{`
            .videoContainer {
                display: flex;
                margin: -2rem;
                justify-content: center;
            }    

            .vod {
                aspect-ratio: 16 / 9;
                width: 30%;
                padding: 1rem;
            }
        `}</style>
    </Container>
}