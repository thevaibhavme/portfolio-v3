import styles from "./blogsComps.module.css"
import Image from "next/image"

export function BlogParentContainer({ children }) {
    return (
        <div className={styles.parentContainer}>
            {children}
        </div>
    )
}

export function BlogHeading({ children }) {
    return (
        <div className={styles.blogHeadingContainer}>
            <div className={styles.blogHeading}>
                {children}
            </div>
        </div>
    )
}

export function BlogImage({ source }) {
    return (
        <div className={styles.blogImageContainer}>
            <Image
                src={source}
                width={672}
                height={500}
                alt="project-title"
                style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    minWidth: "100%",
                    height: "auto",
                    borderRadius: "16px",
                }}
            />
        </div>
    )
}

export function BlogParagraph({ children }) {
    return (
        <div className={styles.blogParagraphContainer}>
            <div className={styles.blogParagraph}>
                {children}
            </div>
        </div>
    )
}

export function BlogParagraphEmphasis({ children }) {
    return (
        <div className={styles.blogParagraphContainer}>
            <div className={styles.blogParagraphEmphasis}>
                {children}
            </div>
        </div>
    )
}

export function BlogSubHeading({ children }) {
    return (
        <div className={styles.blogSubHeadingContainer}>
            <div className={styles.blogSubHeading}>
                {children}
            </div>
        </div>
    )
}

export function EndingNote() {
    return (
        <div className={styles.endingNoteContainer}>
            <div className={styles.endingNote}>
                "Keep Building Things"
            </div>
        </div>
    )
}