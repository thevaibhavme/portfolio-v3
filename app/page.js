import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import MacIcons from "@/app/images/macicons.png";
import GlowingIcons from "@/app/images/glowingicons.png";
import Lines from "@/app/images/lines.png";
import { cookies } from "next/headers";
import { headers } from "next/headers";

// export const dynamic = "force-dynamic"  // always read fresh headers
// export const dynamic = 'force-dynamic'  // ensures fresh cookies per request
export const dynamic = 'force-dynamic'

export default async function Home() {

  // // 1. grab the Vercel-provided geo headers
  // const h = headers()
  // const city    = h.get("x-vercel-ip-city")
  // const country = h.get("x-vercel-ip-country")

  // // 2. build your label
  // const label = city
  //   ? `Last visit from ${city}, ${country}`
  //   : "Location unavailable"

  // const cookieStore = cookies()
  // const lastVisitor = cookieStore.get('last-visitor')?.value

  // const cookieStore = await cookies()
  // const lastVisitor = cookieStore.get('last-visitor')?.value

  // const label = lastVisitor
  //   ? `Last visit from ${lastVisitor}`
  //   : 'Location unavailable'

  // const h = headers()
  // const lastVisitor = h.get('x-last-visitor')

  // const label = lastVisitor
  //   ? `Last visit from ${lastVisitor}`
  //   : 'Location unavailable'

  const cookieStore = await cookies()
  const lastVisitor = cookieStore.get("last-visitor")?.value

  const label = lastVisitor
    ? `Last visit from ${lastVisitor}`
    : "Location unavailable"

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
              {/* <VisitorLocation /> */}
              {label}
            </div>
            <div className={styles.mottoBox}>Time</div>
          </div>
        </div>
      </div>
    </>
  );
}