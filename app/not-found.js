import styles from "./404page.module.css"

export default function NotFound() {
    return (
        <div className={styles.errorContainer}>
            <div>Seeking what once existed.</div>
            <div>Silence answers all.</div>
        </div>
    )
}