import HeroBanner from "../components/Sections/HeroBanner";
import PageFrame from "../components/PageFrame";
import LatestVods from "../components/Sections/LatestVods";
import Customers from "../components/Sections/Customers";
import Services from "../components/Sections/Services";
import Team from "../components/Sections/Team";
import Stats from "../components/Sections/Stats";
import StreamDota from "../components/Sections/StreamDota";
import JanHoltmann from "../components/Sections/JanHoltmann";
import Contact from "../components/Sections/Contact";
import Articles from "../components/Sections/Articles";
import Footer from "../components/Sections/Footer";

//#region <interfaces>
export interface Tag {
    event: number;
    id: number;
    slug: string;
    name: string;
    image: string;
    imageWEBP: string;
    imageJP2: string;
    description: string;
}

export interface Article {
    id: number;
    slug: string;
    title: string;
    body: string;
    cover: string;
    coverWEBP: string;
    coverJP2: string;
    status: string;
    created: number;
    author: {
        id: number;
        name: string;
        twitch: string;
        avatar: string;
        avatarWEBP: string;
        avatarJP2: string;
        title: string;
        profileUrl: string;
    };
    tags: Tag[];
}

export interface Video {
    id: number;
    title: string;
    source: string;
    thumbnail: string;
    thumbnailWEBP: string;
    thumbnailJP2: string;
}

interface Props {
    articles: Article[];
    videos: Video[];
}
//#endregion
//#region <api>
export async function get<T>(url: string): Promise<T> {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
}

export async function fetchLatestVideos(): Promise<Video[]> {
    return await get<Video[]>('/video/latest');
}

export async function fetchFeaturedArticle(): Promise<Partial<Article[]>> {
    return await get<Partial<Article[]>>('/article/featuredArticles');
}
//#endregion

const Index = ({articles, videos}: Props) => {
    return <PageFrame>
        <HeroBanner />
        <LatestVods videos={videos} />
        <Articles articles={articles} />
        <Customers />
        <Services />
        <Team />
        <Stats />
        <StreamDota />
        <JanHoltmann />
        <Contact />
        <Footer />
    </PageFrame>
}


export async function getStaticProps() {
    const videos = await fetchLatestVideos();
    const articles = await fetchFeaturedArticle();

    return {
        props: {
            articles,
            videos
        },
    }
}

export default Index;