// "use client";
import Image from 'next/image';
import styles from './lab.module.css'
// import Masonry from 'react-masonry-css'
// import { LabCard } from '@/Components/Lab/labCard';
// import { LabData } from '@/data/lab/labData';
// import RandomTest from '@/Components/randomTest';
import MasonryTest from '@/Components/masonryTest';
import Image1 from "@/public/masonryTestImages/1.jpg"
import Image2 from "@/public/masonryTestImages/2.jpg"
import Image3 from "@/public/masonryTestImages/3.jpg"
import Image4 from "@/public/masonryTestImages/4.jpg"
import Image5 from "@/public/masonryTestImages/5.jpg"
import Image6 from "@/public/masonryTestImages/6.jpg"
import RandomTest from '@/Components/randomTest';

export default function Lab(
    {style}
) {

    const ImagesArr = [
        {
            title: "Image 1",
            source: Image1,
        },
        {
            title: "Image 2",
            source: Image2,
        },
        {
            title: "Image 3",
            source: Image3,
        },
        {
            title: "Image 4",
            source: Image4,
        },
        {
            title: "Image 5",
            source: Image5,
        },
        {
            title: "Image 6",
            source: Image6,
        }
    ]

    return (
        <>
            <div className={styles.labParentContainer}>
                {/* <MasonryTest
                    breakpointCols={3}
                    className={styles.masonry}
                    columnClassName={styles.masonry_column}
                >
                    {ImagesArr.map((pic, i) => (
                        <Image
                            key={i}
                            src={pic.source}
                            alt={pic.title}
                            className={styles.pic}
                            placeholder='blur'
                            blurDataURL={pic.source.blurDataURL}
                        />
                    ))}
                </MasonryTest> */}
                <RandomTest styles={styles}>
                    {ImagesArr.map((pic, i) => (
                        <Image
                            key={i}
                            src={pic.source}
                            alt={pic.title}
                            className={styles.pic}
                            placeholder='blur'
                            blurDataURL={pic.source.blurDataURL}
                        />
                    ))}
                </RandomTest>
            </div>
        </>
    )
}
