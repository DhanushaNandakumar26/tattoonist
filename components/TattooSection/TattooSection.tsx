'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../../styles/TattooSection.module.css';
import { relative } from 'path';

const tattooTypes = [
  {
    title: 'Minimal Tattoos – Small in Size, Big in Meaning',
    image: '/21.jpg',
    description: `Minimal tattoos are the perfect blend of simplicity and elegance. With clean lines, subtle shapes, and thoughtful designs, these tiny tattoos make a quiet yet powerful statement. Whether it's a delicate heart, a single word, a tiny symbol, or fine-line art, minimal tattoos are deeply personal and timeless. They’re ideal for first-time ink or anyone who believes less is more. Our artists specialize in precision and detail, ensuring every line holds meaning. Simple. Subtle. Stunning. Let your skin whisper your story. `,
  },
  {
    title: 'Buddha Tattoos – Inked with Peace and Purpose',
    image: '/tattoo-1.jpg',
    description: `A Buddha tattoo is more than just a design—it's a symbol of inner peace, enlightenment, and spiritual strength. Rooted in deep meaning, it reflects mindfulness, balance, and a journey toward self-discovery. Whether it's a serene Buddha face, meditative pose, or a design surrounded by lotus flowers and mandalas, each tattoo carries a calm, powerful energy. It's perfect for those who seek clarity in chaos and value wisdom over noise. Our artists bring this sacred symbol to life with soft shading, fine details, and a peaceful presence you can feel. Let your tattoo be a gentle reminder to stay grounded, stay kind, and stay present.`,
  },
  {
    title: 'Cover-Up Tattoos – Turn the Old into Art',
    image: '/17.jpg',
    description: 'Got a tattoo you’ve outgrown or regret? A cover-up tattoo is your chance to transform it into something beautiful and meaningful. Whether it’s an old name, faded ink, or a design that no longer represents you, our skilled artists specialize in turning the past into powerful new art. Using bold lines, creative shading, and custom designs, we seamlessly blend your existing tattoo into a fresh masterpiece. From elegant florals and mystical mandalas to fierce animals and abstract art – we bring your vision to life. Sometimes, all it takes is the right design to start over – without erasing your story. Let your skin tell the story you choose to carry.',
  },
  
  {
    title: 'Shiva Tattoos – Inked Power, Divine Transformation',
    image: '/tattoo-5.jpg',
    description: `A Shiva tattoo embodies the essence of destruction, renewal, and cosmic energy. As the Lord of Destruction and Transformation, Shiva represents the balance of creation and destruction—reminding us that true power lies in change and growth. Whether it’s the serene image of Shiva in meditation, the fierce Nataraja dance, or symbols like the trident (Trishula) and the third eye, each design captures the divine force that drives the universe. Our skilled artists focus on the intricate details and spiritual depth of this sacred symbol, bringing Shiva’s power and peace to life in every tattoo. This design is not just ink; it’s a spiritual connection—a reminder to embrace change and transcend obstacles.`,
  },
  {
    title: 'Anime Tattoos – Ink Your Fandom, Wear Your Story',
    image: '/4.jpg',
    description: `Anime tattoos are more than just art—they're a tribute to the stories, emotions, and characters that left a mark on your heart. From bold, action-packed scenes to soft, emotional moments, each design captures the magic of your favorite anime series. Whether it's a fierce Naruto pose, a delicate Sailor Moon silhouette, or the haunting beauty of Spirited Away, anime tattoos are perfect for expressing your inner otaku in the most personal way. Our artists specialize in fine-line details, vibrant colors, and custom designs that bring your favorite characters to life—right on your skin. Celebrate your fandom. Carry your favorite world with you. Because anime isn’t just something you watch—it’s something you feel.`,
  },
  {
    title: ' Portrait Tattoos – Forever Faces, Inked with Soul',
    image: '/tattoo-3.jpg',
    description: `Portrait tattoos capture emotion, memory, and personality in the most powerful way. Whether it’s a loved one, a legendary figure, or a favorite character, each portrait tells a deeply personal story that stays with you—forever. From hyper-realistic black and grey to stylized or color-rich designs, our artists focus on fine details, expression, and lifelike depth. Every stroke is crafted with precision to preserve the essence of the person or character you cherish. Perfect for honoring someone special or expressing a deep connection, portrait tattoos are more than ink—they’re emotion frozen in time.`,
  },

];

const TattooSection = ({ title, image, description, index, onLastCardStacked }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // State to lock the section in place once stacked
  const [isStacked, setIsStacked] = useState(false);

  // Opacity animation for smooth appearance
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  // All sections are sticky
  const isSticky = true;
  const isLastCard = index === tattooTypes.length - 1; // Identify the last card

  // Calculate top position for stacking
  const stickyTop = isLastCard ? '20px' : `calc(20px + ${index * 20}px)`;

  // Lock the section in place and notify when the last card is stacked
  useEffect(() => {
    const handleScroll = () => {
      const progress = scrollYProgress.get();
      if (progress >= 0.7 && !isStacked) {
        setIsStacked(true);
        if (isLastCard) {
          onLastCardStacked(); // Notify parent when last card is stacked
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYProgress, isStacked, isLastCard, onLastCardStacked]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.tattooSection} ${isSticky ? styles.sticky : ''}`}
      style={{
        position: isSticky ? 'sticky' : 'relative',
        top: stickyTop, // Dynamic top for stacking
        opacity, // Smooth fade effect
        zIndex: isLastCard ? 5 : index + 1, // Last card has highest z-index
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={styles.leftSection}>
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.rightSection}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default function TattooShowcase() {
  const headerRef = useRef(null);
  const [isLastCardStacked, setIsLastCardStacked] = useState(false);

  const { scrollYProgress: headerScroll } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  // Control header stickiness: sticky until last card is stacked, then relative
  // const headerPosition = isLastCardStacked ? 'relative' : 'sticky';
  const headerTop = isLastCardStacked ? 'auto' : 0;

  const handleLastCardStacked = () => {
    setIsLastCardStacked(true); // Update state when last card is stacked
  };

  return (
    <div className={styles.showcaseContainer}>
      <motion.div
        ref={headerRef}
        className={styles.header}
        style={{
          position: 'relative', // Sticky until last card, then relative
          top: headerTop, // 0 when sticky, auto when relative
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Tattoo Collections</h2>
        <p>Explore our diverse range of tattoo styles crafted with precision.</p>
        <p>Each design tells a unique story through ink and creativity.</p>
      </motion.div>

      <div className={styles.sectionsWrapper}>
        {tattooTypes.map((tattoo, index) => (
          <TattooSection
            key={index}
            title={tattoo.title}
            image={tattoo.image}
            description={tattoo.description}
            index={index}
            onLastCardStacked={handleLastCardStacked} // Pass callback to detect last card
          />
        ))}
      </div>
    </div>
  );
}