"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const letterContent = `
My Dearest Manasi,

From the moment you walked into my life, everything changed. You brought color to my world, melody to my heart, and meaning to my days.

Every smile you share is a gift I treasure. Every laugh is my favorite song. I cherish every moment we spend together, whether we're on an adventure or just sitting in silence.

You are my best friend, my confidant, and my greatest love. I promise to stand by you, to support you, and to love you more with each passing day.

Thank you for being you.

Forever Yours,
`;

export default function LoveLetter() {
    const [displayedText, setDisplayedText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const interval = setInterval(() => {
                if (i < letterContent.length) {
                    setDisplayedText((prev) => letterContent.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 50); // Speed of typing

            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <section className="py-20 px-4 min-h-screen flex items-center justify-center relative overflow-hidden">
            <div ref={ref} className="max-w-3xl w-full bg-white/80 p-8 md:p-12 rounded-lg shadow-2xl border border-rose-100 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />

                <h2 className="text-3xl md:text-4xl font-display text-center text-rose-800 mb-8">
                    A Letter to My Manasi
                </h2>

                <div className="prose prose-rose max-w-none">
                    <p className="text-lg md:text-xl leading-relaxed font-serif whitespace-pre-wrap text-gray-700 min-h-[300px]">
                        {displayedText}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-0.5 h-6 bg-rose-500 ml-1 align-middle"
                        />
                    </p>
                </div>

                <div className="mt-8 text-right font-display text-2xl text-rose-600">
                    - Pratham
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-rose-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-50" />
            </div>
        </section>
    );
}
