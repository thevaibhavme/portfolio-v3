import styles from "./logosTicker.module.css"
import logosData from "./LogosData"
import Image from "next/image"

export default function LogosTicker() {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftGradient}></div>
            <div className={styles.logosContainer}>
                {
                    logosData.map((i) => {
                        return (
                            <div className={styles.logoWrapper} key={i.name}>
                                <li className={styles.logoListItem}>
                                    <Image
                                        key={i.name}
                                        src={i.url}
                                        alt={i.name}
                                        className={styles.logo}
                                        // placeholder="blur"
                                    />
                                </li>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.logosContainer}>
                {
                    logosData.map((i) => {
                        return (
                            <div className={styles.logoWrapper} key={i.name}>
                                <Image
                                    key={i.name}
                                    src={i.url}
                                    alt={i.name}
                                    className={styles.logo}
                                    // placeholder="blur"
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.rightGradient}></div>
        </div>
    )
}