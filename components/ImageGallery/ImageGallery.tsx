import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../styles/ImageGallery.module.css';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Images array
  const images = [
    { id: 1, src: "/18.jpg", alt: "Gallery image 1", description: "Bold and timeless, Karna tattoos embody strength, loyalty, and the spirit of a true warrior. Each design captures the essence of his sacrifice, courage, and legendary presence." },
    { id: 2, src: "/12.jpg", alt: "Gallery image 2", description: "A vibrant tribute to Kerala's classical art, this Kathakali tattoo captures the expressive green (heroic) and red (demonic) faces. It symbolizes the timeless dance of good and evil through bold colors and intricate detail." },
    { id: 3, src: "/25.jpg", alt: "Gallery image 3", description: "A delicate blend of endless love and natural beauty, this infinity tattoo is gracefully entwined with blooming flowers. It symbolizes eternal growth, connection, and the beauty that blossoms over time." },
    { id: 4, src: "/11.jpg", alt: "Gallery image 4", description: "A symbol of guidance and direction, the compass tattoo represents the journey of life and staying true to one's path. Perfect for adventurers at heart, it reflects purpose, exploration, and inner clarity." },
    { id: 5, src: "/10.jpg", alt: "Gallery image 5", description: "A serene depiction of Lord Shiva in deep meditation, this tattoo symbolizes inner peace, cosmic balance, and spiritual awakening. It embodies divine stillness, strength, and the power of self-realization." },
    { id: 6, src: "/28.jpg", alt: "Gallery image 6", description: "The Trishul tattoo represents divine power, protection, and the destruction of evil. A sacred symbol of Lord Shiva, it embodies strength, courage, and spiritual transformation." },
    { id: 7, src: "/29.jpg", alt: "Gallery image 7", description: "A timeless symbol of beauty and renewal, this flower tattoo celebrates nature's elegance and emotional depth. Each petal tells a story of love, growth, and the vibrant journey of life." },
    { id: 8, src: "/27.jpg", alt: "Gallery image 8", description: "A majestic symbol of rebirth and resilience, the flying phoenix rises from the ashes with fiery grace. This tattoo embodies transformation, inner strength, and the power to begin anew." },
    { id: 9, src: "/24.jpg", alt: "Gallery image 9", description: "A timeless symbol of love and emotion, the heart tattoo captures deep feelings and personal connections. It represents passion, vulnerability, and the enduring strength of the heart's journey." },
    { id: 10, src: "/5.jpg", alt: "Gallery image 10", description: "A tribute to knowledge, wisdom, and endless learning, this open books tattoo symbolizes a love for stories and personal growth. Each page turning reflects the journey of discovery and the chapters that shape our lives." },
    { id: 11, src: "/6.jpg", alt: "Gallery image 11", description: "A powerful symbol of protection, this evil eye tattoo wards off negative energy and evil forces. It represents spiritual defense, safety, and the strength to overcome harmful influences." },
    { id: 12, src: "/tattoo-1.jpg", alt: "Gallery image 12", description: "A serene depiction of Buddha, this tattoo symbolizes inner peace, enlightenment, and spiritual awakening. It reflects a journey of mindfulness, tranquility, and the pursuit of balance in life." },
  ];

  // Determine number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.mainHeading}>Discover Our Collection</h2>
        <p className={styles.subHeading}>A visual journey through remarkable moments</p>
      </div>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <span className={styles.arrowIcon}>&#8592;</span>
        </button>

        <motion.div
          className={styles.carousel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {getVisibleImages().map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              className={styles.card}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
                      className={styles.cardImage}
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <div className={styles.cardContent}>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNext}
          aria-label="Next image"
        >
          <span className={styles.arrowIcon}>&#8594;</span>
        </button>
      </div>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;