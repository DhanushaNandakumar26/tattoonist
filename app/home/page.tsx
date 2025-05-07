'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import Image from 'next/image';
import { Send } from 'lucide-react';
import Portfolio from '@/components/Portfolio/Portfolio';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import TattooShowcase from '@/components/TattooSection/TattooSection';
import ReviewSection from '@/components/ReviewSection/ReviewSection';
import Navbar from '@/components/Navbar/Navbar';
import { useRouter } from 'next/navigation';

export default function FirstSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);

    // Check if we're on client-side
    if (typeof window !== 'undefined') {
      // Initial check
      setIsMobile(window.innerWidth <= 768);

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  console.log(isLoaded)

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tattoonist - Premium Tattoo Studio</title>
        <meta name="description" content="Tattoonist - Where art meets skin. Professional tattoo studio offering custom designs and expert tattooing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursor />

      <main className={styles.main}>
        {/* Hero Section with Video Background */}
        <section className={styles.heroSection}>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.backgroundVideo}
              src="https://www.youtube.com/embed/W5H2cpV6azI?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=W5H2cpV6azI"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Background Video"
            />
          </div>
          {/* Navbar */}
          <Navbar />

          <div className={styles.contentSection}>
            {isMobile ? (
              // Mobile layout: Message section first, then text content
              <>
                <div className={styles.rightSection}>
                  <section className={styles.messengerSection}>
                    <motion.div
                      className={styles.leftCard}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <div className={`${styles.messageCard} ${styles.cardOne}`}>
                        <p>&quot;Tattoos tell stories, they express identity, culture, and art in one stroke.&quot;</p>
                        <div className={`${styles.sendButton} ${styles.bottomRight}`}>
                          <Send size={18} />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className={styles.rightCard}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      <div className={`${styles.messageCard} ${styles.cardTwo}`}>
                        <p>&quot;Ink your skin with meaning, and let your body be the canvas of your soul.&quot;</p>
                        <div className={`${styles.sendButton} ${styles.topLeft}`}>
                          <Send size={18} />
                        </div>
                      </div>
                    </motion.div>
                  </section>
                </div>
                <div className={styles.leftSection}>
                  <motion.h2
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    Welcome to Tattoonist!
                  </motion.h2>
                  <motion.h3
                    className={styles.heroSubTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    Ready to Get Inked? Let&apos;s Talk!
                  </motion.h3>
                  <motion.span
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  >
                    Your body is a canvas, and every tattoo tells a story—let&apos;s create yours with precision, passion, and artistry. Book your session today and wear your story for a lifetime!
                  </motion.span>
                  <motion.button
                    className={styles.heroButton}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    onClick={handleContact}
                  >
                    Contact Us
                  </motion.button>
                </div>
              </>
            ) : (
              // Desktop layout: text on left, messages on right
              <>
                <div className={styles.leftSection}>
                  <motion.h2
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Welcome to Tattoonist!
                  </motion.h2>
                  <motion.h3
                    className={styles.heroSubTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    Ready to Get Inked? Let&apos;s Talk!
                  </motion.h3>
                  <motion.span
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    Your body is a canvas, and every tattoo tells a story—let&apos;s create yours with precision, passion, and artistry. Book your session today and wear your story for a lifetime!
                  </motion.span>
                  <motion.button
                    className={styles.heroButton}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    onClick={handleContact}
                  >
                    Contact Us
                  </motion.button>
                </div>
                <div className={styles.rightSection}>
                  <section className={styles.messengerSection}>
                    <motion.div
                      className={styles.leftCard}
                      initial={{ y: -10 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <div className={`${styles.messageCard} ${styles.cardOne}`}>
                        <p>&quot;Tattoos tell stories, they express identity, culture, and art in one stroke.&quot;</p>
                        <div className={`${styles.sendButton} ${styles.bottomRight}`}>
                          <Send size={18} />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className={styles.rightCard}
                      initial={{ y: -10 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div className={`${styles.messageCard} ${styles.cardTwo}`}>
                        <p>&quot;Ink your skin with meaning, and let your body be the canvas of your soul.&quot;</p>
                        <div className={`${styles.sendButton} ${styles.topLeft}`}>
                          <Send size={18} />
                        </div>
                      </div>
                    </motion.div>
                  </section>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Image Cards Section */}
        <section className={styles.cardsSection}>
          <div className={styles.gridContainer}>
            <motion.div
              className={`${styles.card} ${styles.largeCard}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src="/tattoo-1.jpg"
                  alt="Tattoo Art"
                  className={styles.cardImage}
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </div>
            </motion.div>

            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src="/artist-2.jpg"
                  alt="Tattoo Artist"
                  className={styles.cardImage}
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </div>
            </motion.div>

            <motion.div
              className={`${styles.card} ${styles.largeCard}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src="/tattoo-9.jpg"
                  alt="Tattoo Design"
                  className={styles.cardImage}
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </div>
            </motion.div>

            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src="/tattoo-10.jpg"
                  alt="Tattoo Art"
                  className={styles.cardImage}
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Portfolio />
      <ImageGallery />
      <TattooShowcase />
      <section className={styles.review}>
        <h1 style={{ textAlign: 'center', margin: '40px 0 20px' }}>Customer Reviews</h1>
        <ReviewSection />
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Tattoonist. All rights reserved.</p>
      </footer>
    </div>
  );
}