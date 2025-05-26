import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import NavigationLinks from "./navigation-links";

export const TopNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <figure>
        <Link href="/">
          <Image
            src="/images/omega-records-logo.png"
            alt="Omega Records Logo"
            width={178.5}
            height={60}
          />
        </Link>
      </figure>
      <NavigationLinks />
    </nav>
  );
};

export default TopNavigation;