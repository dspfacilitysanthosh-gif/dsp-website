"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <NavbarDesktop />
                <NavbarMobile />
            </div>
            <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
                <div className="overflow-hidden">
                    <div className="flex min-w-full animate-marquee items-center gap-2 whitespace-nowrap py-2 px-4 text-[10px] sm:text-[11px] md:text-sm font-semibold uppercase tracking-[0.18em] text-dsp-charcoal">
                        <span>Powering corporates with precision manpower</span>
                        <span className="mx-4 text-dsp-primary">•</span>
                        <span>We focus on maintenance. You focus on your productivity</span>
                        <span className="mx-4 text-dsp-primary">•</span>
                        <span>Powering corporates with precision manpower</span>
                        <span className="mx-4 text-dsp-primary">•</span>
                        <span>We focus on maintenance. You focus on your productivity</span>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
