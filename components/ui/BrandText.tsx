import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function BrandText({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-1 flex-shrink-0", className)}>
            {/* Brand Logo */}
            <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                    src="/a-logo-1.png"
                    alt="DSP Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                />
            </div>
            {/* Brand Text */}
            <div className="flex-1">
                <Image
                    src="/a-logotext-1.png"
                    alt="DSP Facility Management Service"
                    width={600}
                    height={100}
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
