import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ValentineInteractionProps {
  yesMessage: string;
}

const CelebrationHearts = () => {
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 15,
    delay: Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-primary"
          style={{ left: `${h.x}%`, top: `${h.y}%`, fontSize: h.size }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 1],
            opacity: [0, 1, 0],
            y: [0, -200],
          }}
          transition={{ duration: 2, delay: h.delay, ease: "easeOut" }}
        >
          {Math.random() > 0.5 ? "♥" : "💕"}
        </motion.div>
      ))}
    </div>
  );
};

const ValentineInteraction = ({ yesMessage }: ValentineInteractionProps) => {
  const [said, setSaid] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const runAway = useCallback(() => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setNoPos({ x, y });
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <AnimatePresence mode="wait">
        {!said ? (
          <motion.div
            key="buttons"
            className="flex items-center gap-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Button
              size="lg"
              className="text-xl px-10 py-6 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow font-body font-semibold"
              onClick={() => setSaid(true)}
            >
              Yes! 💕
            </Button>
            <motion.div
              animate={{ x: noPos.x, y: noPos.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-10 py-6 rounded-full border-primary/30 text-muted-foreground font-body font-semibold"
                onMouseEnter={runAway}
                onTouchStart={runAway}
              >
                No 😢
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            className="text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <CelebrationHearts />
            <motion.p
              className="text-3xl md:text-5xl font-script text-primary mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {yesMessage}
            </motion.p>
            <p className="text-lg text-muted-foreground font-body">
              💕 Forever & Always 💕
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ValentineInteraction;
