import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import MacIcons from "@/app/images/macicons.png";
import GlowingIcons from "@/app/images/glowingicons.png";
import Lines from "@/app/images/lines.png";
import LiveTime from "@/Components/Date/liveTime";

export default function Home() {

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.nameContainer}>Vaibhav Aggarwal</div>
          <div className={styles.mottoContainer}>
            <div className={`${styles.mottoBox} ${styles.toBeHidden}`}>Keep</div>
            <div className={`${styles.mottoBox} ${styles.toBeHidden}`}>Building</div>
            <div className={`${styles.mottoBox} ${styles.toBeHidden}`}>Things</div>
            <div className={`${styles.mottoBox} ${styles.keepBuildingThings}`}>Keep Building Things</div>
          </div>
          <div className={styles.labContainer}>
            <Link href={"/lab"} className={styles.labItem}>
              {/* <video
                // ref={videoRef}
                playsInline
                muted
                loop
                autoPlay
                className={styles.labVideo}
                src={FunnyInteraction}
              /> */}
              <Image
                src={Lines}
                alt="MacIcons"
                className={styles.labImage}
                placeholder="blur"
              />
            </Link>
            <Link href={"/lab"} className={styles.labItem}>
              <Image
                src={MacIcons}
                alt="MacIcons"
                className={styles.labImage}
                placeholder="blur"
              />
              {/* <video
                  playsInline
                  muted
                  loop
                  autoPlay
                  className={styles.labVideo}
                  src={Timeline}
                /> */}
            </Link>
            <Link href={"/lab"} className={styles.labItem}>
              {/* <video
                playsInline
                muted
                loop
                autoPlay
                className={styles.labVideo}
                src={Timeline}
              /> */}
              <Image
                src={GlowingIcons}
                alt="MacIcons"
                className={styles.labImage}
                placeholder="blur"
              />
            </Link>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.mottoBox}>
              Designer Portfolio
            </div>
            <div className={styles.mottoBox}>
              <LiveTime />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}