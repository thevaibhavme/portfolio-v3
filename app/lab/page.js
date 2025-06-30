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
                            width={2400}
                            height={1260}
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
                            blurDataURL="L6O{~=00^+-V00-pM{WF00~qRjM_"
                        />
                    </div>
                ))}
            </Masonry>
        </div>

    )
}
