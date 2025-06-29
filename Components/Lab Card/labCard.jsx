import Image from "next/image"
import styles from "./labCard.module.css"

export default function LabCard({ src }) {
    return (
        <div className={styles.labCard}>
            <Image
                className={styles.labVisual}
                src={src}
                width={0}
                height={0}
                alt="lab-visual"
                loading="lazy"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                sizes="100vw"
                quality={100}
            />
        </div>
    )
}