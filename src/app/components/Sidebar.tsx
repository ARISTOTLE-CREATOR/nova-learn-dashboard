"use client";

import {
    Home,
    BookOpen,
    Trophy,
    CalendarDays,
    Settings,
} from "lucide-react";

import { motion } from "framer-motion";

const navItems = [
    {
        name: "Dashboard",
        href: "#dashboard",
        icon: Home,
    },
    {
        name: "Courses",
        href: "#courses",
        icon: BookOpen,
    },
    {
        name: "Achievements",
        href: "#achievements",
        icon: Trophy,
    },
    {
        name: "Schedule",
        href: "#schedule",
        icon: CalendarDays,
    },
    {
        name: "Settings",
        href: "#settings",
        icon: Settings,
    },
];

export default function Sidebar() {

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex md:w-20 xl:w-64 bg-[#0B1023] border-r border-white/10 min-h-screen p-4 flex-col sticky top-0">

                <div className="text-2xl font-bold mb-10">

                    <span className="hidden xl:block">
                        NOVA LEARN
                    </span>

                    <span className="xl:hidden">
                        🚀
                    </span>

                </div>

                <nav className="flex flex-col space-y-4">

                    {navItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <a
                                key={item.name}
                                href={item.href}
                                className="relative group"
                            >

                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    className="rounded-xl border border-transparent hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
                                >

                                    <div className="flex items-center justify-center xl:justify-start gap-3 px-4 py-3 text-white/80 group-hover:text-white transition">

                                        <Icon size={22} />

                                        <span className="hidden xl:block">
                                            {item.name}
                                        </span>

                                    </div>

                                </motion.div>

                            </a>

                        );
                    })}

                </nav>

            </aside>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0B1023]/95 backdrop-blur-xl border-t border-white/10 px-2 py-3">

                <div className="flex items-center justify-around">

                    {navItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <a
                                key={item.name}
                                href={item.href}
                                className="relative flex flex-col items-center justify-center text-xs text-white/70"
                            >

                                <motion.div
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl hover:bg-purple-500/20 transition"
                                >

                                    <Icon size={20} />

                                    <span className="text-[10px]">
                                        {item.name}
                                    </span>

                                </motion.div>

                            </a>

                        );
                    })}

                </div>

            </nav>
        </>
    );
}