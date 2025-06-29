"use client";
import styles from "./experience.module.css"

export function Experience({ name, duration }) {
    return (
        <>
            <div className={styles.experienceList}>
                <div className={styles.name}>{name}</div>
                <span className={styles.divider}/>
                <div className={styles.duration}>{duration}</div>
            </div>
        </>
    )
}