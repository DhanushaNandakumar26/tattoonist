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
              className="title"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Ink Runs Deep: Tattoonist’s Story
            </motion.h1>

            <div className={styles.content}>
              {/* First Section: Image on Left */}
              <div className={styles.storySection}>
                <motion.img
                  src="/tattoonist-2.jpg" // Replace with actual image path
                  alt="Tattoo Artist Crafting"
                  className={styles.image}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                />
                <div style={{display: 'flex', flexDirection: 'column', lineHeight: '1.8rem'}}>

                <motion.p
                  className="description"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  Five years ago in the cultural heart of Thrissur, Vibin transformed his lifelong passion for art into something permanent. Known among friends for his sketchbooks filled with designs blending Kerala's rich cultural heritage with contemporary aesthetics, Vibin found himself increasingly asked to bring his unique artistic vision to life as tattoos. After dedicating himself to learning the Crafting, he returned to his hometown to open a small, welcoming studio nestled in the peaceful surroundings of Thrissur.
                </motion.p>
                 <motion.p
                  className="description"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  What quickly set Vibin's work apart was his thoughtful approach—sitting with clients over chai, listening to their stories, and creating designs that captured not just images but meanings. His gentle technique and patient manner put even the most nervous first-timers at ease, while his artistic style incorporated subtle elements of Kerala's traditions: Kathakali-inspired expressions, powerful Shiva tattoos, and soulful depictions of Jesus that connected contemporary tattoo art to the region's cultural roots.
                </motion.p>
                </div>
              </div>

              {/* Second Section: Image on Right */}
              <div className={`${styles.storySection} reverse`}>
               
                <motion.p
                  className="description"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  style={{lineHeight: '1.8rem'}}
                >
                 Today, Ink & Soul has grown from its humble beginnings but continues to carry the same heart and vision it was founded on. Each tattoo is a collaboration—a reflection of personal journeys, whether it's a grandmother’s favorite flower, a childhood memory brought to life through flowing lines, or ancient Malayalam scripts reimagined with a modern touch.
                </motion.p>
                <motion.img
                  src="/artist-2.jpg" // Replace with actual image path
                  alt="Happy Tattoo Client"
                  className={styles.image}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                />
              </div>

              {/* Third Section: Image on Left */}
              <div className={styles.storySection}>
                <motion.img
                  src="/tattoonist-1.jpg" // Replace with actual image path
                  alt="Tattoonist Studio Vibe"
                  className={styles.image}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                />
                <motion.p
                  className="description"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  style={{lineHeight: '1.8rem'}}
                >
                  What clients often comment on most isn't just the quality of Vibin's work, but how the studio feels like coming home to family. From the moment you walk through the door, you're welcomed with warmth rather than treated as just another appointment. Tea is shared, stories are exchanged, and the design process feels like a conversation among friends. This family atmosphere extends beyond individual sessions—clients often stop by just to chat, join the studio's community events, or recommend friends who soon become part of the ever-growing Ink & Soul family. For Vibin, that's what matters most: creating not just beautiful tattoos, but a place where art brings people together and everyone belongs.
                </motion.p>
              </div>

              {/* <div className={`${styles.storySection} reverse`}>
                <motion.p
                  className="description"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                </motion.p>
                <motion.img
                  src="/" // Replace with actual image path
                  alt="Happy Tattoo Client"
                  className={styles.image}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                />
              </div> */}

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;