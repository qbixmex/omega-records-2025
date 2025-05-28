import Image from 'next/image';
import styles from './styles.module.css';
import { fetchMainServices } from '@/app/actions/services/fetch_services';

export const Services = () => {
  const services = fetchMainServices();

  return (
    <section className={styles.services}>
      <header className={styles.heading}>
        <p className={styles.subtitle}>Lo que hacemos</p>
        <h2 className={styles.title}>Servicios</h2>
      </header>
      <div className={styles.servicesContainer}>
        { services.map((service) => (
        <section key={service.id} className={styles.serviceCard}>
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className={styles.serviceImage}
            loading="lazy"
          />
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        </section>
      )) }
      </div>
    </section>
  );
};

export default Services;