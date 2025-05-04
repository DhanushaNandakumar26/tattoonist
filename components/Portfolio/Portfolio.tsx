// pages/index.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import styles from '../../styles/Portfolio.module.css';
import { SiThreads } from 'react-icons/si';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Add at the top with other icons

const Portfolio: NextPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, delay: 0.3 }
    }
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, delay: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200 }
    },
    hover: {
      y: -5,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      scale: 1.1,
      background: 'linear-gradient(90deg, #444, #222)',
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  const galleryVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tattoo Artist Portfolio</title>
        <meta name="description" content="Professional Tattoo Artist Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        className={styles.portfolioCard}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <motion.h1 variants={itemVariants}>Vibin</motion.h1>
          <motion.h2 variants={itemVariants}>Professional Tattoo Artist & Designer</motion.h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.leftSection}
            variants={leftVariants}
          >
            <motion.div
              className={styles.imageContainer}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/artist-4.jpg"
                alt="Tattoo Artist"
                width={400}
                height={400}
                className={styles.artistImage}
              />
            </motion.div>

            <div className={styles.socialLinks}>
              <motion.a
                href="https://www.instagram.com/tattoonist?utm_source=qr&igsh=MW93c3oxbXBwbmJkeA=="
                className={`${styles.socialIcon} ${styles.instagram}`}
                variants={socialVariants}
                whileHover="hover"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://youtube.com/@tattoonist_vibi?si=8jg4ZKxI4STP4FIX"
                className={`${styles.socialIcon} ${styles.youtube}`}
                variants={socialVariants}
                whileHover="hover"
              >
                <FaYoutube />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1YXjGsmRBD/"
                className={`${styles.socialIcon} ${styles.facebook}`}
                variants={socialVariants}
                whileHover="hover"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://www.threads.net/@tattoonist"
                className={`${styles.socialIcon} ${styles.threads}`} // Add a class if needed
                variants={socialVariants}
                whileHover="hover"
              >
                <SiThreads />
              </motion.a>
              <motion.a
  href="https://maps.app.goo.gl/gTTZuq4oz8yWx8Dq9"
  target="_blank"
  rel="noopener noreferrer"
  title="View Location on Google Maps"
  className={`${styles.socialIcon} ${styles.location}`} // You can style this if needed
  variants={socialVariants}
  whileHover="hover"
>
  <FaMapMarkerAlt />
</motion.a>

              {/* <motion.a 
                href="#" 
                className={`${styles.socialIcon} ${styles.twitter}`}
                variants={socialVariants}
                whileHover="hover"
              >
                <FaTwitter />
              </motion.a> */}
            </div>
          </motion.div>

          <motion.div
            className={styles.rightSection}
            variants={rightVariants}
          >
            <motion.div
              className={styles.bioSection}
              variants={itemVariants}
            >
              <motion.h3 variants={itemVariants}>About Me</motion.h3>
              <motion.p variants={itemVariants}>
                With 5 years of dedicated experience in the tattoo industry, I specialize in traditional, cover-up, anime-inspired, and portrait tattoo styles. Based in Thrissur, Kerala, I take pride in my versatility and attention to detail.
                My portfolio showcases my ability to:

                Transform unwanted tattoos into beautiful new designs through expert cover-up work
                Capture the essence of traditional tattooing with bold lines and timeless imagery
                Bring anime characters and concepts to life with vibrant colors and dynamic compositions
                Create realistic portraits that honor loved ones with remarkable detail and likeness

              </motion.p>
              <motion.p variants={itemVariants}>
                I&apos;m passionate about collaborating with clients to create custom, meaningful pieces that reflect their personal stories. 

              </motion.p>
            </motion.div>

            <motion.div
              className={styles.skillsSection}
              variants={itemVariants}
            >
              <motion.h3 variants={itemVariants}>Expertise</motion.h3>
              <div className={styles.skillsContainer}>
                {['Traditional', 'Minimal', 'Portrait Tattoo', 'Custom Design', 'Cover-ups', 'Band', 'Anime', 'Name Tattoo', 'Custom Lettering', 'Geometric pattern design', 'Realistic tattooing'].map((skill, index) => (
                  <motion.span
                    key={index}
                    className={styles.skillTag}
                    variants={skillVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.gallerySection}
              variants={itemVariants}
            >
              <motion.h3 variants={itemVariants}>Featured Work</motion.h3>
              <div className={styles.miniGallery}>
                {[7, 6, 9, 4].map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.galleryItem}
                    variants={galleryVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <Image
                      src={`/${item}.jpg`}
                      alt={`Tattoo work ${item}`}
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;