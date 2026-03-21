import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { GlossyButton } from "@/components/ui/GlossyButton";
import Link from "next/link";

export default function CareersPage() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden selection:bg-dsp-primary pt-32">
            <Navbar />

            <section className="relative w-full max-w-5xl mx-auto px-4 py-20 flex-grow text-center space-y-12">
                <div className="space-y-6">
                    <GradientHeading size="lg">Join Our Team</GradientHeading>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Power the industries of tomorrow with DSP Facility Service. We are always looking for dedicated talent to join our growing team.
                    </p>
                </div>

                <div className="glass-panel p-12 mt-12 max-w-3xl mx-auto">
                    <div className="space-y-6">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">🚀</span>
                        </div>
                        <h3 className="text-2xl font-bold text-dsp-charcoal">No Open Positions Currently</h3>
                        <p className="text-gray-500 max-w-lg mx-auto">
                            We don't have any specific openings at the moment, but we are always on the lookout for great talent. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        
                        <div className="pt-6">
                            <Link href="/contact">
                                <GlossyButton variant="primary">
                                    Contact Us
                                </GlossyButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full mt-auto">
                <Footer />
            </div>
        </main>
    );
}
