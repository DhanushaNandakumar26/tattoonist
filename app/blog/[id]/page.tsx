'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/Blog.module.css';
import Navbar from '@/components/Navbar/Navbar';
import { blogData, Blog } from '@/components/utils/constants';

interface BlogDetailProps {
  params: { id: string };
}

const BlogDetailPage = ({ params }: BlogDetailProps) => {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const blur = useTransform(scrollY, [0, 300], [0, 5]);

  useEffect(() => {
    const foundBlog = blogData.find(b => b.id === Number(params.id));
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [params.id]);

  if (!blog) {
    return (
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
          <main className={styles.main}>
            <Navbar />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.notFoundContainer}
            >
              <h1>Blog not found</h1>
              <motion.button
                className={styles.backButton}
                onClick={() => router.push('/blog')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Blog
              </motion.button>
            </motion.div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <main className={styles.main}>
          <Navbar />
          
          <motion.div 
            className={styles.heroImage}
            style={{ 
              backgroundImage: `url(${blog.imageUrl})`,
              opacity: opacity,
              scale: scale,
              filter: `blur(${blur}px)`
            }}
          >
            <div className={styles.heroOverlay}>
              <motion.div
                className={styles.heroContent}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <motion.div className={styles.blogMeta}>
                  <span className={styles.blogDate}>{blog.date}</span>
                  <span className={styles.blogAuthor}>By {blog.author}</span>
                  <span className={styles.readTime}>{blog.readTime}</span>
                </motion.div>
                <motion.h1>{blog.title}</motion.h1>
                <motion.div className={styles.tagContainer}>
                  {blog.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contentWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: 'easeOut',
              delay: 0.3
            }}
          >
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            <motion.div className={styles.blogNavigation}>
              <motion.button
                className={styles.backButton}
                onClick={() => router.push('/blog')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Blog
              </motion.button>
              
              <div className={styles.relatedPosts}>
                <h3>Related Posts</h3>
                <div className={styles.relatedPostGrid}>
                  {blogData
                    .filter(b => b.id !== blog.id)
                    .slice(0, 2)
                    .map(relatedBlog => (
                      <motion.div 
                        key={relatedBlog.id} 
                        className={styles.relatedPostCard}
                        onClick={() => router.push(`/blog/${relatedBlog.id}`)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <img src={relatedBlog.imageUrl} alt={relatedBlog.title} />
                        <h4>{relatedBlog.title}</h4>
                      </motion.div>
                    ))
                  }
                </div>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default BlogDetailPage;
