import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TrainersPage() {
  const trainers = [
    { name: "Susan Cambridge", role: "Head Coach", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1000&auto=format&fit=crop" },
    { name: "Sarah Connor", role: "Cardio Specialist", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop" },
    { name: "Susy Francis", role: "Boxing Coach", img: "https://media.istockphoto.com/id/881359006/photo/woman-boxer.jpg?s=612x612&w=0&k=20&c=o0hww2wTTt-4dUQ9EJAGSlXKo1hCO8oG134BmT0gPCA=" },
    { name: "Elena Rostova", role: "Yoga Master", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <div className="flex-1 bg-background pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Expert Trainers"
          titleLight="Start your journey with"
          titleHighlight="Our Professionals"
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {trainers.map((trainer, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-80 rounded-xl overflow-hidden mb-4 border border-white/10">
                <Image
                  src={trainer.img}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                {/* Social icons on hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-8 h-8 bg-brand text-black rounded-full flex items-center justify-center hover:bg-white">
                    <span className="text-xs font-bold">IN</span>
                  </div>
                  <div className="w-8 h-8 bg-brand text-black rounded-full flex items-center justify-center hover:bg-white">
                    <span className="text-xs font-bold">X</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">{trainer.name}</h3>
                <p className="text-brand text-sm font-medium">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
