document.addEventListener("DOMContentLoaded", () => {
  /* Hamburger Menu Toggle */
  window.toggleMenu = function () {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
  };
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

  /* Scroll to Top Button */
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.id = "scrollToTop";
  scrollTopBtn.textContent = "↑";
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  /* Typing Animation */
  const typedSpan = document.getElementById("typed-name");
  const nameText = "Mudasar Aladgiri";
  let i = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!typedSpan) return;
    typedSpan.textContent = nameText.substring(0, i);

    if (!isDeleting && i < nameText.length) {
      i++;
      setTimeout(typeLoop, 150);
    } else if (isDeleting && i > 0) {
      i--;
      setTimeout(typeLoop, 100);
    } else {
      isDeleting = !isDeleting;
      setTimeout(typeLoop, 1200);
    }
  }

  typeLoop();

  /* Lightbox Overlay */
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.className = "lightbox-overlay";
  const lightboxImg = document.createElement("img");
  lightboxOverlay.appendChild(lightboxImg);
  document.body.appendChild(lightboxOverlay);

  document.querySelectorAll(".project-card img, .tab-content img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxOverlay.classList.add("active");
    });
  });

  lightboxOverlay.addEventListener("click", () => {
    lightboxOverlay.classList.remove("active");
  });

  /* Tab Switching (used in project1.html) */
  const tabButtons = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  /* Placeholder Add Button Alerts */
  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("This button is for future use. You can connect it to a form or CMS later.");
    });
  });

  /* Load TSParticles (if using particles background) */
  const particlesScript = document.createElement("script");
  particlesScript.src = "https://cdn.jsdelivr.net/npm/tsparticles@3.3.0/tsparticles.bundle.min.js";
  particlesScript.onload = () => {
    if (document.getElementById("tsparticles")) {
      tsParticles.load("tsparticles", {
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "#00bfa6" },
          links: {
            enable: true,
            distance: 120,
            color: "#00bfa6",
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      });
    }
  };
  document.head.appendChild(particlesScript);
});
// Lottie animation setup
  const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-avatar'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'stress.json' // Make sure this path is correct
  });

  // Hide loader on window load
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 1200); // loader shows for at least 1.2 sec
  });

  // Optional: show loader again when navigating between pages
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', e => {
      const target = e.currentTarget.getAttribute('href');
      if (target && !target.startsWith('#') && !target.startsWith('mailto')) {
        e.preventDefault();
        document.getElementById('loader').classList.remove('hidden');
        setTimeout(() => {
          window.location.href = target;
        }, 1200); // give loader a moment before navigating
      }
    });
  });

  /* ---------------------------
   Smooth Scroll for Internal Links
---------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
