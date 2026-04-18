import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function BrandLogo({ className }: { className?: string }) {
    return (
       
        <div className="relative w-12 h-12 sm:w-18 sm:h-14 flex-shrink-0">
                        
                        <Image
                            src="/a-logo-1.png"
                            alt="DSP Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
    );
}
