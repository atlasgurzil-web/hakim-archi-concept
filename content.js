/* ═══════════════════════════════════════════════════════════
   TEMPLATE « SITE IMMERSIF » — content.js
   ► L'UNIQUE FICHIER À RÉÉCRIRE pour produire un nouveau site.
   Renommer en content.js dans le projet cible. La partie
   « injection » en bas de fichier est le moteur de remplissage :
   la copier TELLE QUELLE, ne réécrire que window.SITE_CONTENT.
   ═══════════════════════════════════════════════════════════ */

window.SITE_CONTENT = {

  brand: {
    name: 'Hakim Archi Concept',
    title: 'Hakim Archi Concept — Études & Suivi Grands Projets BTP, Habitat, Équipements & VRD',
    description: 'Bureau d’architecture et de maîtrise d’œuvre : études, suivi de grands projets BTP, habitat, équipements publics, VRD, attachements et situations de travaux.',
    kicker: 'HAKIM ARCHI CONCEPT — ARCHITECTURE, BTP & MAÎTRISE D’ŒUVRE',
    copyright: '© 2026 — HAKIM ARCHI CONCEPT',
    signature: 'CONÇU AU MILLIMÈTRE, VÉRIFIÉ SUR CHANTIER',
    socials: [
      { label: 'LINKEDIN ↗', url: 'https://www.linkedin.com/' },
      { label: 'INSTAGRAM ↗', url: 'https://www.instagram.com/' }
    ]
  },

  /* 2 ancres + CTA du header — un mot chacun, CAPS */
  nav: { proof: 'PROJETS', universes: 'MÉTHODE', cta: 'CONTACT' },

  /* 1 · ACCROCHE — « line1 / line2a [image qui naît et devient
     plein écran] line2b ». Total line2a+line2b : court (nowrap). */
  hook: {
    line1: 'De l’étude au chantier,',
    line2a: 'bâtir avec',
    line2b: 'rigueur.',
    image: 'images/hero.jpg',
    imageAlt: 'Perspective architecturale contemporaine d’un grand équipement en béton et verre',
    floaters: [
      'images/fl-01.jpg',
      'images/fl-02.jpg',
      'images/fl-03.jpg',
      'images/fl-04.jpg',
      'images/fl-05.jpg',
      'images/fl-06.jpg',
      'images/fl-07.jpg',
      'images/fl-08.jpg',
      'images/fl-09.jpg',
      'images/fl-10.jpg'
    ]
  },

  /* 2 · POSITIONNEMENT — ≤ 42 caractères (affiché nowrap, en blanc
     sur l'image plein écran) */
  positioning: 'Architecture, grands projets BTP & VRD.',

  /* 3 · DÉMARCHE — [[…]] = ce qu'entoure l'ovale dessiné :
     2 à 3 MOTS MAXIMUM, JAMAIS une phrase entière */
  manifesto: {
    text: 'Un grand projet ne se gagne pas uniquement sur les plans : il se maîtrise sur le terrain, dans la justesse des études d’exécution, des réseaux VRD et des situations de travaux. Chez Hakim Archi Concept, chaque programme d’habitat ou d’équipement est piloté avec [[zéro angle mort]] — de l’esquisse au décompte final.'
  },

  /* 4 · PREUVE — layout: 'masonry' (8 photos de réalisations) */
  proof: {
    layout: 'masonry',
    kicker: 'RÉALISATIONS & CHANTIERS',
    title: 'Habitat, Équipements & VRD',
    sub: 'Études techniques, suivi d’exécution, attachements contradictoires et situations de travaux sur grands projets BTP.',
    meta: 'HUIT INTERVENTIONS — ÉTUDES & EXÉCUTION',
    projects: [
      { img: 'images/proj-01.jpg', title: 'Pôle Résidentiel Les Terrasses', meta: 'HABITAT COLLECTIF — ÉTUDES & SUIVI' },
      { img: 'images/proj-02.jpg', title: 'Complexe Éducatif & Sportif', meta: 'ÉQUIPEMENT PUBLIC — OPC & EXÉCUTION' },
      { img: 'images/proj-03.jpg', title: 'Voirie Structurante & Réseaux', meta: 'VRD & INFRASTRUCTURES — MÉTRÉS & SUIVI' },
      { img: 'images/proj-04.jpg', title: 'Siège Tertiaire Horizon', meta: 'ÉQUIPEMENT TERTIAIRE — MAÎTRISE D’ŒUVRE' },
      { img: 'images/proj-05.jpg', title: 'Îlot Résidentiel Contemporain', meta: 'HABITAT — ATTACHEMENTS & SITUATIONS' },
      { img: 'images/proj-06.jpg', title: 'Plateforme Urbaine & Génie Civil', meta: 'VRD & OUVRAGES — CONTRÔLE D’EXÉCUTION' },
      { img: 'images/proj-07.jpg', title: 'Centre Culturel & Pôle Public', meta: 'ÉQUIPEMENT — ÉTUDES TECHNIQUES & BTP' },
      { img: 'images/proj-08.jpg', title: 'Aménagement & Viabilisation Sud', meta: 'VRD, ASSAINISSEMENT & HABITAT' }
    ],
    features: []
  },

  /* 5 · DEVISE — 3 mots (train horizontal scrubé), hint d'une ligne */
  motto: {
    kicker: 'CE QUI GUIDE CHAQUE CHANTIER',
    words: [
      { word: 'Conception', hint: 'Études architecturales, plans d’exécution bâtiment et dimensionnement VRD.' },
      { word: 'Terrain', hint: 'Pilotage quotidien des lots gros œuvre, corps d’état secondaires et voirie.' },
      { word: 'Justesse', hint: 'Attachements contradictoires, métrés vérifiés et situations de travaux rigoureuses.' }
    ]
  },

  /* 6-7 · PROCESSUS — « introA introB [visuel] introC » puis les étapes. */
  universes: {
    introA: 'Un',
    introB: 'chantier,',
    introC: '3 étapes.',
    cta: 'Confier un projet →',
    image: 'images/process.jpg',
    items: [
      {
        name: 'Études & Dossiers d’Exécution',
        meta: 'PHASE — 01',
        desc: 'Conception architecturale, plans d’exécution bâtiment et VRD, pièces écrites, quantitatifs détaillés et bordereaux de prix.'
      },
      {
        name: 'Suivi de Grands Projets BTP',
        meta: 'PHASE — 02',
        desc: 'Direction des travaux d’habitat, d’équipements et d’infrastructures VRD : coordination sur site, contrôle technique et tenue des délais.'
      },
      {
        name: 'Attachements & Situations',
        meta: 'PHASE — 03',
        desc: 'Relevés contradictoires sur chantier, établissement des attachements, contrôle des situations mensuelles et décompte général définitif.'
      }
    ]
  },

  /* 8 · PREUVE SOCIALE — un avis client, court et crédible. */
  testimonial: {
    kicker: 'PROGRAMME HABITAT, ÉQUIPEMENT & VRD — MAÎTRISE D’OUVRAGE',
    figure: '100',
    unit: '%',
    quote: 'Chaque attachement et chaque situation mensuelle ont été vérifiés contradictoirement sur le terrain avant validation. Nous avons livré l’ensemble des bâtiments et des réseaux VRD sans aucun litige ni dérive budgétaire.',
    author: 'DIRECTION DE PROGRAMMES — MAÎTRISE D’OUVRAGE BTP'
  },

  /* 9 · OBJECTIONS — 3 freins + la chute (pill = mot entouré) */
  objections: {
    items: ['Pas de métrés approximatifs.', 'Pas de situations non vérifiées.', 'Pas de chantiers sans suivi.'],
    finale: 'Juste du BTP,',
    pill: 'maîtrisé.'
  },

  /* 10 · CONVERSION */
  contact: {
    kicker: 'UN PROJET D’HABITAT, D’ÉQUIPEMENT OU DE VRD ?',
    email: 'baccoucheabdelhafid@gmail.com',
    reassurance: 'ÉTUDES, SUIVI BTP, ATTACHEMENTS & SITUATIONS — RÉPONSE SOUS 24 H'
  },

  /* traînée sous la souris (finale) — 20 visuels, petits formats mixtes */
  trail: [
    'images/tr-01.jpg', 'images/tr-02.jpg',
    'images/tr-03.jpg', 'images/tr-04.jpg',
    'images/tr-05.jpg', 'images/tr-06.jpg',
    'images/tr-07.jpg', 'images/tr-08.jpg',
    'images/tr-09.jpg', 'images/tr-10.jpg',
    'images/tr-11.jpg', 'images/tr-12.jpg',
    'images/tr-13.jpg', 'images/tr-14.jpg',
    'images/tr-15.jpg', 'images/tr-16.jpg',
    'images/tr-17.jpg', 'images/tr-18.jpg',
    'images/tr-19.jpg', 'images/tr-20.jpg'
  ]
};

/* ═══════════════════════════════════════════════════════════
   INJECTION — NE PAS MODIFIER (remplit le DOM avant app.js)
   ═══════════════════════════════════════════════════════════ */
(() => {
  const C = window.SITE_CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };

  document.title = C.brand.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.brand.description);

  // chrome
  set('.loader-wordmark', C.brand.name);
  set('.dock-wordmark', C.brand.name);
  set('.dock-link[href="#travaux"]', C.nav.proof);
  set('.dock-link[href="#explorer"]', C.nav.universes);
  set('.dock-cta', C.nav.cta);

  // 1 · accroche
  set('#heroKicker', C.brand.kicker);
  set('#heroLine1', C.hook.line1);
  const hls = $$('#heroLine2 .hl');
  if (hls.length === 2) { hls[0].textContent = C.hook.line2a; hls[1].textContent = C.hook.line2b; }
  const g1 = $('#grow1 img');
  if (g1) { g1.src = C.hook.image; g1.alt = C.hook.imageAlt; }
  $$('.floaters .fl img').forEach((img, i) => { if (C.hook.floaters[i]) img.src = C.hook.floaters[i]; });

  // 2 · positionnement (un span par mot)
  const intro = $('#spotIntro');
  if (intro) intro.innerHTML = C.positioning.split(' ').map((w) => `<span>${w}</span>`).join(' ');

  // 3 · démarche
  const fill = $('#fillText');
  if (fill) {
    fill.innerHTML = C.manifesto.text.replace(
      /\[\[(.+?)\]\]/,
      '<span class="boxed" id="boxedPhrase">$1<svg class="box-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="boxPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>'
    );
  }

  // 4 · preuve : masonry (8 photos) ou bento (4 features big/tall/tall/big)
  const head = $$('.coll-head > *');
  if (head.length === 4) {
    head[0].textContent = C.proof.kicker;
    head[1].textContent = C.proof.title;
    head[2].textContent = C.proof.sub;
    head[3].textContent = C.proof.meta;
  }
  const grid = $('#collGrid');
  if (grid && C.proof.layout === 'bento') {
    grid.className = 'bento-grid';
    grid.innerHTML = C.proof.features.map((f) =>
      `<figure class="card${f.size ? ' b-' + f.size : ''}"><div class="card-img"><img src="${f.illu}" alt="${f.title}"></div><figcaption>${f.title}<span class="mono">${f.meta}</span></figcaption></figure>`
    ).join('');
  } else if (grid) {
    grid.className = 'coll-grid';
    const SPEEDS = [-0.05, 0.06, -0.028, 0.085];
    grid.innerHTML = SPEEDS.map((s, ci) =>
      `<div class="col" data-pspeed="${s}">` +
      C.proof.projects.slice(ci * 2, ci * 2 + 2).map((p) =>
        `<figure class="card"><div class="card-img"><img src="${p.img}" alt="${p.title} — ${p.meta}"></div><figcaption>${p.title}<span class="mono">${p.meta}</span></figcaption></figure>`
      ).join('') + '</div>'
    ).join('');
  }

  // 5 · devise (train de mots-clés)
  set('#mottoKicker', C.motto.kicker);
  const mtrack = $('#mottoTrack');
  if (mtrack) mtrack.innerHTML = C.motto.words.map((w) => `<span class="mw">${w.word}</span>`).join('');

  // 6-7 · processus immersif (visuels posés un à un)
  set('#nw1', C.universes.introA);
  set('#nw2', C.universes.introB);
  set('#nw3', C.universes.introC);
  const g2 = $('#grow2 img');
  if (g2) g2.src = C.universes.image || (C.universes.items[0] || {}).img || g2.src;
  const psteps = $('#psteps');
  if (psteps) {
    psteps.innerHTML = C.universes.items.map((u) =>
      `<div class="pstep"><span class="pstep-meta mono ash">${u.meta}</span><h3>${u.name}</h3><p>${u.desc || ''}</p></div>`
    ).join('');
  }
  const sCta = $('#stepsCtaLink');
  if (sCta) sCta.childNodes[0].textContent = C.universes.cta;

  // 8 · preuve sociale — le chiffre qui frappe
  set('#figKicker', C.testimonial.kicker || '');
  const figM = String(C.testimonial.figure || '').trim().match(/^([^\d.,+-]*[+\u2212-]?)\s*(-?[\d.,]+)/);
  set('#figPre', figM ? figM[1] : '');
  set('#figVal', figM ? figM[2] : '');
  set('#figUnit', C.testimonial.unit || '');
  set('#quoteText', C.testimonial.quote);
  set('#quoteAuthor', C.testimonial.author);

  // 9 · objections
  C.objections.items.forEach((t, i) => set('#fs' + (i + 1), t));
  const fs4 = $('#fs4');
  if (fs4) {
    fs4.innerHTML = `${C.objections.finale} <span class="pill" id="pillPhrase">${C.objections.pill}<svg class="pill-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="pillPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>`;
  }
  $$('#trail img').forEach((img, i) => { img.src = C.trail[i % C.trail.length]; });

  // 10 · conversion
  set('.footer-kicker', C.contact.kicker);
  const mail = $('.footer-mail');
  if (mail) { mail.href = 'mailto:' + C.contact.email; mail.querySelector('.footer-mail-text').textContent = C.contact.email; }
  set('.footer-reassurance', C.contact.reassurance);
  const fname = $('#footerName');
  if (fname) { fname.textContent = C.brand.name; fname.setAttribute('aria-label', C.brand.name); }
  const bottom = $$('.footer-bottom > p');
  if (bottom.length === 3) {
    bottom[0].textContent = C.brand.copyright;
    bottom[1].innerHTML = C.brand.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('&nbsp;&nbsp;&nbsp;');
    bottom[2].textContent = C.brand.signature;
  }
})();
