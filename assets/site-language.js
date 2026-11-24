import { englishTranslations } from "./site-translations.js";

const storageKey = "espray-language";
const translatedAttributes = ["aria-label", "aria-roledescription", "alt", "title", "placeholder"];

function preferredLanguage() {
  try {
    return localStorage.getItem(storageKey) === "en" ? "en" : "lt";
  } catch {
    return "lt";
  }
}

export function initSiteLanguage() {
  let language = preferredLanguage();
  const originalValues = new WeakMap();
  const observer = new MutationObserver(applyLanguage);

  function translatedValue(node, key, current) {
    const values = originalValues.get(node);
    const saved = values?.get(key);
    const original = saved && current === saved.english ? saved.lithuanian : current;

    if (language === "lt") {
      values?.delete(key);
      return original;
    }

    const english = englishTranslations.get(original.trim().replace(/\s+/g, " "));
    if (english === undefined) return original;

    const translated = original.match(/^\s*/)[0] + english + original.match(/\s*$/)[0];
    const translations = values ?? new Map();
    translations.set(key, { lithuanian: original, english: translated });
    originalValues.set(node, translations);
    return translated;
  }

  function translateAttribute(element, attribute) {
    const current = element.getAttribute(attribute);
    if (current === null || current === "") return;
    const value = translatedValue(element, attribute, current);
    if (value !== current) element.setAttribute(attribute, value);
  }

  function translateText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.data.trim() || node.parentElement?.closest("script, style, textarea, noscript")) {
        continue;
      }
      const value = translatedValue(node, "text", node.data);
      if (node.data !== value) node.data = value;
    }
  }

  function applyLanguage() {
    // React owns the initial Lithuanian markup. Localize after hydration and after route updates.
    observer.disconnect();
    document.documentElement.lang = language;
    translateText(document.body);
    translateText(document.querySelector("title"));

    for (const element of document.querySelectorAll(
      translatedAttributes.map((name) => `[${name}]`).join(","),
    )) {
      for (const attribute of translatedAttributes) translateAttribute(element, attribute);
    }
    for (const element of document.querySelectorAll(
      'meta[name="description"], meta[property="og:title"], meta[property="og:description"]',
    )) {
      translateAttribute(element, "content");
    }
    for (const button of document.querySelectorAll("[data-site-language]")) {
      button.setAttribute("aria-pressed", String(button.dataset.siteLanguage === language));
    }

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...translatedAttributes, "content"],
    });
  }

  function selectLanguage(event) {
    const button = event.target.closest?.("[data-site-language]");
    if (!button) return;
    const selected = button.dataset.siteLanguage;
    if (selected !== "lt" && selected !== "en") return;
    language = selected;
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // The switch still works during this visit if storage is unavailable.
    }
    applyLanguage();
  }

  document.addEventListener("click", selectLanguage);
  applyLanguage();
  return () => {
    language = "lt";
    applyLanguage();
    observer.disconnect();
    document.removeEventListener("click", selectLanguage);
  };
}
