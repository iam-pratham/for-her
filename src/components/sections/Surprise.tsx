"use client";
import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Sparkles } from "lucide-react";

export default function Surprise() {
    const [showSurprise, setShowSurprise] = useState(false);

    const handleSurprise = () => {
        // Trigger confetti
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ffccd5', '#ffb3c1', '#ff8fa3', '#ff758f', '#c9184a']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ffccd5', '#ffb3c1', '#ff8fa3', '#ff758f', '#c9184a']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
        setShowSurprise(true);
    };

    return (
        <section className="py-20 text-center bg-rose-50 flex flex-col items-center justify-center min-h-[50vh]">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-display text-rose-600 mb-8">One Last Thing...</h2>

                <motion.button
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSurprise}
                    className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-2xl hover:shadow-rose-400/50 flex items-center gap-3 mx-auto"
                >
                    <Gift size={32} />
                    <span>Click for a Surprise</span>
                </motion.button>
            </motion.div>

            {/* Surprise Modal or Popup */}
            <AnimatePresence>
                {showSurprise && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.5, y: 100 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full text-center relative shadow-2xl border-4 border-rose-200"
                        >
                            <button
                                onClick={() => setShowSurprise(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="mb-6 inline-block text-rose-500"
                            >
                                <Sparkles size={48} />
                            </motion.div>

                            <h3 className="text-3xl font-display font-bold text-rose-600 mb-4">
                                Will You Be My Valentine?
                            </h3>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                You make every day special, but today I want to make it official.
                                I love you more than words can say! ❤️
                            </p>

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => {
                                        confetti({ particleCount: 100, spread: 360, origin: { y: 0.6 } });
                                        alert("YAY! ❤️");
                                    }}
                                    className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                >
                                    Yes!
                                </button>
                                <button
                                    onClick={() => {
                                        const btn = document.getElementById("no-btn");
                                        if (btn) {
                                            btn.style.position = "absolute";
                                            btn.style.left = Math.random() * 80 + "%";
                                            btn.style.top = Math.random() * 80 + "%";
                                        }
                                    }}
                                    id="no-btn"
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold transition-all"
                                >
                                    No
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
