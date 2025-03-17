import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BirthdayWish() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        🎉 Happy Birthday, Hkirat! 🎂
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg"
      >
        Wishing you a day filled with joy, laughter, and amazing moments! 🎁🥳
      </motion.p>
      {showConfetti && <Confetti />}
    </div>
  );
}

function Confetti() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 flex justify-center items-center"
    >
      🎊🎈🎉
    </motion.div>
  );
}
