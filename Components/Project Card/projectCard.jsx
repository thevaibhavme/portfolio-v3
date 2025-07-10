import Link from "next/link";
import styles from "./projectCard.module.css"
import Image from "next/image"

export function ProjectCard({
    imageSRC,
    title,
    employer,
    year,
    style = {},
    className = ""
}) {
    return (
        <Link
            href="/blogs/mmtinternship"
            // target="_blank"
            className={`${styles.projectParentContainer} ${className}`}
            style={style}
        >
            <Image
                src={imageSRC}
                alt="project-title"
                loading="lazy"
                style={{
                    width: "100%",
                    height: "auto",
                }}
                draggable={false}
                placeholder="blur"
                sizes="100vw"
                className={styles.projectThumbnail}
                quality={100}
            />
            <div className={styles.projectInfoContainer}>
                <div className={styles.projectTitle}>{title}</div>
                <div className={styles.projectEmployer}>{employer}</div>
                <div className={styles.projectYear}>{year}</div>
            </div>
        </Link>
    )
}