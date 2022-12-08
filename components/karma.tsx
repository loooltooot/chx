import { useMemo, useState } from "react"
import styles from './karma.module.scss'

interface IKarma {
    karmaCount: number
}

export default function Karma({karmaCount}: IKarma) {
    const [karma, setKarma] = useState(0)

    const formatedKarma = useMemo(() => {
        return Math.abs(karma) > 999 
            ? (karma / 1000).toFixed(1) + 'k' 
            : karma
    }, [karma])

    function inc() {
        setKarma(karma + 1)
    }

    function dec() {
        setKarma(karma - 1)
    }

    return (
        <div className={[styles.karma, 'flex-row'].join(' ')}>
            <button onClick={() => dec()}>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.309998 13.1064L2.85496 10.4393L7.32504 15.5066L6.88391 0.919983H10.9061L10.7319 15.398L14.7179 10.4642L17.3669 13.0023L9.15063 20.92L0.309998 13.1064Z" fill="#0B0B0B"/>
                </svg>
            </button>
            <span>{formatedKarma}</span>
            <button onClick={() => inc()}>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0453 5.39733L10.4868 20H6.4614L6.63573 5.51053L2.64659 10.4528L0 7.91035L8.22278 0L17.0659 7.8062L14.5189 10.4686L10.0453 5.39733Z" fill="#0B0B0B"/>
                </svg>
            </button>
        </div>
    )
}