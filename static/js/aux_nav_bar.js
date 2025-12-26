// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Update ScrollTrigger using Lenis scroll
lenis.on("scroll", ScrollTrigger.update);

// Animate logo with ScrollTrigger
const logoAnimation = gsap.from(".logo", {
  y: "50vh",
  scale: 6,
  yPercent: -50,
  scrollTrigger: {
    trigger: ".speacial-text-container",
    start: "top bottom",
    end: "top center",
    scrub: true,
  },
});

// Animate left menu collapse when logo reaches final position
gsap.to(".items-left li:not(:first-child)", {
  x: (i, target) => {
    const firstItem = document.querySelector(".items-left li:first-child");
    const targetRect = target.getBoundingClientRect();
    const firstRect = firstItem.getBoundingClientRect();
    return firstRect.left - targetRect.left;
  },
  duration: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".speacial-text-container",
    start: "top center", // When logo reaches final position
    end: "top center",
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
    onEnter: () => {
      // Show hamburger button
      document.querySelector(".hamburger").style.display = "block";
      gsap.to(".items-left li:not(:first-child)", {
        x: (i, target) => {
          const firstItem = document.querySelector(
            ".items-left li:first-child"
          );
          const targetRect = target.getBoundingClientRect();
          const firstRect = firstItem.getBoundingClientRect();
          return firstRect.left - targetRect.left;
        },
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.1,
        onComplete: () => {
          gsap.set(".items-left li:not(:first-child)", { display: "none" });
        },
      });
    },
    onLeaveBack: () => {
      // Revert menu to normal state when scrolling back up
      document.querySelector(".hamburger").style.display = "none";
      gsap.to(".items-left li:not(:first-child)", {
        display: "block",
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      });
    },
  },
});

// Fade and hide left menu items when logo scrolls down
gsap.to(".show-item", {
  scrollTrigger: {
    trigger: ".speacial-text-container",
    start: "top center",
    end: "top center",
    onEnter: () => {
      // Add fade-item class (hide them)
      document.querySelectorAll(".show-item").forEach((el) => {
        el.classList.add("fade-item");
        gsap.to(el, { opacity: 0, duration: 0.3 });
      });
    },
    onLeaveBack: () => {
      // Remove fade-item class (show them again)
      document.querySelectorAll(".show-item").forEach((el) => {
        el.classList.remove("fade-item");
        gsap.to(el, { opacity: 1, duration: 0.3 });
      });
    },
  },
});

// Hamburger menu toggle
const hamburger = document.createElement("div");
hamburger.className = "hamburger";
hamburger.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;
document.querySelector(".items-left").prepend(hamburger);

let menuOpen = false;
hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    gsap.to(".items-left li:not(:first-child)", {
      display: "block",
      x: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
    });
    hamburger.classList.add("open");
  } else {
    gsap.to(".items-left li:not(:first-child)", {
      x: (i, target) => {
        const firstItem = document.querySelector(".items-left li:first-child");
        const targetRect = target.getBoundingClientRect();
        const firstRect = firstItem.getBoundingClientRect();
        return firstRect.left - targetRect.left;
      },
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      onComplete: () => {
        gsap.set(".items-left li:not(:first-child)", { display: "none" });
      },
    });
    hamburger.classList.remove("open");
  }
});

// Smooth anchor links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (el) lenis.scrollTo(el);
  });
});
// Special heading continuous flow animation
gsap.utils.toArray(".speacial-text-container").forEach((container) => {
  const heading = container.querySelector(".special-heading");
  const paragraph = container.querySelector("p");

  // Animate heading
  gsap.to(heading, {
    y: -150,
    opacity: 0.8,
    scrollTrigger: {
      trigger: container,
      start: "top 90%",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });

  // Animate paragraph
  gsap.to(paragraph, {
    y: -120,
    opacity: 0.8,
    scrollTrigger: {
      trigger: container,
      start: "top 90%",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });
});

// Floating animation for bestseller cards
gsap.utils
  .toArray(
    ".card-bestseller, .content-bestseller, .discover-row-bestseller,.content-inner-bestseller, .hero-bestseller"
  )
  .forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 10, // Start slightly below
        // Start with slight transparency
      },
      {
        y: -10, // Float upwards
        opacity: 1, // Full opacity
        duration: 2, // Slower duration for smoother effect
        ease: "power1.inOut", // Softer easing for a gentle float
        scrollTrigger: {
          trigger: card,
          start: "top 50%", // Start when card enters viewport
          end: "bottom 20%", // End when card leaves viewport
          scrub: 2, // Smoother and slower scroll tie
          markers: false,
        },
        delay: index * 0.2, // Stagger each card's animation
      }
    );
  });
// best seller animation

// best seller animation
// menu
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(CustomEase);
  CustomEase.create(
    "hop",
    "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
  );

  const logoColor = document.querySelector(".logo-text");
  const navigationItems = document.querySelectorAll(".items-right li a .text");

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".link");
  const sociallinks = document.querySelectorAll(".socials p");
  let isAnimating = false;

  // Initialize element states
  gsap.set(menu, {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  });
  gsap.set(links, { y: 30, opacity: 0 });
  gsap.set(sociallinks, { y: 30, opacity: 0 });
  gsap.set(".video-wrapper", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  });
  gsap.set(".header h1 span", { y: 500, rotateY: 90, scale: 0.75 });

  const splitTextIntoSpans = (selector) => {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map(function (char) {
          return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");
      element.innerHTML = splitText;
    });
  };

  splitTextIntoSpans(".header h1");

  menuToggle.addEventListener("click", () => {
    if (isAnimating) return;
    if (menuToggle.classList.contains("closed")) {
      menuToggle.classList.remove("closed");
      menuToggle.classList.add("opened");
      menuToggle.classList.add("fade-item");
      isAnimating = true;
      // NEW: Lock scroll immediately on open
      lenis.stop();
      // document.body.style.overflow = "hidden";
      // NEW: Lock scroll immediately on open

      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        onStart: () => {
          menu.style.pointerEvents = "all";
        },
        onComplete: () => {
          isAnimating = false;
        },
      });
      gsap.to(links, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(sociallinks, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(".video-wrapper", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        delay: 0.5,
      });
      gsap.to(".header h1 span", {
        y: 0,
        rotateY: 0,
        scale: 1,
        stagger: 0.05,
        delay: 0.75,
        duration: 1.5,
        ease: "power4.out",
      });
      gsap.to(menuToggle, {
        width: "60px",
        opacity: 1,
        display: "block",
        duration: 0.3,
      });
      gsap.to(logoColor, {
        color: "#ffffff",
        duration: 0.5,
      });
      gsap.to(navigationItems, {
        color: "#ffffff",
        duration: 0.5,
      });
    } else {
      menuToggle.classList.remove("opened");
      menuToggle.classList.add("closed");
      isAnimating = true;
      gsap.to(menu, {
        duration: 0.1,
        onComplete: () => {
          // NEW: Unlock scroll after close animation finishes
          lenis.start();
          // document.body.style.overflow = "auto";
          // NEW: Unlock scroll after close animation finishes
        },
      });
      gsap.to(menu, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,

        onComplete: () => {
          menu.style.pointerEvents = "none";
          isAnimating = false;
        },
      });
      gsap.to(links, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(sociallinks, {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(".video-wrapper", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 0.5,
      });
      gsap.to(".header h1 span", {
        y: 500,
        rotateY: 90,
        scale: 0.75,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(menuToggle, {
        width: "120px",
        opacity: 1,
        display: "block",
        duration: 0.3,
      });
      gsap.to(logoColor, {
        color: "#000",
        duration: 0.5,
      });
      gsap.to(navigationItems, {
        color: "#000",
        duration: 0.5,
      });
    }
  });
});

// menu
