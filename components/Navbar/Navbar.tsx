// 'use client'

// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from '../../styles/Home.module.css';
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <motion.nav
//       className={styles.navbar}
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <motion.div
//         className={styles.logo}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//       >
//         <Image
//           src="/tattoonist-logo-2.png"
//           alt="Company Logo"
//           width={120}
//           height={80}
//           className={styles.logoImage}
//         />
//       </motion.div>
//       <motion.ul
//         className={styles.navItems}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.7, duration: 0.8 }}
//       >
//         <li><Link href="/home">Home</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/gallery">Gallery</Link></li>
//         <li><Link href="/blog">Blogs</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//       </motion.ul>
//     </motion.nav>
//   );
// };

// export default Navbar;
'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
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

      {/* Mobile Menu Icon */}
      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <motion.ul
        className={`${styles.navItems} ${isMobileMenuOpen ? styles.showMenu : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/blog">Blogs</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
