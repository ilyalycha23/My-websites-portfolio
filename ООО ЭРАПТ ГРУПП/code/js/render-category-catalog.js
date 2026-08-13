(function () {
  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    var grid = document.querySelector("[data-product-category]");
    if (!grid || !window.ERAPT_PRODUCTS) return;

    var cat = grid.getAttribute("data-product-category");
    var items = window.ERAPT_PRODUCTS.filter(function (p) {
      return p.category === cat;
    });

    grid.innerHTML = "";

    items.forEach(function (p) {
      var a = document.createElement("a");
      a.className = "product-card product-card--link";
      var href = "product.html?id=" + encodeURIComponent(p.id);
      if (p.colorVariants && p.colorVariants.length > 0 && p.colorVariants[0].id) {
        href += "&color=" + encodeURIComponent(p.colorVariants[0].id);
      }
      a.href = href;

      var imgWrap = document.createElement("div");
      imgWrap.className = "product-card__image";
      var img = document.createElement("img");
      img.src = window.ERAPT_getProductPreviewSrc
        ? window.ERAPT_getProductPreviewSrc(p)
        : p.images[0];
      img.alt = p.title;
      img.width = 640;
      img.height = 480;
      img.loading = "lazy";
      imgWrap.appendChild(img);

      var body = document.createElement("div");
      body.className = "product-card__body product-card__body--compact";
      var h3 = document.createElement("h3");
      h3.textContent = p.title;
      body.appendChild(h3);

      a.appendChild(imgWrap);
      a.appendChild(body);
      grid.appendChild(a);
    });
  });
})();
