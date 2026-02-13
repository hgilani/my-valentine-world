import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-valentine-cream via-valentine-blush to-background overflow-hidden">
      <FloatingHearts />
      
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-script text-primary mb-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Happy Valentine's Day
        </motion.h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body mb-12">
          💕 A little something made with love 💕
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/husband"
              className="inline-block px-10 py-5 rounded-full bg-primary text-primary-foreground text-xl font-body font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              For My Love 💖
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/kids"
              className="inline-block px-10 py-5 rounded-full bg-valentine-deep text-primary-foreground text-xl font-body font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              For My Babies 🧸
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
