import Image from "next/image"
import styles from './karma.module.scss'

interface IKarma {
    karmaCount: number
}

export default function Karma({karmaCount}: IKarma) {
    return (
        <div className={styles.karma}>
            <button>
                <Image 
                    src='/img/down.svg'
                    width={20}
                    height={20}
                    alt='Vote Down'
                />
            </button>
            <span>{karmaCount}</span>
            <button>
                <Image 
                    src='/img/up.svg'
                    width={20}
                    height={20}
                    alt='Vote Up'
                />
            </button>
        </div>
    )
}