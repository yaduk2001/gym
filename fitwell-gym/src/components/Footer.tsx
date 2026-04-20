export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-12 text-gray-400 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-4">FITWELL</h3>
          <p className="mb-4">Transforming bodies and empowering minds with dynamic fitness classes and expert trainers.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-brand transition-colors">About Us</a></li>
            <li><a href="/programs" className="hover:text-brand transition-colors">Services</a></li>
            <li><a href="/trainers" className="hover:text-brand transition-colors">Trainers</a></li>
            <li><a href="/pricing" className="hover:text-brand transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Support</h4>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-brand transition-colors">FAQ</a></li>
            <li><a href="/contact" className="hover:text-brand transition-colors">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-brand transition-colors">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Newsletter</h4>
          <p className="mb-4">Stay informed with our latest news and offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-background border border-white/10 px-4 py-2 w-full focus:outline-none focus:border-brand rounded-l-md"
            />
            <button className="bg-brand text-black px-4 py-2 font-bold uppercase rounded-r-md hover:bg-brand/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} FitWell. All rights reserved.</p>
        <div className="flex gap-4">
          {/* Social Icons Placeholders */}
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-colors cursor-pointer">
            <span className="sr-only">Facebook</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-colors cursor-pointer">
            <span className="sr-only">Twitter</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-colors cursor-pointer">
            <span className="sr-only">Instagram</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
