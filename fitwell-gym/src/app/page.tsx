import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2670&auto=format&fit=crop"
            alt="Gym Background"
            fill
            className="object-cover object-center grayscale opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center pb-12 pt-24">
          <div className="md:-mt-20 lg:-mt-32">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black uppercase text-white tracking-wider leading-[1.1] mb-6">
              Your body can <span className="text-brand">stand</span> <br className="hidden md:block"/>
              <span className="text-brand">almost</span> anything.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 leading-relaxed border-l-4 border-brand pl-6">
              It&apos;s your mind that needs convincing. Push past your limits, stay committed, and watch as your body transforms into a powerhouse of strength and resilience. Start your journey today.
            </p>
            
            <div className="flex flex-wrap gap-10 mb-12">
              <div>
                <p className="text-3xl font-heading font-bold text-white">1200<span className="text-brand">+</span></p>
                <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Active Members</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-white">12<span className="text-brand">+</span></p>
                <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Certified Trainers</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-white">20<span className="text-brand">+</span></p>
                <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Years Experience</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/pricing" icon>Get Started</Button>
              <Button href="/programs" variant="outline" icon>Explore More</Button>
            </div>
          </div>

          <div className="hidden md:block relative h-[500px] lg:h-[650px]">
            {/* The main subject image would sit here. Using a transparent/masked image of a bodybuilder */}
            <Image
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop"
              alt="Fit Bodybuilder"
              fill
              className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(204,255,0,0.15)]"
              priority
            />
            {/* Circular badge */}
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full border border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
               <div className="absolute inset-2 border border-dashed border-white/40 rounded-full" />
               <span className="font-heading font-bold text-brand text-xl">GYM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-brand py-4 overflow-hidden border-y border-brand relative flex items-center">
        <div className="whitespace-nowrap animate-marquee flex gap-12 font-heading font-black text-2xl uppercase tracking-widest text-black">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>Personal Trainers</span>
              <span>✦</span>
              <span>Live Classes</span>
              <span>✦</span>
              <span>Outdoor & Line Trainers</span>
              <span>✦</span>
              <span>Personal Training</span>
              <span>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section Snippet */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="relative h-64 rounded-xl overflow-hidden border border-white/10 group">
                      <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" alt="Gym 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="relative h-80 rounded-xl overflow-hidden border border-white/10 group">
                      <Image src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=1000&auto=format&fit=crop" alt="Gym 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                   </div>
                </div>
             </div>
             {/* Neon decoration */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand/20 blur-[80px] rounded-full mix-blend-screen" />
          </div>

          <div>
            <SectionHeading 
              subtitle="About Us" 
              titleLight="Empowering you to achieve" 
              titleHighlight="Your fitness goals" 
            />
            <p className="text-gray-400 mb-8 leading-relaxed">
              We believe fitness is more than just a workout—it&apos;s a lifestyle. With top-of-the-line facilities, certified trainers, and a supportive community, we&apos;re here to inspire and guide you every step of the way.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: "Personal Trainer", desc: "Achieve your fitness goals with the guidance of our certified trainers." },
                { title: "Cardio Programs", desc: "From steady-state runs to interval sprints, our treadmill programs." },
                { title: "Quality Equipment", desc: "Our gym is equipped with the latest cardio & strength machines." },
                { title: "Healthy Nutritions", desc: "Fuel your fitness journey with customized meal plans for you." }
              ].map((feature, i) => (
                <div key={i} className="bg-surface/50 p-5 rounded-lg border border-white/5 hover:border-brand/30 transition-colors">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>

            <Button href="/about" icon>More About Us</Button>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 bg-surface border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-wider uppercase">
             Join the Elite. <br className="md:hidden" /><span className="text-brand">Start Transforming Today.</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto mb-8">
             Get unlimited access to top-tier trainers, professional-grade equipment, and a community built on pushing boundaries. Stop making excuses and start making progress.
           </p>
           <Button href="/pricing" icon>Become a Member</Button>
        </div>
      </section>

      {/* Classes Snippet */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Fitness Class" 
            titleLight="Transform your body with our" 
            titleHighlight="Dynamic Fitness Classes" 
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Group Workout", img: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop" },
              { title: "Personal Training", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop" },
              { title: "Muscle Building", img: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1000&auto=format&fit=crop" }
            ].map((cls, i) => (
              <div key={i} className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                <Image src={cls.img} alt={cls.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider mb-2">{cls.title}</h3>
                  <div className="flex items-center gap-2 text-brand font-bold text-sm">
                    Read More 
                    <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">Expert guidance for your fitness journey. <Link href="/pricing" className="text-white hover:text-brand underline underline-offset-4 decoration-brand transition-colors">Join Us Today And Start Transforming!</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
