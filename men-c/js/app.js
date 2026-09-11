(function () {
	"use strict";

	var mast = document.querySelector(".mast");
	var burger = document.querySelector(".burger");
	var drawer = document.getElementById("drawer");
	var hint = burger.querySelector(".sr-only");
	var barA = burger.querySelector(".bar-a");
	var barB = burger.querySelector(".bar-b");
	var barC = burger.querySelector(".bar-c");
	var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
	var panels = Array.prototype.slice.call(document.querySelectorAll('[role="tabpanel"]'));
	var shot = document.querySelector(".menu-shot");
	var shotCap = document.querySelector(".menu-shot-cap");
	var voices = Array.prototype.slice.call(document.querySelectorAll(".voice"));
	var stage = document.querySelector(".featured");
	var quote = stage.querySelector("blockquote p");
	var who = stage.querySelector("cite");
	var when = stage.querySelector("time");
	var barber = stage.querySelector(".who");
	var face = stage.querySelector("img");
	var lamp = document.querySelector(".dot");
	var openLabel = document.querySelector("[data-open]");
	var pointer = document.querySelector(".pointer");
	var onTab = "tab min-h-11 shrink-0 px-3 font-display text-sm uppercase tracking-[0.16em] transition-colors duration-150 bg-paper text-ink";
	var offTab = "tab min-h-11 shrink-0 px-3 font-display text-sm uppercase tracking-[0.16em] transition-colors duration-150 border border-line text-paper hover:border-paper";
	var alts = {
		cuts: "Мужская стрижка в барбершопе Мен’с",
		beard: "Оформление бороды в Мен’с",
		set: "Работа барбера с клиентом",
		care: "Уход и бритьё в кресле"
	};

	function pin() {
		mast.classList.toggle("shadow-[0_12px_40px_rgb(0_0_0/0.35)]", window.scrollY > 12);
	}

	function drawerOpen(on) {
		drawer.classList.toggle("hidden", !on);
		document.body.style.overflow = on ? "hidden" : "";
		burger.setAttribute("aria-expanded", on ? "true" : "false");
		hint.textContent = on ? "Закрыть меню" : "Открыть меню";
		barA.classList.toggle("translate-y-[8px]", on);
		barA.classList.toggle("rotate-45", on);
		barB.classList.toggle("opacity-0", on);
		barC.classList.toggle("-translate-y-[8px]", on);
		barC.classList.toggle("-rotate-45", on);
	}

	function pick(tab) {
		var id = tab.getAttribute("aria-controls");
		var key = tab.id.replace("tab-", "");
		tabs.forEach(function (node) {
			var selected = node === tab;
			node.setAttribute("aria-selected", selected ? "true" : "false");
			node.tabIndex = selected ? 0 : -1;
			node.className = selected ? onTab : offTab;
		});
		panels.forEach(function (panel) {
			panel.hidden = panel.id !== id;
		});
		if (shot && shotCap) {
			shot.src = shot.getAttribute("data-" + key);
			shot.alt = alts[key] || shot.alt;
			shotCap.textContent = tab.textContent;
		}
	}

	function show(btn) {
		var n = voices.indexOf(btn);
		var kept = 0;
		voices.forEach(function (node, i) {
			var row = node.parentNode;
			if (i !== n && kept < 4) {
				row.classList.remove("hidden");
				kept += 1;
			} else {
				row.classList.add("hidden");
			}
		});
		quote.textContent = "«" + btn.querySelector(".clip").textContent + "»";
		who.textContent = btn.querySelector("strong").textContent;
		when.textContent = btn.querySelector("time").textContent;
		if (btn.getAttribute("data-master")) {
			barber.hidden = false;
			barber.textContent = "мастер " + btn.getAttribute("data-master");
		} else {
			barber.hidden = true;
			barber.textContent = "";
		}
		face.src = btn.getAttribute("data-photo");
	}

	function moscowOpen() {
		var bits = new Intl.DateTimeFormat("en-GB", {
			timeZone: "Europe/Moscow",
			hour: "numeric",
			minute: "numeric",
			hour12: false
		}).formatToParts(new Date());
		var hour = 0;
		var minute = 0;
		var i;
		for (i = 0; i < bits.length; i += 1) {
			if (bits[i].type === "hour") {
				hour = Number(bits[i].value);
			}
			if (bits[i].type === "minute") {
				minute = Number(bits[i].value);
			}
		}
		if (hour === 24) {
			hour = 0;
		}
		return hour * 60 + minute >= 600 && hour * 60 + minute < 1260;
	}

	pin();
	window.addEventListener("scroll", pin, { passive: true });

	burger.addEventListener("click", function () {
		drawerOpen(drawer.classList.contains("hidden"));
	});

	drawer.querySelectorAll("a").forEach(function (link) {
		link.addEventListener("click", function () {
			drawerOpen(false);
		});
	});

	window.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			drawerOpen(false);
		}
	});

	window.addEventListener("resize", function () {
		if (window.matchMedia("(min-width: 64rem)").matches) {
			drawerOpen(false);
		}
	});

	tabs.forEach(function (tab) {
		tab.addEventListener("click", function () {
			pick(tab);
		});
		tab.addEventListener("keydown", function (event) {
			var at = tabs.indexOf(tab);
			var next = at;
			if (event.key === "ArrowRight" || event.key === "ArrowDown") {
				next = (at + 1) % tabs.length;
			} else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
				next = (at - 1 + tabs.length) % tabs.length;
			} else if (event.key === "Home") {
				next = 0;
			} else if (event.key === "End") {
				next = tabs.length - 1;
			} else {
				return;
			}
			event.preventDefault();
			tabs[next].focus();
			pick(tabs[next]);
		});
	});

	voices.forEach(function (btn) {
		btn.addEventListener("click", function () {
			show(btn);
		});
	});

	if (moscowOpen()) {
		lamp.classList.remove("opacity-40");
		lamp.classList.add("animate-[pulse-open_1.6s_ease-in-out_infinite]");
		openLabel.textContent = "Сейчас открыто";
	}

	(function () {
		var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || reduce || !pointer) {
			return;
		}
		document.body.classList.add("cursor-none");
		pointer.removeAttribute("hidden");
		var x = window.innerWidth / 2;
		var y = window.innerHeight / 2;
		var cx = x;
		var cy = y;
		var seen = false;
		window.addEventListener("pointermove", function (event) {
			x = event.clientX;
			y = event.clientY;
			if (!seen) {
				seen = true;
				pointer.style.opacity = "1";
				cx = x;
				cy = y;
			}
		}, { passive: true });
		function tick() {
			cx += (x - cx) * 0.2;
			cy += (y - cy) * 0.2;
			pointer.style.transform = "translate3d(" + cx + "px, " + cy + "px, 0) translate(-50%, -50%)";
			window.requestAnimationFrame(tick);
		}
		window.requestAnimationFrame(tick);
	}());
}());
