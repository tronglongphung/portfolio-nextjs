import { motion } from 'framer-motion';

export const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Container({ children }) {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

export function FadeSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section variants={fadeInUp} className={className}>
      {children}
    </motion.section>
  );
}
