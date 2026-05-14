/**
 * ============================================================
 *  MAIN.JS — Composants JavaScript
 *  Portfolio Fatou FALL
 * ============================================================
 *
 *  Contenu :
 *  1. Observer (animations fade-in au scroll)
 *  2. Nav (lien actif selon la section visible)
 *  3. Modal (ouverture / fermeture des modals)
 *  4. CSL - Carousel RGPD (défilement horizontal entre les 6 images)
 *  5. Init (initialisation au chargement de la page)
 * ============================================================
 */


/* ── 1. OBSERVER — Animations fade-in au scroll ───────────── */
const ScrollObserver = {
  init() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vis');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fi').forEach(el => obs.observe(el));
  }
};


/* ── 2. NAV — Lien actif selon la section visible ─────────── */
const Nav = {
  init() {
    window.addEventListener('scroll', () => {
      let current = '';
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('act', a.getAttribute('href') === '#' + current);
      });
    });
  }
};


/* ── 3. MODAL — Système d'ouverture / fermeture ───────────── */
const Modal = {
  open(id) {
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
  },

  init() {
    // Fermer en cliquant sur l'overlay (fond sombre)
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.addEventListener('click', e => {
        if (e.target === m) Modal.close(m.id);
      });
    });

    // Fermer en cliquant sur le bouton ✕
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        Modal.close(btn.closest('.modal-overlay').id);
      });
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(m => Modal.close(m.id));
      }
    });
  }
};


/* ── 4. CSL — Carousel RGPD (6 images, défilement horizontal) */
const CSL = {
  cur: 0,
  total: 6,

  /**
   * Aller à un slide précis
   * @param {number} index - numéro du slide (0 à 5)
   */
  go(index) {
    this.cur = ((index % this.total) + this.total) % this.total;

    // Déplacer le track horizontalement
    const track = document.getElementById('cs-track');
    if (track) track.style.transform = `translateX(-${this.cur * 100}%)`;

    // Mettre à jour les points de navigation
    document.querySelectorAll('.cs-dot').forEach((dot, i) => {
      dot.classList.toggle('cs-dot-active', i === this.cur);
    });
  },

  prev() { this.go(this.cur - 1); },
  next() { this.go(this.cur + 1); },
};


/* ── 5. INIT — Lancement au chargement de la page ─────────── */
document.addEventListener('DOMContentLoaded', () => {
  ScrollObserver.init();
  Nav.init();
  Modal.init();
  CSL.go(0); // Positionner le carousel RGPD sur le module 1
});

/* ── Carrousels Projets ── */
const ProjCarousel = {
  instances: {},

  init(id, total) {
    this.instances[id] = { cur: 0, total };
    this.go(id, 0);
  },

  go(id, index) {
    const inst = this.instances[id];
    if (!inst) return;
    inst.cur = ((index % inst.total) + inst.total) % inst.total;
    const track = document.querySelector(`#${id} .proj-carousel-track`);
    if (track) track.style.transform = `translateX(-${inst.cur * 100}%)`;
    document.querySelectorAll(`#${id} .proj-dot`).forEach((d, i) => {
      d.classList.toggle('active', i === inst.cur);
    });
  },

  prev(id) { this.go(id, this.instances[id].cur - 1); },
  next(id) { this.go(id, this.instances[id].cur + 1); }
};

document.addEventListener('DOMContentLoaded', () => {
  ProjCarousel.init('modal-php', 5);
  ProjCarousel.init('modal-stage', 5);
  ProjCarousel.init('modal-memory', 2);
  ProjCarousel.init('modal-vente', 3);
  ProjCarousel.init('modal-ludotheque', 3);
  ProjCarousel.init('modal-python-proj', 4);
  ProjCarousel.init('modal-bulma', 2);
  ProjCarousel.init('modal-delices', 3);
});