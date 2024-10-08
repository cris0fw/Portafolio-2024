const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
const hamburguer = document.getElementById("hamburguer");
const icon = hamburguer?.querySelector("i");
const header = document.getElementById("navbar");
const sections = document.querySelectorAll<HTMLElement>("section");
const scrollUpBtn = document.getElementById("scroll-up");
let lastScrollY = window.scrollY;
import ScrollReveal from "scrollreveal";

// Función para cerrar el menú
const closeMenu = () => {
  navMenu?.classList.remove("left-[0]"); // Cierra el menú
  if (icon) {
    icon.classList.remove("ri-close-large-fill");
    icon.classList.add("ri-menu-line"); // Cambia el ícono de vuelta a "menu"
  }
};

// Evento para abrir/cerrar el menú al presionar el ícono de hamburguesa
hamburguer?.addEventListener("click", () => {
  navMenu?.classList.toggle("left-[0]");

  if (icon) {
    if (icon.classList.contains("ri-menu-line")) {
      icon.classList.remove("ri-menu-line");
      icon.classList.add("ri-close-large-fill");
    } else {
      icon.classList.remove("ri-close-large-fill");
      icon.classList.add("ri-menu-line");
    }
  }
});

// Evento para cerrar el menú cuando se hace clic en un enlace
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    closeMenu();
  });
});

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      header.classList.remove("border-b-2", "border-main_celeste");
    } else {
      if (window.scrollY > 0) {
        header.classList.add("border-b-2", "border-main_celeste");
      } else {
        header.classList.remove("border-b-2", "border-main_celeste");
      }
    }
    lastScrollY = window.scrollY;
  });
}

if (scrollUpBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollUpBtn?.classList.remove("opacity-0", "pointer-events-none");
    } else {
      scrollUpBtn?.classList.add("opacity-0", "pointer-events-none");
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`a[href="#${id}"]`) as Element;

      if (entry.isIntersecting) {
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(".home__data, .proyecto__section");
sr.reveal(".home__image", { delay: 500, scale: 0.5 });
sr.reveal(".proyecto__card", { interval: 100 });
