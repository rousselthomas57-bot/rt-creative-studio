import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente — RT Creative Studio",
};

export default function CGVPage() {
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
        Conditions générales de vente
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        Prestations de services — Clients professionnels
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-600">
        <p>
          Les présentes conditions générales de vente s&apos;appliquent aux prestations proposées par Thomas Roussel, entrepreneur individuel, dans le cadre de son activité de conseil, stratégie de contenu, création de contenu, accompagnement éditorial, direction artistique, design et communication.
        </p>
        <p>
          Elles s&apos;appliquent uniquement aux clients professionnels : entreprises, indépendants, associations, marques et structures exerçant dans le cadre de leur activité.
        </p>

        {/* Article 1 */}
        <section>
          <h2 className="text-lg font-bold text-text">1. Prestataire</h2>
          <div className="mt-3 space-y-1">
            <p>Le prestataire est :</p>
            <p><strong className="text-text">Thomas Roussel</strong> — Entrepreneur individuel, micro-entrepreneur</p>
            <p>Nom commercial : Thomas Roussel</p>
            <p>Adresse de domiciliation : 24 rue de la Source, 57445, Réding, France</p>
            <p>Adresse e-mail : bonjour@rt-creativestudio.fr</p>
            <p>Numéro SIREN : 928023142</p>
            <p>Numéro SIRET : 928023142</p>
          </div>
        </section>

        {/* Article 2 */}
        <section>
          <h2 className="text-lg font-bold text-text">2. Objet des prestations</h2>
          <div className="mt-3 space-y-3">
            <p>Thomas Roussel propose notamment :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>des prestations ponctuelles : audit, conseil, stratégie, direction éditoriale, shooting, tournage, montage, création de contenu, design, accompagnement spécifique ou autre prestation sur devis ;</li>
              <li>des prestations récurrentes sous forme d&apos;accompagnement mensuel ou d&apos;abonnement, avec ou sans engagement annuel, selon l&apos;offre choisie.</li>
            </ul>
            <p>Le contenu précis, les livrables, les délais, les quantités et les modalités d&apos;exécution sont définis dans le devis, la proposition commerciale ou l&apos;offre acceptée par le client.</p>
          </div>
        </section>

        {/* Article 3 */}
        <section>
          <h2 className="text-lg font-bold text-text">3. Acceptation de la commande</h2>
          <div className="mt-3 space-y-3">
            <p>Toute commande est considérée comme ferme à compter :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>de la signature ou validation écrite du devis,</li>
              <li>ou du règlement d&apos;un acompte,</li>
              <li>ou du règlement de la première échéance dans le cadre d&apos;un accompagnement.</li>
            </ul>
            <p>Toute demande complémentaire ou hors périmètre pourra faire l&apos;objet d&apos;un devis ou d&apos;une facturation additionnelle.</p>
          </div>
        </section>

        {/* Article 4 */}
        <section>
          <h2 className="text-lg font-bold text-text">4. Prix</h2>
          <div className="mt-3 space-y-3">
            <p>Les prix applicables sont ceux figurant sur le devis, la proposition commerciale ou l&apos;offre en vigueur au jour de la commande.</p>
            <p>Sauf mention contraire :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>les prix sont exprimés en euros ;</li>
              <li>les prestations sont facturées selon le régime applicable au prestataire ;</li>
              <li>les frais exceptionnels non prévus initialement (déplacement, location, prestataires tiers, achats spécifiques, dépenses validées par le client, etc.) ne sont pas inclus.</li>
            </ul>
          </div>
        </section>

        {/* Article 5 */}
        <section>
          <h2 className="text-lg font-bold text-text">5. Prestations ponctuelles</h2>
          <div className="mt-3 space-y-3">
            <p>Les prestations ponctuelles sont réalisées selon le périmètre prévu au devis ou à la proposition acceptée.</p>
            <p>Sauf mention contraire :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>les délais sont donnés à titre indicatif ;</li>
              <li>le client s&apos;engage à fournir en temps utile les éléments nécessaires à l&apos;exécution de la mission ;</li>
              <li>tout retard ou blocage imputable au client peut entraîner un décalage du planning sans engager la responsabilité du prestataire.</li>
            </ul>
          </div>
        </section>

        {/* Article 6 */}
        <section>
          <h2 className="text-lg font-bold text-text">6. Prestations récurrentes / accompagnement mensuel</h2>
          <div className="mt-3 space-y-5">
            <div>
              <h3 className="font-semibold text-text">6.1 Formules mensuelles</h3>
              <p className="mt-2">Les prestations récurrentes sont proposées sous forme de formule mensuelle, avec ou sans engagement annuel selon l&apos;offre choisie.</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">6.2 Formule avec engagement annuel</h3>
              <p className="mt-2">La formule dite &quot;avec engagement annuel&quot; correspond à une collaboration pensée dans la durée et donnant lieu à un tarif préférentiel.</p>
              <p className="mt-2">Cette formule n&apos;a pas pour objet de bloquer rigidement le client pendant 12 mois, mais de matérialiser une volonté de collaboration suivie sur l&apos;année.</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">6.3 Fin de collaboration / résiliation</h3>
              <div className="mt-2 space-y-3">
                <p>Le client peut mettre fin à une formule d&apos;accompagnement à tout moment, sous réserve d&apos;un préavis de 3 mois, notifié par e-mail ou courrier.</p>
                <p>Le préavis court à compter de la réception de la demande par le prestataire.</p>
                <p>Pendant toute la durée du préavis :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>les prestations continuent d&apos;être exécutées selon la formule convenue,</li>
                  <li>les échéances correspondantes restent dues.</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-text">6.4 Suspension des prestations</h3>
              <p className="mt-2">En cas de retard de paiement, d&apos;absence de coopération du client, d&apos;absence prolongée de réponse ou de situation rendant la mission difficile à exécuter dans de bonnes conditions, le prestataire pourra suspendre les prestations jusqu&apos;à régularisation.</p>
            </div>
          </div>
        </section>

        {/* Article 7 */}
        <section>
          <h2 className="text-lg font-bold text-text">7. Modalités de paiement</h2>
          <div className="mt-3 space-y-3">
            <p>Sauf mention contraire sur le devis ou la facture :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>les prestations ponctuelles peuvent être facturées comptant, avec acompte ou selon un échéancier convenu ;</li>
              <li>les prestations récurrentes sont facturées mensuellement.</li>
            </ul>
            <p>Le règlement s&apos;effectue selon les modalités indiquées sur le devis ou la facture.</p>
          </div>
        </section>

        {/* Article 8 */}
        <section>
          <h2 className="text-lg font-bold text-text">8. Retard de paiement</h2>
          <div className="mt-3 space-y-3">
            <p>En cas de retard de paiement, seront dus de plein droit :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>des pénalités de retard calculées selon le taux légal applicable ou le taux figurant sur la facture ;</li>
              <li>l&apos;indemnité forfaitaire légale de 40 € pour frais de recouvrement.</li>
            </ul>
            <p>Le prestataire se réserve également le droit de suspendre les prestations jusqu&apos;au règlement complet des sommes dues.</p>
          </div>
        </section>

        {/* Article 9 */}
        <section>
          <h2 className="text-lg font-bold text-text">9. Obligations du client</h2>
          <div className="mt-3 space-y-3">
            <p>Le client s&apos;engage à :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>fournir les informations, documents, accès et validations nécessaires à la mission ;</li>
              <li>collaborer de bonne foi avec le prestataire ;</li>
              <li>répondre dans des délais raisonnables ;</li>
              <li>s&apos;assurer qu&apos;il dispose des droits nécessaires sur les contenus, visuels, logos, textes, vidéos, musiques ou éléments transmis.</li>
            </ul>
          </div>
        </section>

        {/* Article 10 */}
        <section>
          <h2 className="text-lg font-bold text-text">10. Validation et modifications</h2>
          <div className="mt-3 space-y-3">
            <p>Sauf mention contraire, la prestation comprend un nombre raisonnable d&apos;ajustements liés à la finalisation du livrable.</p>
            <p>Toute demande nouvelle, hors périmètre initial, ou toute modification importante après validation pourra donner lieu à facturation complémentaire.</p>
          </div>
        </section>

        {/* Article 11 */}
        <section>
          <h2 className="text-lg font-bold text-text">11. Propriété intellectuelle</h2>
          <div className="mt-3 space-y-3">
            <p>Sauf mention contraire écrite, les méthodes, concepts, process, trames, idées non retenues, maquettes préparatoires, documents de travail et savoir-faire restent la propriété de Thomas Roussel.</p>
            <p>Les livrables finalisés peuvent être utilisés par le client dans le cadre de la mission convenue, sous réserve du paiement intégral des sommes dues.</p>
            <p>Sauf opposition écrite du client, Thomas Roussel peut mentionner la collaboration à titre de référence commerciale (portfolio, site, réseaux sociaux, présentation commerciale).</p>
          </div>
        </section>

        {/* Article 12 */}
        <section>
          <h2 className="text-lg font-bold text-text">12. Responsabilité</h2>
          <div className="mt-3 space-y-3">
            <p>Thomas Roussel est tenu à une obligation de moyens.</p>
            <p>Il ne saurait être tenu responsable :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>d&apos;un retard causé par le client,</li>
              <li>d&apos;une absence de validation,</li>
              <li>d&apos;un mauvais usage des livrables,</li>
              <li>d&apos;un changement d&apos;algorithme, de plateforme ou d&apos;environnement technique,</li>
              <li>d&apos;un résultat commercial non expressément garanti par écrit.</li>
            </ul>
          </div>
        </section>

        {/* Article 13 */}
        <section>
          <h2 className="text-lg font-bold text-text">13. Droit applicable et litiges</h2>
          <div className="mt-3 space-y-3">
            <p>Les présentes CGV sont soumises au droit français.</p>
            <p>En cas de litige, les parties s&apos;engagent à rechercher d&apos;abord une solution amiable.</p>
            <p>À défaut d&apos;accord amiable, les tribunaux compétents seront ceux du ressort du domicile professionnel du prestataire, sauf disposition légale contraire.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
