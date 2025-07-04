import { Navbar } from "@/Components/Navbar/navbar"
import styles from "./bio.module.css"
import Image from "next/image"
import { Experience } from "../../Components/Experience/experience"
import { ExperienceData } from "../../Components/Experience/experienceData"
import Link from "next/link"
import LogosTicker from "@/Components/Logos Ticker/logosTicker"
import { EndingNote } from "@/Components/Blogs/blogsComps"
import { Hyperlink } from "@/Components/Link/hyperlink"

export const metadata = {
    title: "thevaibhav's bio",
}

export default function Bio() {

    // useEffect(() => {
    //     document.title = "thevaibhav's bio";
    // }, [])


    return (
        <>
            <div className={styles.bioContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.profileContainer}>
                        <Image
                            src="/profilephoto/profilephoto.png"
                            width={56}
                            height={56}
                            alt="profilephoto"
                            style={{ borderRadius: "50%" }}
                            loading='lazy'
                            draggable={false}
                            placeholder="blur"
                            blurDataURL="..."
                        />
                        <div className={styles.profileInfo}>
                            <div className={styles.name}>Vaibhav Aggarwal</div>
                            <div className={styles.title}>Keep Building Things</div>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.sectionTitle}>About</div>
                    <div className={styles.sectionDescription}>Hello, I’m Vaibhav. I’m a designer living in Bengaluru, India.
                        Over the last 3 years, I have been experimenting around various domains of design be it interaction design, motion design and most recently visual design. You can check out my experiments <Hyperlink newTab={true} src="https://x.com/thevaibhavme">here</Hyperlink>. I am driven by curiosity and chase high level of craftsmanship and excellence in my work.
                        <br />
                        <br />
                        Currently, I'm working as a designer at Newton School and do experiments in my free time.</div>
                </div>
                <div className={styles.companiesContainer}>
                    <div className={styles.sectionTitle}>I have worked with</div>
                    {/* <div className={styles.companiesList}>Here the companies logo and its ticker will come</div> */}
                    <LogosTicker />
                </div>
                <div className={styles.experienceContainer}>
                    <div className={styles.sectionTitle}>Experience</div>
                    <div className={styles.experienceList}>
                        {
                            ExperienceData.map((exp, id) => (
                                <Experience key={id} name={exp.name} duration={exp.duration} />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.beliefsContainer}>
                    <div className={styles.sectionTitle}>A few things I believe in</div>
                    <ul className={styles.beliefList}>
                        <li>Things should be made very beautiful.</li>
                        <li>Don’t wait for weekends to enjoy, enjoy everyday.</li>
                        <li>Those who love their craft likely work on weekends.</li>
                        <li>9-5 job is not boring but extremely boring.</li>
                        <li>Building under constraints is a superpower.</li>
                        <li>Beyond survival, money doesn’t make me happy, great work does.</li>
                    </ul>
                    <div className={styles.beliefsEnding}>
                        It may happen (most likely) what I believe today, I may not believe that tomorrow. If you resonate with my believes, drop a  <Hyperlink src="https://x.com/thevaibhavme" newTab={true}>hello</Hyperlink>.
                    </div>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.sectionTitle}>Write to me on</div>
                    <div className={styles.contactList}>
                        <Link
                            href="https://www.linkedin.com/in/thevaibhavme/"
                            target="_blank"
                            className={styles.contactItem}>
                            <div className={styles.contactName}>LinkedIn</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M14.2519 5.50391C14.6719 5.54667 14.9998 5.90176 14.9999 6.33301V10.5C14.9999 10.9601 14.627 11.3328 14.1669 11.333C13.7067 11.333 13.3329 10.9602 13.3329 10.5V8.34473L6.42279 15.2559C6.09737 15.5813 5.56952 15.5812 5.24408 15.2559C4.91864 14.9304 4.91864 14.4026 5.24408 14.0771L12.1552 7.16699H9.99994C9.5397 7.16699 9.16693 6.79325 9.16693 6.33301C9.16711 5.87292 9.53981 5.5 9.99994 5.5H14.1669L14.2519 5.50391Z" fill="#F7F7F7" />
                            </svg>
                        </Link>
                        <Link
                            href="https://www.instagram.com/thevaibhavme/"
                            target="_blank"
                            className={styles.contactItem}>
                            <div className={styles.contactName}>Instagram</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M14.2519 5.50391C14.6719 5.54667 14.9998 5.90176 14.9999 6.33301V10.5C14.9999 10.9601 14.627 11.3328 14.1669 11.333C13.7067 11.333 13.3329 10.9602 13.3329 10.5V8.34473L6.42279 15.2559C6.09737 15.5813 5.56952 15.5812 5.24408 15.2559C4.91864 14.9304 4.91864 14.4026 5.24408 14.0771L12.1552 7.16699H9.99994C9.5397 7.16699 9.16693 6.79325 9.16693 6.33301C9.16711 5.87292 9.53981 5.5 9.99994 5.5H14.1669L14.2519 5.50391Z" fill="#F7F7F7" />
                            </svg>
                        </Link>
                        <Link
                            href="https://x.com/thevaibhavme"
                            target="_blank"
                            className={styles.contactItem}>
                            <div className={styles.contactName}>Twitter</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M14.2519 5.50391C14.6719 5.54667 14.9998 5.90176 14.9999 6.33301V10.5C14.9999 10.9601 14.627 11.3328 14.1669 11.333C13.7067 11.333 13.3329 10.9602 13.3329 10.5V8.34473L6.42279 15.2559C6.09737 15.5813 5.56952 15.5812 5.24408 15.2559C4.91864 14.9304 4.91864 14.4026 5.24408 14.0771L12.1552 7.16699H9.99994C9.5397 7.16699 9.16693 6.79325 9.16693 6.33301C9.16711 5.87292 9.53981 5.5 9.99994 5.5H14.1669L14.2519 5.50391Z" fill="#F7F7F7" />
                            </svg>
                        </Link>
                    </div>
                    <div className={styles.contactEnding}>If you’re in Bengaluru, then let’s catchup in person. Just drop a <Hyperlink src="https://x.com/thevaibhavme" newTab={true}>hello</Hyperlink>.</div>
                </div>
                <EndingNote />
            </div>
        </>
    )
}