"use client";
import styles from "./navbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";

export function Navbar() {

    const pathname = usePathname();
    const { theme, resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const audioRef = useRef(null);


    useEffect(() => {
        setMounted(true)
        audioRef.current = new Audio('/switchsound.mp3');
    }, [])

    if (!mounted) {
        return null
    }

    // const checkTheme = () => {
    //     if (resolvedTheme === "light") {
    //         setTheme("dark");
    //     }
    //     else if (resolvedTheme === "dark") {
    //         setTheme("light");
    //     }
    // }

    const current = theme;

    const cycleTheme = () => {

        // Play the sound
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reset to beginning
            audioRef.current.play().catch(error => {
                console.log('Audio play failed:', error);
            });
        }

        switch (current) {
            case 'light':
                setTheme('dark');
                break;
            // case 'dark':
            //     setTheme('system');
            //     break;
            case 'dark':
                setTheme('light');
                break;
            default:
                setTheme('light');
        }
    };

    return (
        <div className={styles.navbarParentContainer}>
            <div className={styles.backgroundBlurContainer} />
            <div className={styles.navbarContainer}>
                <motion.div
                    // initial={{ opacity: 0, y: "90%" }}
                    // animate={{ opacity: 1, y: "0" }}
                    // transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
                    className={styles.hyperlinksContainer}
                >
                    <Link href="/" className={`${styles.navbarLink} ${pathname === '/' ? styles.active : ''} `}>Home</Link>
                    <Link href="/lab" className={`${styles.navbarLink} ${pathname === '/lab' ? styles.active : ''} `}>Lab</Link>
                    <Link href="/bio" className={`${styles.navbarLink} ${pathname === '/bio' ? styles.active : ''} `}>Bio</Link>
                    <Link href="/projects" className={`${styles.navbarLink} ${pathname.startsWith('/projects') ? styles.active : ''} `}>Projects</Link>
                    <Link href="/blogs" className={`${styles.navbarLink} ${pathname.startsWith('/blogs') ? styles.active : ''} `}>Blogs</Link>
                    {/* <button
                        className={styles.themeButton}
                        onClick={cycleTheme}
                    >
                        {current === 'light'
                            ? `dark`
                            : `light`}
                    </button> */}
                </motion.div>
                <div className={styles.divider}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="28" viewBox="0 0 2 28" fill="none">
                        <path d="M1 0V28" stroke="var(--border-primary)" />
                    </svg>
                </div>
                <div className={styles.socialLinksContainer}>
                    <Link className={styles.socialLink} href={"https://www.linkedin.com/in/thevaibhavme/"} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_10872_1306)">
                                <path d="M3.54395 5.55859C3.86083 5.55859 4.11811 5.81631 4.11816 6.13477V15.0908C4.11807 15.4092 3.86081 15.667 3.54395 15.667H0.574219C0.257353 15.667 9.27504e-05 15.4092 0 15.0908V6.13477C5.44484e-05 5.81631 0.257329 5.55859 0.574219 5.55859H3.54395Z" fill="currentcolor" />
                                <path d="M10.9707 4.81152C12.3045 4.81159 13.5842 5.34414 14.5273 6.29199C15.4705 7.23987 15.9999 8.52574 16 9.86621V15.0908C15.9999 15.4092 15.7427 15.667 15.4258 15.667H12.4561C12.1392 15.667 11.8819 15.4092 11.8818 15.0908V9.86621C11.8818 9.62343 11.786 9.39041 11.6152 9.21875C11.4444 9.04701 11.2123 8.95026 10.9707 8.9502C10.729 8.9502 10.4971 9.04702 10.3262 9.21875C10.1553 9.39043 10.0587 9.62336 10.0586 9.86621V15.0908C10.0585 15.4092 9.80216 15.6669 9.48535 15.667H6.51465C6.19783 15.6669 5.9415 15.4092 5.94141 15.0908V9.86621C5.94147 8.5257 6.47088 7.23988 7.41406 6.29199C8.35725 5.34418 9.63685 4.81152 10.9707 4.81152Z" fill="currentcolor" />
                                <path d="M2.05859 0.333984C3.19579 0.333984 4.11816 1.26047 4.11816 2.40332C4.11816 3.54617 3.19578 4.47266 2.05859 4.47266C0.921626 4.4724 8.51326e-06 3.54601 0 2.40332C0 1.26063 0.921621 0.334245 2.05859 0.333984Z" fill="currentcolor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_10872_1306">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link className={styles.socialLink} href={"https://x.com/thevaibhavme"} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_10872_1309)">
                                <path d="M9.70754 1.58786C10.4053 1.3064 11.1699 1.25716 11.896 1.44919C12.4817 1.60412 13.0162 1.90853 13.4546 2.32907C14.01 2.11524 14.5375 1.82387 15.023 1.46188C15.2286 1.30867 15.5085 1.30024 15.7232 1.4404C15.9378 1.58057 16.0424 1.84001 15.9849 2.08981C15.756 3.08328 15.292 4.00109 14.6362 4.75778C14.6492 4.88648 14.6564 5.01597 14.6568 5.14548V5.14743C14.6567 9.42656 12.7101 12.5716 9.89504 14.1552C7.08987 15.7332 3.49926 15.716 0.302263 13.8388C0.0602264 13.6967 -0.0543704 13.4079 0.0249192 13.1386C0.104225 12.8694 0.356834 12.6884 0.637224 12.7002C1.83534 12.7505 3.02287 12.4827 4.09328 11.9257C3.00517 11.2505 2.23757 10.4385 1.71437 9.5654C1.05201 8.45995 0.801604 7.29023 0.756365 6.23825C0.711216 5.18807 0.869041 4.2405 1.03566 3.55954C1.11923 3.21803 1.20629 2.94005 1.27297 2.74509C1.30932 2.63881 1.3477 2.53267 1.39015 2.42868L1.42824 2.35251C1.52698 2.18617 1.70321 2.07209 1.89797 2.05368C2.12213 2.03266 2.33976 2.13664 2.46437 2.32419C3.08831 3.26319 3.91978 4.02105 4.88234 4.53317C5.66644 4.95031 6.51892 5.19458 7.3882 5.25485C7.3882 4.45686 7.56941 3.68608 8.00441 3.00876C8.41674 2.36674 9.01027 1.86914 9.70754 1.58786Z" fill="currentcolor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_10872_1309">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link className={styles.socialLink} href={"https://www.instagram.com/thevaibhavme/"} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_10872_1312)">
                                <path d="M8 5.32812C9.47196 5.32812 10.6718 6.52806 10.6719 8C10.6719 9.472 9.472 10.6562 8 10.6562C6.52806 10.6562 5.32812 9.47196 5.32812 8C5.32819 6.5281 6.5281 5.32819 8 5.32812Z" fill="currentcolor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 4.94401e-09C10.1759 4.94401e-09 10.448 -0.000142191 11.2959 0.0478516C12.1439 0.0798516 12.736 0.224016 13.248 0.416016C13.76 0.624013 14.2083 0.895763 14.6562 1.34375C15.1042 1.77574 15.376 2.22397 15.584 2.75195C15.776 3.26395 15.9201 3.8401 15.9521 4.7041C15.9841 5.55202 16 5.82409 16 8C16 10.1759 15.9841 10.448 15.9521 11.2959C15.9201 12.1439 15.776 12.7204 15.584 13.2324C15.376 13.7603 15.1041 14.2084 14.6562 14.6562C14.2083 15.1042 13.76 15.376 13.248 15.584C12.736 15.776 12.1439 15.9041 11.2959 15.9521C10.448 15.9841 10.1759 16 8 16C5.82409 16 5.55202 15.9841 4.7041 15.9521C3.8561 15.9041 3.26358 15.776 2.76758 15.584C2.23974 15.376 1.79165 15.1041 1.34375 14.6562C0.895855 14.2084 0.623997 13.7603 0.416016 13.2324C0.224016 12.7204 0.0958516 12.1439 0.0478516 11.2959C0.0158543 10.448 0 10.1759 0 8C0 5.82409 0.0158542 5.55202 0.0478516 4.7041C0.0798516 3.8401 0.224016 3.26395 0.416016 2.75195C0.624013 2.22397 0.895766 1.77574 1.34375 1.34375C1.79165 0.895855 2.23974 0.623997 2.76758 0.416016C3.26358 0.224016 3.8561 0.0798516 4.7041 0.0478516C5.55202 -0.000142246 5.82409 4.94401e-09 8 4.94401e-09ZM8.00098 3.8877C5.72898 3.8877 3.88867 5.728 3.88867 8C3.8889 10.2718 5.72912 12.1113 8.00098 12.1113C10.2727 12.1112 12.1121 10.2717 12.1123 8C12.1123 5.7281 10.2728 3.88786 8.00098 3.8877ZM12.2725 2.76758C11.7446 2.76769 11.3125 3.19963 11.3125 3.72754C11.3125 4.25547 11.7446 4.68738 12.2725 4.6875C12.8005 4.6875 13.2324 4.25554 13.2324 3.72754C13.2324 3.19956 12.8004 2.76758 12.2725 2.76758Z" fill="currentcolor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_10872_1312">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
                <div className={styles.divider}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="28" viewBox="0 0 2 28" fill="none">
                        <path d="M1 0V28" stroke="var(--border-primary)" />
                    </svg>
                </div>
                <button
                    className={styles.themeSwitch}
                    onClick={cycleTheme}
                >
                    {current === 'light'
                        ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.10023 1.34115C8.32878 1.37563 8.52619 1.52751 8.6165 1.74544C8.71967 1.99454 8.6626 2.28135 8.47197 2.47201C7.80135 3.14263 7.42445 4.05224 7.42445 5.00065C7.42445 5.94906 7.80135 6.85867 8.47197 7.5293C9.14259 8.1999 10.0522 8.57682 11.0006 8.57682C11.949 8.57681 12.8587 8.19991 13.5293 7.5293C13.7199 7.33866 14.0067 7.28158 14.2558 7.38477C14.5049 7.48799 14.6673 7.73106 14.6673 8.00065C14.6673 9.31918 14.2761 10.6081 13.5436 11.7044C12.8111 12.8007 11.7701 13.6556 10.552 14.1602C9.3339 14.6647 7.99302 14.7963 6.69984 14.5391C5.40672 14.2818 4.21872 13.6471 3.28642 12.7148C2.35413 11.7825 1.71947 10.5946 1.46221 9.30143C1.20497 8.00823 1.33653 6.66739 1.84111 5.44922C2.34569 4.23111 3.20057 3.1902 4.29684 2.45768C5.39316 1.72516 6.68209 1.33398 8.00062 1.33398L8.10023 1.34115Z" fill="currentcolor" />
                            </svg>
                        )
                        : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_10878_1402)">
                                    <path d="M8 13.0909C8.40166 13.0909 8.72727 13.4165 8.72727 13.8182V15.2727C8.72727 15.6744 8.40166 16 8 16C7.59834 16 7.27273 15.6744 7.27273 15.2727V13.8182C7.27273 13.4165 7.59834 13.0909 8 13.0909Z" fill="currentcolor" />
                                    <path d="M3.36932 11.6023C3.65334 11.3183 4.11373 11.3183 4.39773 11.6023C4.68159 11.8863 4.68164 12.3467 4.39773 12.6307L3.37216 13.6563C3.08818 13.9402 2.62776 13.9401 2.34375 13.6563C2.05975 13.3723 2.05979 12.9119 2.34375 12.6278L3.36932 11.6023Z" fill="currentcolor" />
                                    <path d="M11.6023 11.6023C11.8863 11.3183 12.3467 11.3183 12.6307 11.6023L13.6563 12.6278L13.706 12.6832C13.9388 12.9689 13.9225 13.39 13.6563 13.6563C13.39 13.9225 12.9689 13.9388 12.6832 13.706L12.6278 13.6563L11.6023 12.6307C11.3183 12.3467 11.3183 11.8863 11.6023 11.6023Z" fill="currentcolor" />
                                    <path d="M8 4.36364C10.0083 4.36364 11.6364 5.99169 11.6364 8C11.6364 10.0083 10.0083 11.6364 8 11.6364C5.99169 11.6364 4.36364 10.0083 4.36364 8C4.36364 5.99169 5.99169 4.36364 8 4.36364Z" fill="currentcolor" />
                                    <path d="M2.18182 7.27273C2.58348 7.27273 2.90909 7.59834 2.90909 8C2.90909 8.40166 2.58348 8.72727 2.18182 8.72727H0.727273C0.325611 8.72727 0 8.40166 0 8C0 7.59834 0.325611 7.27273 0.727273 7.27273H2.18182Z" fill="currentcolor" />
                                    <path d="M15.2727 7.27273C15.6744 7.27273 16 7.59834 16 8C16 8.40166 15.6744 8.72727 15.2727 8.72727H13.8182C13.4165 8.72727 13.0909 8.40166 13.0909 8C13.0909 7.59834 13.4165 7.27273 13.8182 7.27273H15.2727Z" fill="currentcolor" />
                                    <path d="M12.6278 2.34375C12.9119 2.05979 13.3723 2.05975 13.6563 2.34375C13.9401 2.62776 13.9402 3.08818 13.6563 3.37216L12.6307 4.39773C12.3467 4.68164 11.8863 4.68159 11.6023 4.39773C11.3183 4.11373 11.3183 3.65334 11.6023 3.36932L12.6278 2.34375Z" fill="currentcolor" />
                                    <path d="M2.34375 2.34375C2.62777 2.05973 3.08814 2.05973 3.37216 2.34375L4.39773 3.36932L4.44744 3.42472C4.68027 3.71037 4.66394 4.13152 4.39773 4.39773C4.13152 4.66394 3.71037 4.68027 3.42472 4.44744L3.36932 4.39773L2.34375 3.37216C2.05973 3.08814 2.05973 2.62777 2.34375 2.34375Z" fill="currentcolor" />
                                    <path d="M8 0C8.40166 0 8.72727 0.325611 8.72727 0.727273V2.18182C8.72727 2.58348 8.40166 2.90909 8 2.90909C7.59834 2.90909 7.27273 2.58348 7.27273 2.18182V0.727273C7.27273 0.325611 7.59834 0 8 0Z" fill="currentcolor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10878_1402">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        )}
                </button>
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