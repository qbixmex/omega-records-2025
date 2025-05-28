import { features } from './data';
import styles from './styles.module.css';
import Image from 'next/image';

export const Features = () => {
  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3, 6);

  return (
    <section className={styles.features}>
      <h2 className={styles.title}>Ventajas</h2>

      <section className={styles.grid}>
        <div className={styles.featuresContainer}>
          {
            leftFeatures.map((feature) => (
              <div key={feature.id} className={styles.feature}>
                <div className={styles.featureIconContainer}>
                  <feature.icon className={styles.featureIcon} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <picture className={styles.featuresImageContainer}>
          <Image
            src="/images/misc/guitar-amplifier.png"
            alt="Guitarra y Amplificador"
            width={768}
            height={768}
            className={styles.featuresImage}
            priority
          />
        </picture>
        <div className={styles.featuresContainer}>
          {
            rightFeatures.map((feature) => (
              <div key={feature.id} className={styles.feature}>
                <div className={styles.featureIconContainer}>
                  <feature.icon className={styles.featureIcon} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </section>
  );
};

export default Features;