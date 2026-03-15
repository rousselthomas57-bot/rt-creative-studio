import Image from "next/image";

const CALENDLY_URL = "https://calendly.com/roussel-thomas57/30min";
const EMAIL = "bonjour@rt-creativestudio.fr";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
<div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <h2 className="text-center text-[30px] font-extrabold md:text-[44px]">
          Parlons de votre projet
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-500 text-[15px] md:text-base">
          Vous avez un besoin en contenu, en visibilité ou en stratégie réseaux
          sociaux ? Choisissez le moyen le plus simple pour me contacter.
        </p>

        <div className="mt-12 flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-20">
          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[15px] px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 md:text-lg"
              style={{ background: "linear-gradient(135deg, #146DFC, #0C4196)" }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Réserver un appel de 15min
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-[15px] px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 md:text-lg"
              style={{ background: "linear-gradient(135deg, #146DFC, #0C4196)" }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Envoyer un e-mail
            </a>
            <p className="text-sm text-gray-500 text-center md:text-left">
              {EMAIL}
            </p>
          </div>

          {/* Photo */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/photo-thomas.webp"
              alt="Thomas Roussel"
              width={160}
              height={160}
              className="h-32 w-32 md:h-40 md:w-40"
            />
            <p className="mt-4 text-lg font-bold">Thomas Roussel</p>
            <p className="text-sm text-gray-500">
              Stratégie de contenu & réseaux sociaux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
