"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; size: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => {
                const newHeart = {
                    id: Date.now(),
                    left: Math.random() * 100,
                    duration: Math.random() * 20 + 10,
                    size: Math.random() * 20 + 10,
                };
                // Keep only recent 20 hearts to avoid memory issues
                const newHearts = [...prev, newHeart];
                if (newHearts.length > 20) {
                    newHearts.shift();
                }
                return newHearts;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ y: "110vh", opacity: 0, scale: 0.5 }}
                        animate={{
                            y: "-10vh",
                            opacity: [0, 0.6, 0],
                            scale: [0.5, 1, 0.5]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: heart.duration, ease: "linear" }}
                        className="absolute text-rose-300 drop-shadow-sm opacity-30"
                        style={{
                            left: `${heart.left}%`,
                            fontSize: `${heart.size}px`
                        }}
                    >
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
