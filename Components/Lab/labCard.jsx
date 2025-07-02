// "use client";
import { ThemeProvider } from "next-themes";
import styles from "./labCard.module.css"
import Image from "next/image";

export function LabCard({
    title,
    time,
    // showTime,
    // showCTA,
    // CTAcopy,
    // CTAredirectionURL,
    type,
    src,
    detailsTheme,
}) {

    return (
        <div className={styles.labParentContainer} data-theme={detailsTheme} >
            {type === "image" ? (
                <Image
                    src={src}
                    alt={title || "lab image"}
                    width={2560}
                    height={1920}
                    className={styles.images}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    loading="lazy"
                    draggable={false}
                    placeholder="blur"
                    blurDataURL="..."
                    sizes="(max-width: 720px) 100vw, (max-width: 1200px) 100vw"
                />
            ) : type === "video" ? (
                <video
                    playsInline
                    muted
                    loop
                    autoPlay
                    style={{
                        width: '100%',
                        borderRadius: "8px",
                    }}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : null}
            <div className={styles.labCardDetailsContainer}>
                <div className={styles.labDetails}>{title}</div>
                <div className={`${styles.labDetails} ${styles.time}`}>{time}</div>
            </div>
        </div>
    )
}