export function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-slate-50 rounded-2xl border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Let’s Connect</h2>
      <p className="text-slate-600 mb-8">Connect with us to explore how our facility management expertise can optimize your operations and asset longevity</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="mailto:santhosh.b@dspfacility.com" className="p-4 bg-white border rounded-xl hover:shadow-md transition">
          <span className="block font-bold text-blue-600">Email</span>
          <span className="text-sm text-slate-500">Professional inquiries</span>
        </a>
        <a href="https://linkedin.com/in/santhosh-baskar-dspfacility" className="p-4 bg-white border rounded-xl hover:shadow-md transition">
          <span className="block font-bold text-blue-600">LinkedIn</span>
          <span className="text-sm text-slate-500">Career & Networking</span>
        </a>
        <a href="https://wa.me/919094033055" className="p-4 bg-white border rounded-xl hover:shadow-md transition">
          <span className="block font-bold text-blue-600">Whatsapp</span>
          <span className="text-sm text-slate-500">WhatsApp Support</span>
        </a>
        <div className="p-4 bg-white border rounded-xl">
          <span className="block font-bold text-slate-900">Service Coverage</span>
          <span className="text-sm text-slate-500">Bangalore / Chennai</span>
        </div>
      </div>
    </div>
  );
}