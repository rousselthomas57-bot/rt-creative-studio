# RT Creative Studio — Project Instructions

## Project goal
Build a clean, responsive, production-ready one-page marketing site for RT Creative Studio.

Primary goal:
- make the offer easy to understand
- build trust quickly
- drive qualified contact actions

Main conversion actions:
- "Parlons de votre projet"
- "Réserver un appel de 15 min"
- "Envoyer un e-mail"

This is a V1.
Do not over-engineer.
Do not add unnecessary features.

---

## Tech stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- No CMS
- No database
- No auth
- No complex backend for V1

If a backend is not necessary, do not create one.
Use simple configurable links for Calendly and email.

---

## Site structure
The homepage must contain these sections in this exact order:

1. Header
2. Hero
3. Offers
4. GuidMe case study
5. Contact
6. Footer

Do not add extra sections unless clearly useful.

---

## Brand / visual direction
Style:
- modern
- simple
- bold
- digital
- not corporate
- not overloaded

Color system:
- light page background
- vivid blue as main action color
- acid yellow/green as accent
- black for main text and some badges
- neutral light gray for cards/backgrounds

Suggested colors:
- primary blue: #2563FF
- acid accent: #D9FF00
- main text: #0D0D0D
- light background: #F5F5F5
- white: #FFFFFF
- soft gray cards: #F1F1F1

Use the acid accent sparingly.
Blue is the main CTA color.

---

## Typography
Use a clean modern sans-serif.

Preferred setup:
- headings: Outfit
- body: Outfit
- fallback: Inter, system-ui, sans-serif

If using next/font/google, prefer:
- Outfit for all UI
- weights 400, 500, 600, 700, 800

Typography scale:
- Hero H1 desktop: 64px
- Hero H1 tablet: 48px
- Hero H1 mobile: 32px
- Section titles desktop: 44px
- Section titles mobile: 30px
- Card titles desktop: 20px
- Card titles mobile: 18px
- Body desktop: 18px
- Body mobile: 15px
- Small text: 14px

Use tight but readable line-heights.
Avoid tiny low-contrast text.

---

## Layout rules
Desktop:
- editorial, spacious
- max width container around 1200–1320px
- use grid/flex
- avoid unnecessary fixed heights

Mobile:
- everything stacks vertically
- keep large tap targets
- preserve readability
- avoid cramped layouts
- buttons must remain obvious

Do not rely too heavily on absolute positioning except for small visual badges.

---

## Header requirements
- logo text: RT Creative Studio
- nav links:
  - Offres
  - À propos
- primary CTA button:
  - Parlons de votre projet
- sticky header
- clean mobile nav

---

## Hero requirements
Main heading:
- Plus de visibilité pour votre entreprise grâce aux réseaux sociaux

Body text:
- Stratégie de contenu, vidéos courtes et accompagnement pour PME, indépendants et marques locales.

CTA:
- Parlons de votre projet

Layout:
- desktop: text left, phone visual right
- mobile: text first, visual below

Use 3 floating black metric badges on the hero visual.

---

## Offers section requirements
Section title:
- Des offres pensées pour vous

Section subtitle:
- Des offres simples pour vous aider à structurer votre communication, produire du contenu et gagner en visibilité.

There must be a toggle with 2 tabs:
- Réseaux sociaux
- LinkedIn

The toggle changes the 3 offer cards.

### Social offers
#### Starter
Subtitle:
- Stratégie & création à distance

Price:
- 210 € / mois avec engagement 12 mois
- 230 € / mois sans engagement

Features:
- Audit de votre communication
- 4 concepts adaptés à votre activité
- 4 scripts prêts à tourner
- Plan d’action simple pour le mois
- Montage à partir de vos rushs

Description:
- Pour les entreprises qui veulent savoir quoi publier, comment le dire, et comment mieux se positionner sur les réseaux sociaux.

#### Essentiel
Badge:
- Recommandé

Subtitle:
- Création de contenu

Price:
- 680 € / mois avec engagement 12 mois
- 800 € / mois sans engagement

Features:
- Tout ce qui est inclus dans l’offre Starter
- Tournage avec vous sur place
- 4 vidéos prêtes à publier par mois
- Publication ou aide à la publication
- Suivi éditorial

Description:
- Pour les entreprises qui veulent publier régulièrement et rendre leur activité plus visible.

#### Boost
Subtitle:
- Accompagnement éditorial

Price:
- 950 € / mois avec engagement 12 mois
- 1100 € / mois sans engagement

Features:
- Tout ce qui est inclus dans l’offre Essentiel
- 8 vidéos prêtes à publier par mois
- Suivi des contenus qui fonctionnent
- Ajustement des concepts
- Création de stories pour animer vos réseaux

Description:
- Pour les entreprises qui veulent un accompagnement plus complet dans la durée, au-delà de la simple production de contenu.

### LinkedIn offers
#### Starter
Subtitle:
- Stratégie & positionnement à distance

Price:
- 210 € / mois avec engagement 12 mois
- 230 € / mois sans engagement

Features:
- Audit de votre profil LinkedIn
- Optimisation de votre positionnement
- 2 angles de contenus adaptés à votre activité
- 4 trames de posts prêtes à publier
- Méthode simple pour mieux structurer vos posts

Description:
- Pour les entrepreneurs et dirigeants qui veulent savoir quoi publier, comment se positionner et mieux prendre la parole sur LinkedIn.

#### Essentiel
Badge:
- Recommandé

Subtitle:
- Création de contenu LinkedIn

Price:
- 680 € / mois avec engagement 12 mois
- 800 € / mois sans engagement

Features:
- Tout ce qui est inclus dans l’offre Starter
- Calendrier éditorial du mois
- 4 contenus LinkedIn rédigés
- 4 accroches fortes
- 1 carrousel ou visuel simple
- Aide à la publication

Description:
- Pour les entreprises et indépendants qui veulent publier régulièrement sur LinkedIn et développer leur visibilité.

#### Boost
Subtitle:
- Accompagnement éditorial LinkedIn

Price:
- 950 € / mois avec engagement 12 mois
- 1100 € / mois sans engagement

Features:
- Tout ce qui est inclus dans l’offre Essentiel
- 8 contenus LinkedIn rédigés par mois
- 2 carrousels ou visuels simples
- Ajustement des angles et du positionnement
- Suivi des contenus qui fonctionnent
- Aide à la publication

Description:
- Pour les dirigeants et entrepreneurs qui veulent une présence plus forte, plus régulière et mieux structurée sur LinkedIn.

### Offers UX rules
- only 3 cards at once
- center card is visually emphasized
- middle card is the main conversion target
- do not overcomplicate the toggle
- mobile layout must stack vertically

---

## GuidMe case study requirements
Section title:
- GuidMe : un cas concret

Section text:
- GuidMe est une plateforme d’orientation par visioconférence.
- L’objectif : développer sa visibilité, créer une communauté et générer des réservations.

Layout:
- large blue card on the left
- stats and CTA column on the right
- stacked cleanly on mobile

Blue card content:
- GuidMe
- de 48 à +14k abonnés
- Formats courts, régularité éditoriale et stratégie organique : un cas concret de croissance avec GuidMe.
- mobile mockup
- project link at the bottom

Stats cards:
- +13,2 M — Vues organiques tous réseaux confondus
- +14,000 — Abonnés tous réseaux confondus

Results block:
- Résultats obtenus
- +150 réservations
- +1,100 utilisateurs
- +13,700 visiteurs

CTA:
- Parlons de votre projet

---

## Contact section requirements
Section title:
- Parlons de votre projet

Section text:
- Vous avez un besoin en contenu, en visibilité ou en stratégie réseaux sociaux ? Choisissez le moyen le plus simple pour me contacter.

Content:
- button: Réserver un appel de 15 min
- button: Envoyer un e-mail
- photo of Thomas Roussel
- Thomas Roussel
- Stratégie de contenu & réseaux sociaux

Important:
- on mobile, buttons come before the photo
- use configurable links for Calendly and email
- no public phone number displayed

---

## Footer requirements
Include:
- RT Creative Studio
- Stratégie de contenu, vidéos courtes et réseaux sociaux pour PME et marques locales.
- Réserver un appel
- Envoyer un e-mail
- Conditions générales de ventes
- Mentions légales
- copyright

---

## Code architecture
Create clean separate components.

Preferred structure:
- src/app
- src/components
- src/data

Expected components:
- Header
- Hero
- Offers
- CaseStudy
- Contact
- Footer

Use data files for offers.
Do not hardcode both offer sets inline if avoidable.

---

## Coding rules
- Keep code simple and readable
- Use TypeScript properly
- Avoid dead code
- Avoid giant files
- Avoid unnecessary dependencies
- Avoid complex animations
- Prefer reusable patterns only where useful
- Do not put the entire page in one file

---

## Quality checks
Before considering a task done:
- imports are clean
- no obvious TypeScript issues
- responsive works on desktop and mobile
- buttons/links are functional
- alt text is present on images
- lint/build should pass if possible

---

## Definition of done
A task is only done if:
- the UI matches the approved structure
- the layout is responsive
- the code is clean enough for production
- the page is usable and visually coherent
- there are no obvious regressions