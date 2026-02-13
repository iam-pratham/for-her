"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ClipboardList, Plane, Coffee, Home, Star, Tent, HeartHandshake } from "lucide-react";

// Initial bucket list items
const initialItems = [
    { id: 1, text: "Go on a Road Trip", icon: Plane, completed: false },
    { id: 2, text: "Cook a Meal Together", icon: Coffee, completed: false },
    { id: 3, text: "Build a Blanket Fort", icon: Home, completed: false },
    { id: 4, text: "Stargazing Date", icon: Star, completed: false },
    { id: 5, text: "Camping Weekend", icon: Tent, completed: false },
    { id: 6, text: "Volunteer Together", icon: HeartHandshake, completed: false },
];

export default function BucketList() {
    const [items, setItems] = useState(initialItems);

    const toggleItem = (id: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-rose-50/50 to-white relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-4">
                        <ClipboardList className="text-rose-500" size={24} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
                        Our Bucket List
                    </h2>
                    <p className="text-gray-500 text-lg font-light">
                        Dreams we'll chase, memories we'll make.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence>
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => toggleItem(item.id)}
                                className={`cursor-pointer group relative overflow-hidden p-6 rounded-2xl border transition-all duration-300 ${item.completed
                                        ? "bg-rose-50 border-rose-200 shadow-inner"
                                        : "bg-white border-gray-100 shadow-lg hover:shadow-xl"
                                    }`}
                            >
                                <div className="flex items-center justify-between z-10 relative">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-full transition-colors duration-300 ${item.completed ? "bg-rose-200 text-rose-600" : "bg-gray-100 text-gray-500 group-hover:bg-rose-100 group-hover:text-rose-500"
                                            }`}>
                                            <item.icon size={24} />
                                        </div>
                                        <span className={`text-lg font-medium transition-all duration-300 ${item.completed ? "text-rose-400 line-through decoration-rose-300" : "text-gray-700"
                                            }`}>
                                            {item.text}
                                        </span>
                                    </div>

                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${item.completed ? "border-rose-400 bg-rose-400 text-white" : "border-gray-200 group-hover:border-rose-300"
                                        }`}>
                                        {item.completed && <Check size={16} />}
                                    </div>
                                </div>

                                {/* Decorative background pulse on complete */}
                                {item.completed && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0.5 }}
                                        animate={{ scale: 20, opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute top-1/2 left-1/2 w-4 h-4 bg-rose-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-gray-400 italic">Tap to check off our dreams ❤️</p>
                </div>
            </div>
        </section>
    );
}
