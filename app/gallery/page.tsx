'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '../../styles/Gallery.module.css';
import Navbar from '@/components/Navbar/Navbar';
import { StylesConfig, GroupBase } from 'react-select';
import { categories, SelectOption, Tattoo, tattooData } from '@/components/utils/constants';

// Dynamically import Select with SSR disabled
const Select = dynamic(() => import('react-select'), {
  ssr: false // This prevents the component from rendering on the server
});


const GalleryPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<SelectOption[]>([]);

  const filteredTattoos = selectedCategories.length === 0 || selectedCategories.some(cat => cat.value === 'all')
    ? tattooData
    : tattooData.filter(tattoo =>
      selectedCategories.some(category => category.value === tattoo.category)
    );

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const selectVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.2
      }
    }
  };

  const customStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
    control: (provided) => ({
      ...provided,
      background: '#2d2d2d',
      border: 'none',
      borderRadius: '8px',
      color: '#ffffff',
      minHeight: '40px',
    }),
    menu: (provided) => ({
      ...provided,
      background: '#2d2d2d',
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? 'rgb(0 0 0 / 30%);' : '#2d2d2d',
      color: '#ffffff',
      '&:hover': {
        background: '#404040'
      }
    }),
    multiValue: (provided) => ({
      ...provided,
      background: 'rgb(0 0 0 / 30%);',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#ffffff',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#ffffff',
      '&:hover': {
        background: 'rgb(0 0 0 / 30%);',
        color: '#ffffff',
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#ffffff',
      '&:hover': {
        color: '#ff5555',
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#ffffff',
      '&:hover': {
        color: '#cccccc',
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      background: '#555555',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#aaaaaa',
    }),
    input: (provided) => ({
      ...provided,
      color: '#ffffff',
    }),
    menuList: (provided) => ({
      ...provided,
      background: '#2d2d2d',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#ffffff',
    }),
  };

  // Media item component to handle both images and videos
  const MediaItem = ({ item }: { item: Tattoo }) => {
    if (item.mediaType === 'video') {
      return (
        <video
          src={item.mediaUrl}
          className={styles.videoMedia}
          controls={false}
          muted
          loop
          onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
          onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
          onClick={(e) => {
            const video = e.target as HTMLVideoElement;
            if (video.paused) {
              video.play();
            } else {
              video.pause();
            }
          }}
        />
      );
    } else {
      return (
        <Image
          src={item.mediaUrl}
          alt={item.title}
          width={300} // Adjust based on your design
          height={300} // Adjust based on your design
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <main className={styles.main}>
          <Navbar />

          <section className={styles.heroSection}>

            <header className={styles.header}>
              <motion.h1
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                Tattoo Gallery
              </motion.h1>
            </header>

            <motion.div
              className={styles.filterBar}
              variants={selectVariants}
              initial="hidden"
              animate="visible"
            >
              <Select
                isMulti
                options={categories}
                value={selectedCategories}
                onChange={(selected) => setSelectedCategories(selected as SelectOption[])}
                className={styles.selectBox}
                styles={customStyles}
                placeholder="Select categories..."
              />
            </motion.div>

            <motion.div layout className={styles.gallery}>
              <AnimatePresence>
                {filteredTattoos.map(tattoo => (
                  <motion.div
                    key={tattoo.id}
                    className={`${styles.galleryItem} card`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: 'relative' }}
                  >
                    <MediaItem item={tattoo} />
                    <div className={styles.overlay}>
                      <h3>{tattoo.title}</h3>
                      {tattoo.mediaType === 'video' && (
                        <span className={styles.videoIndicator}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GalleryPage;