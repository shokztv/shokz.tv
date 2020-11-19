import { Article, get } from ".";
import Container from "../components/Container";
import PageFrame from "../components/PageFrame";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Sections/Footer";
import chunk from 'lodash/chunk';
import ArticleScroll from "../components/Articles/ArticleScroll";

//#region <api>
export async function fetchAllSlugs(): Promise<string[]> {
    return await get<string[]>('/article/slugs');
}

export async function fetchAllArticles(): Promise<Article[]> {
    const articles = [];
    const slugs = await fetchAllSlugs();
    const chunks = chunk(slugs, 10);

    for(const chunk of chunks) {
        const chunkedArticles = await get<Article[]>('/article/bySlug?slugs[]=' + chunk.join('&slugs[]='));
        articles.push(...chunkedArticles);
    }
    return articles.sort(({created: a}, {created: b}) => b - a);
}
//#endregion

const Articles = ({articles}: {articles: Article[]}) => {
    return <PageFrame>
        <Container>
            <br />
            <SectionHeader>Alle Artikel</SectionHeader>
            <ArticleScroll articles={articles} />
        </Container>
        <Footer />
    </PageFrame>
}


export async function getStaticProps() {
    const articles = (await fetchAllArticles()).sort(({id: a}, {id: b}) => b - a);

    return {
        props: {
            articles
        },
    }
}

export default Articles;