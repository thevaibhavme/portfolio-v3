"use client";
import styles from "./projectCard.module.css"
import Image from "next/image"

export function ProjectCard({
    src,
    title,
    employer,
    year,
    style = {},
    className = ""
}) {
    return (
        <div
            className={`${styles.projectParentContainer} ${className}`}
            style={style}
        >
            <Image
                src={src}
                width={672}
                height={500}
                alt="project-title"
                priority={false}
                style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    minWidth: "100%",
                    height: "auto"
                }}
                draggable={false}
                quality={100}
                className={styles.projectThumbnail} />
            <div className={styles.projectInfoContainer}>
                <div className={styles.projectTitle}>{title}</div>
                <div className={styles.projectEmployer}>{employer}</div>
                <div className={styles.projectYear}>{year}</div>
            </div>
        </div>
    )
}