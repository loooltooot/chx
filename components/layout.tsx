import { useEffect, useState } from "react";
import { axiosInst } from "../models/axiosInst";
import Footer from "./footer";
import Header, { ITopHeader } from "./header";

interface ILayout {
    children: React.ReactNode
    activeCategoryId: number
}

export default function Layout({children, activeCategoryId}: ILayout) {
    const [topHeaders, setTopHeaders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosInst.get('/api/topHeaders')
            setTopHeaders(response.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <div>
                <Header activeCategoryId={activeCategoryId} topHeaders={topHeaders} />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}