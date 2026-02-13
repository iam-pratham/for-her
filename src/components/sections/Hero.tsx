"use client";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden z-10 py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-5xl mx-auto flex flex-col items-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                    className="mb-8 inline-block text-rose-500"
                >
                    <Heart size={48} fill="currentColor" className="animate-pulse" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-gray-800 mb-8 leading-tight drop-shadow-sm tracking-tight">
                    From the Moment <br />
                    <span className="text-gradient italic font-light">I Met You, Manasi...</span>
                </h1>

                <div className="glass-card px-6 py-5 md:px-8 md:py-6 rounded-2xl inline-block mb-10 max-w-3xl">
                    <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide mx-auto leading-relaxed">
                        Life became a beautiful melody, and my heart found its home.
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(225, 29, 72, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    onClick={() => {
                        const nextSection = document.getElementById("our-story");
                        nextSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-gradient-to-r from-rose-500 to-rose-400 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-medium shadow-xl shadow-rose-200 transition-all flex items-center gap-3 mx-auto z-20"
                >
                    <span className="tracking-wide">Open My Heart</span>
                    <Heart size={20} fill="currentColor" />
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-6 md:bottom-10 text-rose-400 cursor-pointer pointer-events-none md:pointer-events-auto"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
