// blue wave
/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ydmggt-mr.myshopify.com",
      storefrontAccessToken: "9d3f54a067ce1ef505736f5ad45131fc",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8156918481011",
        node: document.getElementById("product-component-1766691260983"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",

                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            contents: {
              note: true,
            },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
// obsidian
/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ydmggt-mr.myshopify.com",
      storefrontAccessToken: "9d3f54a067ce1ef505736f5ad45131fc",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8156918579315",
        node: document.getElementById("product-component-1766695834349"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            contents: {
              note: true,
            },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ydmggt-mr.myshopify.com",
      storefrontAccessToken: "9d3f54a067ce1ef505736f5ad45131fc",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8156918677619",
        node: document.getElementById("product-component-1766696052542"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            contents: {
              note: true,
            },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ydmggt-mr.myshopify.com",
      storefrontAccessToken: "9d3f54a067ce1ef505736f5ad45131fc",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8156918775923",
        node: document.getElementById("product-component-1766696254210"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            contents: {
              note: true,
            },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
// naseem
/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ydmggt-mr.myshopify.com",
      storefrontAccessToken: "9d3f54a067ce1ef505736f5ad45131fc",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8156918546547",
        node: document.getElementById("product-component-1766697541291"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            contents: {
              note: true,
            },
            popup: false,
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
// shine
/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ydmggt-mr.myshopify.com",
      storefrontAccessToken: "9d3f54a067ce1ef505736f5ad45131fc",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8156918710387",
        node: document.getElementById("product-component-1766697735010"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            contents: {
              note: true,
            },
            popup: false,
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ydmggt-mr.myshopify.com",
      storefrontAccessToken: "9d3f54a067ce1ef505736f5ad45131fc",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8156918775923",
        node: document.getElementById("product-component-1766769910380"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif", // Keep your existing font or change if needed
                "font-size": "14px",
                "font-weight": "600",
                "padding-top": "6px",
                "padding-bottom": "6px",
                "padding-left": "14px",
                "padding-right": "14px",
                "background-color": "#8b0000",
                color: "#fff",
                "border-radius": "8px",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000", // Optional: darker shade on hover for better UX (adjust as needed)
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#000000",
                },
                "background-color": "#000000",
                ":focus": {
                  "background-color": "#000000",
                },
                "border-radius": "40px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            contents: {
              note: true,
            },
            popup: false,
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
/*<![CDATA[*/
/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  // Helper function to check if the customer is logged in
  // This works reliably on a Shopify store (returns true if logged in, false otherwise)
  async function isCustomerLoggedIn() {
    try {
      const response = await fetch("/account");
      // If logged in → 200 OK and not redirected
      // If not logged in → usually 302 redirect to /account/login
      return response.ok && !response.redirected;
    } catch (error) {
      console.error("Error checking login status:", error);
      return false;
    }
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ydmggt-mr.myshopify.com",
      storefrontAccessToken: "9d3f54a067ce1ef505736f5ad45131fc",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8156918579315",
        node: document.getElementById("product-component-1767968090732"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif",
                "font-size": "15px",
                "font-weight": "600",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "28px",
                "padding-right": "28px",
                "min-height": "46px",
                "min-width": "220px",
                "border-radius": "999px",
                "background-color": "#8b0000",
                color: "#fff",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000",
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Geneva, sans-serif",
                "font-size": "15px",
                "font-weight": "600",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "28px",
                "padding-right": "28px",
                "min-height": "46px",
                "min-width": "220px",
                "border-radius": "999px",
                "background-color": "#8b0000",
                color: "#fff",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000",
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Geneva, sans-serif",
                "font-size": "15px",
                "font-weight": "600",
                "padding-top": "12px",
                "padding-bottom": "12px",
                "padding-left": "28px",
                "padding-right": "28px",
                "min-height": "46px",
                "min-width": "220px",
                "border-radius": "999px",
                "background-color": "#8b0000",
                color: "#fff",
                "text-decoration": "none",
                "white-space": "nowrap",
                overflow: "visible",
                "text-overflow": "clip",
                transition: "background 0.2s ease, transform 0.15s ease",
                ":hover": {
                  "background-color": "#660000",
                },
                ":focus": {
                  "background-color": "#660000",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            contents: {
              note: true,
            },
            popup: false,
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
          },

          // ──────────────────────────────────────────────────────────────
          // CUSTOM: Intercept checkout to force sign-in first
          // ──────────────────────────────────────────────────────────────
          events: {
            afterInit: function (component) {
              // Only apply this to the cart component
              if (component.type === "cart") {
                const originalOnCheckout = component.onCheckout;

                component.onCheckout = async function () {
                  const isLoggedIn = await isCustomerLoggedIn();

                  if (isLoggedIn) {
                    // User is already signed in → proceed to Shopify checkout
                    originalOnCheckout.call(component);
                  } else {
                    // User is NOT signed in → redirect to login page
                    // Preserve the current cart state with ?return_to
                    const returnUrl = encodeURIComponent(
                      window.location.pathname + window.location.search
                    );
                    window.location.href =
                      "/account/login?return_to=" + returnUrl;
                  }
                };
              }
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
/*]]>*/
