import FlexList from "./flexList"

export default function Header() {
    return (
        <header>
            <div className="flex-row">
                <h1>Chxxsxnian Gxrold</h1> 

                {/* news categories */}
                <nav>
                    <FlexList>
                        <li>Politics</li>
                        <li>Music</li>
                        <li>Art</li>
                        <li>Science</li>
                        <li>IT</li>
                        <li>Sport</li>
                    </FlexList>
                </nav>
            </div>
            <div className="flex-row">
                <div>
                    <span>{getDate()}</span>
                    <span>Chxxsxx papxr</span>
                </div>

                {/* todo: gets hot-news headers from server */}
                <FlexList>
                    <li>All toilets in King’s Landing have disappired</li>
                    <li>IT specialists from Koraha are not a joke</li>
                    <li>“Lapta” – new hype sport from Köttisgrad</li>
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