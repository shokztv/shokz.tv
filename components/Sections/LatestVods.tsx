import { ReactElement } from "react";
import { Video } from "../../pages";
import Container from "../Container";
import Picture from "../Picture";
import SectionHeader from "../SectionHeader";

export default function LatestVods({ videos }: { videos: Video[] }): ReactElement {
    return <Container>
        <SectionHeader>Neuste Videos</SectionHeader>

        <div className={'videoContainer'}>
            {videos.slice(0, 3).map(({ id, thumbnail, thumbnailWEBP, thumbnailJP2, source, title }, idx) => <div className={'vod'} key={id}>
                <a href={source} target={'_blank'} rel={'noopener'} aria-label={title} title={title}>
                    <Picture src={thumbnail} webp={thumbnailWEBP} jp2={thumbnailJP2} alt={`thumbnail-${idx}`} />
                </a>
            </div>)}
        </div>

        <style jsx>{`
            .videoContainer {
                display: flex;
                margin: -2rem;
                margin-bottom: 0;
                justify-content: center;
            }    

            .vod {
                aspect-ratio: 16 / 9;
                width: 30%;
                padding: 1rem;
            }

            @media only screen and (max-width: 1000px) {
                .videoContainer {
                    margin: 0;
                    flex-wrap: wrap;
                    padding: 0 2rem;
                }

                .vod {
                    width: 48%;
                }
            }

            @media only screen and (max-width: 600px) {
                .vod {
                    width: 98%;
                }
            }
        `}</style>
    </Container>
}