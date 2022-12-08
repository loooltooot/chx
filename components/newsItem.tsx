import Image from "next/image";
import { INew } from "../pages/news/[id]";
import CoolLink from "./coolLink";
import Karma from "./karma";
import styles from './newsItem.module.scss'

interface INewsItem {
    newsItem: INew
}

export default function NewsItem({newsItem}: INewsItem) {
    return (
        <article className={styles.article}>
            <Image 
                src={'/img/' + newsItem.id + '.png'}
                width={270}
                height={270}
                alt='Article image'
                loading="lazy"
            />
            <div>
                <header>
                    <h3>{newsItem.title}</h3>
                </header>
                <p>
                    {newsItem.content}
                </p>
                <footer className="flex-row">
                    <CoolLink href={'/news/' + newsItem.id}>read</CoolLink>
                    <div className="flex-row">
                        <span className={styles.views}>{newsItem.views}</span>
                        <Karma karmaCount={newsItem.karma} />
                    </div>
                </footer>
            </div>
        </article>
    )
}