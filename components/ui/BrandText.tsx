import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function BrandText({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-2 min-w-0", className)}>
            {/* Brand Logo */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                <Image
                    src="/a-logo-1.png"
                    alt="DSP Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            {/* Brand Text */}
            <div className="relative min-w-0 w-[160px] sm:w-[280px] h-10 sm:h-14">
                <Image
                    src="/a-logotext-1.png"
                    alt="DSP Facility Management Service"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
