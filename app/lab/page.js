"use client";
import styles from './lab.module.css'
import Masonry from 'react-masonry-css'
import { LabCard } from '@/Components/Lab/labCard';
import { LabData } from '@/Components/Lab/labData';

export default function Lab() {

    const images = [
        '/chaticons.png',
        '/yellow.png',
        '/pink.png',
        '/check.png',
        '/final.png',
        '/final.png',
        '/final.png',
        '/final.png',
    ]

    const breakpointColumnsObj = {
        default: 3,
        960: 2,
        480: 1
    };

    return (
        <>
            <div className={styles.labParentContainer}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.my_masonry_grid}
                    columnClassName={styles.my_masonry_grid_column}>
                    {/* <video
                    playsInline
                    muted          // ← Mute it so autoplay is allowed
                    loop
                    autoPlay
                    style={{
                        width: '100%',
                        borderRadius: "8px",
                    }}
                >
                    <source src="/timeline.mp4" />
                    <source src="/timeline.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    <source src="/timeline.mp4" type="video/mp4" />
                    <track
                        // src="/path/to/captions.vtt"
                        // kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                </video> */}
                    {LabData.map((labCardData, i) => (
                        // <div key={i} className={styles.item}>
                        //     <div className={styles.blurOverlay} />
                        //     <Image
                        //         width={2560}
                        //         height={1920}
                        //         quality={100}
                        //         src={src}
                        //         alt="labimages"
                        //         className={styles.images}
                        //         style={{
                        //             width: "100%",
                        //             height: "auto",
                        //         }}
                        //         loading='lazy'
                        //         draggable={false}
                        //         placeholder="blur"
                        //         blurDataURL="..."
                        //         sizes="(max-width: 720px) 100vw, (max-width: 1200px) 100vw"
                        //     />
                        // </div>

                        <LabCard key={i} type={labCardData.type} src={labCardData.src} title={labCardData.title} time={labCardData.time} />
                    ))}
                </Masonry>
            </div>
        </>
    )
}
