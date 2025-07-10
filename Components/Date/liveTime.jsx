"use client";

import { useEffect, useState } from "react";

export default function LiveTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();

      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata", // IST timezone
        hour12: false,
      };

      const formatter = new Intl.DateTimeFormat("en-IN", options);
      setTime(formatter.format(now) + " IST");
    }

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}