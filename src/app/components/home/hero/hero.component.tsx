import HeroCarousel from './hero-carousel.component';
import styles from './styles.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage}>
        <HeroCarousel />
      </div>
    </section>
  );
};
export default Hero;
