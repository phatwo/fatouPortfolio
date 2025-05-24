import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
     
      <motion.p 
        className="mt-4 text-lg md:text-xl max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Passionnée 
      </motion.p>

    </section>
  );
}