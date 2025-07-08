import styles from './lab.module.css'
import MasonryGrid from '@/app/lab/components/masonryGrid/masonryGrid';

export const metadata = {
    title: "thevaibhav's lab new",
    description: "Experiments & visuals from Vaibhav’s lab",
};

export default function Lab() {

    return (
        <>
            <div className={styles.labParentContainer}>
                <MasonryGrid styles={styles} />
            </div>
        </>
    )
}
