import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100 pt-24">
      <motion.h2 
        className="text-5xl font-bold text-blue-600 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm Benjamin 👋
      </motion.h2>

      <motion.p 
        className="text-lg text-gray-700 mb-6 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm a Frontend Developer who builds clean, fast, and animated websites.
      </motion.p>

      <motion.a 
        href="#projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;

