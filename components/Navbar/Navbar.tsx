'use client'

import React from 'react'
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    // <div>
                <motion.nav
            className={styles.navbar}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className={styles.logo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Image
                src="/tattoonist-logo-2.png"
                alt="Company Logo"
                width={120}
                height={80}
                className={styles.logoImage}
              />
            </motion.div>
            <motion.ul
              className={styles.navItems}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/blog">Blogs</a></li>
              <li><a href="/contact">Contact</a></li>
            </motion.ul>
          </motion.nav>
  )
}

export default Navbar