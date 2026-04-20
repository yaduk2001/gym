interface SectionHeadingProps {
  subtitle: string;
  titleLight: string;
  titleHighlight?: string;
  centered?: boolean;
}

export default function SectionHeading({
  subtitle,
  titleLight,
  titleHighlight,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`flex items-center gap-2 mb-3 text-brand font-bold uppercase tracking-widest text-sm ${centered ? "justify-center" : ""}`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-wide leading-tight">
        {titleLight}
        {titleHighlight && (
          <>
            <br />
            <span className="text-brand"> {titleHighlight}</span>
          </>
        )}
      </h2>
    </div>
  );
}
