import { f as createAstro, c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead, g as renderComponent, h as renderSlot, b as renderHead, e as renderScript } from '../chunks/astro/server_OmCqSEb_.mjs';
import 'piccolore';
import 'html-escaper';
/* empty css                                 */
import 'clsx';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("https://tatertot0102.github.io");
const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  const { initialTheme = "light" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header id="site-header"', ` class="sticky top-0 z-50 transition-colors duration-200 bg-black text-white" data-astro-cid-ctg3m53h> <div class="mx-auto w-full max-w-[1440px]" data-astro-cid-ctg3m53h> <!-- Top utility bar --> <div class="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-3 border-b border-white/10" data-astro-cid-ctg3m53h> <!-- Logo centered --> <div class="flex-1" data-astro-cid-ctg3m53h></div> <a href="/" class="text-center" aria-label="TNN Home" data-astro-cid-ctg3m53h> <div class="flex items-center justify-center gap-2" data-astro-cid-ctg3m53h> <span class="text-2xl sm:text-3xl font-semibold tracking-tight" data-astro-cid-ctg3m53h>TNN</span> <span class="text-sm text-red-500 font-bold" data-astro-cid-ctg3m53h>100</span> </div> <div class="text-[9px] uppercase tracking-[0.3em] opacity-70 mt-0.5" data-astro-cid-ctg3m53h>
Tech News Network
</div> </a> <!-- Right utility links --> <div class="flex-1 flex items-center justify-end gap-4" data-astro-cid-ctg3m53h> <a class="hidden sm:block text-sm hover:opacity-70 transition-opacity" href="/newsletter" data-astro-cid-ctg3m53h>Newsletter</a> <a class="hidden sm:block text-sm hover:opacity-70 transition-opacity" href="/signin" data-astro-cid-ctg3m53h>Sign In</a> <button class="bg-[#1b2a6b] text-white px-4 py-1.5 text-sm font-medium hover:bg-[#142152] transition-colors rounded" data-astro-cid-ctg3m53h>
Subscribe
</button> <button class="hover:opacity-70 transition-opacity" aria-label="Search" data-astro-cid-ctg3m53h> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ctg3m53h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ctg3m53h></path> </svg> </button> </div> </div> <!-- Bottom Navigation Bar (this is the "dock" that should hide on scroll down, show on scroll up,
         and COMPLETELY DISABLE after you pass Today's Mix) --> <div id="dock-wrap" class="dockWrap" data-astro-cid-ctg3m53h> <nav id="dock-nav" class="dock px-4 sm:px-8 lg:px-12" data-astro-cid-ctg3m53h> <ul class="flex items-center justify-center gap-6 sm:gap-8 text-sm flex-wrap" data-astro-cid-ctg3m53h> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#hardnews" data-section="hardnews" data-astro-cid-ctg3m53h>Hard News</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#features" data-section="features" data-astro-cid-ctg3m53h>Features</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#breaking" data-section="breaking" data-astro-cid-ctg3m53h>Breaking</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#docs" data-section="docs" data-astro-cid-ctg3m53h>Docs</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#opinion" data-section="opinion" data-astro-cid-ctg3m53h>Opinion</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#heartwarming" data-section="heartwarming" data-astro-cid-ctg3m53h>Heartwarming</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#promo" data-section="promo" data-astro-cid-ctg3m53h>Promo</a></li> </ul> </nav> </div> </div> </header>  <script>
  (() => {
    const dockWrap = document.getElementById("dock-wrap");
    const dock = document.getElementById("dock-nav");
    if (!dockWrap || !dock) return;

    // Section navigation functionality
    const sectionLinks = document.querySelectorAll('.section-link');
    sectionLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.dataset.section;
        
        // First, scroll to the sticky tabs area
        const tabsElement = document.getElementById('section-tabs');
        if (tabsElement) {
          tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Wait for scroll to complete, then activate the tab
          setTimeout(() => {
            const targetTab = document.querySelector(\`[data-tab="\${sectionId}"]\`);
            if (targetTab) {
              targetTab.click();
            }
          }, 500);
        }
      });
    });

    // Collapsing dock functionality
    let sentinel = document.querySelector("[data-mix-sentinel]");
    const mix = document.getElementById("todays-mix");

    let heroSentinel = document.querySelector("[data-hero-sentinel]");
    const hero =
      document.getElementById("top-story") ||
      document.getElementById("hero") ||
      document.querySelector("[data-hero]") ||
      document.querySelector("main > section") ||
      null;

    if (!heroSentinel && hero) {
      heroSentinel = document.createElement("div");
      heroSentinel.setAttribute("data-hero-sentinel", "");
      heroSentinel.style.height = "1px";
      heroSentinel.style.width = "1px";
      heroSentinel.style.pointerEvents = "none";
      hero.insertAdjacentElement("afterend", heroSentinel);
    }

    let allowCollapse = !heroSentinel;

    let enabled = true;
    let shown = true;
    let lastY = window.scrollY || 0;
    let lastCollapseGateY = window.scrollY || 0;

    const setDock = ({ enable, show }) => {
      enabled = enable;
      shown = show;

      dockWrap.classList.toggle("is-disabled", !enabled);
      dockWrap.classList.toggle("is-hidden", enabled && !shown);
    };

    const hasSentinel = !!sentinel;

    if (heroSentinel) {
      const heroIO = new IntersectionObserver((entries) => {
        const entry = entries[0];
        const pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        allowCollapse = pastHero;

        if (!allowCollapse) {
          lastToggleY = window.scrollY || 0;
          lastCollapseGateY = window.scrollY || 0;
          setDock({ enable: true, show: true });
        }
      }, { threshold: 0 });

      heroIO.observe(heroSentinel);
    }

    if (hasSentinel) {
      const io = new IntersectionObserver((entries) => {
        const entry = entries[0];

        const pastMix = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        const active = !pastMix;

        setDock({ enable: active, show: active ? true : false });
        if (active) {
          lastToggleY = window.scrollY || 0;
          lastCollapseGateY = window.scrollY || 0;
        }
      }, { threshold: 0 });

      io.observe(sentinel);
    }

    const HIDE_AFTER_PX = 90;
    const SHOW_AFTER_PX = 50;

    let lastToggleY = window.scrollY || 0;

    const onScroll = () => {
      const y = window.scrollY || 0;
      const delta = y - lastY;
      lastY = y;

      if (hasSentinel && !enabled) return;

      if (y <= 8) {
        lastToggleY = y;
        setDock({ enable: true, show: true });
        return;
      }

      if (!allowCollapse) return;

      if (delta > 0) {
        const base = Math.max(lastToggleY, lastCollapseGateY);
        if (shown && (y - base) >= HIDE_AFTER_PX) {
          lastToggleY = y;
          setDock({ enable: true, show: false });
        }
        return;
      }

      if (delta < 0) {
        if (!shown && (lastToggleY - y) >= SHOW_AFTER_PX) {
          lastToggleY = y;
          setDock({ enable: true, show: true });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
  })();
<\/script>`], ["", '<header id="site-header"', ` class="sticky top-0 z-50 transition-colors duration-200 bg-black text-white" data-astro-cid-ctg3m53h> <div class="mx-auto w-full max-w-[1440px]" data-astro-cid-ctg3m53h> <!-- Top utility bar --> <div class="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-3 border-b border-white/10" data-astro-cid-ctg3m53h> <!-- Logo centered --> <div class="flex-1" data-astro-cid-ctg3m53h></div> <a href="/" class="text-center" aria-label="TNN Home" data-astro-cid-ctg3m53h> <div class="flex items-center justify-center gap-2" data-astro-cid-ctg3m53h> <span class="text-2xl sm:text-3xl font-semibold tracking-tight" data-astro-cid-ctg3m53h>TNN</span> <span class="text-sm text-red-500 font-bold" data-astro-cid-ctg3m53h>100</span> </div> <div class="text-[9px] uppercase tracking-[0.3em] opacity-70 mt-0.5" data-astro-cid-ctg3m53h>
Tech News Network
</div> </a> <!-- Right utility links --> <div class="flex-1 flex items-center justify-end gap-4" data-astro-cid-ctg3m53h> <a class="hidden sm:block text-sm hover:opacity-70 transition-opacity" href="/newsletter" data-astro-cid-ctg3m53h>Newsletter</a> <a class="hidden sm:block text-sm hover:opacity-70 transition-opacity" href="/signin" data-astro-cid-ctg3m53h>Sign In</a> <button class="bg-[#1b2a6b] text-white px-4 py-1.5 text-sm font-medium hover:bg-[#142152] transition-colors rounded" data-astro-cid-ctg3m53h>
Subscribe
</button> <button class="hover:opacity-70 transition-opacity" aria-label="Search" data-astro-cid-ctg3m53h> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ctg3m53h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ctg3m53h></path> </svg> </button> </div> </div> <!-- Bottom Navigation Bar (this is the "dock" that should hide on scroll down, show on scroll up,
         and COMPLETELY DISABLE after you pass Today's Mix) --> <div id="dock-wrap" class="dockWrap" data-astro-cid-ctg3m53h> <nav id="dock-nav" class="dock px-4 sm:px-8 lg:px-12" data-astro-cid-ctg3m53h> <ul class="flex items-center justify-center gap-6 sm:gap-8 text-sm flex-wrap" data-astro-cid-ctg3m53h> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#hardnews" data-section="hardnews" data-astro-cid-ctg3m53h>Hard News</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#features" data-section="features" data-astro-cid-ctg3m53h>Features</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#breaking" data-section="breaking" data-astro-cid-ctg3m53h>Breaking</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#docs" data-section="docs" data-astro-cid-ctg3m53h>Docs</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#opinion" data-section="opinion" data-astro-cid-ctg3m53h>Opinion</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#heartwarming" data-section="heartwarming" data-astro-cid-ctg3m53h>Heartwarming</a></li> <li data-astro-cid-ctg3m53h><a class="hover:opacity-70 transition-opacity font-medium section-link" href="#promo" data-section="promo" data-astro-cid-ctg3m53h>Promo</a></li> </ul> </nav> </div> </div> </header>  <script>
  (() => {
    const dockWrap = document.getElementById("dock-wrap");
    const dock = document.getElementById("dock-nav");
    if (!dockWrap || !dock) return;

    // Section navigation functionality
    const sectionLinks = document.querySelectorAll('.section-link');
    sectionLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.dataset.section;
        
        // First, scroll to the sticky tabs area
        const tabsElement = document.getElementById('section-tabs');
        if (tabsElement) {
          tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Wait for scroll to complete, then activate the tab
          setTimeout(() => {
            const targetTab = document.querySelector(\\\`[data-tab="\\\${sectionId}"]\\\`);
            if (targetTab) {
              targetTab.click();
            }
          }, 500);
        }
      });
    });

    // Collapsing dock functionality
    let sentinel = document.querySelector("[data-mix-sentinel]");
    const mix = document.getElementById("todays-mix");

    let heroSentinel = document.querySelector("[data-hero-sentinel]");
    const hero =
      document.getElementById("top-story") ||
      document.getElementById("hero") ||
      document.querySelector("[data-hero]") ||
      document.querySelector("main > section") ||
      null;

    if (!heroSentinel && hero) {
      heroSentinel = document.createElement("div");
      heroSentinel.setAttribute("data-hero-sentinel", "");
      heroSentinel.style.height = "1px";
      heroSentinel.style.width = "1px";
      heroSentinel.style.pointerEvents = "none";
      hero.insertAdjacentElement("afterend", heroSentinel);
    }

    let allowCollapse = !heroSentinel;

    let enabled = true;
    let shown = true;
    let lastY = window.scrollY || 0;
    let lastCollapseGateY = window.scrollY || 0;

    const setDock = ({ enable, show }) => {
      enabled = enable;
      shown = show;

      dockWrap.classList.toggle("is-disabled", !enabled);
      dockWrap.classList.toggle("is-hidden", enabled && !shown);
    };

    const hasSentinel = !!sentinel;

    if (heroSentinel) {
      const heroIO = new IntersectionObserver((entries) => {
        const entry = entries[0];
        const pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        allowCollapse = pastHero;

        if (!allowCollapse) {
          lastToggleY = window.scrollY || 0;
          lastCollapseGateY = window.scrollY || 0;
          setDock({ enable: true, show: true });
        }
      }, { threshold: 0 });

      heroIO.observe(heroSentinel);
    }

    if (hasSentinel) {
      const io = new IntersectionObserver((entries) => {
        const entry = entries[0];

        const pastMix = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        const active = !pastMix;

        setDock({ enable: active, show: active ? true : false });
        if (active) {
          lastToggleY = window.scrollY || 0;
          lastCollapseGateY = window.scrollY || 0;
        }
      }, { threshold: 0 });

      io.observe(sentinel);
    }

    const HIDE_AFTER_PX = 90;
    const SHOW_AFTER_PX = 50;

    let lastToggleY = window.scrollY || 0;

    const onScroll = () => {
      const y = window.scrollY || 0;
      const delta = y - lastY;
      lastY = y;

      if (hasSentinel && !enabled) return;

      if (y <= 8) {
        lastToggleY = y;
        setDock({ enable: true, show: true });
        return;
      }

      if (!allowCollapse) return;

      if (delta > 0) {
        const base = Math.max(lastToggleY, lastCollapseGateY);
        if (shown && (y - base) >= HIDE_AFTER_PX) {
          lastToggleY = y;
          setDock({ enable: true, show: false });
        }
        return;
      }

      if (delta < 0) {
        if (!shown && (lastToggleY - y) >= SHOW_AFTER_PX) {
          lastToggleY = y;
          setDock({ enable: true, show: true });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
  })();
<\/script>`])), maybeRenderHead(), addAttribute(initialTheme, "data-theme"));
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/components/SiteHeader.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 border-t border-black/10"> <div class="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 py-10"> <div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"> <div> <div class="text-lg font-semibold">TNN</div> <div class="text-sm opacity-80">Tech News Network — Brooklyn Tech</div> </div> <div class="grid grid-cols-2 gap-x-10 gap-y-3 text-sm"> <a class="opacity-80 hover:opacity-100" href="/section/news">News</a> <a class="opacity-80 hover:opacity-100" href="/section/features">Features</a> <a class="opacity-80 hover:opacity-100" href="/section/opinion">Opinion</a> <a class="opacity-80 hover:opacity-100" href="/section/video">Video</a> <a class="opacity-80 hover:opacity-100" href="/info">Info</a> <a class="opacity-80 hover:opacity-100" href="/">Home</a> </div> </div> <div class="mt-8 text-xs opacity-70">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Tech News Network (TNN). All rights reserved.
</div> </div> </footer>`;
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/components/SiteFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://tatertot0102.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "TNN",
    description = "Tech News Network \u2014 Brooklyn Tech video journalism.",
    headerTheme = "light"
    // "light" | "dark"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', ">", '</head> <body class="min-h-screen"> ', " <!-- Hero slot for edge-to-edge content --> ", ' <main class="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12"> ', " </main> ", ` <script>
      // Header theme switching (hero-aware)
      const header = document.getElementById("site-header");
      const hero = document.querySelector("[data-header-theme='dark']");

      if (header && hero) {
        const setHeaderTheme = (theme) => {
          header.dataset.theme = theme;
          header.classList.toggle("bg-black", theme === "dark");
          header.classList.toggle("text-white", theme === "dark");
          header.classList.toggle("bg-white", theme === "light");
          header.classList.toggle("text-black", theme === "light");
        };

        setHeaderTheme("dark");

        const heroObserver = new IntersectionObserver(
          ([entry]) => {
            setHeaderTheme(entry.isIntersecting ? "dark" : "light");
          },
          { threshold: 0.15 }
        );

        heroObserver.observe(hero);
      }

      // Section reveal on scroll (editorial pacing)
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el);
      });
    <\/script> </body> </html>`])), title, addAttribute(description, "content"), renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, { "initialTheme": headerTheme }), renderSlot($$result, $$slots["hero"]), renderSlot($$result, $$slots["default"]), renderComponent($$result, "SiteFooter", $$SiteFooter, {}));
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/layouts/BaseLayout.astro", void 0);

const $$Astro$3 = createAstro("https://tatertot0102.github.io");
const $$HeroSplit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroSplit;
  const {
    eyebrow = "Letter from the U.K.",
    title,
    dek,
    byline,
    runtime,
    thumbnail,
    href = "#",
    variant = "mosaic",
    // "split" | "full" | "half" | "mosaic"
    theme = "dark",
    date,
    category
  } = Astro2.props;
  const isFull = variant === "full";
  const isHalf = variant === "half";
  const isMosaic = variant === "mosaic";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(theme, "data-header-theme")}${addAttribute([
    "hero-section",
    isFull && "hero-section--full",
    isHalf && "hero-section--half",
    isMosaic && "hero-section--mosaic"
  ], "class:list")} data-astro-cid-tzrxf6mk> <!-- MOSAIC HERO - CINEMATIC CENTERPIECE --> ${isMosaic && renderTemplate`<div class="hero-mosaic" data-astro-cid-tzrxf6mk> <div class="hero-mosaic__container" data-astro-cid-tzrxf6mk> <!-- Content Column --> <div class="hero-mosaic__content" data-astro-cid-tzrxf6mk> ${category && renderTemplate`<div class="hero-mosaic__category" data-astro-cid-tzrxf6mk>${category}</div>`} <h1 class="hero-mosaic__title" data-astro-cid-tzrxf6mk>${title}</h1> ${dek && renderTemplate`<p class="hero-mosaic__dek" data-astro-cid-tzrxf6mk>${dek}</p>`} <div class="hero-mosaic__meta" data-astro-cid-tzrxf6mk> ${byline && renderTemplate`<div class="hero-mosaic__byline" data-astro-cid-tzrxf6mk>By ${byline}</div>`} ${date && renderTemplate`<div class="hero-mosaic__date" data-astro-cid-tzrxf6mk>${date}</div>`} </div> </div> <!-- Video Column --> <a${addAttribute(href, "href")} class="hero-mosaic__video" data-astro-cid-tzrxf6mk> <div class="hero-mosaic__video-container" data-astro-cid-tzrxf6mk> <img${addAttribute(thumbnail, "src")}${addAttribute(title, "alt")} class="hero-mosaic__video-thumb" data-astro-cid-tzrxf6mk> <div class="hero-mosaic__video-overlay" data-astro-cid-tzrxf6mk></div> <!-- Play Button --> <div class="hero-mosaic__play" data-astro-cid-tzrxf6mk> <svg width="28" height="28" viewBox="0 0 24 24" fill="none" data-astro-cid-tzrxf6mk> <path d="M8 5v14l11-7L8 5z" fill="currentColor" data-astro-cid-tzrxf6mk></path> </svg> </div> ${runtime && renderTemplate`<div class="hero-mosaic__runtime" data-astro-cid-tzrxf6mk> <svg width="10" height="10" viewBox="0 0 16 16" fill="none" data-astro-cid-tzrxf6mk> <path d="M3 2v12l10-6L3 2z" fill="currentColor" data-astro-cid-tzrxf6mk></path> </svg> <span data-astro-cid-tzrxf6mk>${runtime}</span> </div>`} </div> </a> </div> <!-- Scroll Indicator --> <button class="hero-mosaic__scroll" aria-label="Scroll to Today's Mix" data-astro-cid-tzrxf6mk> <span class="hero-mosaic__scroll-text" data-astro-cid-tzrxf6mk>Today's Mix</span> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-tzrxf6mk> <path d="M12 5v14M19 12l-7 7-7-7" data-astro-cid-tzrxf6mk></path> </svg> </button> </div>`} <!-- FULL BLEED HERO --> ${isFull && renderTemplate`<a${addAttribute(href, "href")} class="hero-full" data-astro-cid-tzrxf6mk> <div class="hero-full__media" data-astro-cid-tzrxf6mk> <img${addAttribute(thumbnail, "src")}${addAttribute(title, "alt")} class="hero-full__img" data-astro-cid-tzrxf6mk> <div class="hero-full__overlay" data-astro-cid-tzrxf6mk></div> </div> <div class="hero-full__content" data-astro-cid-tzrxf6mk> <div class="hero-full__container" data-astro-cid-tzrxf6mk> ${runtime && renderTemplate`<div class="hero-full__runtime" data-astro-cid-tzrxf6mk> <svg width="14" height="14" viewBox="0 0 16 16" fill="none" data-astro-cid-tzrxf6mk> <path d="M3 2v12l10-6L3 2z" fill="currentColor" data-astro-cid-tzrxf6mk></path> </svg> <span data-astro-cid-tzrxf6mk>${runtime}</span> </div>`} <div class="hero-full__eyebrow" data-astro-cid-tzrxf6mk>${eyebrow}</div> <h1 class="hero-full__title" data-astro-cid-tzrxf6mk>${title}</h1> ${byline && renderTemplate`<div class="hero-full__byline" data-astro-cid-tzrxf6mk>By ${byline}</div>`} ${dek && renderTemplate`<p class="hero-full__dek" data-astro-cid-tzrxf6mk>${dek}</p>`} </div> </div> </a>`} <!-- HALF-BLEED HERO --> ${isHalf && renderTemplate`<div class="hero-half" data-astro-cid-tzrxf6mk> <div class="hero-half__wrapper" data-astro-cid-tzrxf6mk> <!-- Left: Collage with images --> <div class="hero-half__collage" data-astro-cid-tzrxf6mk> <div class="hero-half__collage-bg" data-astro-cid-tzrxf6mk></div> <div class="hero-half__collage-main" data-astro-cid-tzrxf6mk> <img${addAttribute(thumbnail, "src")}${addAttribute(title, "alt")} class="hero-half__collage-img" data-astro-cid-tzrxf6mk> </div> <div class="hero-half__collage-accent-1" data-astro-cid-tzrxf6mk></div> <div class="hero-half__collage-accent-2" data-astro-cid-tzrxf6mk></div> <div class="hero-half__collage-accent-3" data-astro-cid-tzrxf6mk></div> ${runtime && renderTemplate`<div class="hero-half__runtime" data-astro-cid-tzrxf6mk> <svg width="12" height="12" viewBox="0 0 16 16" fill="none" data-astro-cid-tzrxf6mk> <path d="M3 2v12l10-6L3 2z" fill="currentColor" data-astro-cid-tzrxf6mk></path> </svg> <span data-astro-cid-tzrxf6mk>${runtime}</span> </div>`} </div> <!-- Right: Content --> <a${addAttribute(href, "href")} class="hero-half__content" data-astro-cid-tzrxf6mk> <div class="hero-half__eyebrow" data-astro-cid-tzrxf6mk>${eyebrow}</div> <h1 class="hero-half__title" data-astro-cid-tzrxf6mk>${title}</h1> ${dek && renderTemplate`<p class="hero-half__dek" data-astro-cid-tzrxf6mk>${dek}</p>`} ${byline && renderTemplate`<div class="hero-half__byline" data-astro-cid-tzrxf6mk>By ${byline}</div>`} <div class="hero-half__listen" data-astro-cid-tzrxf6mk> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-tzrxf6mk> <path d="M9 18V5l12-2v13M9 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" data-astro-cid-tzrxf6mk></path> </svg> <span data-astro-cid-tzrxf6mk>Listen</span> </div> </a> </div> </div>`} <!-- SPLIT HERO --> ${!isFull && !isHalf && !isMosaic && renderTemplate`<div class="hero-split" data-astro-cid-tzrxf6mk> <div class="hero-split__grid" data-astro-cid-tzrxf6mk> <!-- Left: Content --> <div class="hero-split__content" data-astro-cid-tzrxf6mk> <div class="hero-split__eyebrow" data-astro-cid-tzrxf6mk>${eyebrow}</div> <h1 class="hero-split__title" data-astro-cid-tzrxf6mk>${title}</h1> ${byline && renderTemplate`<div class="hero-split__byline" data-astro-cid-tzrxf6mk>By ${byline}</div>`} ${dek && renderTemplate`<p class="hero-split__dek" data-astro-cid-tzrxf6mk>${dek}</p>`} </div> <!-- Right: Media --> <a${addAttribute(href, "href")} class="hero-split__media" data-astro-cid-tzrxf6mk> <img${addAttribute(thumbnail, "src")}${addAttribute(title, "alt")} class="hero-split__img" data-astro-cid-tzrxf6mk> ${runtime && renderTemplate`<div class="hero-split__runtime" data-astro-cid-tzrxf6mk> <svg width="12" height="12" viewBox="0 0 16 16" fill="none" data-astro-cid-tzrxf6mk> <path d="M3 2v12l10-6L3 2z" fill="currentColor" data-astro-cid-tzrxf6mk></path> </svg> <span data-astro-cid-tzrxf6mk>${runtime}</span> </div>`} </a> </div> </div>`} </section>  ${renderScript($$result, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/components/HeroSplit.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/components/HeroSplit.astro", void 0);

const $$Astro$2 = createAstro("https://tatertot0102.github.io");
const $$TodaysMix = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TodaysMix;
  const { items = [] } = Astro2.props;
  const mix = items.slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<section class="mix" data-astro-cid-tzklkdu4> <div class="mix__container" data-astro-cid-tzklkdu4> <header class="mix__head" data-astro-cid-tzklkdu4> <h2 class="mix__title" data-astro-cid-tzklkdu4>Today's Mix</h2> <div class="mix__accent" data-astro-cid-tzklkdu4></div> </header> <div class="mix__grid" data-astro-cid-tzklkdu4> ${mix.map((item, idx) => renderTemplate`<article${addAttribute(`card card--${idx === 0 || idx === 3 ? "torn" : "clean"}`, "class")}${addAttribute(idx, "data-index")} data-astro-cid-tzklkdu4> <a class="card__link"${addAttribute(item.href, "href")}${addAttribute(item.title, "aria-label")} data-astro-cid-tzklkdu4> <div class="card__media" data-astro-cid-tzklkdu4> <img${addAttribute(item.thumbnail, "src")}${addAttribute(item.title, "alt")} loading="lazy" class="card__img" data-astro-cid-tzklkdu4> ${item.runtime && renderTemplate`<div class="card__badge" data-astro-cid-tzklkdu4> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="card__play-icon" data-astro-cid-tzklkdu4> <path d="M2 1.5v9l8-4.5-8-4.5z" fill="currentColor" data-astro-cid-tzklkdu4></path> </svg> <span class="card__time" data-astro-cid-tzklkdu4>${item.runtime}</span> </div>`} </div> <div class="card__content" data-astro-cid-tzklkdu4> <div class="card__top" data-astro-cid-tzklkdu4> ${item.section && renderTemplate`<span class="card__section" data-astro-cid-tzklkdu4>${item.section}</span>`} ${item.date && renderTemplate`<span class="card__date" data-astro-cid-tzklkdu4>${item.date}</span>`} </div> <h3 class="card__title" data-astro-cid-tzklkdu4>${item.title}</h3> ${item.dek && renderTemplate`<p class="card__dek" data-astro-cid-tzklkdu4>${item.dek}</p>`} ${item.byline && renderTemplate`<div class="card__byline" data-astro-cid-tzklkdu4>${item.byline}</div>`} </div> </a> </article>`)} </div> </div> </section> `;
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/components/TodaysMix.astro", void 0);

const $$Astro$1 = createAstro("https://tatertot0102.github.io");
const $$CtaBand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CtaBand;
  const { items = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-14"> <div class="h-px w-full bg-black/10"></div> <div class="py-10 grid grid-cols-1 gap-8 md:grid-cols-3"> ${items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group block"> <div class="text-xs uppercase tracking-[0.2em] opacity-60"> ${item.kicker} </div> <div class="mt-3 text-2xl leading-snug font-semibold"> ${item.title} </div> <div class="mt-3 text-[15px] leading-6 opacity-80"> ${item.body} </div> <div class="mt-5 text-sm underline underline-offset-4 opacity-80 group-hover:opacity-100"> ${item.cta} </div> </a>`)} </div> <div class="h-px w-full bg-black/10"></div> </section>`;
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/components/CtaBand.astro", void 0);

const $$Astro = createAstro("https://tatertot0102.github.io");
const $$StickySectionTabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StickySectionTabs;
  const { sections = [], initialSection = "hardnews" } = Astro2.props;
  const sectionConfigs = {
    hardnews: { cols: 3, limit: 6, showRuntime: true },
    features: { cols: 3, limit: 3, showRuntime: false },
    breaking: { cols: 2, limit: 4, showRuntime: false },
    docs: { cols: 3, limit: 3, showRuntime: true },
    opinion: { cols: 1, limit: 5, showRuntime: false },
    heartwarming: { cols: 2, limit: 4, showRuntime: false },
    promo: { cols: 3, limit: 3, showRuntime: false }
  };
  return renderTemplate`${maybeRenderHead()}<div class="sticky-sections-wrapper" data-astro-cid-ber2ccel> <nav class="sticky-tabs" id="section-tabs" data-astro-cid-ber2ccel> ${sections.map((section) => renderTemplate`<button${addAttribute(`sticky-tab ${section.id === initialSection ? "sticky-tab--active" : ""}`, "class")}${addAttribute(section.id, "data-tab")} data-astro-cid-ber2ccel> ${section.label} <span class="tab-underline" data-astro-cid-ber2ccel></span> </button>`)} </nav> <div class="sections-content" data-astro-cid-ber2ccel> <div class="sections-content__container" data-astro-cid-ber2ccel> ${sections.map((section) => {
    const config = sectionConfigs[section.id] || { cols: 3, limit: 6, showRuntime: false };
    return renderTemplate`<div${addAttribute(`section-panel ${section.id === initialSection ? "section-panel--active" : ""}`, "class")}${addAttribute(section.id, "data-panel")} data-astro-cid-ber2ccel>  ${section.featured && renderTemplate`<article class="featured-card" data-card data-astro-cid-ber2ccel> <a${addAttribute(section.featured.href, "href")} class="featured-card__link" data-astro-cid-ber2ccel> <div class="featured-card__media" data-astro-cid-ber2ccel> <div class="image-wrapper" data-astro-cid-ber2ccel> <img${addAttribute(section.featured.thumbnail, "src")}${addAttribute(section.featured.title, "alt")} loading="lazy" data-astro-cid-ber2ccel> <div class="image-grain" data-astro-cid-ber2ccel></div> </div> ${section.featured.runtime && renderTemplate`<div class="media-badge" data-astro-cid-ber2ccel> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" data-astro-cid-ber2ccel> <path d="M2 1.5v9l8-4.5-8-4.5z" fill="currentColor" data-astro-cid-ber2ccel></path> </svg> <span data-astro-cid-ber2ccel>${section.featured.runtime}</span> </div>`} </div> <div class="featured-card__content" data-astro-cid-ber2ccel> <span class="category-badge" data-astro-cid-ber2ccel>${section.featured.category}</span> <h3 class="featured-card__title" data-astro-cid-ber2ccel>${section.featured.title}</h3> ${section.featured.dek && renderTemplate`<p class="featured-card__dek" data-astro-cid-ber2ccel>${section.featured.dek}</p>`} <div class="meta" data-astro-cid-ber2ccel> ${section.featured.byline && renderTemplate`<span class="byline" data-astro-cid-ber2ccel>By ${section.featured.byline}</span>`} ${section.featured.date && renderTemplate`<span class="date" data-astro-cid-ber2ccel>${section.featured.date}</span>`} </div> </div> </a> </article>`}  <div${addAttribute(`items-grid items-grid--cols-${config.cols}`, "class")} data-astro-cid-ber2ccel> ${section.items?.slice(0, config.limit).map((item, idx) => renderTemplate`<article class="item-card" data-card${addAttribute(`--delay: ${idx * 0.1}s`, "style")} data-astro-cid-ber2ccel> <a${addAttribute(item.href, "href")} class="item-card__link" data-astro-cid-ber2ccel> <div class="item-card__media" data-astro-cid-ber2ccel> <div class="image-wrapper" data-astro-cid-ber2ccel> <img${addAttribute(item.thumbnail, "src")}${addAttribute(item.title, "alt")} loading="lazy" data-astro-cid-ber2ccel> <div class="image-grain" data-astro-cid-ber2ccel></div> </div> ${config.showRuntime && item.runtime && renderTemplate`<div class="media-badge media-badge--small" data-astro-cid-ber2ccel> <svg width="10" height="10" viewBox="0 0 12 12" fill="none" data-astro-cid-ber2ccel> <path d="M2 1.5v9l8-4.5-8-4.5z" fill="currentColor" data-astro-cid-ber2ccel></path> </svg> <span data-astro-cid-ber2ccel>${item.runtime}</span> </div>`} </div> <div class="item-card__content" data-astro-cid-ber2ccel> <span class="category-badge category-badge--small" data-astro-cid-ber2ccel>${item.category}</span> <h4 class="item-card__title" data-astro-cid-ber2ccel>${item.title}</h4> ${item.dek && renderTemplate`<p class="item-card__dek" data-astro-cid-ber2ccel>${item.dek}</p>`} <div class="meta" data-astro-cid-ber2ccel> ${item.byline && renderTemplate`<span class="byline" data-astro-cid-ber2ccel>By ${item.byline}</span>`} ${item.date && renderTemplate`<span class="date" data-astro-cid-ber2ccel>${item.date}</span>`} </div> </div> </a> </article>`)} </div> </div>`;
  })} </div> </div> </div> ${renderScript($$result, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/components/StickySectionTabs.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/components/StickySectionTabs.astro", void 0);

const supabaseUrl = "https://wixtoqubaovdigzolmfw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeHRvcXViYW92ZGlnem9sbWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyMjA1MjIsImV4cCI6MjA4NDc5NjUyMn0.j5wL_IuAwUSYQf8HCdAol5yutFMEdDYZ06nZa2h3-00";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: heroVideo } = await supabase.from("videos").select("*").eq("placement", "hero").eq("published", true).single();
  const { data: todaysMixRaw } = await supabase.from("videos").select("*").eq("placement", "todays-mix").eq("published", true).order("display_order", { ascending: true }).limit(4);
  const todaysMix = (todaysMixRaw || []).map((v) => ({
    title: v.title,
    dek: v.dek,
    byline: v.byline,
    runtime: v.runtime,
    thumbnail: v.thumbnail,
    href: v.href,
    section: v.category
  }));
  const sections = ["hardnews", "features", "breaking", "docs", "opinion", "heartwarming", "promo"];
  const sectionsData = [];
  for (const section of sections) {
    const { data: allSectionVideos } = await supabase.from("videos").select("*").eq("section", section).eq("published", true).eq("show_in_catalog", true).order("display_order", { ascending: true });
    const featured = allSectionVideos?.find((v) => v.placement === "section-featured");
    const items = allSectionVideos || [];
    sectionsData.push({
      id: section,
      label: section === "hardnews" ? "Hard News" : section.charAt(0).toUpperCase() + section.slice(1),
      featured: featured || void 0,
      items
    });
  }
  const ctaItems = [
    {
      kicker: "Info",
      title: "What is TNN?",
      body: "Learn how Tech News Network works, what we publish, and how our reporting teams run.",
      cta: "Go to Info \u2192",
      href: "/info"
    },
    {
      kicker: "Apply",
      title: "Join the newsroom",
      body: "Writers, anchors, camera ops, editors, designers. We train new members and build real skills.",
      cta: "Apply \u2192",
      href: "/info#apply"
    },
    {
      kicker: "Submit",
      title: "Send a tip or pitch",
      body: "Have a story idea? Drop a lead or pitch a segment\u2014fast, direct, and student-run.",
      cta: "Submit \u2192",
      href: "/info#submit"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "TNN \u2014 Home", "headerTheme": "dark" }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<section id="hero" data-hero> <div class="h-px w-full bg-black/10"></div> ${renderComponent($$result2, "TodaysMix", $$TodaysMix, { "items": todaysMix })} ${renderComponent($$result2, "CtaBand", $$CtaBand, { "items": ctaItems })} <div data-hero-sentinel aria-hidden="true" style="height: 1px;"></div> </section> ${renderComponent($$result2, "StickySectionTabs", $$StickySectionTabs, { "sections": sectionsData, "initialSection": "hardnews" })} `, "hero": async ($$result2) => renderTemplate`${heroVideo && renderTemplate`${renderComponent($$result2, "HeroSplit", $$HeroSplit, { "slot": "hero", "variant": heroVideo.hero_variant || "mosaic", "category": heroVideo.category, "title": heroVideo.title, "dek": heroVideo.dek, "byline": heroVideo.byline, "date": heroVideo.date, "runtime": heroVideo.runtime, "thumbnail": heroVideo.thumbnail, "href": heroVideo.href })}`}` })}`;
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/pages/index.astro", void 0);

const $$file = "/Users/zanewolf/Documents/GitHub/TNN4.0/src/pages/index.astro";
const $$url = "/TNN4.0";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
