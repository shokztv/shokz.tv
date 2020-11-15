import { get, Video } from ".";
import Container from "../components/Container";
import PageFrame from "../components/PageFrame";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Sections/Footer";
import VideoScroll from "../components/Videos/VideoScroll";

//#region <api>
export async function fetchAllVideos(): Promise<Partial<Video[]>> {
    return await get<Partial<Video[]>>('/video/list');
}
//#endregion

const Videos = ({videos}: {videos: Video[]}) => {
    return <PageFrame>
        <Container>
            <SectionHeader>Alle Videos</SectionHeader>
            <VideoScroll videos={videos} />
        </Container>
        <Footer />
    </PageFrame>
}


export async function getStaticProps() {
    const videos = (await fetchAllVideos()).sort(({id: a}, {id: b}) => b - a);

    return {
        props: {
            videos
        },
    }
}

export default Videos;