import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Layout from "../../components/layout";

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

    // FIXME
    const news: INew[] = [
        {
            id: '131313',
            title: 'Only 1% of people can eat this can',
            content: 'Lorem ut consequat non ut. Elit quis et veniam excepteur excepteur. Exercitation minim aute tempor quis labore culpa consequat veniam. Eiusmod ut est voluptate anim ullamco non deserunt. Elit amet pariatur labore aliquip ea do. Aliqua elit Lorem deserunt nulla est non dolore ut. Quis ad occaecat nulla nisi cupidatat do minim enim.',
            views: 1000,
            karma: 1
        },
        {
            id: '171717',
            title: 'Our King is mad or something...',
            content: 'Id officia adipisicing aliquip ex laborum exercitation exercitation aliquip magna id pariatur ut adipisicing do. Minim exercitation Lorem commodo voluptate ad minim mollit qui esse laboris. Elit ex est proident elit magna velit dolor.',
            views: 1000,
            karma: 1
        },
        {
            id: '232323',
            title: 'Get this rabbit hat NOW!',
            content: 'Non qui consectetur ad pariatur culpa elit ullamco ad. Laboris adipisicing adipisicing commodo sit sunt. Deserunt dolor velit est anim cillum quis cupidatat cillum dolore pariatur elit incididunt laborum et. Magna anim consequat proident nisi veniam qui occaecat. Mollit tempor laboris in est Lorem. Cupidatat anim do enim pariatur reprehenderit ullamco in nostrud incididunt dolore veniam esse aliquip qui.',
            views: 1000,
            karma: 1
        },
    ]

    // get index of category 
    const id = CATEGORIES.indexOf((params.id)[0].toUpperCase() + params.id.slice(1)) // capitalizing first letter and adding rest part

    return {
        props: {
            news,
            activeCategoryId: id
        }
    }
}

export interface INew {
    id: string
    title: string
    content: string
    views: number
    karma: number
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
            <section>
                {/* FIXME */}
                {news.map((item) => (
                    <div>{item.title}</div>
                ))}
            </section>
        </Layout>
    )
}