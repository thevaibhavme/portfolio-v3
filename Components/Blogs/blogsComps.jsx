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
                    borderRadius: "16px",
                }}
                sizes="100vw"
                placeholder="blur"
                draggable={false}
                loading="lazy"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAKdJREFUGFcFwb0OwVAYBuD3PRqx1H8kjUgpi8RgFavZJFZuxmW4AoNEbF1MLsAmDIYOfkI1Fj1xzud5uJzMpJk80Eifks9rOKUANr4y60Vw+hpczcfSO8Uo3u5QjgiEgLGkb5AZaTBcDG1rn4N7jMi6B5BQKgOde+E3iIW7dddWNwEq+wvFaFgSjhF8awrvqRFuD76VsIDyTgGmw5+ycD9npG0jyfSLP4htRMuXOFd0AAAAAElFTkSuQmCC"
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