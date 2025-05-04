// // components/CustomCursor.js
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import styles from '../../styles/CustomCursor.module.css';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     // Hide default cursor
//     document.body.style.cursor = 'none';
    
//     const updateMousePosition = (e: any) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = () => {
//       setIsHovering(true);
//     };

//     const handleMouseLeave = () => {
//       setIsHovering(false);
//     };

//     window.addEventListener('mousemove', updateMousePosition);
    
//     // Add hover detection for interactive elements
//     const interactiveElements = document.querySelectorAll('a, button, .card');
//     interactiveElements.forEach(element => {
//       element.addEventListener('mouseenter', handleMouseEnter);
//       element.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       document.body.style.cursor = 'auto';
      
//       interactiveElements.forEach(element => {
//         element.removeEventListener('mouseenter', handleMouseEnter);
//         element.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <motion.div
//         className={styles.cursor}
//         animate={{
//           x: mousePosition.x - 8,
//           y: mousePosition.y - 8,
//         }}
//         transition={{ type: 'spring', damping: 15, mass: 0.1, stiffness: 120 }}
//       />
//       <motion.div
//         className={`${styles.cursorRing} ${isHovering ? styles.hovering : ''}`}
//         animate={{
//           x: mousePosition.x - 24,
//           y: mousePosition.y - 24,
//           scale: isHovering ? 1.5 : 1,
//         }}
//         transition={{ type: 'spring', damping: 10, mass: 0.2, stiffness: 100 }}
//       />
//     </>
//   );
// };

// export default CustomCursor;
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