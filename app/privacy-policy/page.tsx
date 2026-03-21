import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden selection:bg-dsp-primary pt-32">
            <Navbar />

            <section className="relative w-full max-w-4xl mx-auto px-4 py-20 flex-grow">
                <div className="glass-panel p-8 md:p-12 space-y-8">
                    <h1 className="text-4xl font-bold text-dsp-charcoal mb-8">Privacy Policy</h1>
                    
                    <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
                        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                        
                        <p>At DSP Facility Service, we are committed to protecting your privacy online. This Privacy Policy describes the personal information we collect and how we use it.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">1. Information We Collect</h2>
                        <p>We may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide when you fill out our contact forms or interact with our site.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To respond to your inquiries and fulfill your requests.</li>
                            <li>To send administrative information to you, for example, information regarding our services and changes to our terms, conditions, and policies.</li>
                            <li>To improve our website and services.</li>
                        </ul>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">3. Information Sharing</h2>
                        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide you with advance notice, except as required by law.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">4. Data Security</h2>
                        <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
                        
                        <h2 className="text-2xl font-semibold text-dsp-charcoal mt-8 mb-4">5. Contact Us</h2>
                        <p>If there are any questions regarding this privacy policy, you may contact us using the information on our Contact page.</p>
                    </div>
                </div>
            </section>

            <div className="w-full mt-auto">
                <Footer />
            </div>
        </main>
    );
}
