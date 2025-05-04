// components/CustomCursor.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/CustomCursor.module.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Keep default cursor visible
    
    const updateMousePosition = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`${styles.cursorDot} ${isHovering ? styles.hovering : ''}`}
      animate={{
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', damping: 15, mass: 0.1, stiffness: 120 }}
    />
  );
};

export default CustomCursor;