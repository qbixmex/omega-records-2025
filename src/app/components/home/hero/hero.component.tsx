import styles from "./styles.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage}></div>
      <div className={styles.content}>
        <div className={styles.title}>
          <span className={styles.titleFirstWord}>CREA</span>
          <span className={styles.titleSecondWord}>GRABA</span>
          <span className={styles.titleThirdWord}>DISTRIBUYE</span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
