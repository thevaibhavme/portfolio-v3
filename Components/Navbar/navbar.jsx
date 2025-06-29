"use client";
import styles from "./navbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function Navbar() {

    const pathname = usePathname();
    const { theme, resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const checkTheme = () => {
        if (resolvedTheme === "light") {
            setTheme("dark");
        }
        else if (resolvedTheme === "dark") {
            setTheme("light");
        }
    }

    const current = theme;

    const cycleTheme = () => {
        switch (current) {
            case 'light':
                setTheme('dark');
                break;
            case 'dark':
                setTheme('system');
                break;
            default:
                setTheme('light');
        }
    };

    return (
        <div className={styles.navbarParentContainer}>
            <div className={styles.backgroundBlurContainer} />
            <div className={styles.navbarItemsContainer}>
                <motion.div
                    initial={{ opacity: 0, y: "90%" }}
                    animate={{ opacity: 1, y: "0" }}
                    transition={{ type: "spring", duration: 0.8, bounce: 0.6 }}
                    className={styles.navbarContainer}
                >
                    <Link href="/" className={`${styles.navbarLink} ${pathname === '/' ? styles.active : ''} `}>Home</Link>
                    <Link href="/lab" className={`${styles.navbarLink} ${pathname === '/lab' ? styles.active : ''} `}>Lab</Link>
                    <Link href="/bio" className={`${styles.navbarLink} ${pathname === '/bio' ? styles.active : ''} `}>Bio</Link>
                    <Link href="/projects" className={`${styles.navbarLink} ${pathname.startsWith('/projects') ? styles.active : ''} `}>Projects</Link>
                    <Link href="/blogs" className={`${styles.navbarLink} ${pathname.startsWith('/blogs') ? styles.active : ''} `}>Blogs</Link>
                    <button
                        className={styles.themeButton}
                        onClick={cycleTheme}
                    >
                        {/* show what the user has picked, or the resolved theme? */}
                        {current === 'system'
                            ? `system`
                            : current}
                    </button>
                </motion.div>
                {/* <motion.div
                    style={{ display: pathname === "/bio" ? "flex" : "none" }}
                    initial={{ y: "140%" }}
                    animate={{ y: "0" }}
                    className={styles.resume}
                >
                    Resume</motion.div> */}
            </div>
        </div>
    )
}