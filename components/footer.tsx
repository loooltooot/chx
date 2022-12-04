import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="flex-row">
            <div className="flex-row">
                <span>Chxxsxnian Gxrold</span>
                <Link href='https://loooltooot.github.io'>
                    <Image 
                        src='/img/credit.png'
                        width={117}
                        height={54}
                        alt='Wrote by Emir Zakrewski'
                        id='mojubali'
                    />
                </Link>
            </div>
            <div className="flex-row">
                <Link href='https://github.com/loooltooot/chx'>
                    <Image 
                        src='/img/gh.svg'
                        width={51}
                        height={50}
                        alt='Go to GitHub'
                    />
                </Link>
                <Link href='https://t.me/loooltooot'>
                    <Image 
                        src='/img/tg.svg'
                        width={61}
                        height={50}
                        alt='Go to Telegram'
                    />
                </Link>
            </div>
        </footer>
    )
}