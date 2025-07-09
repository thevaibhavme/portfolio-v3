"use client"

import { useState, useEffect } from "react"
import styles from "./visitorLocation.module.css"  // adjust path if your CSS lives elsewhere

export default function VisitorLocation() {
  const [loc, setLoc] = useState({ city: "", country: "" })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function lookup() {
      try {
        // Fetch geo info from ipapi.co
        const res = await fetch("https://ipapi.co/json/")
        if (!res.ok) throw new Error("HTTP " + res.status)
        const data = await res.json()
        setLoc({
          city: data.city || "",
          country: data.country_name || ""
        })
      } catch (err) {
        console.error("Geolocation lookup failed", err)
      } finally {
        setLoading(false)
      }
    }
    lookup()
  }, [])

  if (loading) return <div className={styles.mottoBox}>Detecting location…</div>
  if (!loc.city)  return <div className={styles.mottoBox}>Location unavailable</div>

  return (
    <div className={styles.mottoBox}>
      Last visit from {loc.city}, {loc.country}
    </div>
  )
}
