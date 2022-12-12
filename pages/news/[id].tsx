import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Layout from "../../components/layout";
import NewsList from "../../components/newsList";
import { axiosInst } from "../../models/axiosInst";
import { INew } from "../../models/post";

const CATEGORIES = ['Politics', 'Music', 'Art', 'Science', 'It', 'Sport']


export async function getStaticPaths() {
    const paths: Params[] = []

    CATEGORIES.forEach((category) => {
        paths.push({params: {id: category.toLowerCase()}})
    })
    
    return {
        paths,
        fallback: false
    }
}

interface INewsProps {
    props: INewsPage
}

export async function getStaticProps({params}: Params): Promise<INewsProps> {
    const response = await axiosInst.get('/api/posts?category=' + params.id)
    const news: INew[] = response.data

    // get index of category 
    const id = CATEGORIES.indexOf((params.id)[0].toUpperCase() + params.id.slice(1)) // capitalizing first letter and adding rest part

    return {
        props: {
            news,
            activeCategoryId: id
        }
    }
}

interface INewsPage {
    news: INew[]
    activeCategoryId: number
}

export default function NewsPage({news, activeCategoryId}: INewsPage) {
    return (
        <Layout activeCategoryId={activeCategoryId}>
            <Head>
                <title>{CATEGORIES[activeCategoryId]}</title>
            </Head>
            <NewsList news={news} />
        </Layout>
    )
}