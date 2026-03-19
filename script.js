// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80; // Height of fixed navbar
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Navbar background change on scroll
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.background =
      "linear-gradient(to bottom, rgba(74, 44, 82, 1), rgba(74, 44, 82, 0.95))";
  } else {
    navbar.style.background =
      "linear-gradient(to bottom, rgba(74, 44, 82, 0.95), rgba(74, 44, 82, 0.85))";
  }

  lastScroll = currentScroll;
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const galleryItems = document.querySelectorAll(".gallery-item img");

// Open lightbox when gallery image is clicked
galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    lightbox.classList.add("active");
    lightboxImg.src = this.src;
    lightboxImg.alt = this.alt;
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });
});

// Close lightbox when close button is clicked
lightboxClose.addEventListener("click", closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close lightbox with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});

// Close lightbox function
function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scrolling
  setTimeout(() => {
    lightboxImg.src = "";
  }, 300);
}

// Carousel functionality - Support for multiple carousels
const carousels = document.querySelectorAll(".carousel");
const carouselStates = new Map();

carousels.forEach((carousel, index) => {
  const carouselIndex = `carousel_${index}`;
  carouselStates.set(carouselIndex, 1);

  showCarouselSlide(carousel, 1);

  // Auto-play carousel (optional - every 5 seconds)
  setInterval(() => {
    moveCarouselSlide(carousel, 1);
  }, 5000);
});

function moveCarouselSlide(carousel, n) {
  const carouselIndex = Array.from(carousels).indexOf(carousel);
  const key = `carousel_${carouselIndex}`;
  const currentIndex = carouselStates.get(key) + n;
  carouselStates.set(key, currentIndex);
  showCarouselSlide(carousel, currentIndex);
}

function currentCarouselSlide(carousel, n) {
  const carouselIndex = Array.from(carousels).indexOf(carousel);
  const key = `carousel_${carouselIndex}`;
  carouselStates.set(key, n);
  showCarouselSlide(carousel, n);
}

function showCarouselSlide(carousel, n) {
  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".dot");

  if (slides.length === 0) return;

  let slideIndex = n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Update state
  const carouselIndex = Array.from(carousels).indexOf(carousel);
  const key = `carousel_${carouselIndex}`;
  carouselStates.set(key, slideIndex);

  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Remove active from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Show current slide and activate dot
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].classList.add("active");
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }
}

// Wrapper functions for onclick handlers
function moveSlide(n) {
  const carousel = event.target.closest(".carousel");
  moveCarouselSlide(carousel, n);
}

function currentSlide(n) {
  const carousel = event.target.closest(".carousel");
  currentCarouselSlide(carousel, n);
}
