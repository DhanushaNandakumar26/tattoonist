"use client";

import { motion } from "framer-motion";
import styles from "../../styles/Contact.module.css";
import Navbar from "@/components/Navbar/Navbar";
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./Leaflet'), {
  ssr: false, // ⛔ prevents server-side rendering
});


export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const bounceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Separate WhatsApp message
  const whatsappMessage = encodeURIComponent(
    "Hi Tattoonist, I’d like to book an appointment. Can you share available slots and details?"
  );

  // Separate Gmail email body
  const emailBody = encodeURIComponent(
    "Hello Tattoonist, I’d like to book an appointment. Please share available slots and details."
  );

  return (
    <div className={styles.navbarContainer}>
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <Navbar/>
    <motion.section
      className={styles.contactSection}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants}>Get in Touch With Us</motion.h2>
      <motion.p variants={itemVariants} className={styles.intro}>
        We’re here to make your experience seamless! Whether you prefer instant
        messaging or email, reach out to book your appointment today. Choose
        WhatsApp or Gmail below to get started.
      </motion.p>
      <motion.div className={styles.contactOptions} variants={containerVariants}>
        <motion.a
          href={`https://wa.me/8281283711?text=${whatsappMessage}`}
          target="_blank"
          className={styles.btn}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book via WhatsApp
        </motion.a>
        <motion.a
          href={`mailto:Tattoonistvibi@gmail.com?subject=Appointment%20Booking&body=${emailBody}`}
          className={styles.btn}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book via Gmail
        </motion.a>
      </motion.div>
      <motion.p variants={itemVariants} className={styles.assurance}>
        After you send your request via WhatsApp or Gmail, our team will get
        back to you within 24 hours to confirm your appointment and provide all
        the details you need. We can’t wait to assist you!
      </motion.p>
      <motion.div className={styles.footerInfo} variants={bounceVariants}>
        <span>
          <strong>Visit Us:</strong> Tattoonist
Avm mall,
 Ayyanthol civil line, kanjani road,thrissur, pin 680003
        </span>
        <span>
          <strong>Call Us:</strong> +91 8281283711
        </span>
        <span>
          <strong>Email Us:</strong> Tattoonistvibi@gmail.com
        </span>
        <span>
          <strong>Stay Connected!</strong>
        </span>
      </motion.div>
    <LeafletMap/>

    </motion.section>
    </section>

    </main>
    </div>
  );
}