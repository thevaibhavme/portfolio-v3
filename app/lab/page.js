"use client";
import styles from './lab.module.css'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import { useEffect } from 'react';

export default function Lab() {

    useEffect(() => {
        document.title = "thevaibhav's lab";
    }, [])

    const images = [
        '/blue.png',
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

        <div className={styles.labParentContainer}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.my_masonry_grid}
                columnClassName={styles.my_masonry_grid_column}>
                {images.map((src, i) => (
                    <div key={i} className={styles.item}>
                        <div className={styles.blurOverlay} />
                        <Image
                            width={2560}
                            height={1920}
                            quality={100}
                            src={src}
                            alt="labimages"
                            className={styles.images}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            loading='lazy'
                            draggable={false}
                            placeholder="blur"
                            blurDataURL="..."
                            sizes="(max-width: 720px) 100vw, (max-width: 1200px) 100vw"
                        />
                    </div>
                ))}
            </Masonry>
        </div>

    )
}
