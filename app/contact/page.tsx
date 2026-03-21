export const runtime = 'nodejs';
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden selection:bg-dsp-primary pt-32">
      <Navbar />
      
      <section className="relative w-full max-w-7xl mx-auto px-4 py-20 flex-grow">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8 glass-panel p-8 md:p-12">
            <GradientHeading size="lg" className="text-left">Get in Touch</GradientHeading>
            <p className="text-lg text-gray-600 max-w-md">
              Ready to elevate your workforce? Contact us today to discuss your staffing needs and how we can power your industry with precision manpower.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-dsp-charcoal">Office Address</h4>
                <p className="text-gray-600 leading-relaxed">
                  Plot 103, Sri Parthasarathy Street,<br />
                  Balaji Nagar, Pallikaranai,<br />
                  Chennai – 600100,<br />
                  Tamil Nadu, India
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-dsp-charcoal">Email address</h4>
                <a href="mailto:support@dspfacility.com" className="text-dsp-primary hover:underline">support@dspfacility.com</a>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-bold text-dsp-charcoal">Phone number</h4>
                <a href="tel:+919080463056" className="text-dsp-primary hover:underline">+91 90804 63056</a>
              </div>
              
              <div className="space-y-2 pt-4">
                <h4 className="font-bold text-dsp-charcoal mb-4">Office Hours</h4>
                <div className="space-y-1 text-gray-600">
                  <p className="flex justify-between w-48"><span>Monday - Saturday</span> <span>9am - 6pm</span></p>
                  <p className="flex justify-between w-48 text-gray-400"><span>Sunday</span> <span>Closed</span></p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <ContactForm />
          
        </div>
      </section>

      <div className="w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}
