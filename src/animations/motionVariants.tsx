import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const FADE_UP_VARIANTS = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
}
export function MotionWrapper({ children, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
}
