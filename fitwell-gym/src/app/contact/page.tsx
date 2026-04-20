import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="flex-1 bg-background pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading 
            subtitle="Contact Us" 
            titleLight="Get in touch with" 
            titleHighlight="Our Team" 
          />
          <p className="text-gray-400 mb-10 leading-relaxed text-lg">
            Have questions about our programs, memberships, or facilities? Drop us a message, and our friendly team will get back to you as soon as possible.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Location</h4>
                <p className="text-gray-400">123 Fitness Ave, Muscle City, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Phone</h4>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Email</h4>
                <p className="text-gray-400">support@fitwell.gym</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface p-8 rounded-2xl border border-white/5 shadow-2xl">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">First Name</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="John" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">Last Name</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">Your Message</label>
              <textarea rows={4} className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <div className="pt-2">
              <Button className="w-full">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
