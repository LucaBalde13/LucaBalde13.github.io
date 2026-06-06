import { productPageData } from "../data/product-pages.js";
import { gsap } from "../lib/gsap.js";
import Swiper from "swiper";
import { A11y, EffectCreative, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
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
    image: "/assets/products/hero/tonico-hero.webp",
    alt: "BYO3 Tonico con bolle blu",
    href: "/tonico.html",
    cta: "Scopri Tonico",
    benefits: ["Attivi OZOILAB®", "Vitamine del gruppo B", "Minerali essenziali"]
  },
  {
    slug: "uomo",
    tone: "tone-uomo",
    label: "Vitalità maschile",
    title: "Uomo",
    subtitle: "Supporto quotidiano per energia e vitalità.",
    image: "/assets/products/hero/uomo-hero.webp",
    alt: "BYO3 Uomo con botaniche verdi",
    href: "/uomo.html",
    cta: "Scopri Uomo",
    benefits: ["Magnesio e zinco", "Aminoacidi mirati", "Maca e Cordyceps"]
  },
  {
    slug: "donna",
    tone: "tone-donna",
    label: "Equilibrio femminile",
    title: "Donna",
    subtitle: "Una formula per tono, equilibrio e routine femminile.",
    image: "/assets/products/hero/donna-hero.webp",
    alt: "BYO3 Donna con fiori rosa",
    href: "/donna.html",
    cta: "Scopri Donna",
    benefits: ["Cranberry", "Griffonia", "Magnesio e L-Arginina"]
  },
  {
    slug: "probiotic",
    tone: "tone-probiotic",
    label: "Microbiota",
    title: "Probiotic",
    subtitle: "Supporto quotidiano per microbiota e transito.",
    image: "/assets/products/hero/probiotic-hero.webp",
    alt: "BYO3 Probiotic con bolle corallo",
    href: "/probiotic.html",
    cta: "Scopri Probiotic",
    benefits: ["Ecologic® 500", "L. acidophilus SGL 11", "Attivi OZOILAB®"]
  },
  {
    slug: "artiplus",
    tone: "tone-artiplus",
    label: "Mobilità",
    title: "Artiplus",
    subtitle: "Supporto alla mobilità articolare nella routine.",
    image: "/assets/products/hero/artiplus-hero.webp",
    alt: "BYO3 Artiplus con luce dorata",
    href: "/artiplus.html",
    cta: "Scopri Artiplus",
    benefits: ["Glucosammina e condroitina", "Boswellia", "Collagene VERISOL®"]
  }
];

function initHomepageProductCarousel() {
  const carousel = document.querySelector("[data-product-carousel]");
  if (!carousel) return;

  carousel.classList.add("swiper");
  carousel.innerHTML = `
    <div class="swiper-wrapper">
      ${homepageProducts
        .map(
          (product) => `
            <article class="swiper-slide product-slide ${product.tone}">
              <div class="product-stage">
                <div class="product-orbit" aria-hidden="true">
                  <span class="orbit-bubble bubble-a"></span>
                  <span class="orbit-bubble bubble-b"></span>
                  <span class="orbit-bubble bubble-c"></span>
                </div>
                <img class="showcase-product" src="${product.image}" alt="${product.alt}">
                <div class="product-plinth" aria-hidden="true"></div>
              </div>
              <div class="product-glass-card">
                <p class="product-card-label">${product.label}</p>
                <h3>${product.title}</h3>
                <p class="product-subtitle">${product.subtitle}</p>
                <div class="product-divider"></div>
                <p class="product-benefit-title">Ingredienti chiave</p>
                <ul>${product.benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
                <a class="button primary product-showcase-cta" href="${product.href}">
                  <span>${product.cta}</span>
                  <span class="button-icon" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
    <button class="product-arrow product-arrow-prev" type="button" aria-label="Prodotto precedente">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"></path></svg>
    </button>
    <button class="product-arrow product-arrow-next" type="button" aria-label="Prodotto successivo">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"></path></svg>
    </button>
    <div class="product-dots" aria-label="Seleziona prodotto"></div>
  `;

  const syncTone = (index) => {
    carousel.className = carousel.className.replace(/\btone-\S+/g, "").trim();
    carousel.classList.add(homepageProducts[index].tone);
  };

  const swiper = new Swiper(carousel, {
    modules: [A11y, EffectCreative, Navigation, Pagination],
    effect: "creative",
    speed: 760,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    watchSlidesProgress: true,
    creativeEffect: {
      limitProgress: 2,
      prev: {
        opacity: 0,
        translate: ["-12%", 0, -80],
        scale: 0.94
      },
      next: {
        opacity: 0,
        translate: ["12%", 0, -80],
        scale: 0.94
      }
    },
    navigation: {
      nextEl: carousel.querySelector(".product-arrow-next"),
      prevEl: carousel.querySelector(".product-arrow-prev")
    },
    pagination: {
      el: carousel.querySelector(".product-dots"),
      clickable: true,
      bulletClass: "product-dot",
      bulletActiveClass: "is-active",
      renderBullet(index, className) {
        return `<button class="${className}" type="button" aria-label="Mostra ${homepageProducts[index].title}"><span></span></button>`;
      }
    },
    a11y: {
      enabled: true,
      prevSlideMessage: "Prodotto precedente",
      nextSlideMessage: "Prodotto successivo",
      paginationBulletMessage: "Mostra prodotto {{index}}"
    },
    on: {
      init(instance) {
        syncTone(instance.realIndex);
      },
      realIndexChange(instance) {
        syncTone(instance.realIndex);
      }
    }
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    swiper.on("slideChangeTransitionStart", () => {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const productImage = activeSlide?.querySelector(".showcase-product");
      const card = activeSlide?.querySelector(".product-glass-card");
      if (!productImage || !card) return;

      gsap.fromTo(productImage, { scale: 1.035, x: 16 }, { scale: 1, x: 0, duration: 0.85, ease: "power4.out" });
      gsap.fromTo(card, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.62, delay: 0.08, ease: "power3.out" });
    });
  }
}

initHomepageProductCarousel();

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

  if (!document.querySelector(".mobile-buy-bar")) {
    const bar = document.createElement("div");
    bar.className = "mobile-buy-bar";
    bar.innerHTML = `
      <img src="${data.image}" alt="${data.name} confezione prodotto">
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
document.documentElement.classList.add("astro-motion-ready");

function revealElement(el) {
  el.classList.add("is-visible");
  if (!el.animate || prefersReducedMotion) return;

  el.animate(
    [
      { opacity: 0.9, transform: "translateY(16px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 620,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "both"
    }
  );
}

if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

const siteHeader = document.querySelector("[data-header]");
if (siteHeader) {
  const syncHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

if (!prefersReducedMotion) {
  const heroPieces = [
    ...document.querySelectorAll(".hero-copy > *"),
    ...document.querySelectorAll(".hero-stage")
  ];

  heroPieces.forEach((el, index) => {
    el.animate(
      [
        { opacity: 0, transform: "translateY(22px) scale(0.985)" },
        { opacity: 1, transform: "translateY(0) scale(1)" }
      ],
      {
        duration: 900,
        delay: 90 + index * 80,
        easing: "cubic-bezier(0.32, 0.72, 0, 1)",
        fill: "both"
      }
    );
  });

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.animate(
          [
            { opacity: 0.72, transform: "translateY(26px) scale(0.96)" },
            { opacity: 1, transform: "translateY(0) scale(1)" }
          ],
          {
            duration: 950,
            easing: "cubic-bezier(0.32, 0.72, 0, 1)",
            fill: "both"
          }
        );
        imageObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -14% 0px", threshold: 0.18 }
  );

  document.querySelectorAll(".science-photo, .product-card, .technology, .product-hero-frame, .capsule-visual").forEach((el) => {
    imageObserver.observe(el);
  });
}

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--spot-x", `${x.toFixed(2)}%`);
      card.style.setProperty("--spot-y", `${y.toFixed(2)}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--spot-x");
      card.style.removeProperty("--spot-y");
    });
  });
}
