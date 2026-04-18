import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function BrandText({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-2 min-w-0", className)}>
                        
            {/* Brand Text */}
            <div className="relative min-w-0 flex-1 max-w-[200px] sm:max-w-[450px] h-10 sm:h-14">
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
