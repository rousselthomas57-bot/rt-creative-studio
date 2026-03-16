"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const CALENDLY_URL = "https://calendly.com/roussel-thomas57/30min";

export default function CaseStudy() {
  return (
    <section id="a-propos" className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <Reveal>
          <h2 className="text-center text-[30px] font-extrabold md:text-[44px]">
            GuidMe : un cas concret
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500 text-[15px] md:text-base">
            GuidMe est une plateforme d&apos;orientation par visioconférence.
            L&apos;objectif : développer sa visibilité, créer une communauté et
            générer des réservations.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 flex flex-col gap-6 lg:flex-row">
          {/* Blue card with gradient */}
          <div
            className="relative rounded-3xl p-8 pb-0 text-white md:p-10 md:pb-0 h-[358px] mx-auto lg:mx-0 lg:w-[50%] lg:h-[771px] lg:flex-shrink-0 overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #4A8CFF 0%, #2563FF 30%, #1A4FE0 100%)",
            }}
          >
            {/* Text content - top part (logo + title) */}
            <div className="relative z-10">
              <Image
                src="/images/blanc.png"
                alt="GuidMe"
                width={160}
                height={40}
                className="h-7 w-auto md:h-14"
              />
              <p className="mt-6 text-[24px] font-extrabold leading-tight md:text-[clamp(28px,3.5vw,48px)]">
                de 48 à +14k abonnés
              </p>
              <p className="mt-4 hidden lg:block max-w-md text-[clamp(14px,1.2vw,18px)] leading-relaxed text-white/80">
                Formats courts, régularité éditoriale et stratégie organique :
                un cas concret de croissance avec GuidMe.
              </p>
            </div>
            {/* Mobile: phone left + subtitle right */}
            <div className="relative z-10 mt-6 lg:hidden">
              <div className="w-[78%] -ml-4">
                <Image
                  src="/images/guidme-phone-mockup.webp"
                  alt="GuidMe sur mobile"
                  width={760}
                  height={1360}
                  className="w-full"
                />
              </div>
              <div className="absolute top-0 right-0 w-[42%] z-20">
                <p className="text-[12px] leading-snug text-white/80">
                  Formats courts, régularité éditoriale et stratégie organique :
                  un cas concret de croissance avec GuidMe.
                </p>
              </div>
            </div>
            {/* Desktop: Phone absolutely positioned */}
            <div className="hidden lg:flex relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 mt-6 justify-center">
              <Image
                src="/images/guidme-phone-mockup.webp"
                alt="GuidMe sur mobile"
                width={760}
                height={1360}
                className="w-full max-w-[975px] lg:scale-130 origin-bottom"
              />
            </div>
            {/* Bottom link */}
            <div className="absolute bottom-[10px] right-[15px] lg:bottom-[30px] lg:right-[40px] z-30 flex flex-col items-end gap-2">
              <span className="text-sm lg:text-base text-white/70">Voir le projet</span>
              <a
                href="https://guidme.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm lg:text-lg font-semibold text-white hover:underline"
              >
                GuidMe.fr
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats column */}
          <div className="flex flex-1 flex-col gap-5 min-w-0">
            {/* Top stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-[20px] md:rounded-[30px] p-4 md:p-6 text-center"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(153,153,153,0.15) 58%)",
                  boxShadow: "inset 0 0 0 3px #E5E5E5, 0 4px 16px rgba(0,0,0,0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <p className="text-2xl font-extrabold text-text lg:text-[clamp(24px,2.5vw,36px)]">
                  +<CountUp end={13.2} suffix=" M" decimals={1} duration={1800} />
                </p>
                <p className="mt-2 text-xs md:text-sm text-text leading-snug">
                  Vues organique tout réseaux confondus
                </p>
              </div>
              <div
                className="rounded-[20px] md:rounded-[30px] p-4 md:p-6 text-center"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(153,153,153,0.15) 58%)",
                  boxShadow: "inset 0 0 0 3px #E5E5E5, 0 4px 16px rgba(0,0,0,0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <p className="text-2xl font-extrabold text-text lg:text-[clamp(24px,2.5vw,36px)]">
                  +<CountUp end={14000} duration={1800} />
                </p>
                <p className="mt-2 text-xs md:text-sm text-text leading-snug">
                  Abonnés tout réseaux confondus
                </p>
              </div>
            </div>

            {/* Results */}
            <div
              className="rounded-[25px] p-6 md:p-8"
              style={{ background: "linear-gradient(135deg, #000000 0%, #666666 100%)" }}
            >
              <div className="flex items-center justify-between">
                <p className="text-[22px] lg:text-[clamp(22px,2.8vw,38px)] font-extrabold text-white leading-tight">Résultats obtenus</p>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-4 flex-shrink-0">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div>
                  <p className="text-[24px] lg:text-[clamp(24px,2.8vw,42px)] font-extrabold text-white leading-tight">
                    +<CountUp end={150} duration={1500} />
                  </p>
                  <p className="mt-1 text-[14px] lg:text-[clamp(14px,1.3vw,20px)] text-white/70">réservations</p>
                </div>
                <div>
                  <p className="text-[24px] lg:text-[clamp(24px,2.8vw,42px)] font-extrabold text-white leading-tight">
                    +<CountUp end={1100} duration={1500} />
                  </p>
                  <p className="mt-1 text-[14px] lg:text-[clamp(14px,1.3vw,20px)] text-white/70">utilisateurs</p>
                </div>
                <div>
                  <p className="text-[24px] lg:text-[clamp(24px,2.8vw,42px)] font-extrabold text-white leading-tight">
                    +<CountUp end={13700} duration={1800} />
                  </p>
                  <p className="mt-1 text-[14px] lg:text-[clamp(14px,1.3vw,20px)] text-white/70">visiteurs</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto flex flex-col items-start gap-4 pt-2">
              <p className="text-[18px] md:text-[22px] font-semibold text-text">
                Vous voulez ce type de résultats ?
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 rounded-[15px] px-8 py-4 text-[18px] lg:text-[clamp(18px,1.6vw,24px)] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #146DFC, #0C4196)" }}
              >
                Parlons de votre projet
                <span className="text-[24px]">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
