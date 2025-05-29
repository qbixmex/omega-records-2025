import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import {
  FaFacebook as FacebookIcon,
  FaYoutube as YouTubeIcon,
  FaSoundcloud as SoundCloudIcon,
} from 'react-icons/fa';
import {
  FaXTwitter as XIcon,
  FaLocationDot as LocationIcon,
  FaPhone as PhoneIcon,
} from 'react-icons/fa6';
import { links } from '../navigation/data';

export const Footer = () => {
  const firstColumnLinks = links.slice(0, Math.floor(links.length / 2));
  const secondColumnLinks = links.slice(Math.floor(links.length / 2));

  return (
    <footer className={styles.footer}>
      <section className={styles.firstColumn}>
        <Image
          src="/images/omega-records-logo.png"
          alt="Footer Image"
          width={238}
          height={80}
          className="w-[238px] h-[80px"
        />

        <section className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/OmegaRecordsMexico/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FacebookIcon className={styles.socialIcon} />
          </a>
          <a
            href="https://x.com/omega_records"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
          >
            <XIcon className={styles.socialIcon} />
          </a>
          <a
            href="https://www.youtube.com/user/omegarecordsgdl"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <YouTubeIcon className={styles.socialIcon} />
          </a>
          <a
            href="https://soundcloud.com/omegarecordsestudio"
            target="_blank"
            rel="noopener noreferrer"
            title="SoundCloud"
          >
            <SoundCloudIcon className={styles.socialIcon} />
          </a>
        </section>
      </section>
      <section className={styles.secondColumn}>
        <h2 className={styles.title}>Enlaces</h2>
        <section className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          <div className={styles.links}>
            {firstColumnLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={styles.link}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className={styles.links}>
            {secondColumnLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={styles.link}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
      <section className={styles.thirdColumn}>
        <h2 className={styles.title}>Contacto</h2>
        <div className={styles.contactAddress}>
          <LocationIcon className={styles.contactIcon} />
          <div>
            <h3 className={styles.addressSubTitle}>Dirección</h3>
            <p className={styles.contactAddress}>Barcelona 2583, Guadalajara, Jalisco, México</p>
          </div>
        </div>
        <div className={styles.contactPhone}>
          <PhoneIcon className={styles.contactIcon} />
          <div>
            <h3 className={styles.addressSubTitle}>Teléfono</h3>
            <p className={styles.phone}>331-498-2299</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;