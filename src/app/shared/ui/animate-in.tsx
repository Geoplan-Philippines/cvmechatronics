"use client";

import { motion } from "motion/react";

const ease = [0.25, 1, 0.5, 1] as const;

export default function AnimateIn({
  children,
  delay = 0,
  className,
  yOffset = 20,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
