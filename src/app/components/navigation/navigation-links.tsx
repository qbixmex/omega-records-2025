"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "./data";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, CircleX } from "lucide-react";

export const NavigationLinks = () => {
  const pathname = usePathname();
  const [ showMobileLinks, setShowMobileLinks ] = useState(false);

  useEffect(() => {
    if (!showMobileLinks) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMobileLinks(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
     return () => {
      window.removeEventListener("keydown", handleKeyDown)
    };
  }, [ showMobileLinks ]);

  return (
    <>
      <Menu
        className={styles.hamburgerIcon}
        onClick={() => setShowMobileLinks(prev => !prev)}
      />

      <section
        className={showMobileLinks ? styles.mobileLinks : styles.desktopLinks}
        onClick={() => setShowMobileLinks(false)}
      >
        <CircleX
          className={styles.closeIcon}
          onClick={() => setShowMobileLinks(false)}
        />
        {
          links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={cn(styles.link, {
                [styles.linkActive]: pathname === link.url
              })}
            >
              {link.label}
            </Link>
          ))
        }
      </section>
    </>
  );
};

export default NavigationLinks;