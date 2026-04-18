import { GlossyButton } from "@/components/ui/GlossyButton";
import Link from "next/link";
import { BrandLogo } from "../ui/BrandLogo";
import { BrandText } from "../ui/BrandText";

export function NavbarDesktop() {
    return (
        <div className="hidden sm:flex items-center justify-between gap-1 sm:gap-4 md:gap-8 lg:gap-12 transition-all duration-300 py-2">
            {/* Brand */}
            <Link href="/" className="navbar-brand flex items-center gap-2 sm:gap-3 font-bold tracking-tighter text-dsp-charcoal transition-all duration-300 min-w-0">
                <BrandLogo className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                <BrandText className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] h-10 sm:h-11 md:h-16 lg:h-20 xl:h-24 transition-all duration-300 ease-in-out" />
            </Link>

            {/* Links and CTA */}
            <div className="navbar-links flex items-center justify-end gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
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
                <Link href="/contact" className="inline-flex items-center flex-shrink-0">
                    <GlossyButton variant="primary" className="px-2.5 py-1 text-[8px] sm:px-3 sm:py-1.5 sm:text-[9px] md:px-6 md:py-2.5 md:text-base">
                        Contact Us
                    </GlossyButton>
                </Link>
            </div>
        </div>
    );
}
