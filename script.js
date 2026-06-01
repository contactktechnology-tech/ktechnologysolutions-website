import { inject } from "https://esm.sh/@vercel/analytics@2.0.1";

inject();

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      navLinks?.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  navLinks?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      header?.classList.remove("nav-open");
      navLinks.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const targets = document.querySelectorAll(
    ".service-card, .principle, .approach-step, .ecosystem-card, " +
      ".authority-item, .client-item, .detail-point, .founder-quote"
  );

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const siblings = Array.from(entry.target.parentElement?.children ?? []);
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 55}ms`;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));

  const revealSections = document.querySelectorAll(".reveal");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealSections.forEach((el) => sectionObserver.observe(el));

  const onContact =
    location.pathname === "/contact" || location.pathname.endsWith("/contact.html");
  if (onContact && new URLSearchParams(location.search).get("sent") === "1") {
    const success = document.getElementById("form-success");
    if (success) {
      success.hidden = false;
      success.focus();
    }
  }
});
