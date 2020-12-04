import { Article, get } from "..";
import SingleArticleView from "../../components/Articles/SingleArticleView";
import Container from "../../components/Container";
import PageFrame from "../../components/PageFrame";
import Footer from "../../components/Sections/Footer";
import { fetchAllSlugs } from "../articles";

//#region <api>
export async function fetchArticle(slug: string): Promise<Article> {
    const articles = await get<Article[]>('/article/bySlug?slugs[]=' + slug);
    return articles[0];
}
//#endregion

const ArticleView = ({article}: {article: Article}) => {
    return <PageFrame title={article.title} seoArticle={article} ogTitle={article.title} ogImage={process.env.NEXT_PUBLIC_API_URL + article.cover}>
        <Container>
            {article && <SingleArticleView article={article} />}
        </Container>
        <Footer />
    </PageFrame>
}

export async function getStaticProps({params}) {
    const article = await fetchArticle(params.slug);
    return {
        props: {
            article
        }
    };
}

export async function getStaticPaths() {
    const slugs = await fetchAllSlugs();
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: true,
    };
}

export default ArticleView;