"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black text-white px-6">
      <div className="text-center max-w-md">
        {/* Floating 404 */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl font-bold tracking-widest"
        >
          404
        </motion.h1>

        {/* Animated subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl mt-4"
        >
          You’ve drifted into unknown space 🚀
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-2 text-sm"
        >
          The page you’re looking for doesn’t exist or has moved.
        </motion.p>

        {/* Floating dot animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-3 h-3 bg-white rounded-full mx-auto mt-6"
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition"
        >
          Go Back Home
        </motion.button>
      </div>
    </div>
  );
}
