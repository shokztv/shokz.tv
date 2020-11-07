import { ReactElement } from "react";
import HeroBanner from "../components/Sections/HeroBanner";
import PageFrame from "../components/PageFrame";
import LatestVods from "../components/Sections/LatestVods";
import Articles from "../components/Sections/Articles";
import Customers from "../components/Sections/Customers";
import Services from "../components/Sections/Services";
import Team from "../components/Sections/Team";
import Stats from "../components/Sections/Stats";
import StreamDota from "../components/Sections/StreamDota";
import JanHoltmann from "../components/Sections/JanHoltmann";
import Contact from "../components/Sections/Contact";

//#region <interfaces>
export interface Video {
    id: number;
    title: string;
    source: string;
    thumbnail: string;
    thumbnailWEBP: string;
    thumbnailJP2: string;
}

interface Props {
    videos: Video[];
}
//#endregion
//#region <api>
export async function get<T>(url: string): Promise<T> {
    try {
        const response = await fetch(process.env.API_URL + url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
}

export async function fetchLatestVideos(): Promise<Video[]> {
    return await get<Video[]>('/video/latest');
}
//#endregion

const Index = ({videos}: Props) => {
    return <PageFrame>
        <HeroBanner />
        <LatestVods videos={videos} />
        <Articles />
        <Customers />
        <Services />
        <Team />
        <Stats />
        <StreamDota />
        <JanHoltmann />
        <Contact />
    </PageFrame>
}


export async function getStaticProps() {
    const videos = await fetchLatestVideos();

    return {
      props: {
        videos
      },
    }
  }
  
  export default Index;