"use client";
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
                width={2560}
                height={1920}
                alt="project-title"
                quality={100}
                loading="lazy"
                style={{
                    width: "100%",
                    height: "auto",
                }}
                draggable={false}
                placeholder="blur"
                blurDataURL="..."
                sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw"
                className={styles.projectThumbnail} />
            <div className={styles.projectInfoContainer}>
                <div className={styles.projectTitle}>{title}</div>
                <div className={styles.projectEmployer}>{employer}</div>
                <div className={styles.projectYear}>{year}</div>
            </div>
        </Link>
    )
}