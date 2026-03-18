"use client";

import { motion } from "framer-motion";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { BrandLogo } from "@/components/ui/BrandLogo";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300">
                {/* Logo */}
                <Link href="/" className="flex flex-row items-center gap-3 font-bold tracking-tighter text-dsp-charcoal transition-all duration-300">
                    <BrandLogo className={cn("transition-all duration-300", scrolled ? "w-10 h-10" : "w-12 h-12")} />
                    <span className={cn(
                        "transition-all duration-300 whitespace-nowrap",
                        scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                    )}>
                        DSP Facility Service
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12">
                    {["About", "Services", "Why Us"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-base font-bold uppercase text-gray-600 hover:text-dsp-charcoal transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-dsp-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden sm:flex">
                        <GlossyButton variant="primary" className="px-6 py-2.5 text-base">
                            Contact Us
                        </GlossyButton>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
