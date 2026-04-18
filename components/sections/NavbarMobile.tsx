import { GlossyButton } from "@/components/ui/GlossyButton";
import Link from "next/link";
import { BrandLogo } from "../ui/BrandLogo";
import { BrandText } from "../ui/BrandText";

export function NavbarMobile() {
    return (
        <div className="sm:hidden">
            {/* Mobile First Row - Brand */}
            <div className="flex items-center justify-between gap-1 transition-all duration-300 py-2">
                <Link href="/" className="navbar-brand flex items-center gap-2 font-bold tracking-tighter text-dsp-charcoal transition-all duration-300 min-w-0">
                    <BrandLogo className="w-8 h-8" />
                    <BrandText className="w-[130px] h-10 transition-all duration-300 ease-in-out" />
                </Link>
            </div>

            {/* Mobile Second Row - Nav Items */}
            <div className="flex items-center justify-end gap-2 pb-2 pt-1 border-t border-gray-100">
                {['About', 'Services', 'Why Us'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-[8px] font-bold uppercase text-gray-600 hover:text-dsp-charcoal transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-dsp-primary transition-all group-hover:w-full" />
                    </Link>
                ))}

                {/* Mobile Contact Button */}
                <Link href="/contact" className="inline-flex items-center">
                    <GlossyButton variant="primary" className="px-2 py-1 text-[8px]">
                        Contact Us
                    </GlossyButton>
                </Link>
            </div>
        </div>
    );
}
