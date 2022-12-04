import Link from "next/link";
import styles from './coolLink.module.scss'

interface ICoolLink {
    href: string
    children: string | React.ReactNode
    id?: string
    className?: string
}

export default function CoolLink({href, children, className, id}: ICoolLink) {
    let classes = [styles.link]
    if(className) classes.push(className)

    return (
        <Link href={href} id={id} className={classes.join(' ')}>
            {children}
        </Link>
    )
}