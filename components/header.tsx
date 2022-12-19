import FlexList from "./flexList"
import CoolLink from "./coolLink"
import { axiosInst } from "../models/axiosInst"

interface IHeader {
    activeCategoryId: number
    topHeaders: ITopHeader[]
}

export interface ITopHeader {
    code: string
    title: string
}

export const CATEGORIES = ['Politics', 'Music', 'Art', 'Science', 'It', 'Sport']
export function getIndexOfCategory(category: string) {
    return CATEGORIES.indexOf(category[0].toUpperCase() + category.slice(1))
}

export default function Header({ activeCategoryId, topHeaders }: IHeader) {
    return (
        <header>
            <div className="flex-row" id="header-top">
                <h1>Chxxsxnian Gxrold</h1>

                {/* news categories */}
                <nav>
                    <FlexList>
                        {CATEGORIES.map((category, index) => (
                            activeCategoryId === index
                                ? <li key={index}>
                                    <CoolLink className="activeCategory" href={'/news/' + category.toLowerCase()}>
                                        {category}
                                    </CoolLink>
                                </li>
                                : <li key={index}>
                                    <CoolLink href={'/news/' + category.toLowerCase()}>
                                        {category}
                                    </CoolLink>
                                </li>
                        ))}
                    </FlexList>
                </nav>
            </div>
            <div className="flex-row" id="header-bottom">
                <div id="header-date">
                    <span>{getDate()}</span>
                    <span>Chxxsxx papxr</span>
                </div>

                {/* todo: gets hot-news headers from server */}
                <FlexList id="hot-news-headers">
                    {topHeaders?.map((header, index) => (
                        <li key={index}>
                            <CoolLink href={"/news/post/" + header.code}>
                                {header.title}
                            </CoolLink>
                        </li>
                    ))}
                </FlexList>
            </div>
        </header>
    )
}

function getDate() {
    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth() + 1

    return day + '.' + month
}