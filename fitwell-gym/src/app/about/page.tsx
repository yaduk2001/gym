import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="flex-1 bg-background pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Why Choose Us" 
          titleLight="Elevate fitness with the" 
          titleHighlight="Best Way Possible" 
          centered
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          <div className="relative">
            {/* Main Image Grid Style */}
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop" 
                alt="Gym Overhead" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/40 to-transparent" />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                 <div className="w-24 h-24 bg-brand rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(204,255,0,0.5)] transform hover:scale-110 transition-transform">
                   <svg className="w-10 h-10 text-black ml-2" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </div>
              </div>
            </div>
            
            {/* Overlay Info Card */}
            <div className="absolute -bottom-8 -right-8 bg-surface p-8 rounded-xl border border-white/10 w-72 shadow-2xl hidden md:block">
               <h4 className="font-heading font-black text-white text-4xl mb-2">15<span className="text-brand">+</span></h4>
               <p className="text-gray-400 font-bold uppercase tracking-wider text-sm">Years of changing lives and building champions.</p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-wider">
              We push you to the <span className="text-brand">absolute limit</span>.
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Fitness is not a destination, it is a way of life. At FitWell, we combine state-of-the-art machinery, expert trainers, and a relentless community to forge better bodies and sharper minds.
            </p>
            
            <ul className="space-y-4">
              {[
                "Personalized fitness programs tailored to you",
                "World-class trainers with decades of real experience",
                "Community-driven environment to keep you motivated",
                "High-tech equipment and recovery lounges"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-brand/20 p-1 rounded-full">
                    <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button href="/contact" icon>Join Our Community</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
