import { motion } from "framer-motion";

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const PhotoFrame = ({ src, alt, className = "", delay = 0 }: PhotoFrameProps) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="overflow-hidden rounded-2xl border-4 border-primary/20 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="absolute -top-2 -right-2 text-2xl">💕</div>
    </motion.div>
  );
};

export default PhotoFrame;
