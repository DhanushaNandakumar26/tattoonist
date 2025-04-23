// // pages/index.tsx
// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import dynamic from 'next/dynamic';
// import styles from '../../styles/Gallery.module.css';
// import Navbar from '@/components/Navbar/Navbar';

// // Dynamically import Select with SSR disabled
// const Select = dynamic(() => import('react-select'), {
//   ssr: false // This prevents the component from rendering on the server
// });

// interface Tattoo {
//   id: number;
//   title: string;
//   category: string;
//   imageUrl: string;
// }

// interface SelectOption {
//   value: string;
//   label: string;
// }

// const tattooData: Tattoo[] = [
//   { id: 1, title: 'Minimal', category: 'minimal', imageUrl: '/15.jpg' },
//   { id: 2, title: 'Eagle Tattoo', category: 'eagle', imageUrl: '/tattoo-2.jpg' },
//   { id: 3, title: 'Shiva Trident', category: 'shiva', imageUrl: '/tattoo-5.jpg' },
//   { id: 4, title: 'Minimal', category: 'minimal', imageUrl: '/26.jpg' },
//   { id: 5, title: 'Buddha Tattoo', category: 'buddha', imageUrl: '/tattoo-1.jpg' },
//   { id: 6, title: 'Name Tattoo', category: 'name', imageUrl: '/2.jpg' },
//   { id: 7, title: 'Minimal', category: 'minimal', imageUrl: '/24.jpg' },
//   { id: 8, title: 'Jesus Tattoo', category: 'jesus', imageUrl: '/3.jpg' },
//   { id: 9, title: 'Coverup Tattoo', category: 'coverup', imageUrl: '/17.jpg' },
//   { id: 10, title: 'Band Tattoo', category: 'band', imageUrl: '/22.jpg' },
//   { id: 11, title: 'Minimal Tattoo', category: 'minimal', imageUrl: '/25.jpg' },
//   { id: 12, title: 'Minimal Tattoo', category: 'minimal', imageUrl: '/14.jpg' },
//   { id: 13, title: 'Jesus Tattoo', category: 'jesus', imageUrl: '/13.jpg' },
//   { id: 14, title: 'Back Tattoo', category: 'back', imageUrl: '/23.jpg' },
//   { id: 15, title: 'Anime Tattoo', category: 'anime', imageUrl: '/4.jpg' },
//   { id: 16, title: 'Lion Tattoo', category: 'lion', imageUrl: '/20.jpg' },
//   { id: 17, title: 'Minimal Tattoo', category: 'minimal', imageUrl: '/21.jpg' },
//   { id: 18, title: 'Name Tattoo', category: 'name', imageUrl: '/19.jpg' },
//   { id: 19, title: 'Portrait Tattoo', category: 'portrait', imageUrl: '/tattoo-3.jpg' },
//   { id: 20, title: 'Anime Tattoo', category: 'anime', imageUrl: '/30.jpg' },
//   { id: 21, title: 'Shiva Trident', category: 'shiva', imageUrl: '/31.jpg' },
//   { id: 22, title: 'Eagle Tattoo', category: 'eagle', imageUrl: '/32.jpg' },
// ];

// const GalleryPage = () => {
//   const [selectedCategories, setSelectedCategories] = useState<SelectOption[]>([]);

//   const categories: SelectOption[] = [
//     { value: 'all', label: 'All' },
//     { value: 'minimal', label: 'Minimal' },
//     { value: 'eagle', label: 'Eagle' },
//     { value: 'shiva', label: 'Shiva' },
//     { value: 'buddha', label: 'Buddha' },
//     { value: 'name', label: 'Name' },
//     { value: 'jesus', label: 'Jesus' },
//     { value: 'coverup', label: 'Coverup' },
//     { value: 'band', label: 'Band' },
//     { value: 'back', label: 'Back' },
//     { value: 'anime', label: 'Anime' },
//     { value: 'lion', label: 'Lion' },
//     { value: 'portrait', label: 'Portrait' },
    
//   ];

//   const filteredTattoos = selectedCategories.length === 0 || selectedCategories.some(cat => cat.value === 'all')
//     ? tattooData
//     : tattooData.filter(tattoo => 
//         selectedCategories.some(category => category.value === tattoo.category)
//       );

//   const headingVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { 
//         duration: 0.6, 
//         ease: 'easeOut' 
//       }
//     }
//   };

//   const selectVariants = {
//     hidden: { opacity: 0, scale: 0.9, y: 20 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.5, 
//         ease: 'easeOut',
//         delay: 0.2
//       }
//     }
//   };

//   const customStyles = {
//     control: (provided: any) => ({
//       ...provided,
//       background: '#2d2d2d',
//       border: 'none',
//       borderRadius: '8px',
//       color: '#ffffff',
//       minHeight: '40px',
//     }),
//     menu: (provided: any) => ({
//       ...provided,
//       background: '#2d2d2d',
//     }),
//     option: (provided: any, state: any) => ({
//       ...provided,
//       background: state.isSelected ? '#6200ea' : '#2d2d2d',
//       color: '#ffffff',
//       '&:hover': {
//         background: '#404040'
//       }
//     }),
//     multiValue: (provided: any) => ({
//       ...provided,
//       background: '#6200ea',
//     }),
//     multiValueLabel: (provided: any) => ({
//       ...provided,
//       color: '#ffffff',
//     }),
//     multiValueRemove: (provided: any) => ({
//       ...provided,
//       color: '#ffffff',
//       '&:hover': {
//         background: '#4500a0',
//         color: '#ffffff',
//       },
//     }),
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.navbarContainer}>
//         <main className={styles.main}>
//           <section className={styles.heroSection}>
//             <Navbar />
            
//             <header className={styles.header}>
//               <motion.h1
//                 variants={headingVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 Tattoo Gallery
//               </motion.h1>
//             </header>

//             <motion.div 
//               className={styles.filterBar}
//               variants={selectVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <Select
//                 isMulti
//                 options={categories}
//                 value={selectedCategories}
//                 onChange={(selected) => setSelectedCategories(selected as SelectOption[])}
//                 className={styles.selectBox}
//                 styles={customStyles}
//                 placeholder="Select categories..."
//               />
//             </motion.div>

//             <motion.div layout className={styles.gallery}>
//               <AnimatePresence>
//                 {filteredTattoos.map(tattoo => (
//                   <motion.div
//                     key={tattoo.id}
//                     className={styles.galleryItem}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <img src={tattoo.imageUrl} alt={tattoo.title} />
//                     <div className={styles.overlay}>
//                       <h3>{tattoo.title}</h3>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;

// pages/index.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from '../../styles/Gallery.module.css';
import Navbar from '@/components/Navbar/Navbar';

// Dynamically import Select with SSR disabled
const Select = dynamic(() => import('react-select'), {
  ssr: false // This prevents the component from rendering on the server
});

interface Tattoo {
  id: number;
  title: string;
  category: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
}

interface SelectOption {
  value: string;
  label: string;
}

const tattooData: Tattoo[] = [
  { id: 1, title: 'Minimal', category: 'minimal', mediaUrl: '/15.jpg', mediaType: 'image' },
  { id: 2, title: 'Eagle Tattoo', category: 'eagle', mediaUrl: '/tattoo-2.jpg', mediaType: 'image' },
  { id: 3, title: 'Shiva Trident', category: 'shiva', mediaUrl: '/tattoo-5.jpg', mediaType: 'image' },
  { id: 4, title: 'Minimal', category: 'minimal', mediaUrl: '/26.jpg', mediaType: 'image' },
  { id: 5, title: 'Buddha Tattoo', category: 'buddha', mediaUrl: '/tattoo-1.jpg', mediaType: 'image' },
  { id: 6, title: 'Name Tattoo', category: 'name', mediaUrl: '/2.jpg', mediaType: 'image' },
  { id: 7, title: 'Minimal', category: 'minimal', mediaUrl: '/24.jpg', mediaType: 'image' },
  { id: 8, title: 'Jesus Tattoo', category: 'jesus', mediaUrl: '/3.jpg', mediaType: 'image' },
  { id: 9, title: 'Coverup Tattoo', category: 'coverup', mediaUrl: '/17.jpg', mediaType: 'image' },
  { id: 10, title: 'Band Tattoo', category: 'band', mediaUrl: '/22.jpg', mediaType: 'image' },
  { id: 11, title: 'Minimal Tattoo', category: 'minimal', mediaUrl: '/25.jpg', mediaType: 'image' },
  { id: 12, title: 'Minimal Tattoo', category: 'minimal', mediaUrl: '/14.jpg', mediaType: 'image' },
  { id: 13, title: 'Jesus Tattoo', category: 'jesus', mediaUrl: '/13.jpg', mediaType: 'image' },
  { id: 14, title: 'Back Tattoo', category: 'back', mediaUrl: '/23.jpg', mediaType: 'image' },
  { id: 15, title: 'Anime Tattoo', category: 'anime', mediaUrl: '/4.jpg', mediaType: 'image' },
  { id: 16, title: 'Lion Tattoo', category: 'lion', mediaUrl: '/20.jpg', mediaType: 'image' },
  { id: 17, title: 'Minimal Tattoo', category: 'minimal', mediaUrl: '/21.jpg', mediaType: 'image' },
  { id: 18, title: 'Name Tattoo', category: 'name', mediaUrl: '/19.jpg', mediaType: 'image' },
  { id: 19, title: 'Portrait Tattoo', category: 'portrait', mediaUrl: '/tattoo-3.jpg', mediaType: 'image' },
  { id: 20, title: 'Anime Tattoo', category: 'anime', mediaUrl: '/30.jpg', mediaType: 'image' },
  { id: 21, title: 'Shiva Trident', category: 'shiva', mediaUrl: '/31.jpg', mediaType: 'image' },
  { id: 22, title: 'Eagle Tattoo', category: 'eagle', mediaUrl: '/32.jpg', mediaType: 'image' },
  // Add video examples
  { id: 23, title: 'Minimal Tattoo', category: 'minimal', mediaUrl: '/tattoo-video-1.mp4', mediaType: 'video' },
  { id: 24, title: 'Shiva Tattoo', category: 'shiva', mediaUrl: '/tattoo-video-2.mp4', mediaType: 'video' },
  // { id: 25, title: 'Back Piece Process', category: 'back', mediaUrl: '/back-tattoo-process.mp4', mediaType: 'video' },
];

const GalleryPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<SelectOption[]>([]);

  const categories: SelectOption[] = [
    { value: 'all', label: 'All' },
    { value: 'minimal', label: 'Minimal' },
    { value: 'eagle', label: 'Eagle' },
    { value: 'shiva', label: 'Shiva' },
    { value: 'buddha', label: 'Buddha' },
    { value: 'name', label: 'Name' },
    { value: 'jesus', label: 'Jesus' },
    { value: 'coverup', label: 'Coverup' },
    { value: 'band', label: 'Band' },
    { value: 'back', label: 'Back' },
    { value: 'anime', label: 'Anime' },
    { value: 'lion', label: 'Lion' },
    { value: 'portrait', label: 'Portrait' },
  ];

  const filteredTattoos = selectedCategories.length === 0 || selectedCategories.some(cat => cat.value === 'all')
    ? tattooData
    : tattooData.filter(tattoo => 
        selectedCategories.some(category => category.value === tattoo.category)
      );

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      }
    }
  };

  const selectVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        delay: 0.2
      }
    }
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      background: '#2d2d2d',
      border: 'none',
      borderRadius: '8px',
      color: '#ffffff',
      minHeight: '40px',
    }),
    menu: (provided: any) => ({
      ...provided,
      background: '#2d2d2d',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isSelected ? '#6200ea' : '#2d2d2d',
      color: '#ffffff',
      '&:hover': {
        background: '#404040'
      }
    }),
    multiValue: (provided: any) => ({
      ...provided,
      background: '#6200ea',
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: '#ffffff',
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: '#ffffff',
      '&:hover': {
        background: '#4500a0',
        color: '#ffffff',
      },
    }),
  };

  // Media item component to handle both images and videos
  const MediaItem = ({ item }: { item: Tattoo }) => {
    if (item.mediaType === 'video') {
      return (
        <video 
          src={item.mediaUrl} 
          className={styles.videoMedia}
          controls={false}
          muted
          loop
          onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
          onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
          onClick={(e) => {
            const video = e.target as HTMLVideoElement;
            if (video.paused) {
              video.play();
            } else {
              video.pause();
            }
          }}
        />
      );
    } else {
      return <img src={item.mediaUrl} alt={item.title} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <Navbar />
            
            <header className={styles.header}>
              <motion.h1
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                Tattoo Gallery
              </motion.h1>
            </header>

            <motion.div 
              className={styles.filterBar}
              variants={selectVariants}
              initial="hidden"
              animate="visible"
            >
              <Select
                isMulti
                options={categories}
                value={selectedCategories}
                onChange={(selected) => setSelectedCategories(selected as SelectOption[])}
                className={styles.selectBox}
                styles={customStyles}
                placeholder="Select categories..."
              />
            </motion.div>

            <motion.div layout className={styles.gallery}>
              <AnimatePresence>
                {filteredTattoos.map(tattoo => (
                  <motion.div
                    key={tattoo.id}
                    className={styles.galleryItem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MediaItem item={tattoo} />
                    <div className={styles.overlay}>
                      <h3>{tattoo.title}</h3>
                      {tattoo.mediaType === 'video' && (
                        <span className={styles.videoIndicator}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GalleryPage;