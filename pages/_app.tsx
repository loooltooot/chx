import type { AppProps } from 'next/app'
import '../styles/normalize.css'
import '../styles/global.scss'
import { Crimson_Text, UnifrakturCook } from '@next/font/google'

const crimsonText = Crimson_Text({
    weight: ['400', '700'],
    style: ['normal']
})

const unifrakturCook = UnifrakturCook({
    weight: ['700'],
    style: ['normal']
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --font-crimson-text: ${crimsonText.style.fontFamily};
                    --font-unifraktur-cook: ${unifrakturCook.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}
