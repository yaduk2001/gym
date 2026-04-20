import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProgramsPage() {
  const programs = [
    { title: "Power Lifting", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" },
    { title: "Crossfit Intense", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" },
    { title: "Yoga & Flex", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop" },
    { title: "Cardio Blast", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop" },
    { title: "Body Building", image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1000&auto=format&fit=crop" },
    { title: "Boxing & MMA", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <div className="flex-1 bg-background pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Our Programs" 
          titleLight="Transform your body with our" 
          titleHighlight="Dynamic Fitness Classes" 
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {programs.map((prog, i) => (
            <div key={i} className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
              <Image src={prog.image} alt={prog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider mb-2">{prog.title}</h3>
                <div className="flex items-center gap-2 text-brand font-bold text-sm">
                  Join Program 
                  <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
