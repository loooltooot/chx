import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

interface ILayout {
    children: React.ReactNode
}

export default function Layout({children}: ILayout) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}