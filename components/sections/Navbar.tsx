"use client";

import { motion } from "framer-motion";
import { GlossyButton } from "@/components/ui/GlossyButton";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "../ui/BrandLogo";
import { BrandText } from "../ui/BrandText";

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 transition-all duration-300">
                {/* Brand */}
                <Link href="/" className="navbar-brand flex items-center gap-3 font-bold tracking-tighter text-dsp-charcoal transition-all duration-300 min-w-0">
                    <BrandLogo className="w-10 h-10 sm:w-12 sm:h-12" />
                    <BrandText className="w-[100px] sm:w-[160px] h-9 sm:h-12 transition-all duration-300 ease-in-out" />
                </Link>

                {/* Links and CTA */}
                <div className="navbar-links flex flex-wrap items-center justify-end gap-2 sm:gap-4 md:gap-12 flex-1 min-w-0">
                    {['About', 'Services', 'Why Us'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-[8px] sm:text-[9px] md:text-base font-bold uppercase text-gray-600 hover:text-dsp-charcoal transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-dsp-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}

                    {/* Contact Button */}
                    <Link href="/contact" className="inline-flex items-center">
                        <GlossyButton variant="primary" className="px-2.5 py-1 text-[8px] sm:px-3 sm:py-1.5 sm:text-[9px] md:px-6 md:py-2.5 md:text-base">
                            Contact Us
                        </GlossyButton>
                    </Link>
                </div>
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
