(function () {
  var CATEGORY_META = {
    plastic: { href: "plastic-products.html", label: "Товары из пластика" },
    watering: { href: "watering-hoses.html", label: "Поливочные шланги" },
    food: { href: "food-hoses.html", label: "Пищевые шланги" },
  };

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function getProductId() {
    var params = new URLSearchParams(window.location.search);
    return params.get("id") || "";
  }

  function getColorFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get("color") || "";
  }

  function setUrlColor(productId, colorId) {
    var url = new URL(window.location.href);
    url.searchParams.set("id", productId);
    if (colorId) url.searchParams.set("color", colorId);
    else url.searchParams.delete("color");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  function mountProductSlider(root, images, title) {
    if (!root || !images || !images.length) return;

    if (root._sliderAbort) root._sliderAbort.abort();
    var ac = new AbortController();
    root._sliderAbort = ac;

    var track = root.querySelector(".product-slider__track");
    var btnPrev = root.querySelector("[data-slider-prev]");
    var btnNext = root.querySelector("[data-slider-next]");
    var dots = root.querySelector(".product-slider__dots");
    if (!track) return;

    if (images.length <= 1) root.classList.add("product-slider--single");
    else root.classList.remove("product-slider--single");

    track.innerHTML = "";
    images.forEach(function (src, i) {
      var li = document.createElement("li");
      li.className = "product-slider__slide";
      li.setAttribute("role", "group");
      li.setAttribute("aria-roledescription", "слайд");
      li.setAttribute("aria-label", i + 1 + " из " + images.length);
      var img = document.createElement("img");
      img.src = src;
      img.alt = title + " — фото " + (i + 1);
      img.loading = i === 0 ? "eager" : "lazy";
      li.appendChild(img);
      track.appendChild(li);
    });

    var index = 0;
    var n = images.length;

    function setTransform() {
      track.style.transform = "translateX(-" + index * 100 + "%)";
    }

    function updateUi() {
      setTransform();
      if (btnPrev) btnPrev.disabled = n <= 1;
      if (btnNext) btnNext.disabled = n <= 1;
      var dotEls = dots ? dots.querySelectorAll(".product-slider__dot") : [];
      dotEls.forEach(function (d, i) {
        d.classList.toggle("is-active", i === index);
        if (i === index) d.setAttribute("aria-current", "true");
        else d.removeAttribute("aria-current");
      });
      root.setAttribute("data-slider-index", String(index));
    }

    if (dots) dots.innerHTML = "";
    if (dots && n > 1) {
      for (var d = 0; d < n; d++) {
        (function (slideIndex) {
          var b = document.createElement("button");
          b.type = "button";
          b.className = "product-slider__dot";
          b.setAttribute("aria-label", "Показать фото " + (slideIndex + 1));
          b.addEventListener(
            "click",
            function () {
              index = slideIndex;
              updateUi();
            },
            { signal: ac.signal }
          );
          dots.appendChild(b);
        })(d);
      }
    }

    if (btnPrev) {
      btnPrev.addEventListener(
        "click",
        function () {
          index = (index - 1 + n) % n;
          updateUi();
        },
        { signal: ac.signal }
      );
    }
    if (btnNext) {
      btnNext.addEventListener(
        "click",
        function () {
          index = (index + 1) % n;
          updateUi();
        },
        { signal: ac.signal }
      );
    }

    updateUi();
  }

  function applySwatchStyle(el, swatch) {
    if (!swatch) {
      el.classList.add("product-color-picker__swatch--neutral");
      return;
    }
    if (swatch.indexOf("gradient") !== -1) {
      el.style.background = swatch;
    } else {
      el.style.backgroundColor = swatch;
    }
  }

  function mountColorPicker(container, product, onSelect) {
    if (!container || !product.colorVariants || product.colorVariants.length < 2) {
      container.hidden = true;
      container.innerHTML = "";
      return;
    }

    container.hidden = false;
    container.innerHTML = "";

    var label = document.createElement("p");
    label.className = "product-color-picker__title";
    label.id = "product-color-picker-label";
    label.textContent = product.variantPickerLabel || "Цвет";
    container.appendChild(label);

    var group = document.createElement("div");
    group.className = "product-color-picker__options";
    group.setAttribute("role", "radiogroup");
    group.setAttribute("aria-labelledby", "product-color-picker-label");

    var initial = window.ERAPT_resolveColorVariant(product, getColorFromUrl());

    product.colorVariants.forEach(function (v) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "product-color-picker__option";
      btn.setAttribute("role", "radio");
      btn.setAttribute("data-variant-id", v.id);
      btn.setAttribute("aria-checked", v.id === initial.id ? "true" : "false");

      var sw = document.createElement("span");
      sw.className = "product-color-picker__swatch";
      sw.setAttribute("aria-hidden", "true");
      applySwatchStyle(sw, v.swatch);

      var cap = document.createElement("span");
      cap.className = "product-color-picker__caption";
      cap.textContent = v.label;

      btn.appendChild(sw);
      btn.appendChild(cap);

      if (v.id === initial.id) btn.classList.add("is-active");

      btn.addEventListener("click", function () {
        group.querySelectorAll(".product-color-picker__option").forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-checked", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-checked", "true");
        setUrlColor(product.id, v.id);
        onSelect(v.id);
      });

      group.appendChild(btn);
    });

    container.appendChild(group);
  }

  function renderDescriptionBlock(descEl, product, colorId) {
    if (!descEl) return;
    descEl.innerHTML = "";
    var blocks = product.description;
    if (product.colorVariants && product.colorVariants.length) {
      var v = product.colorVariants.find(function (c) {
        return c.id === colorId;
      });
      if (!v) v = product.colorVariants[0];
      if (v && v.description && v.description.length) {
        blocks = v.description;
      }
    }
    (blocks || []).forEach(function (paragraph) {
      var p = document.createElement("p");
      if (
        paragraph &&
        typeof paragraph === "object" &&
        paragraph.lead &&
        typeof paragraph.text === "string"
      ) {
        p.className = "product-description__lead";
        p.textContent = paragraph.text;
      } else if (
        paragraph &&
        typeof paragraph === "object" &&
        paragraph.sub &&
        typeof paragraph.text === "string"
      ) {
        p.className = "product-description__subhead";
        p.textContent = paragraph.text;
      } else {
        p.textContent = paragraph;
      }
      descEl.appendChild(p);
    });
  }

  function showNotFound(root) {
    var layout = root.querySelector(".product-page__layout");
    var nf = root.querySelector(".product-page__not-found");
    var crumbs = root.querySelector(".product-breadcrumbs");
    if (layout) layout.hidden = true;
    if (crumbs) crumbs.hidden = true;
    if (nf) nf.hidden = false;
    document.title = "Товар не найден — ЭРАПТ ГРУПП";
  }

  onReady(function () {
    var root = document.getElementById("product-page-root");
    if (!root || !window.ERAPT_PRODUCTS) return;

    var id = getProductId();
    var product = window.ERAPT_PRODUCTS.find(function (p) {
      return p.id === id;
    });

    if (!product) {
      showNotFound(root);
      return;
    }

    var meta = CATEGORY_META[product.category];
    var titleEl = document.getElementById("product-title");
    var descEl = document.getElementById("product-description");
    var crumbCat = document.getElementById("product-breadcrumb-category");
    var crumbCatLink = document.getElementById("product-breadcrumb-category-link");
    var crumbProduct = document.getElementById("product-breadcrumb-product");
    var pickerEl = document.getElementById("product-color-picker");
    var sliderRoot = document.getElementById("product-slider");

    document.title = product.title + " — ЭРАПТ ГРУПП";
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        product.excerpt + " ООО «ЭРАПТ ГРУПП». Оптовые поставки."
      );
    }

    if (titleEl) titleEl.textContent = product.title;
    if (crumbProduct) {
      crumbProduct.textContent = product.title;
      crumbProduct.setAttribute("aria-current", "page");
    }

    if (meta && crumbCat && crumbCatLink) {
      crumbCatLink.href = meta.href;
      crumbCatLink.textContent = meta.label;
      crumbCat.hidden = false;
    }

    function showImagesForVariant(colorId) {
      var resolved = window.ERAPT_resolveColorVariant(product, colorId);
      if (sliderRoot && resolved.images.length) {
        mountProductSlider(sliderRoot, resolved.images, product.title);
      }
    }

    var urlColor = getColorFromUrl();
    if (
      product.colorVariants &&
      product.colorVariants.length &&
      urlColor &&
      !product.colorVariants.some(function (v) {
        return v.id === urlColor;
      })
    ) {
      urlColor = product.colorVariants[0].id;
      setUrlColor(product.id, urlColor);
    }

    var effectiveColor =
      product.colorVariants && product.colorVariants.length
        ? urlColor || product.colorVariants[0].id
        : "";

    function onVariantSelect(colorId) {
      showImagesForVariant(colorId);
      renderDescriptionBlock(descEl, product, colorId);
    }

    onVariantSelect(effectiveColor);

    if (pickerEl) {
      mountColorPicker(pickerEl, product, onVariantSelect);
    }
  });
})();
