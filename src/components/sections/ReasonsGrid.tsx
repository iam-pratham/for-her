"use client";
import React from "react";
import { motion } from "framer-motion";

const reasons = [
    "Your smile lights up my darkest days.",
    "You always know how to make me laugh.",
    "Your kindness towards everyone inspires me.",
    "The way you look at me makes me feel special.",
    "Your hugs are my favorite safe place.",
    "You support my dreams no matter what.",
    "Our conversations are endless and deep.",
    "Just being with you is enough.",
];

const ReasonCard = ({ reason, index }: { reason: string; index: number }) => {
    return (
        <motion.div
            className="h-64 w-full cursor-pointer relative perspective-1000 group"
            initial="front"
            whileHover="back"
            viewport={{ once: true }}
        >
            <motion.div
                className="w-full h-full relative transition-all duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 glass-card rounded-3xl flex flex-col items-center justify-center shadow-lg border-white/40"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="text-center">
                        <span className="block text-5xl mb-4 drop-shadow-md">❤️</span>
                        <span className="text-xl font-display text-rose-500 font-bold tracking-widest uppercase text-sm">Reason #{index + 1}</span>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 text-white rounded-3xl flex items-center justify-center p-8 text-center shadow-xl border border-rose-300 transform rotate-y-180"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <p className="font-medium text-xl font-display leading-relaxed italic">
                        "{reason}"
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function ReasonsGrid() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-transparent to-white/40">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-rose-600 mb-6 tracking-tight">
                        Reasons Why I Love You
                    </h2>
                    <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                        There are a million reasons, but here are a few that make my heart skip a beat...
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <ReasonCard key={index} reason={reason} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
