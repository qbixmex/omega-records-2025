'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import './hero-carousel.css';
import styles from './styles.module.css';
import Link from 'next/link';
import { slides } from './carousel.data';

export const HeroCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false },
    [
      Autoplay({ delay: 7000 }),
      Fade()
    ]
  );

  // Update selected index on slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect(); // Set initial index
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={slide.image.id}>
            <figure className="embla__slide__figure">
              <Image
                src={slide.image.url}
                alt={slide.image.alt}
                width={1920}
                height={1000}
                className={`embla__slide__img${selectedIndex === index ? ' zooming' : ''}`}
                key={selectedIndex === index ? slide.image.id + '-active' : slide.image.id}
              />
            </figure>
            <div className={styles.content}>
              <section className={styles.contentData}>
                <div className={styles.title}>
                  {slide.slogan.map((word, index) => (
                    <span key={word} className={styles['word-' + (index + 1)]}>
                      {word}
                    </span>
                  ))}
                </div>
                <div className={styles.description}>{slide.description}</div>
                <div className={styles.actions}>
                  <Link href="" className={styles.cta}>Ver Más</Link>
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;