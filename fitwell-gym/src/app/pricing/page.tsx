import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function PricingPage() {
  const plans = [
    {
      name: "Basic Pass",
      price: "15",
      period: "/mo",
      features: ["Access to gym floor", "Basic equipment", "Locker room access", "1 Free PT session"],
      highlight: false
    },
    {
      name: "Pro Membership",
      price: "39",
      period: "/mo",
      features: ["All Basic features", "Unlimited class access", "Sauna & Spa", "Monthly body assessment"],
      highlight: true
    },
    {
      name: "Elite VIP",
      price: "100",
      period: "/mo",
      features: ["All Pro features", "Dedicated personal trainer", "Nutrition planning", "VIP Lounge access"],
      highlight: false
    }
  ];

  return (
    <div className="flex-1 bg-background pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Pricing Plans" 
          titleLight="Select the perfect plan" 
          titleHighlight="For your goals" 
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight 
                  ? "bg-surface border-2 border-brand transform scale-105 shadow-[0_0_40px_rgba(204,255,0,0.15)] z-10" 
                  : "bg-surface/50 border border-white/10 hover:border-brand/50 mt-4 mb-4"
              }`}
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-heading font-black text-white">${plan.price}</span>
                <span className="text-gray-400 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlight ? "primary" : "outline"} 
                className="w-full"
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
