import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

interface ILayout {
    children: React.ReactNode
    activeCategoryId: number
}

export default function Layout({children, activeCategoryId}: ILayout) {
    return (
        <>
            <div>
                <Header activeCategoryId={activeCategoryId} />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}