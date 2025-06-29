"use client";
import styles from './lab.module.css'
import Masonry from 'react-masonry-css'
import Image from 'next/image'

export default function Lab() {

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
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                            src={src}
                            alt="labimages"
                            className={styles.images}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </div>
                ))}
            </Masonry>
        </div>

    )
}
