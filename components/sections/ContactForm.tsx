"use client";

import { useState } from "react";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    
    // Call the server action directly. In Next 14, we could use useFormState, 
    // but this standard onSubmit approach works reliably across Next 13+ app router.
    try {
      const response = await submitContactForm(null, formData);
      if (response.success) {
        setMessage({ type: "success", text: response.message });
        (e.target as HTMLFormElement).reset(); // Reset form on success
      } else {
        setMessage({ type: "error", text: response.message });
      }
    } catch (err) {
      setMessage({ type: "error", text: "An unexpected error occurred. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass-panel p-8 md:p-12 relative z-10">
      <h3 className="text-2xl font-bold mb-6 text-dsp-charcoal">Send us a message</h3>
      
      {message && (
        <div className={`mb-6 p-4 rounded-lg text-sm ${message.type === "success" ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"} border`}>
          {message.text}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input name="firstName" type="text" id="firstName" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dsp-primary bg-white/50" placeholder="John" />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input name="lastName" type="text" id="lastName" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dsp-primary bg-white/50" placeholder="Doe" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input name="email" type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dsp-primary bg-white/50" placeholder="john@example.com" />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" id="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dsp-primary bg-white/50 resize-none" placeholder="How can we help you?"></textarea>
        </div>
        
        <div className="pt-2">
          <GlossyButton variant="primary" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </GlossyButton>
        </div>
      </form>
    </div>
  );
}
