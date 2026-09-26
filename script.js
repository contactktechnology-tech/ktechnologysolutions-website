/* © KTechnology Solutions. All rights reserved. */

const root = document.documentElement;
root.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileQuery = window.matchMedia("(max-width: 900px)");

function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("site-menu");
  if (!header || !menu) {
    return;
  }

  const items = Array.from(menu.querySelectorAll(".nav-item--dropdown"));

  const closeItem = (item, returnFocus = false) => {
    const trigger = item.querySelector(".nav-trigger");
    item.classList.remove("is-open");
    trigger?.setAttribute("aria-expanded", "false");
    if (returnFocus) {
      trigger?.focus();
    }
  };

  const closeAllItems = (except) => {
    items.forEach((item) => {
      if (item !== except) {
        closeItem(item);
      }
    });
  };

  items.forEach((item) => {
    const trigger = item.querySelector(".nav-trigger");
    trigger?.addEventListener("click", () => {
      const open = !item.classList.contains("is-open");
      closeAllItems(item);
      item.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
    });

    item.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && item.classList.contains("is-open")) {
        event.stopPropagation();
        closeItem(item, true);
      }
    });

    item.addEventListener("focusout", (event) => {
      if (!mobileQuery.matches && !item.contains(event.relatedTarget)) {
        closeItem(item);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) {
      closeAllItems();
    }
  });

  if (!toggle) {
    return;
  }

  const label = toggle.querySelector(".sr-only");

  const setMenu = (open, returnFocus = false) => {
    header.classList.toggle("nav-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    if (label) {
      label.textContent = open ? "Close menu" : "Open menu";
    }
    if (!open) {
      closeAllItems();
      if (returnFocus) {
        toggle.focus();
      }
    }
  };

  toggle.addEventListener("click", () => {
    setMenu(!header.classList.contains("nav-open"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!header.classList.contains("nav-open")) {
      if (event.key === "Escape") {
        closeAllItems();
      }
      return;
    }

    if (event.key === "Escape") {
      setMenu(false, true);
      return;
    }

    if (event.key === "Tab") {
      const focusable = [toggle, ...menu.querySelectorAll("a[href], button")].filter(
        (el) => el.offsetParent !== null
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      setMenu(false);
    }
  });
}

function initReveal() {
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    return;
  }

  const targets = Array.from(
    document.querySelectorAll(
      ".service-card, .card-link, .principle, .approach-step, .ecosystem-card, " +
        ".authority-item, .client-item, .detail-point, .founder-quote, .ladder-step"
    )
  );

  const fold = window.innerHeight;
  const pending = targets.filter((el) => el.getBoundingClientRect().top > fold);
  if (!pending.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const siblings = Array.from(entry.target.parentElement?.children ?? []);
        const index = Math.min(siblings.indexOf(entry.target), 6);
        entry.target.style.transitionDelay = `${index * 50}ms`;
        entry.target.classList.remove("is-pending");
        observer.unobserve(entry.target);
        entry.target.addEventListener(
          "transitionend",
          () => entry.target.style.removeProperty("transition-delay"),
          { once: true }
        );
      });
    },
    { threshold: 0.08 }
  );

  pending.forEach((el) => {
    el.setAttribute("data-reveal", "");
    el.classList.add("is-pending");
    observer.observe(el);
  });
}

function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function initContactSuccess() {
  const onContact =
    location.pathname === "/contact" || location.pathname.endsWith("/contact.html");
  if (onContact && new URLSearchParams(location.search).get("sent") === "1") {
    const success = document.getElementById("form-success");
    if (success) {
      success.hidden = false;
      success.focus();
    }
  }
}

function initAnalytics() {
  import("https://esm.sh/@vercel/analytics@2.0.1")
    .then(({ inject }) => inject())
    .catch(() => {});
}

function init() {
  initNavigation();
  initYear();
  initContactSuccess();
  initReveal();
  initAnalytics();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
