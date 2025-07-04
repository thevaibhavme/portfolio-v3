"use client";
import styles from "./labCard.module.css"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import TimelineImg from "@/labAssets/timelineimg.png"
import { LabImage } from "./labImage";


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
    blurDataURLLink,
}) {

    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    // compute ratio from the thumbnail’s own metadata
    const ratio = TimelineImg.width / TimelineImg.height;

    useEffect(() => {
        const vid = videoRef.current;
        if (!vid) return;

        const markLoaded = () => setVideoLoaded(true);

        // if metadata is already loaded (cache, fast network), mark immediately
        if (vid.readyState >= 1) {
            markLoaded();
            return;
        }

        // otherwise wait for the event
        vid.addEventListener("loadedmetadata", markLoaded);
        return () => vid.removeEventListener("loadedmetadata", markLoaded);
    }, []);


    return (
        <div className={styles.labParentContainer}>
            {type === "image" ? (
                // <Image
                //     src={src}
                //     alt={title}
                //     width={332}
                //     height={265}
                //     className={styles.images}
                //     style={{
                //         width: "100%",
                //         height: "auto",
                //     }}
                //     loading="lazy"
                //     draggable={false}
                //     placeholder="blur"
                //     sizes="100vw"
                // />
                <LabImage
                    src={src}
                    alt={title}
                    width={332}
                    height={265}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    loading="lazy"
                    draggable={false}
                    placeholder="blur"
                    blurDataURL={blurDataURLLink}
                />
            ) : type === "video" ? (
                <div
                    className={styles.labVideoContainer}
                    style={{ aspectRatio: ratio }}
                >
                    {/* {!videoLoaded && (
                        <Image
                            alt="check"
                            width={332}
                            height={166}
                            src={TimelineImg}
                            aria-hidden="true"
                        />
                    )} */}
                    {!videoLoaded && (
                        <Image
                            src={TimelineImg}
                            alt=""
                            sizes="50vw"
                            placeholder="blur"
                            fill
                            className={styles.videoPlaceholderImage}
                        />
                    )}
                    <video
                        ref={videoRef}
                        playsInline
                        muted
                        loop
                        autoPlay
                        // style={{
                        //     width: '100%',
                        //     height: "auto",
                        //     borderRadius: "8px",
                        // }}‰
                        // poster="/timelineimg.png"
                        className={styles.labVideo}
                        src={src}
                        onLoadedMetadata={() => setVideoLoaded(true)}
                    >
                    </video>
                </div>
            ) : null
            }
            <div className={styles.labCardDetailsContainer}>
                <div className={styles.labDetails}>{title}</div>
                <div className={`${styles.labDetails} ${styles.time}`}>{time}</div>
            </div>
        </div >
    )
}