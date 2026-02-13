"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircleHeart, Footprints, CalendarHeart, Sparkles } from "lucide-react";

// Define the events data
const events = [
    {
        icon: MessageCircleHeart,
        title: "First Hello",
        date: "A Day to Remember",
        description: "The moment our paths crossed. A simple greeting that changed everything.",
        color: "bg-rose-400",
    },
    {
        icon: Footprints,
        title: "First Meet",
        date: "Seeing You",
        description: "The butterflies, the nervous smiles, and the instant connection.",
        color: "bg-purple-400",
    },
    {
        icon: CalendarHeart,
        title: "First Date",
        date: "Just Us",
        description: "Laughter, good food, and the beginning of our journey together.",
        color: "bg-pink-500",
    },
    {
        icon: Sparkles,
        title: "Favorite Memory",
        date: "Unforgettable",
        description: "That one moment that I replay in my head over and over again.",
        color: "bg-indigo-400",
    },
];

const TimelineItem = ({ event, index }: { event: any; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center justify-between w-full mb-16 md:mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
        >
            <div className="hidden md:block w-5/12" />

            {/* Center Icon */}
            <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border-4 border-rose-100 shrink-0 mb-6 md:mb-0 transform transition-transform hover:scale-110">
                <event.icon size={24} className="text-rose-500" />
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center`}>
                <div className="glass-card hover:glass-card-hover p-8 rounded-3xl relative overflow-hidden group mx-4 md:mx-0">
                    <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-50 ${index % 2 === 0 ? "right-0" : "left-0"}`} />

                    <span className={`inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-white rounded-full mb-5 shadow-sm ${event.color}`}>
                        {event.date}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">
                        {event.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base font-light">
                        {event.description}
                    </p>

                    <div className="mt-6 flex justify-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="w-2 h-2 rounded-full bg-rose-300 animate-pulse" />
                        <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse delay-75" />
                        <span className="w-2 h-2 rounded-full bg-rose-300 animate-pulse delay-150" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function StoryTimeline() {
    return (
        <section id="our-story" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-rose-600 mb-4 tracking-tight">Our Love Story</h2>
                    <p className="text-gray-500 text-lg font-light">Every chapter is my favorite.</p>
                </div>

                {/* Vertical Line */}
                <div className="absolute left-1/2 top-40 bottom-20 w-px bg-gradient-to-b from-transparent via-rose-300 to-transparent transform -translate-x-1/2 hidden md:block" />

                <div className="relative z-10">
                    {events.map((event, index) => (
                        <TimelineItem key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
