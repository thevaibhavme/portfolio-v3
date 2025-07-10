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
                alt="project-title"
                style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                }}
                sizes="100vw"
                placeholder="blur"
                draggable={false}
                quality={100}
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

export function EndingNote({ style }) {
    return (
        <div className={styles.endingNoteContainer} style={style}>
            <div className={styles.endingNote}>
                "Keep Building Things"
            </div>
        </div>
    )
}