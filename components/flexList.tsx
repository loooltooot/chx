import { CSSProperties } from 'react'
import styles from './flexList.module.scss'

interface IFlexList {
    children: React.ReactNode
    className?: string
    style?: CSSProperties
    id?: string
}

export default function FlexList({children, className, style, id}: IFlexList) {
    let classes = ['flex-row', styles.list]
    if(className) classes.push(className)

    return (
        <ul className={classes.join(' ')} style={style} id={id}>
            {children}
        </ul>
    )
}