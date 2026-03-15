import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — RT Creative Studio",
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-[800px] px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-text transition-colors mb-10"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Retour au site
      </Link>

      <h1 className="text-[28px] font-extrabold leading-tight md:text-[36px]">
        Mentions légales
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-600">
        {/* Éditeur */}
        <section>
          <h2 className="text-lg font-bold text-text">Éditeur du site</h2>
          <div className="mt-3 space-y-1">
            <p>Le présent site internet est édité par :</p>
            <p><strong className="text-text">Thomas Roussel</strong> — Entrepreneur individuel, micro-entrepreneur</p>
            <p>Nom commercial : Thomas Roussel</p>
            <p>Adresse de domiciliation : 24 rue de la Source, 57445, Réding, France</p>
            <p>Adresse e-mail : bonjour@rt-creativestudio.fr</p>
            <p>Numéro SIREN : 928023142</p>
            <p>Numéro SIRET : 928023142</p>
            <p>Directeur de la publication : Thomas Roussel</p>
          </div>
        </section>

        {/* Hébergement */}
        <section>
          <h2 className="text-lg font-bold text-text">Hébergement</h2>
          <div className="mt-3 space-y-1">
            <p>Le site est hébergé par :</p>
            <p><strong className="text-text">OVH SAS</strong></p>
            <p>2 rue Kellermann, 59100 Roubaix — France</p>
            <p>Site : <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ovhcloud.com</a></p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="text-lg font-bold text-text">Propriété intellectuelle</h2>
          <div className="mt-3 space-y-3">
            <p>L&apos;ensemble des éléments présents sur le site, notamment les textes, images, visuels, graphismes, logos, vidéos, créations, maquettes et contenus, sont protégés par le droit de la propriété intellectuelle.</p>
            <p>Sauf mention contraire, ils sont la propriété exclusive de Thomas Roussel.</p>
            <p>Toute reproduction, représentation, diffusion, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite.</p>
          </div>
        </section>

        {/* Responsabilité */}
        <section>
          <h2 className="text-lg font-bold text-text">Responsabilité</h2>
          <div className="mt-3 space-y-3">
            <p>Les informations diffusées sur le site sont fournies à titre indicatif. Thomas Roussel s&apos;efforce de les tenir à jour, mais ne saurait garantir l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité de l&apos;ensemble des contenus.</p>
            <p>L&apos;utilisateur reste seul responsable de l&apos;usage qu&apos;il fait des informations présentes sur le site.</p>
          </div>
        </section>

        {/* Données personnelles */}
        <section>
          <h2 className="text-lg font-bold text-text">Données personnelles</h2>
          <div className="mt-3 space-y-3">
            <p>Les informations transmises via le formulaire de contact ou par e-mail sont utilisées uniquement pour :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>répondre aux demandes,</li>
              <li>échanger avec les prospects et clients,</li>
              <li>assurer le suivi commercial et contractuel.</li>
            </ul>
            <p>Elles ne sont ni revendues ni cédées à des tiers.</p>
          </div>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-lg font-bold text-text">Cookies</h2>
          <div className="mt-3 space-y-3">
            <p>Le site n&apos;utilise pas de cookies de suivi publicitaire ou de mesure d&apos;audience à des fins de tracking marketing. Seuls d&apos;éventuels cookies strictement nécessaires au bon fonctionnement technique du site ou de l&apos;hébergement peuvent être utilisés.</p>
          </div>
        </section>

        {/* Droit applicable */}
        <section>
          <h2 className="text-lg font-bold text-text">Droit applicable</h2>
          <div className="mt-3">
            <p>Les présentes mentions légales sont soumises au droit français.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
