import styles from "./hyperlink.module.css"
import Link from "next/link"

export function Hyperlink({ children, src }) {
    return (
        <span className={styles.hyperlink}>
            <Link href={src} target="_blank">
                {children}
            </Link>
        </span>
    )
}