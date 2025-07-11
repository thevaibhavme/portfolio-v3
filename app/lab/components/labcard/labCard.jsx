import styles from "./labCard.module.css"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";


export function LabCard({
    title,
    time,
    // showTime,
    // showCTA,
    // CTAcopy,
    // CTAredirectionURL,
    type,
    src,
    videoPlaceholder,
    theme,
}) {

    console.log(theme, "RandomABC");
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef(null);
    // const [aspectRatio, setAspectRatio] = useState(16 / 9);

    useEffect(() => {
        if (!videoPlaceholder) return;
        const vid = videoRef.current;
        if (!vid) return;

        const markReady = () => setVideoReady(true);

        // if already cached
        if (vid.readyState >= 1) {
            markReady();
            return;
        }

        vid.addEventListener("loadedmetadata", markReady);
        return () => vid.removeEventListener("loadedmetadata", markReady);
    }, [videoPlaceholder]);


    return (
        <div className={styles.labParentContainer}>
            {type === "image" ? (
                <Image
                    src={src}
                    alt={title}
                    // width={332}
                    // height={260}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: `${src.width} / ${src.height}`,
                        // border: "1px solid var(--border-primary)",
                        // borderRadius: "8px",
                    }}
                    loading="lazy"
                    draggable={false}
                    placeholder="blur"
                />
            ) : type === "video" ? (
                <div
                    className={styles.labVideoContainer}
                    style={{ aspectRatio: `${videoPlaceholder.width} / ${videoPlaceholder.height}` }}
                >
                    {!videoReady && (
                        <Image
                            src={videoPlaceholder}
                            alt=""
                            fill
                            sizes="100vw"
                            placeholder="blur"
                            className={styles.videoPlaceholder}
                        />
                    )}
                    <video
                        // ref={videoRef}
                        playsInline
                        muted
                        loop
                        autoPlay
                        className={styles.labVideo}
                        src={src}
                        // onLoadedMetadata={() => setVideoReady(true)}
                        poster={videoPlaceholder}
                    />
                </div>
            ) : null
            }
            <div className={styles.labCardDetailsContainer} data-theme={theme}>
                <div className={styles.labDetails}>{title}</div>
                <div className={`${styles.labDetails} ${styles.time}`}>{time}</div>
            </div>
        </div >
    )
}