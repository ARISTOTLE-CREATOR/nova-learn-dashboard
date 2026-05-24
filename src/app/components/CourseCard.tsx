"use client";

import { motion } from "framer-motion";

type Props = {
    icon: string;
    title: string;
    progress: string;
    width: string;
};

export default function CourseCard({
    icon,
    title,
    progress,
    width,
}: Props) {
    return (
        <motion.div
            whileHover={{
                scale: 1.03,
                y: -5,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
            }}
            className="bg-[#111827]/80 border border-white/10 rounded-3xl p-6 shadow-xl backdrop-blur-xl hover:shadow-purple-500/10 transition duration-300"
        >
            <div className="flex justify-between items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl">
                    {icon}
                </div>

                <span className="text-white/60">
                    {progress}
                </span>
            </div>

            <h3 className="text-2xl font-semibold mb-4">
                {title}
            </h3>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width }}
                    transition={{
                        duration: 1,
                    }}
                    className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                />
            </div>

            <p className="text-white/50 mt-4">
                Progress tracking
            </p>
        </motion.div>
    );
}