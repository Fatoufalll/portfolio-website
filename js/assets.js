/**
 * ============================================================
 *  ASSETS.JS — Configuration centrale de tous les fichiers
 *  Portfolio Fatou FALL
 * ============================================================
 *
 *  📁 STRUCTURE DU PROJET
 *  ├── index.html
 *  ├── css/
 *  │   └── style.css
 *  ├── js/
 *  │   ├── assets.js       ← CE FICHIER (chemins de tous les assets)
 *  │   └── main.js         ← Composants JS (Modal, Carousel, etc.)
 *  └── assets/
 *      ├── images/
 *      │   ├── profile/
 *      │   │   └── photo.png               ← Ta photo de profil
 *      │   ├── certifications/
 *      │   │   ├── pix.png                 ← Capture PIX
 *      │   │   ├── javascript.png          ← Certif OpenClassrooms JS
 *      │   │   ├── java.png                ← Certif OpenClassrooms Java
 *      │   │   ├── python.png              ← Certif OpenClassrooms Python
 *      │   │   ├── git.png                 ← Certif OpenClassrooms Git
 *      │   │   ├── typescript.png          ← Certif OpenClassrooms TypeScript
 *      │   │   └── anssi.png               ← Capture SecNumAcadémie ANSSI
 *      │   ├── rgpd/
 *      │   │   ├── module1.jpg             ← Attestation CNIL Module 1 (93%)
 *      │   │   ├── module2.jpg             ← Attestation CNIL Module 2 (100%)
 *      │   │   ├── module3.jpg             ← Attestation CNIL Module 3 (100%)
 *      │   │   ├── module4.jpg             ← Attestation CNIL Module 4 (100%)
 *      │   │   ├── module5.jpg             ← Attestation CNIL Module 5 (98%)
 *      │   │   └── module6.jpg             ← Attestation CNIL Module 6 (100%)
 *      │   └── projects/
 *      │       ├── bulma.png               ← Capture projet Bulma CSS
 *      │       ├── php.png                 ← Capture projet PHP/Dolibarr
 *      │       ├── delices.jpg             ← Capture site Les Délices
 *      │       └── stage.png               ← Capture appli demande de stage
 *      └── pdfs/
 *          ├── CV_Fatou_FALL.pdf           ← Ton CV
 *          ├── certification_pix.pdf       ← Certificat PIX officiel
 *          ├── projet_python.pdf           ← Documentation projet Python
 *          ├── rgpd_module1.pdf            ← Certificat CNIL Module 1
 *          ├── rgpd_module2.pdf            ← Certificat CNIL Module 2
 *          ├── rgpd_module3.pdf            ← Certificat CNIL Module 3
 *          ├── rgpd_module4.pdf            ← Certificat CNIL Module 4
 *          ├── rgpd_module5.pdf            ← Certificat CNIL Module 5
 *          └── rgpd_module6.pdf            ← Certificat CNIL Module 6
 *
 * ============================================================
 *  💡 COMMENT MODIFIER UN FICHIER ?
 *
 *  1. Remplace le fichier dans le bon dossier assets/
 *  2. Si tu changes le nom du fichier, mets à jour le chemin ici
 *  3. Recharge la page — c'est tout !
 *
 *  💡 COMMENT AJOUTER UNE NOUVELLE IMAGE DE PROJET ?
 *
 *  1. Mets ton image dans assets/images/projects/monprojet.png
 *  2. Ajoute une ligne ici :  monProjet: 'assets/images/projects/monprojet.png'
 *  3. Utilise ASSETS.images.projects.monProjet dans index.html
 * ============================================================
 */

const ASSETS = {

  /* ── PROFIL ─────────────────────────────────────────────── */
  profile: {
    photo: 'assets/images/profile/photo.png',
    // Pour changer ta photo : remplace photo.png dans assets/images/profile/
  },

  /* ── PDFs ────────────────────────────────────────────────── */
  pdfs: {
    cv:            'assets/pdfs/CV_Fatou_FALL.pdf',
    tableauE5:     'assets/pdfs/tableau_synthese_E5.pdf',
    pix:           'assets/pdfs/certification_pix.pdf',
    projetPython:  'assets/pdfs/projet_python.pdf',
    rgpd: {
      module1:     'assets/pdfs/rgpd_module1.pdf',
      module2:     'assets/pdfs/rgpd_module2.pdf',
      module3:     'assets/pdfs/rgpd_module3.pdf',
      module4:     'assets/pdfs/rgpd_module4.pdf',
      module5:     'assets/pdfs/rgpd_module5.pdf',
      module6:     'assets/pdfs/rgpd_module6.pdf',
    },
  },

  /* ── IMAGES CERTIFICATIONS ───────────────────────────────── */
  images: {
    certifications: {
      pix:         'assets/images/certifications/pix.png',
      javascript:  'assets/images/certifications/javascript.png',
      java:        'assets/images/certifications/java.png',
      python:      'assets/images/certifications/python.png',
      git:         'assets/images/certifications/git.png',
      typescript:  'assets/images/certifications/typescript.png',
      anssi:       'assets/images/certifications/anssi.png',
    },

    /* ── IMAGES RGPD (6 modules CNIL) ─────────────────────── */
    rgpd: [
      // ⚠️ L'ORDRE EST IMPORTANT — module1 = index 0, module6 = index 5
      { src: 'assets/images/rgpd/module1.jpg', name: 'Module 1 : Le RGPD et ses notions clés',               score: '93%'  },
      { src: 'assets/images/rgpd/module2.jpg', name: 'Module 2 : Principes de la protection des données',     score: '100%' },
      { src: 'assets/images/rgpd/module3.jpg', name: 'Module 3 : Les responsabilités des acteurs',            score: '100%' },
      { src: 'assets/images/rgpd/module4.jpg', name: 'Module 4 : Le DPO et les outils de conformité',        score: '100%' },
      { src: 'assets/images/rgpd/module5.jpg', name: 'Module 5 : Les collectivités territoriales',            score: '98%'  },
      { src: 'assets/images/rgpd/module6.jpg', name: 'Module 6 : Travail et données personnelles',            score: '100%' },
      // 💡 Pour ajouter un module : copie une ligne, change le src, le name et le score
    ],

    /* ── IMAGES PROJETS ────────────────────────────────────── */
    projects: {
      bulma:        'assets/images/projects/bulma.png',
      php:          'assets/images/projects/php.png',
      delices:      'assets/images/projects/delices.jpg',
      stage:        'assets/images/projects/stage.png',
      python:       'assets/images/projects/python.png',        // ← Capture boîte à outils Python
      ludotheque:   'assets/images/projects/ludotheque.png',    // ← Capture Ludothèque Java
      vente:        'assets/images/projects/vente.png',         // ← Capture Vente de Matériel
      memoryFlower: 'assets/images/projects/memory_flower.png', // ← Capture Memory Flower
      // 💡 Pour ajouter un projet :
      // monProjet: 'assets/images/projects/mon-projet.png',
    },
  },
};
