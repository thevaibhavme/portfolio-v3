"use client"
import Masonry from 'react-masonry-css'
import styles from "./masonryGrid.module.css"
import { LabCard } from '../labcard/labCard';
import { LabData } from '../../data/labData';

const breakpointColumnsObj = {
    default: 3,
    960: 2,
    480: 1
};

export default function MasonryGrid(
    // { styles }
) {

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.my_masonry_grid}
            columnClassName={styles.my_masonry_grid_column}>
            {LabData.map((labCardData, i) => (
                <LabCard
                    key={i}
                    {...labCardData}
                />
            ))}
        </Masonry>
    )
}