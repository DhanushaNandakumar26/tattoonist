'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../../styles/TattooSection.module.css';
import Image from 'next/image';
import { tattooTypes } from '../utils/constants';

interface TattooSectionProps {
  title: string;
  image: string;
  description: string;
  index: number;
  onLastCardStacked: () => void;
}

const TattooSection = ({ title, image, description, index, onLastCardStacked }: TattooSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const [isStacked, setIsStacked] = useState(false);

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  const isSticky = true;
  const isLastCard = index === tattooTypes.length - 1; // Identify the last card

  const stickyTop = isLastCard ? '20px' : `calc(20px + ${index * 20}px)`;

  useEffect(() => {
    const handleScroll = () => {
      const progress = scrollYProgress.get();
      if (progress >= 0.7 && !isStacked) {
        setIsStacked(true);
        if (isLastCard) {
          onLastCardStacked(); // Notify parent when last card is stacked
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYProgress, isStacked, isLastCard, onLastCardStacked]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.tattooSection} ${isSticky ? styles.sticky : ''}`}
      style={{
        position: isSticky ? 'sticky' : 'relative',
        top: stickyTop, // Dynamic top for stacking
        opacity, // Smooth fade effect
        zIndex: isLastCard ? 5 : index + 1, // Last card has highest z-index
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={styles.leftSection}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'relative', width: '100%', height: '400px' }} // Explicit height
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw" // Optimize image sizes
          />
        </motion.div>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.rightSection}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default function TattooShowcase() {
  const headerRef = useRef(null);
  const [isLastCardStacked, setIsLastCardStacked] = useState(false);

  const handleLastCardStacked = () => {
    setIsLastCardStacked(true); // Update state when last card is stacked
  };

  return (
    <div className={styles.showcaseContainer}>
      <motion.div
        ref={headerRef}
        className={styles.header}
        style={{
          position: 'relative', // Changed to relative as per logic
          top: isLastCardStacked ? 'auto' : 0, // 0 when sticky, auto when relative
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Tattoo Collections</h2>
        <p>Explore our diverse range of tattoo styles crafted with precision.</p>
        <p>Each design tells a unique story through ink and creativity.</p>
      </motion.div>

      <div className={styles.sectionsWrapper}>
        {tattooTypes.map((tattoo, index) => (
          <TattooSection
            key={index}
            title={tattoo.title}
            image={tattoo.image}
            description={tattoo.description}
            index={index}
            onLastCardStacked={handleLastCardStacked} // Pass callback to detect last card
          />
        ))}
      </div>
    </div>
  );
}