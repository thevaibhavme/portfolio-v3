import styles from "./hyperlink.module.css"
import Link from "next/link"

export function Hyperlink({ children, src, newTab, style }) {
    return (
        <span className={styles.hyperlink}>
            <Link href={src} target={newTab ? "_blank" : undefined} style={style} className={styles.link}>
                {children}
            </Link>
        </span>
    )
}