"use client";

import { useState } from "react";
import { socialOffers, linkedinOffers, type Offer } from "@/data/offers";

const EMAIL = "bonjour@rt-creativestudio.fr";

function OfferCard({ offer, featured }: { offer: Offer; featured: boolean }) {
  return (
    <div
      className={`flex flex-col rounded-2xl p-6 md:p-8 text-center ${
        featured
          ? "bg-white border-2 border-text"
          : "bg-white border border-gray-200"
      }`}
    >
      <div className="mb-4">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-xl font-bold">{offer.name}</h3>
          {offer.badge && (
            <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-text">
              {offer.badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-500">{offer.subtitle}</p>
      </div>

      <div className="mb-6">
        <p className="text-3xl font-extrabold">{offer.priceEngaged}</p>
        <p className="text-xs text-gray-400 mt-1">avec engagement 12 mois</p>
        <p className="text-xs text-gray-400">{offer.priceFree}</p>
      </div>

      <ul className="mb-6 flex-1 space-y-2.5 text-left">
        {offer.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 text-primary">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <p className="mb-6 text-sm text-gray-500">{offer.description}</p>

      {featured ? (
        <a
          href={`mailto:${EMAIL}`}
          className="block rounded-[15px] py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #146DFC, #0C4196)" }}
        >
          Choisir cette offre
        </a>
      ) : (
        <a
          href={`mailto:${EMAIL}`}
          className="group block rounded-[15px] border border-gray-300 py-3 text-center text-sm font-semibold text-text transition-all hover:border-transparent hover:text-white"
          style={{ backgroundImage: "linear-gradient(135deg, #146DFC, #0C4196)", backgroundSize: "100% 0%", backgroundRepeat: "no-repeat", backgroundPosition: "bottom", transition: "background-size 0.3s, color 0.3s, border-color 0.3s" }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundSize = "100% 100%"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundSize = "100% 0%"; }}
        >
          Choisir cette offre
        </a>
      )}
    </div>
  );
}

export default function Offers() {
  const [tab, setTab] = useState<"social" | "linkedin">("social");
  const offers = tab === "social" ? socialOffers : linkedinOffers;

  return (
    <section id="offres" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* White rectangle - full width, full height, above phone but below text */}
      <div className="absolute inset-0 bg-white z-[2]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <h2 className="text-center text-[30px] font-extrabold md:text-[44px]">
          Des offres pensées pour vous
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500 text-[15px] md:text-base">
          Des offres simples pour vous aider à structurer votre communication,
          produire du contenu et gagner en visibilité.
        </p>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex rounded-[15px] border border-primary p-1"
            style={{ boxShadow: "0 0 12px 2px rgba(37, 99, 255, 0.2)" }}
          >
            <button
              onClick={() => setTab("social")}
              className={`rounded-[12px] px-5 py-2 text-sm font-semibold transition-colors ${
                tab === "social"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-text"
              }`}
            >
              Réseaux sociaux
            </button>
            <button
              onClick={() => setTab("linkedin")}
              className={`rounded-[12px] px-5 py-2 text-sm font-semibold transition-colors ${
                tab === "linkedin"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-text"
              }`}
            >
              LinkedIn
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {offers.map((offer, i) => (
            <OfferCard key={offer.name + tab} offer={offer} featured={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
