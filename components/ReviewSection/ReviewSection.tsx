// components/ReviewSection.js
import { motion } from 'framer-motion';
import styles from '../../styles/ReviewSection.module.css';
import { reviews } from '../utils/constants';

const totalRatings = 5.0;
const totalClients = 1000;
const total = 55;

const ReviewSection = () => {
  return (
    <div className={styles.container}>
      {/* Total Rating and Happy Clients */}
      <motion.div
        className={styles.summary}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.totalRating}>
          <h2>Total Rating</h2>
          <p>{totalRatings} <span style={{fontSize: "1rem", fontWeight: 300}}>({total})</span> ⭐</p>
        </div>
        <div className={styles.happyClients}>
          {/* <h2>Happy Clients</h2> */}
          <div className={styles.chicklets}>
            <div className={styles.chicklet}>
                <h2>{totalClients} +</h2>
            <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reviews */}
      <motion.div
        className={styles.reviews}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {reviews.map((review, index) => (
          <motion.div
            className={styles.reviewCard}
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.reviewHeader}>
              <span className={styles.name}>{review.name}</span>
              <span className={styles.rating}>
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className={styles.star}>⭐</span>
                ))}
              </span>
            </div>
            <p>{review.comment}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ReviewSection;
