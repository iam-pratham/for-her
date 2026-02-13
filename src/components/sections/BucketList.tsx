"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ClipboardList, Plane, Globe, Car, Home, Sparkles, Infinity } from "lucide-react";

// Initial bucket list items
const initialItems = [
    { id: 1, text: "Go to Japan with You", icon: Plane },
    { id: 2, text: "Travel the World with You", icon: Globe },
    { id: 3, text: "Buy a Porsche Together (If We Make It!)", icon: Car },
    { id: 4, text: "Buy a House with You", icon: Home },
    { id: 5, text: "See the Northern Lights with You", icon: Sparkles },
    { id: 6, text: "Spend the Rest of My Life with You", icon: Infinity },
];

export default function BucketList() {
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
                        {initialItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="group relative overflow-hidden p-6 rounded-2xl border bg-white border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center justify-between z-10 relative">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-full transition-colors duration-300 bg-gray-100 text-gray-500 group-hover:bg-rose-100 group-hover:text-rose-500">
                                            <item.icon size={24} />
                                        </div>
                                        <span className="text-lg font-medium text-gray-700 transition-all duration-300">
                                            {item.text}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
