import { INew } from "../models/post"
import NewsItem from "./newsItem"

interface INewsList {
    news: INew[]
}

export default function NewsList({ news }: INewsList) {
    return (
        <section className="news-list">
            {news.map((newsItem) => (
                <NewsItem newsItem={newsItem} key={newsItem.id} />
            ))}
        </section>
    )
}