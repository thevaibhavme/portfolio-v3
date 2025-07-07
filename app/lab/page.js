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

export default function Lab(
    // { ...props }
) {

    // console.log(props);

    // const images = [
    //     '/chaticons.png',
    //     '/yellow.png',
    //     '/pink.png',
    //     '/check.png',
    //     '/final.png',
    //     '/final.png',
    //     '/final.png',
    //     '/final.png',
    // ]

    // const breakpointColumnsObj = {
    //     default: 3,
    //     960: 2,
    //     480: 1
    // };

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
    ]

    return (
        <>
            <div className={styles.labParentContainer}>
                {/* <RandomTest styles={styles} /> */}
                {/* <MasonryTest
                    breakpointCols={{ default: 3 }}        // ← only the `default` count is used
                    className={styles.my_masonry_grid}
                    columnClassName={styles.my_masonry_grid_column}
                >

                    {ImagesArr.map((pic, i) => (
                        <Image key={i} src={pic.source} alt={pic.title} className={styles.pic} />
                    ))}

                </MasonryTest> */}
                <MasonryTest
                    breakpointCols={3}                      /* default: 3 cols */
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
                        />
                    ))}
                </MasonryTest>
            </div>
        </>
    )
}
