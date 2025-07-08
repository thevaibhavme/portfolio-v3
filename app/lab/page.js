// "use client";
import Image from 'next/image';
import styles from './lab.module.css'
// import Masonry from 'react-masonry-css'
// import { LabCard } from '@/Components/Lab/labCard';
// import { LabData } from '@/data/lab/labData';
import MasonryGrid from '@/app/lab/components/masonryGrid';

export const metadata = {
    title: "thevaibhav's lab",
    description: "Experiments & visuals from Vaibhav’s lab",
  };

export default function Lab(
    {style}
) {

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
                <MasonryGrid styles={styles}>
                    {/* {ImagesArr.map((pic, i) => (
                        <Image
                            key={i}
                            src={pic.source}
                            alt={pic.title}
                            className={styles.pic}
                            placeholder='blur'
                            blurDataURL={pic.source.blurDataURL}
                        />
                    ))} */}
                </MasonryGrid>
            </div>
        </>
    )
}
