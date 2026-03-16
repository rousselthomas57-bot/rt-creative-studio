import Image from "next/image";

const CALENDLY_URL = "https://calendly.com/roussel-thomas57/30min";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-x-clip">
      {/* Acid yellow radial gradient - bottom half of section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 100%, #D9FF00 0%, #D9FF0066 30%, #D9FF0022 55%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-0">
          {/* Text */}
          <div className="relative z-20 md:w-[70%]">
            <h1
              className="animate-fade-up font-extrabold leading-[1.1] tracking-tight text-text text-[32px] md:text-[clamp(32px,4.5vw,64px)]"
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #146DFC, #0C4196)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Plus de visibilité
              </span>
              <br />
              pour votre entreprise
              <br />
              grâce aux réseaux sociaux
            </h1>
            <p className="animate-fade-up animate-delay-1 mt-4 max-w-lg text-[14px] leading-relaxed text-gray-500 sm:text-[15px] md:mt-6 md:text-lg">
              Stratégie de contenu, vidéos courtes et accompagnement
              pour PME, indépendants et marques locales.
            </p>
            {/* CTA - desktop only (hidden on mobile, shown after image) */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up animate-delay-2 mt-8 hidden rounded-[15px] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-block md:text-base"
              style={{
                background: "linear-gradient(135deg, #146DFC, #0C4196)",
              }}
            >
              Parlons de votre projet
            </a>
          </div>

          {/* Phone visual */}
          <div className="animate-fade-up animate-delay-3 relative z-10 flex justify-center self-center md:w-[45%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:mt-[70px]">
            <Image
              src="/images/2mockup-iphone-hero.webp"
              alt="Exemple de contenu vidéo sur mobile"
              width={700}
              height={840}
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[456px] lg:max-w-[504px]"
              priority
            />
          </div>

        </div>
      </div>

      {/* CTA - mobile sticky bottom */}
      <div className="fixed bottom-[80px] left-0 right-0 z-50 px-[10px] md:hidden">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-[15px] py-4 text-center text-base font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #146DFC, #0C4196)",
          }}
        >
          Parlons de votre projet
        </a>
      </div>
    </section>
  );
}
