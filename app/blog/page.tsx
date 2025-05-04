'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from '../../styles/Blog.module.css';
import Navbar from '@/components/Navbar/Navbar';
import { blogData } from '@/components/utils/constants';
import Image from 'next/image';

const BlogList = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <Navbar />
            
            <motion.h1 
              className={styles.header}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Latest Tattoo Blogs
            </motion.h1>

            <motion.div 
              className={styles.blogGrid}
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {blogData.map(blog => (
                <motion.div 
                  key={blog.id} 
                  className={styles.blogCard} 
                  onClick={() => router.push(`/blog/${blog.id}`)}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.blogImageContainer}>
                    <Image src={blog.imageUrl} alt={blog.title} className={styles.blogImage} />
                    <div className={styles.imageOverlay}>
                      <span className={styles.readTime}>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogDate}>{blog.date}</span>
                      <span className={styles.blogAuthor}>By {blog.author}</span>
                    </div>
                    <h2>{blog.title}</h2>
                    <p>{blog.excerpt}</p>
                    <div className={styles.tagContainer}>
                      {blog.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <motion.button 
                      className={styles.readMoreBtn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BlogList;
