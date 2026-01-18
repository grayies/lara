// menu toggle show
const menuToggle = document.querySelector(".menu-toggle");
gsap.set(menuToggle, {
  opacity: 0,
  width: "60px",
  display: "none",
  zIndex: -1,
});

ScrollTrigger.create({
  trigger: ".speacial-text-container",
  start: "top center",
  end: "top center",
  onEnter: () => {
    gsap.to(menuToggle, {
      width: "120px",
      display: "block",
      opacity: 1,
      duration: 0.3,
    });
  },
  onLeaveBack: () => {
    gsap.to(menuToggle, {
      opacity: 0,
      display: "none",
      zIndex: -1,
      width: "60px",
      duration: 0.3,
      onComplete: () =>
        gsap.set(menuToggle, {
          width: "60px",
          opacity: 0,
          display: "none",
          zIndex: -1,
        }),
    });
  },
});

gsap.registerPlugin(ScrollTrigger);

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
        // display: "block",
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
// .samples-image after continuous flow animation
gsap.utils.toArray(".samples-image").forEach((container) => {
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

// Premium card hover animations
// CustomEase.create("luxuryEase", "M0,0 C0.4,0.1 0.2,0.9 1,1"); // Custom easing for premium feel

// document.querySelectorAll(".card-bestseller").forEach((card) => {
//   const elementsToShow = card.querySelectorAll(
//     ".badge-bestseller, h4, .desc-bestseller, .meta-bestseller, .price-bestseller"
//   );
//   const image = card.querySelector(".product-thumb-bestseller");
//   const button = card.querySelector(".btn-bestseller");
//   const overlay = card.querySelector("::before"); // Pseudo-element handled via CSS

//   // Create a timeline for hover
//   const hoverTimeline = gsap.timeline({ paused: true });

//   // Image scale
//   hoverTimeline.to(
//     image,
//     {
//       scale: 1.05,
//       duration: 0.5,
//       ease: "luxuryEase",
//     },
//     0
//   );

//   // Overlay fade-in (via CSS, triggered by class)
//   hoverTimeline.to(
//     card,
//     {
//       onStart: () => card.classList.add("hovered"),
//       onReverseComplete: () => card.classList.remove("hovered"),
//     },
//     0
//   );

//   // Text elements reveal
//   hoverTimeline.to(
//     elementsToShow,
//     {
//       opacity: 1,
//       y: 0,
//       visibility: "visible",
//       duration: 0.5,
//       stagger: 0.1,
//       ease: "luxuryEase",
//     },
//     0.2
//   );

//   // Button pulse and glow
//   hoverTimeline.to(
//     button,
//     {
//       scale: 1.1,
//       boxShadow:
//         "0 0 15px rgba(255, 255, 255, 0.5), 0 8px 18px rgba(0, 0, 0, 0.2)",
//       duration: 0.3,
//       ease: "luxuryEase",
//       yoyo: true,
//       repeat: 1,
//     },
//     0.3
//   );

//   // Event listeners
//   card.addEventListener("mouseenter", () => hoverTimeline.play());
//   card.addEventListener("mouseleave", () => hoverTimeline.reverse());
// });
// Floating animation for bestseller cards
gsap.utils
  .toArray(
    ".card-bestseller, .content-bestseller, .content-inner-bestseller, .hero-bestseller, .samples-image ,.samples-image::after"
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
// section indicator text update
const sectionText = document.querySelector(".section-text");

// breakpoints where each next section starts
const offsets = [0, 400, 1200, 1700];
// corresponding labels
const labels = ["hero-01", "best-sellers-02", "samples-03", "footer-04"];

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // find the last offset that scrollTop has passed
  let index = 0;
  for (let i = 0; i < offsets.length; i++) {
    if (scrollTop >= offsets[i]) index = i;
  }

  const newText = labels[index];

  if (sectionText.textContent !== newText) {
    sectionText.classList.remove("glow-text", "fade-scale");
    sectionText.style.opacity = "0";

    setTimeout(() => {
      sectionText.textContent = newText;
      sectionText.classList.add("glow-text", "fade-scale");
      sectionText.style.opacity = "1";
    }, 200);
  }
});
// section indicator text update
// Side Cart Functionality
// ==================== FULLY FIXED SIDE CART SYSTEM ====================

class ShoppingCart {
  constructor() {
    this.items = [];
    this.cartElement = document.getElementById("sideCart");
    this.overlay = document.getElementById("cartOverlay");
    this.itemsContainer = document.getElementById("cartItems");
    this.subtotalElement = document.getElementById("cartSubtotal");
    this.openButtons = document.querySelectorAll('a[href="#cart"]');
    this.closeButton = document.getElementById("closeCart");

    this.loadFromStorage();
    this.initEvents();
    this.render();
  }

  initEvents() {
    // Open cart
    this.openButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.open();
      });
    });

    // Close cart
    this.closeButton.addEventListener("click", () => this.close());
    this.overlay.addEventListener("click", () => this.close());

    // Add to cart buttons (hover icons + quick view)
    document
      .querySelectorAll(".add-to-cart-btn, .qv-add-to-cart")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          const card =
            btn.closest(".card-bestseller") ||
            btn.closest(".hero-bestseller") ||
            btn.closest("#quickViewContent");

          const titleEl = card.querySelector("h4, .hero-title, #modalTitle");
          const priceEl =
            card.querySelector(".new-price, #modalPrice") ||
            card.querySelector(".price-bestseller");
          const imgEl = card.querySelector(
            ".product-thumb-bestseller, .big, #modalImage"
          );

          if (!titleEl || !priceEl || !imgEl) return;

          const title = titleEl.textContent.trim();
          const priceText = priceEl.textContent.trim();
          const price = parseFloat(priceText.replace(/[^0-9.]/g, "")); // cleanly extract numbers
          const imgSrc = imgEl.src;

          this.addItem({ title, price, imgSrc });

          this.addItem({ title, price, imgSrc });
          closeQuickView?.(); // Close quick view if open
        });
      });
  }

  addItem(product) {
    const existing = this.items.find((item) => item.title === product.title);
    if (existing) {
      existing.quantity += 1;
      this.animateUpdate(existing);
    } else {
      const newItem = { ...product, quantity: 1, id: Date.now() };
      this.items.push(newItem);
      this.animateAdd(newItem);
    }

    this.saveToStorage();
    this.render();
    this.open();
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
    this.saveToStorage();
    this.render();
  }

  updateQuantity(id, change) {
    const item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity = Math.max(1, item.quantity + change);
      this.saveToStorage();
      this.render();
    }
  }

  getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  open() {
    gsap.to(this.cartElement, { x: 0, duration: 0.4, ease: "power2.out" });
    this.overlay.style.display = "block";
    lenis.stop();
  }

  close() {
    gsap.to(this.cartElement, {
      x: "100%",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        this.overlay.style.display = "none";
        lenis.start();
      },
    });
  }

  render() {
    if (this.items.length === 0) {
      this.itemsContainer.innerHTML =
        '<p style="color: #777; text-align: center;">Your cart is empty.</p>';
      this.subtotalElement.textContent = "$0.00";
      return;
    }

    this.itemsContainer.innerHTML = "";
    this.items.forEach((item) => {
      const itemEl = document.createElement("div");
      itemEl.className = "cart-item";
      itemEl.style.cssText = `
        display: flex; align-items: center; gap: 12px; 
        padding: 12px 0; border-bottom: 1px solid #eee;
        opacity: 0; transform: translateY(20px);
      `;

      itemEl.innerHTML = `
        <img src="${item.imgSrc}" alt="${
        item.title
      }" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
        <div style="flex: 1;">
          <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 4px;">${
            item.title
          }</div>
          <div style="color: #d97706; font-weight: 600;">$${item.price.toFixed(
            2
          )}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="qty-btn" data-id="${item.id}" data-change="-1" 
            style="width: 28px; height: 28px; background: #f0f0f0; border: none; border-radius: 50%; cursor: pointer;">-</button>
          <span style="min-width: 24px; text-align: center; font-weight: 600;">${
            item.quantity
          }</span>
          <button class="qty-btn" data-id="${item.id}" data-change="1" 
            style="width: 28px; height: 28px; background: #d97706; color: white; border: none; border-radius: 50%; cursor: pointer;">+</button>
        </div>
        <button class="remove-item" data-id="${item.id}" 
          style="background: none; border: none; cursor: pointer; color: #999; font-size: 1.3rem;">×</button>
      `;

      this.itemsContainer.appendChild(itemEl);

      // Animate in
      gsap.to(itemEl, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.1,
      });

      // Quantity & remove events
      itemEl.querySelectorAll(".qty-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.updateQuantity(item.id, parseInt(btn.dataset.change));
        });
      });

      itemEl.querySelector(".remove-item").addEventListener("click", () => {
        gsap.to(itemEl, {
          opacity: 0,
          x: 50,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => this.removeItem(item.id),
        });
      });
    });

    this.subtotalElement.textContent = "$" + this.getTotal().toFixed(2);
  }

  animateAdd(item) {
    gsap.fromTo(
      ".side-cart",
      {
        boxShadow: "0 0 0 rgba(217, 119, 6, 0)",
      },
      {
        boxShadow: "0 0 30px rgba(217, 119, 6, 0.4)",
        duration: 0.6,
        yoyo: true,
        repeat: 1,
      }
    );
  }

  animateUpdate(item) {
    const el = document
      .querySelector(`[data-id="${item.id}"]`)
      ?.closest(".cart-item");
    if (el) {
      gsap.fromTo(
        el,
        { scale: 1 },
        { scale: 1.08, duration: 0.2, yoyo: true, repeat: 1 }
      );
    }
  }

  saveToStorage() {
    localStorage.setItem("laraCart", JSON.stringify(this.items));
  }

  loadFromStorage() {
    const saved = localStorage.getItem("laraCart");
    if (saved) {
      this.items = JSON.parse(saved);
    }
  }
}

// Initialize cart when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.cart = new ShoppingCart();
});
// Side Cart Functionality
// sideCart.js - Side Cart Functionality
document.addEventListener("DOMContentLoaded", () => {
  const sideCart = document.getElementById("sideCart");
  const cartOverlay = document.getElementById("cartOverlay");
  const closeCartBtn = document.getElementById("closeCart");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartLink = document.querySelector('a[href="#cart"]');

  let cart = JSON.parse(localStorage.getItem("laraCart")) || [];

  // Open Cart
  function openCart() {
    sideCart.style.transform = "translateX(0)";
    cartOverlay.style.display = "block";
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      sideCart,
      { x: "100%" },
      { x: 0, duration: 0.4, ease: "power2.out" }
    );
    gsap.fromTo(cartOverlay, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }

  // Close Cart
  function closeCart() {
    gsap.to(sideCart, {
      x: "100%",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        sideCart.style.transform = "translateX(100%)";
        cartOverlay.style.display = "none";
        document.body.style.overflow = "";
      },
    });
    gsap.to(cartOverlay, { opacity: 0, duration: 0.3 });
  }

  // Update Cart UI
  function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        '<p style="color: #777; text-align: center;">Your cart is empty.</p>';
      cartSubtotal.textContent = "$0.00";
      updateCartCount();
      return;
    }

    cart.forEach((item, index) => {
      subtotal += item.price * item.quantity;

      const cartItem = document.createElement("div");
      cartItem.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 0;
        border-bottom: 1px solid #eee;
      `;

      cartItem.innerHTML = `
        <img src="${item.image}" alt="${
        item.name
      }" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px;">
        <div style="flex: 1;">
          <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600;">${
            item.name
          }</h4>
          <p style="margin: 4px 0; font-size: 0.85rem; color: #777;">${
            item.size || "100ml"
          }</p>
          <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
            <button class="qty-btn" data-index="${index}" data-action="decrease" style="width: 24px; height: 24px; border: 1px solid #ccc; background: #fff; cursor: pointer; border-radius: 4px; font-size: 0.8rem;">-</button>
            <span style="min-width: 20px; text-align: center; font-weight: 600;">${
              item.quantity
            }</span>
            <button class="qty-btn" data-index="${index}" data-action="increase" style="width: 24px; height: 24px; border: 1px solid #ccc; background: #fff; cursor: pointer; border-radius: 4px; font-size: 0.8rem;">+</button>
          </div>
        </div>
        <div style="text-align: right;">
          <p style="margin: 0; font-weight: 600;">$${(
            item.price * item.quantity
          ).toFixed(2)}</p>
          <button class="remove-item" data-index="${index}" style="background: none; border: none; color: #d97706; font-size: 0.8rem; cursor: pointer; margin-top: 6px;">Remove</button>
        </div>
      `;

      cartItemsContainer.appendChild(cartItem);
    });

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    updateCartCount();
    saveCart();
  }

  // Update Cart Icon Count
  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartNavItem = document.querySelector('a[href="#cart"] .text');
    if (cartNavItem) {
      cartNavItem.textContent = `cart (${totalItems})`;
    }
  }

  // Save to localStorage
  function saveCart() {
    localStorage.setItem("laraCart", JSON.stringify(cart));
  }

  // Add to Cart
  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    openCart();

    // Optional: GSAP success animation
    gsap.fromTo(
      ".side-cart",
      { boxShadow: "-2px 0 5px rgba(0,0,0,0.2)" },
      {
        boxShadow: "0 0 20px rgba(217, 119, 6, 0.4)",
        duration: 0.3,
        yoyo: true,
        repeat: 1,
      }
    );
  }

  // Event Listeners
  if (cartLink) {
    cartLink.addEventListener("click", (e) => {
      e.preventDefault();
      openCart();
    });
  }

  closeCartBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);

  // Quantity & Remove Buttons (Event Delegation)
  cartItemsContainer.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.index);
    const action = e.target.dataset.action;

    if (action === "increase") {
      cart[index].quantity += 1;
    } else if (action === "decrease") {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
    } else if (e.target.classList.contains("remove-item")) {
      cart.splice(index, 1);
    }

    updateCartUI();
  });

  // Add to Cart Buttons (from product cards)
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card-bestseller, .hero-bestseller");
      if (!card) return;

      let name, price, image;

      if (card.querySelector(".hero-title")) {
        // Full Collection (Hero)
        name = card.querySelector(".hero-title").textContent.trim();
        price = parseFloat(
          card.querySelector(".new-price").textContent.replace("$", "")
        );
        image = card.querySelector(".big").src;
      } else {
        // Regular Cards
        name = card.querySelector("h4").textContent.trim();
        price = parseFloat(
          card.querySelector(".new-price").textContent.replace("$", "")
        );
        image = card.querySelector(".product-thumb-bestseller").src;
      }

      const product = {
        id: Date.now() + Math.random(), // Unique ID
        name,
        price,
        image,
        size: "100ml",
      };

      addToCart(product);
    });
  });

  // Quick View "Add to Cart" (if you want it to work)
  document.addEventListener("click", (e) => {
    if (e.target.closest(".qv-add-to-cart")) {
      const modal = document.getElementById("quickViewModal");
      if (!modal) return;

      const name = document.getElementById("modalTitle").textContent;
      const price = parseFloat(
        document.getElementById("modalPrice").textContent.replace("$", "")
      );
      const image = document.getElementById("modalImage").src;

      addToCart({
        id: Date.now(),
        name,
        price,
        image,
        size: "100ml",
      });

      closeQuickView(); // assuming you have this function
    }
  });

  // Initialize
  updateCartUI();
  updateCartCount();
});
/* -------------------------------------------------
   QUICK VIEW – GSAP ANIMATED (pure CSS version)
   ------------------------------------------------- */
let quickTl;

function openQuickView(name, image, newPrice, oldPrice) {
  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewContent");
  const img = document.getElementById("modalImage");
  const details = document.querySelector(".qv-details-inner");
  const title = document.getElementById("modalTitle");
  const disc = document.getElementById("modalDiscountPrice");
  const finalP = document.getElementById("modalPrice");

  /* ---- fill data ---- */
  title.textContent = name.toUpperCase();
  img.src = image;
  disc.textContent = oldPrice; // Dynamic old price
  finalP.textContent = newPrice; // Dynamic new price

  /* ---- show modal ---- */
  modal.style.display = "flex";
  lenis.stop();

  /* ---- reset previous animation ---- */
  if (quickTl) quickTl.kill();

  gsap.set(content, { opacity: 1 });
  gsap.set(img, { opacity: 0, scale: 0.8 });
  gsap.set(details, { x: -120, opacity: 0 });

  /* ---- animate ---- */
  quickTl = gsap.timeline();
  quickTl
    .to(content, { opacity: 1, duration: 0.3 })
    .to(
      img,
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" },
      "-=0.2"
    )
    .to(
      details,
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );
}
function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewContent");

  if (quickTl) quickTl.reverse();

  setTimeout(() => {
    modal.style.display = "none";
    lenis.start();
    // document.body.style.overflow = "";
  }, 400);
}

/* ---- close on backdrop click ---- */
document.getElementById("quickViewModal").addEventListener("click", (e) => {
  if (e.target.id === "quickViewModal") closeQuickView();
});

/* ---- hook eye buttons (must run after DOM is ready) ---- */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-bestseller.btn2").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".card-bestseller");
      const title = card.querySelector("h4").textContent;
      const img = card.querySelector(".product-thumb-bestseller").src;
      const price = card.querySelector(".new-price").textContent;
      openQuickView(title, img, price);
    });
  });
});

/* ---- Add-to-cart from modal → side cart ---- */
document.body.addEventListener("click", (e) => {
  if (
    e.target.closest(".add-to-cart") &&
    e.target.closest("#quickViewContent")
  ) {
    const title = document.getElementById("modalTitle").textContent;
    const price = parseFloat(
      document.getElementById("modalPrice").textContent.replace("$", "")
    );

    const item = document.createElement("div");
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.alignItems = "center";
    item.style.marginBottom = "10px";
    item.innerHTML = `<span>${title}</span><span>$${price.toFixed(2)}</span>`;

    const container = document.getElementById("cartItems");
    container.innerHTML = "";
    container.appendChild(item);

    const subtotalEl = document.getElementById("cartSubtotal");
    const current = parseFloat(subtotalEl.textContent.replace("$", "")) || 0;
    subtotalEl.textContent = "$" + (current + price).toFixed(2);

    document.getElementById("sideCart").style.transform = "translateX(0)";
    document.getElementById("cartOverlay").style.display = "block";

    closeQuickView();
  }
});

// card icon animation :
// 1. Quick-View – reuse the function that already exists in the
//    second file (openQuickView). If you don’t have it, copy the
//    whole function from the Tailwind demo.
// -----------------------------------------------------------------
document.querySelectorAll(".quick-view-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = btn.closest(".card-bestseller, .hero-bestseller");
    if (!card) return;

    let title, img, newPrice, oldPrice;

    if (card.closest(".hero-bestseller")) {
      // Hero (Full Collection)
      title = card.querySelector(".hero-title").textContent.trim();
      img = card.querySelector(".big").src;
      oldPrice = card.querySelector(".old-price").textContent.trim();
      newPrice = card.querySelector(".new-price").textContent.trim();
    } else {
      // Regular Cards
      title = card.querySelector("h4").textContent.trim();
      img = card.querySelector(".product-thumb-bestseller").src;
      oldPrice = card.querySelector(".old-price").textContent.trim();
      newPrice = card.querySelector(".new-price").textContent.trim();
    }

    openQuickView(title, img, newPrice, oldPrice);
  });
});
// ====================== FAVORITES (HEART) – SHOW SIGN-IN TOAST ======================
document
  .querySelectorAll('.icon-btn[title="Add to favorites"]')
  .forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // ---- Change: Check if user is NOT signed in ----
      // You can replace this with your actual auth check (e.g., check a user object, cookie, etc.)
      const isSignedIn = false; // ← Set to `true` if user is logged in

      if (!isSignedIn) {
        showAuthToast();
        return;
      }

      // ---- If signed in, do your real favorite logic here ----
      // toggleFavorite(cardId);
      console.log("Favorite added (signed in)");
    });
  });

// Show toast function
function showAuthToast() {
  const toast = document.getElementById("authToast");
  if (!toast) return;

  // Remove any existing show class
  toast.classList.remove("show");

  // Force reflow
  void toast.offsetWidth;

  // Show
  toast.classList.add("show");

  // Auto hide after 4 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
// test best seller animation
