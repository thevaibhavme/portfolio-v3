"use client";
import styles from "./logosTicker.module.css"
import logosData from "./LogosData"
import { useTheme } from "next-themes"

export default function LogosTicker() {

    const { theme, resolvedTheme, setTheme } = useTheme();

    const current = theme;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftGradient}></div>
            <div className={styles.logosContainer}>
                {
                    logosData.map((i) => {
                        return (
                            <div className={styles.logoWrapper} key={i.name}>
                                <li className={styles.logoListItem}>
                                    <img
                                        key={i.name}
                                        src={i.url}
                                        alt={i.name}
                                        className={styles.logo}
                                        // style={{ filter: theme === "light" ? "invert(1)" : "invert(0)" }}
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
                                <img
                                    key={i.name}
                                    src={i.url}
                                    alt={i.name}
                                    className={styles.logo}
                                    // style={{ filter: theme === "light" ? "invert(1)" : "invert(0)" }}
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