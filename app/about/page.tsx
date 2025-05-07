'use client';

import { motion } from 'framer-motion';
import styles from '../../styles/About.module.css';
import Navbar from '@/components/Navbar/Navbar';

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <main className={styles.main}>
          <Navbar />
          <div className={styles.aboutContainer}>
            <motion.h1
              className={styles.title}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Ink Runs Deep: Tattoonist&apos;s Story
            </motion.h1>

            <div className={styles.content}>
              {/* Section 1 */}
              <div className={styles.storySection}>
                <motion.img
                  src="/tattoonist-2.jpg"
                  alt="Tattoo Artist Crafting"
                  className={styles.image}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                />
                <div>
                  <motion.p
                    className={styles.description}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                  >
                    Five years ago in the cultural heart of Thrissur, Vibin transformed his lifelong passion for art into something permanent. Known among friends for his sketchbooks filled with designs blending Kerala&apos;s rich cultural heritage with contemporary aesthetics, Vibin found himself increasingly asked to bring his unique artistic vision to life as tattoos.
                  </motion.p>
                  <motion.p
                    className={styles.description}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                  >
                    What quickly set Vibin&apos;s work apart was his thoughtful approach—sitting with clients over chai, listening to their stories, and creating designs that captured not just images but meanings.
                  </motion.p>
                </div>
              </div>

              {/* Section 2 - Reverse */}
              <div className={`${styles.storySection} ${styles.reverse}`}>
                <motion.img
                  src="/artist-2.jpg"
                  alt="Happy Tattoo Client"
                  className={styles.image}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                />
                <motion.p
                  className={styles.description}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  Today, Ink & Soul has grown from its humble beginnings but continues to carry the same heart and vision it was founded on. Each tattoo is a collaboration—a reflection of personal journeys, whether it&apos;s a grandmother&apos;s favorite flower or ancient Malayalam scripts reimagined with a modern touch.
                </motion.p>

              </div>

              {/* Section 3 */}
              <div className={styles.storySection}>
                <motion.img
                  src="/tattoonist-1.jpg"
                  alt="Tattoonist Studio Vibe"
                  className={styles.image}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                />
                <motion.p
                  className={styles.description}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  What clients often comment on most isn’t just the quality of Vibin’s work, but how the studio feels like coming home to family. This family atmosphere extends beyond individual sessions—clients often stop by just to chat, join the studio’s community events, or recommend friends who soon become part of the ever-growing Ink & Soul family.
                </motion.p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
