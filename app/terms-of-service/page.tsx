import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function TermsOfServicePage() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden selection:bg-dsp-primary pt-32">
            <Navbar />

            <section className="relative w-full max-w-4xl mx-auto px-4 py-20 flex-grow">
                <div className="glass-panel p-8 md:p-12 space-y-8">
                    <h1 className="text-4xl font-bold text-dsp-charcoal mb-8">Terms of Service</h1>
                    
                    <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
                        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                        
                        <p>Welcome to DSP Facility Service. By accessing our website and using our services, you agree to comply with and be bound by the following terms of service.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">1. Agreement to Terms</h2>
                        <p>By viewing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials on DSP Facility Service's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">3. Disclaimer</h2>
                        <p>The materials on DSP Facility Service's website are provided on an 'as is' basis. DSP Facility Service makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">4. Limitations</h2>
                        <p>In no event shall DSP Facility Service or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DSP Facility Service's website.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">5. Governing Law</h2>
                        <p>These terms and conditions are governed by and construed in accordance with the laws, and you irrevocably submit to the exclusive jurisdiction of the courts in your location.</p>
                    </div>
                </div>
            </section>

            <div className="w-full mt-auto">
                <Footer />
            </div>
        </main>
    );
}
