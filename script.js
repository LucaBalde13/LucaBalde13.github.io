const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    navMenu.classList.toggle("is-open", !open);
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
    }
  });
}

const cartCount = document.querySelector("[data-cart-count]");
let cartItems = 0;

document.querySelectorAll(".product-card a").forEach((link) => {
  link.addEventListener("click", () => {
    cartItems += 1;
    if (cartCount) cartCount.textContent = String(cartItems);
  });
});

const homepageProducts = [
  {
    slug: "tonico",
    tone: "tone-tonico",
    label: "Energia e tono",
    title: "Tonico",
    subtitle: "Energia per il corpo e la mente.",
    image: "assets/products/hero/tonico-hero.webp",
    alt: "BYO3 Tonico con bolle blu",
    href: "tonico.html",
    cta: "Scopri Tonico",
    benefits: ["Attivi OZOILAB®", "Vitamine del gruppo B", "Minerali essenziali"]
  },
  {
    slug: "uomo",
    tone: "tone-uomo",
    label: "Vitalità maschile",
    title: "Uomo",
    subtitle: "Supporto quotidiano per energia e vitalità.",
    image: "assets/products/hero/uomo-hero.webp",
    alt: "BYO3 Uomo con botaniche verdi",
    href: "uomo.html",
    cta: "Scopri Uomo",
    benefits: ["Magnesio e zinco", "Aminoacidi mirati", "Maca e Cordyceps"]
  },
  {
    slug: "donna",
    tone: "tone-donna",
    label: "Equilibrio femminile",
    title: "Donna",
    subtitle: "Una formula per tono, equilibrio e routine femminile.",
    image: "assets/products/hero/donna-hero.webp",
    alt: "BYO3 Donna con fiori rosa",
    href: "donna.html",
    cta: "Scopri Donna",
    benefits: ["Cranberry", "Griffonia", "Magnesio e L-Arginina"]
  },
  {
    slug: "probiotic",
    tone: "tone-probiotic",
    label: "Microbiota",
    title: "Probiotic",
    subtitle: "Supporto quotidiano per microbiota e transito.",
    image: "assets/products/hero/probiotic-hero.webp",
    alt: "BYO3 Probiotic con bolle corallo",
    href: "probiotic.html",
    cta: "Scopri Probiotic",
    benefits: ["Ecologic® 500", "L. acidophilus SGL 11", "Attivi OZOILAB®"]
  },
  {
    slug: "artiplus",
    tone: "tone-artiplus",
    label: "Mobilità",
    title: "Artiplus",
    subtitle: "Supporto alla mobilità articolare nella routine.",
    image: "assets/products/hero/artiplus-hero.webp",
    alt: "BYO3 Artiplus con luce dorata",
    href: "artiplus.html",
    cta: "Scopri Artiplus",
    benefits: ["Glucosammina e condroitina", "Boswellia", "Collagene VERISOL®"]
  }
];

function initHomepageProductCarousel() {
  const carousel = document.querySelector("[data-product-carousel]");
  if (!carousel) return;

  const image = carousel.querySelector("[data-product-image]");
  const card = carousel.querySelector("[data-product-card]");
  const label = carousel.querySelector("[data-product-label]");
  const title = carousel.querySelector("[data-product-title]");
  const subtitle = carousel.querySelector("[data-product-subtitle]");
  const benefits = carousel.querySelector("[data-product-benefits]");
  const link = carousel.querySelector("[data-product-link]");
  const dots = carousel.querySelector("[data-product-dots]");
  const prev = carousel.querySelector("[data-product-prev]");
  const next = carousel.querySelector("[data-product-next]");
  if (!image || !card || !label || !title || !subtitle || !benefits || !link || !dots || !prev || !next) return;

  let activeIndex = 0;

  const dotButtons = homepageProducts.map((product, index) => {
    const dot = document.createElement("button");
    dot.className = "product-dot";
    dot.type = "button";
    dot.role = "tab";
    dot.setAttribute("aria-label", `Mostra ${product.title}`);
    dot.addEventListener("click", () => renderProduct(index));
    dots.appendChild(dot);
    return dot;
  });

  function renderProduct(index) {
    activeIndex = (index + homepageProducts.length) % homepageProducts.length;
    const product = homepageProducts[activeIndex];

    carousel.className = carousel.className
      .replace(/\btone-\S+/g, "")
      .replace(/\bis-switching\b/g, "")
      .trim();
    carousel.classList.add(product.tone, "is-switching");

    image.src = product.image;
    image.alt = product.alt;
    label.textContent = product.label;
    title.textContent = product.title;
    subtitle.textContent = product.subtitle;
    benefits.innerHTML = product.benefits.map((item) => `<li>${item}</li>`).join("");
    link.href = product.href;
    link.querySelector("span:first-child").textContent = product.cta;

    dotButtons.forEach((dot, dotIndex) => {
      const selected = dotIndex === activeIndex;
      dot.setAttribute("aria-selected", String(selected));
      dot.tabIndex = selected ? 0 : -1;
    });

    window.setTimeout(() => {
      carousel.classList.remove("is-switching");
    }, 1260);
  }

  prev.addEventListener("click", () => renderProduct(activeIndex - 1));
  next.addEventListener("click", () => renderProduct(activeIndex + 1));
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") renderProduct(activeIndex - 1);
    if (event.key === "ArrowRight") renderProduct(activeIndex + 1);
  });

  renderProduct(0);
}

initHomepageProductCarousel();

const productPageData = {
  tonico: {
    name: "BYO3 Tonico",
    short: "Tono fisico e mentale",
    price: "€50",
    image: "assets/products/hero/tonico-hero.webp",
    proof: [
      ["OZOILAB®", "Olio di girasole ozonizzato e stabilizzato al centro della formula."],
      ["Caffeina dichiarata", "Guaranà titolato: l'avvertenza è visibile prima dell'acquisto."],
      ["60 capsule", "Formato da circa 30 giorni, con assunzione quotidiana misurata."],
      ["Linguaggio prudente", "Supporto e routine, senza promessa di effetto miracoloso."]
    ],
    dive: [
      ["OZOILAB®", "Ingrediente-firma", "È la matrice tecnologica comune alla linea BYO3: olio ozonizzato e stabilizzato inserito nella logica formulativa quotidiana."],
      ["Muira Puama + Damiana", "Estratti vegetali", "Sono raccontati come attivi tonici, utili per posizionare il prodotto nei periodi di affaticamento senza trasformarli in promessa terapeutica."],
      ["Guaranà", "80 mg", "La presenza di caffeina viene dichiarata apertamente: utile per chi cerca tono, ma da evitare la sera se sensibili."],
      ["L-Glutatione + Taurina", "Antiossidanti", "Completano il profilo della formula e aiutano a differenziarla da un semplice stimolante."]
    ],
    faq: [
      ["Quando ha senso usarlo?", "Nei periodi in cui vuoi sostenere tono fisico e mentale dentro una routine quotidiana, non come soluzione d'urto."],
      ["Contiene caffeina?", "Sì, da Guaranà. Per questo la pagina consiglia l'assunzione al mattino ed evita promesse aggressive."],
      ["Chi dovrebbe chiedere un parere prima?", "Chi è in gravidanza, allattamento, terapia farmacologica o ha condizioni specifiche dovrebbe chiedere un parere professionale."]
    ]
  },
  uomo: {
    name: "BYO3 Uomo",
    short: "Vitalità maschile quotidiana",
    price: "€50",
    image: "assets/products/hero/uomo-hero.webp",
    proof: [
      ["Approccio adulto", "Vitalità maschile raccontata senza toni aggressivi o allusivi."],
      ["Aminoacidi mirati", "Arginina, Ornitina e Citrullina nel razionale della formula."],
      ["Minerali e attivi", "Magnesio, Zinco, Maca, Cordyceps e Tribulus in una formula multi-attivo."],
      ["Avvertenze chiare", "Uso quotidiano e limiti comunicati prima dell'acquisto."]
    ],
    dive: [
      ["OZOILAB®", "84 mg", "Rende la formula coerente con il resto della linea BYO3 e ne sostiene il posizionamento tecnologico."],
      ["Magnesio + Zinco", "Minerali", "Sono presenti nel racconto della vitalità maschile con una formulazione più ampia del singolo ingrediente."],
      ["Arginina, Ornitina, Citrullina", "Aminoacidi", "Aiutano a spiegare la logica formulativa senza scivolare su claim di performance immediata."],
      ["Maca, Cordyceps, Tribulus", "Botanicals", "Portano il prodotto nel territorio della routine adulta, non della promessa rapida."]
    ],
    faq: [
      ["È un prodotto da performance immediata?", "No. La pagina lo posiziona come routine quotidiana di supporto, con linguaggio misurato."],
      ["Quando prenderlo?", "2 capsule al giorno, con o senza cibo, seguendo sempre l'etichetta."],
      ["Ci sono avvertenze importanti?", "Non è indicato in caso di deficit G6PD/favismo. In caso di dubbi o terapie, chiedere un parere professionale."]
    ]
  },
  donna: {
    name: "BYO3 Donna",
    short: "Equilibrio femminile",
    price: "€50",
    image: "assets/products/hero/donna-hero.webp",
    proof: [
      ["Tono rispettoso", "Benessere femminile trattato con chiarezza, senza paternalismo."],
      ["Cranberry + Griffonia", "Attivi riconoscibili per una formula femminile più leggibile."],
      ["Polline purificato", "Ingrediente dichiarato con dose e ruolo nella formula."],
      ["Routine mensile", "60 capsule, circa 30 giorni di uso continuativo."]
    ],
    dive: [
      ["OZOILAB®", "84 mg", "È la base tecnologica BYO3 anche nella formula femminile."],
      ["Cranberry", "60 mg", "Rende chiaro il territorio uro-genitale senza usare promesse assolute."],
      ["Griffonia", "20 mg", "Inserita nel racconto di umore e routine femminile con tono adulto."],
      ["Magnesio + L-Arginina", "Supporto formula", "Completano il profilo con minerale e aminoacido dichiarati."]
    ],
    faq: [
      ["È pensato solo per un momento specifico?", "No. La pagina lo racconta come formula quotidiana per fasi intense, tono e benessere femminile."],
      ["Posso usarlo in gravidanza o allattamento?", "La pagina sconsiglia l'uso senza consulto medico. Leggere sempre l'etichetta."],
      ["Perché la pagina è così trasparente?", "Perché formula, uso, immagini, avvertenze e limiti devono essere chiari prima dell'acquisto."]
    ]
  },
  probiotic: {
    name: "BYO3 Probiotic",
    short: "Microbiota e transito",
    price: "€50",
    image: "assets/products/hero/probiotic-hero.webp",
    proof: [
      ["Ecologic® 500", "Mix di ceppi probiotici dichiarato in pagina."],
      ["SGL 11", "Lactobacillus acidophilus inserito nel razionale digestivo."],
      ["OZOILAB®", "La formula non si limita al solo numero di ceppi o miliardi."],
      ["Senza sensazionalismo", "Microbiota, transito e apparato digerente raccontati con misura."]
    ],
    dive: [
      ["Ecologic® 500", "260 mg", "Unisce ceppi Bifidobacterium, Lactobacillus e Lactococcus in una formula leggibile."],
      ["L. acidophilus SGL 11", "60 mg", "Elemento distintivo della formula, utile per spiegare il posizionamento digestivo."],
      ["OZOILAB®", "84 mg", "Integra la tecnologia BYO3 nel prodotto dedicato al microbiota."],
      ["Uso quotidiano", "2 capsule", "La semplicità di assunzione rende il prodotto più facile da immaginare nella routine."]
    ],
    faq: [
      ["Quando può essere utile?", "In cambi alimentari, viaggi, periodi di stress o quando vuoi sostenere la routine intestinale."],
      ["È una promessa di risultato immediato?", "No. La pagina resta prudente: parla di supporto quotidiano e non di trattamento."],
      ["È adatto a tutti?", "Non sostituisce una dieta varia. In caso di condizioni specifiche o terapie, chiedere un parere professionale."]
    ]
  },
  artiplus: {
    name: "BYO3 Artiplus",
    short: "Mobilità articolare",
    price: "€50",
    image: "assets/products/hero/artiplus-hero.webp",
    proof: [
      ["Formula strutturale", "Glucosammina, condroitina e collagene nel razionale articolare."],
      ["Fitocomposti", "Boswellia e Artiglio del diavolo completano il profilo."],
      ["Allergene visibile", "Contiene pesce: informazione chiara prima dell'acquisto."],
      ["OZOILAB® 100 mg", "Dose giornaliera dichiarata nella pagina prodotto."]
    ],
    dive: [
      ["Glucosammina + Condroitina", "Struttura", "Sono ingredienti centrali del racconto articolare e distinguono la pagina da un generico prodotto antiossidante."],
      ["Boswellia + Artiglio del diavolo", "Fitocomposti", "Aggiungono profondità alla formula senza promettere un trattamento."],
      ["Collagene VERISOL®", "30 mg", "Completa il profilo strutturale e rende il prodotto più leggibile."],
      ["Pesce", "Allergene", "L'avvertenza rimane evidente perché una pagina premium deve essere anche responsabile."]
    ],
    faq: [
      ["È solo per sportivi?", "No. La pagina parla di mobilità e routine articolare quotidiana, non di performance sportiva."],
      ["Contiene allergeni?", "Sì, contiene pesce per la condroitina. L'informazione è mantenuta visibile."],
      ["Come usarlo?", "2 capsule al giorno, con o senza cibo, dentro una routine continuativa."]
    ]
  }
};

function getProductSlug() {
  const page = document.querySelector(".product-page-v2");
  if (!page) return null;
  const productClass = Array.from(page.classList).find((name) => name.startsWith("product-") && name !== "product-page-v2");
  return productClass ? productClass.replace("product-", "") : null;
}

function enhanceProductPage() {
  const slug = getProductSlug();
  const data = slug ? productPageData[slug] : null;
  const page = document.querySelector(".product-page-v2");
  const buyBox = document.querySelector(".buy-box");
  if (!data || !page || !buyBox) return;

  if (!buyBox.querySelector(".quantity-control")) {
    const quantity = document.createElement("div");
    quantity.className = "quantity-control";
    quantity.innerHTML = `
      <span>Quantità</span>
      <div class="quantity-stepper">
        <button type="button" aria-label="Diminuisci quantità" data-qty="-1">−</button>
        <input type="number" min="1" value="1" inputmode="numeric" aria-label="Quantità">
        <button type="button" aria-label="Aumenta quantità" data-qty="1">+</button>
      </div>
    `;
    buyBox.insertBefore(quantity, buyBox.querySelector("[data-cart-add]"));
  }

  if (!buyBox.querySelector(".purchase-assurance")) {
    const assurance = document.createElement("div");
    assurance.className = "purchase-assurance";
    assurance.innerHTML = "<span>Spedizione gratuita sopra i 59€</span><span>60 capsule · circa 30 giorni</span>";
    buyBox.appendChild(assurance);
  }

  if (!document.querySelector(".product-sales-depth")) {
    const depth = document.createElement("div");
    depth.className = "product-sales-depth";
    depth.innerHTML = `
      <section class="product-trust section-reveal">
        <div class="trust-intro">
          <h2>Fiducia costruita prima dell'acquisto.</h2>
          <p>Prima delle opinioni, BYO3 mette in pagina ingredienti, uso, avvertenze e motivo d'esistenza del prodotto.</p>
        </div>
        <div class="trust-grid">
          ${data.proof.map((item, index) => `<article class="trust-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join("")}
        </div>
      </section>
      <section class="formula-deep-dive section-reveal">
        <div class="section-heading"><h2>Ingredienti spiegati, senza rumore.</h2><p>Ogni voce chiarisce perché compare nella formula e quale parte del racconto sostiene.</p></div>
        <div class="formula-accordion">
          ${data.dive.map((item, index) => `<details ${index === 0 ? "open" : ""}><summary><span>${item[0]}</span><em>${item[1]}</em></summary><p>${item[2]}</p></details>`).join("")}
        </div>
      </section>
      <section class="product-faq section-reveal">
        <div class="section-heading"><h2>Domande prima dell'acquisto.</h2><p>Risposte brevi, visibili e responsabili. Nessuna pressione, nessuna promessa eccessiva.</p></div>
        <div class="faq-accordion">
          ${data.faq.map((item, index) => `<details ${index === 0 ? "open" : ""}><summary>${item[0]}</summary><p>${item[1]}</p></details>`).join("")}
        </div>
      </section>
    `;
    const compare = page.querySelector(".product-compare");
    const routine = page.querySelector(".page-section");
    page.insertBefore(depth, routine || compare?.nextSibling || null);
  }

  if (!document.querySelector(".mobile-buy-bar")) {
    const bar = document.createElement("div");
    bar.className = "mobile-buy-bar";
    bar.innerHTML = `
      <img src="${data.image}" alt="">
      <div><strong>${data.name}</strong><span>${data.price} · ${data.short}</span></div>
      <button class="button primary" type="button" data-cart-add><span>Aggiungi</span></button>
    `;
    document.body.appendChild(bar);

    const syncMobileBuyBar = () => {
      const hero = page.querySelector(".product-hero-rich");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight * 0.62 : 720;
      bar.classList.toggle("is-visible", window.scrollY > threshold);
    };

    window.addEventListener("scroll", syncMobileBuyBar, { passive: true });
    window.addEventListener("resize", syncMobileBuyBar);
    syncMobileBuyBar();
  }
}

enhanceProductPage();

document.querySelectorAll(".product-gallery").forEach((gallery) => {
  const heroImage = gallery.querySelector(".product-hero-frame img");
  const thumbs = gallery.querySelectorAll(".product-thumb");
  if (!heroImage || !thumbs.length) return;

  thumbs.forEach((thumb) => {
    const image = thumb.querySelector("img");
    if (!image) return;

    thumb.setAttribute("role", "button");
    thumb.setAttribute("tabindex", "0");
    thumb.setAttribute("aria-label", `Mostra ${image.alt}`);

    const activate = () => {
      heroImage.src = image.src;
      heroImage.alt = image.alt;
      thumbs.forEach((item) => item.classList.remove("is-active"));
      thumb.classList.add("is-active");
    };

    thumb.addEventListener("click", activate);
    thumb.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
});

document.addEventListener("click", (event) => {
  const qtyButton = event.target.closest("[data-qty]");
  if (!qtyButton) return;

  const control = qtyButton.closest(".quantity-control");
  const input = control?.querySelector("input");
  if (!input) return;

  const next = Math.max(1, Number(input.value || 1) + Number(qtyButton.dataset.qty));
  input.value = String(next);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-add]");
  if (!button) return;

  const quantityInput = document.querySelector(".quantity-control input");
  const quantity = Math.max(1, Number(quantityInput?.value || 1));
  cartItems += quantity;
  if (cartCount) cartCount.textContent = String(cartItems);

  const label = button.querySelector("span:first-child") || button;
  const original = label.textContent;
  label.textContent = "Aggiunto";
  window.setTimeout(() => {
    label.textContent = original;
  }, 1600);
});

const revealEls = document.querySelectorAll(".section-reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
  );

  revealEls.forEach((el) => observer.observe(el));
}
