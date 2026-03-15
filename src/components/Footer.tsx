import Image from "next/image";

const CALENDLY_URL = "https://calendly.com/roussel-thomas57/30min";
const EMAIL = "bonjour@rt-creativestudio.fr";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Left */}
          <div className="max-w-sm">
            <Image
              src="/images/logo-rt.svg"
              alt="RT Creative Studio"
              width={140}
              height={21}
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Stratégie de contenu, vidéos courtes et réseaux sociaux pour PME
              et marques locales.
            </p>
          </div>

          {/* Right links */}
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary"
            >
              Réserver un appel
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-text hover:text-primary"
            >
              Envoyer un e-mail
            </a>
            <a href="#" className="text-gray-400 hover:text-text">
              Conditions générales de ventes
            </a>
            <a href="#" className="text-gray-400 hover:text-text">
              Mentions légales
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} RT Creative Studio. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
