import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const CALENDLY_URL = "https://calendly.com/roussel-thomas57/30min";
const EMAIL = "bonjour@rt-creativestudio.fr";

export const metadata: Metadata = {
  title: "À propos — RT Creative Studio",
};

export default function AProposPage() {
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

      {/* Photo + name */}
      <div className="flex flex-col items-center mb-10">
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

      <h1 className="text-[28px] font-extrabold leading-tight md:text-[36px]">
        J&apos;aide les entreprises à gagner en visibilité grâce aux réseaux sociaux
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-600">
        <p>
          Je m&apos;appelle Thomas Roussel. J&apos;accompagne les PME, indépendants et marques locales qui veulent mieux communiquer, être plus visibles et attirer de nouveaux prospects grâce à une stratégie de contenu claire et des formats pensés pour les réseaux sociaux.
        </p>
        <p>
          Mon travail consiste à transformer une activité, un savoir-faire ou une offre en contenus simples, réguliers et efficaces : idées, angles, scripts, vidéos courtes, accompagnement éditorial et direction de communication.
        </p>
        <p>
          Je travaille avec une approche très concrète : comprendre ce qui rend une entreprise intéressante, trouver les bons formats, puis les transformer en contenus qui donnent envie de regarder, de suivre et de contacter.
        </p>

        {/* Approche */}
        <section>
          <h2 className="text-lg font-bold text-text">Une approche simple : rendre votre activité plus visible</h2>
          <div className="mt-3 space-y-3">
            <p>
              Aujourd&apos;hui, beaucoup d&apos;entreprises ont du potentiel, mais restent peu visibles en ligne. Pas parce qu&apos;elles ne font pas bien leur travail, mais parce qu&apos;elles ne savent pas toujours :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>quoi montrer,</li>
              <li>comment le raconter,</li>
              <li>à quelle fréquence publier,</li>
              <li>ni comment transformer leur activité en contenus intéressants.</li>
            </ul>
            <p>C&apos;est précisément là que j&apos;interviens.</p>
            <p>
              Je vous aide à construire une présence plus claire sur les réseaux sociaux, avec une communication plus cohérente, plus régulière et plus adaptée à votre activité.
            </p>
          </div>
        </section>

        {/* Ce que je fais */}
        <section>
          <h2 className="text-lg font-bold text-text">Ce que je fais</h2>
          <p className="mt-3">J&apos;interviens principalement sur 3 volets :</p>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold text-text">Stratégie & conseil</h3>
              <p className="mt-1">Audit de communication, positionnement, idées de contenus, angles, scripts et plan d&apos;action.</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Création de contenu</h3>
              <p className="mt-1">Formats courts, tournage, montage, vidéos prêtes à publier, stories et accompagnement éditorial.</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Image & présence digitale</h3>
              <p className="mt-1">Quand c&apos;est pertinent, j&apos;interviens aussi sur la cohérence visuelle, la direction artistique et la réflexion autour de votre présence en ligne.</p>
            </div>
          </div>
        </section>

        {/* Expérience */}
        <section>
          <h2 className="text-lg font-bold text-text">Une expérience construite sur le terrain</h2>
          <div className="mt-3 space-y-3">
            <p>
              Je développe ma propre activité en parallèle de projets concrets qui m&apos;ont permis de tester, ajuster et améliorer ma manière de travailler.
            </p>
            <p>J&apos;ai notamment travaillé sur des problématiques de :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>visibilité organique,</li>
              <li>création de contenu à fort volume,</li>
              <li>stratégie éditoriale,</li>
              <li>acquisition via les réseaux sociaux,</li>
              <li>structuration d&apos;une image de marque plus claire.</li>
            </ul>
            <p>
              Mon objectif n&apos;est pas de publier pour publier. Je cherche à construire une communication qui a du sens, qui ressemble à l&apos;entreprise, et qui peut vraiment s&apos;inscrire dans la durée.
            </p>
          </div>
        </section>

        {/* Façon de travailler */}
        <section>
          <h2 className="text-lg font-bold text-text">Ma façon de travailler</h2>
          <div className="mt-3 space-y-3">
            <p>Je privilégie toujours une approche simple, directe et réaliste.</p>
            <p>
              Je ne vends pas une &quot;méthode miracle&quot;. Je construis avec vous un système de communication plus solide, plus régulier et plus facile à tenir dans le temps.
            </p>
            <p>Concrètement, cela peut vouloir dire :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>trouver les bons concepts,</li>
              <li>clarifier le message,</li>
              <li>écrire les scripts,</li>
              <li>organiser les contenus,</li>
              <li>tourner avec vous,</li>
              <li>monter les vidéos,</li>
              <li>ou vous accompagner sur la ligne éditoriale.</li>
            </ul>
            <p>
              L&apos;idée est simple : vous faire gagner du temps, améliorer votre visibilité, et rendre votre communication plus claire.
            </p>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section>
          <h2 className="text-lg font-bold text-text">Zone d&apos;intervention</h2>
          <div className="mt-3 space-y-3">
            <p>J&apos;accompagne des entreprises situées notamment à :</p>
            <p className="font-semibold text-text">Sarrebourg, Strasbourg, Nancy et Paris</p>
            <p>et je peux également intervenir à distance, partout en France, selon le type de mission.</p>
            <p>Certaines prestations se prêtent très bien à un accompagnement à distance, notamment :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>le conseil,</li>
              <li>la stratégie,</li>
              <li>l&apos;audit,</li>
              <li>les concepts de contenus,</li>
              <li>les scripts,</li>
              <li>ou l&apos;accompagnement éditorial.</li>
            </ul>
          </div>
        </section>

        {/* Pour qui */}
        <section>
          <h2 className="text-lg font-bold text-text">Pour qui ?</h2>
          <div className="mt-3 space-y-3">
            <p>J&apos;accompagne surtout :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>des PME,</li>
              <li>des indépendants,</li>
              <li>des marques locales,</li>
              <li>des structures qui veulent mieux communiquer,</li>
              <li>et des entreprises qui savent qu&apos;elles ont des choses à montrer mais ne savent pas toujours comment le faire.</li>
            </ul>
          </div>
        </section>

        {/* Travailler ensemble */}
        <section>
          <h2 className="text-lg font-bold text-text">Travailler ensemble</h2>
          <div className="mt-3 space-y-3">
            <p>
              Chaque activité est différente. C&apos;est pourquoi je privilégie un échange simple au départ pour comprendre votre besoin, votre manière de travailler et la place que peuvent prendre les réseaux sociaux dans votre développement.
            </p>
            <p>Si vous cherchez :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>plus de clarté dans votre communication,</li>
              <li>des contenus plus réguliers,</li>
              <li>une meilleure visibilité,</li>
              <li>ou un accompagnement concret sur les réseaux sociaux,</li>
            </ul>
            <p>alors on peut en parler.</p>
          </div>
        </section>

        {/* CTA buttons */}
        <div className="flex flex-col gap-4 pt-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-[15px] px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
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
            Réserver un appel de 15 min
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center gap-3 rounded-[15px] px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
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
        </div>
      </div>
    </main>
  );
}
