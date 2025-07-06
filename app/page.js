import Link from "next/link";
import styles from "./page.module.css";
import FunnySignInInteraction from "../data/lab/videos/funnysignininteraction.mp4"

export default function Home() {
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.nameContainer}>Vaibhav Aggarwal</div>
          <div className={styles.mottoContainer}>
            <div className={styles.mottoBox}>Keep</div>
            <div className={styles.mottoBox}>Building</div>
            <div className={styles.mottoBox}>Things</div>
          </div>
          <div className={styles.labContainer}>
            <Link href={"/lab"} className={styles.labItem}>
              <video
                playsInline
                muted
                loop
                autoPlay
                className={styles.labVideo}
                src={FunnySignInInteraction}
              >
                {/* <source src={src} type="video/webm" />
                <source src={src.replace('.webm', '.mp4')} type="video/mp4" /> */}
              </video>
            </Link>
            <Link href={"/lab"} className={styles.labItem}>
              <video
                playsInline
                muted
                loop
                autoPlay
                className={styles.labVideo}
                src={FunnySignInInteraction}
              >
                {/* <source src={src} type="video/webm" />
                <source src={src.replace('.webm', '.mp4')} type="video/mp4" /> */}
              </video>
            </Link>
            <Link href={"/lab"} className={styles.labItem}>
              <video
                playsInline
                muted
                loop
                autoPlay
                className={styles.labVideo}
                src={FunnySignInInteraction}
              >
                {/* <source src={src} type="video/webm" />
                <source src={src.replace('.webm', '.mp4')} type="video/mp4" /> */}
              </video>
            </Link>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.mottoBox}>Designer Portfolio</div>
            <div className={styles.mottoBox}>Time</div>
          </div>
        </div>
      </div>
    </>
  );
}
