import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import PhotoFrame from "@/components/PhotoFrame";
import ValentineInteraction from "@/components/ValentineInteraction";

const photos = [
  { src: "/images/mom-daughter-disney.jpeg", alt: "Disney day with my girl" },
  { src: "/images/kid-camp.jpeg", alt: "Camp Shalom fun" },
  { src: "/images/mom-daughter-hawaii.jpeg", alt: "Hawaii vibes" },
  { src: "/images/mom-baby-kiss.jpeg", alt: "Sweet baby kisses" },
  { src: "/images/mom-son-mural.jpeg", alt: "Kisses by the mural" },
  { src: "/images/mom-kids-selfie.jpeg", alt: "My favorite humans" },
];

const KidsPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-valentine-cream via-valentine-blush to-background overflow-hidden">
      <FloatingHearts />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <PhotoFrame
            src="/images/mom-kids-selfie.jpeg"
            alt="Me and my babies"
            className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 rounded-full"
          />
          <h1 className="text-5xl md:text-7xl font-script text-primary mb-4">
            You Guys Are My Whole World 🌍
          </h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-body max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Being your mom is the greatest gift. You fill my heart with more love 
            than I ever knew was possible. Will you be my Valentine? 💕
          </motion.p>
        </motion.div>
      </section>

      {/* Photo Collage */}
      <section className="relative z-10 py-16 px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-script text-primary text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My Favorite Little Humans 🧸
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <PhotoFrame
              key={i}
              src={photo.src}
              alt={photo.alt}
              className="aspect-square"
              delay={i * 0.15}
            />
          ))}
        </div>
      </section>

      {/* Valentine Interaction */}
      <section className="relative z-10 py-16 px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-script text-primary mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Will You Be My Valentine? 💕
        </motion.h2>
        <ValentineInteraction yesMessage="Yaaay! I love you to the moon and back! 🌙💕" />
      </section>
    </div>
  );
};

export default KidsPage;
