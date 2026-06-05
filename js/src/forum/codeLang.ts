/**
 * Hoists `language-x` classes from `<code>` up to the parent `<pre>` so the
 * language label can be styled, and keeps doing so if a syntax highlighter
 * applies the class after render.
 *
 * Processing is driven by post render hooks (no global polling): each post's
 * code elements are hoisted once and put under a single shared attribute
 * observer that reacts if their class changes later. The observer does not
 * prevent removed nodes from being garbage collected, so nothing accumulates
 * across SPA navigations.
 */
const observed = new WeakSet<Element>();
let observer: MutationObserver | null = null;

function hoist(code: Element): void {
  const pre = code.parentElement;
  if (!pre || pre.tagName !== 'PRE' || pre.className.indexOf('language-') !== -1) return;

  const match = code.className.match(/language-[\w-]+/);
  if (match) pre.classList.add(match[0]);
}

function getObserver(): MutationObserver {
  if (!observer) {
    observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && (m.target as Element).tagName === 'CODE') {
          hoist(m.target as Element);
        }
      }
    });
  }

  return observer;
}

export default function processCodeLang(root: Element): void {
  root.querySelectorAll('pre > code').forEach((code) => {
    hoist(code);

    if (!observed.has(code)) {
      observed.add(code);
      getObserver().observe(code, { attributes: true, attributeFilter: ['class'] });
    }
  });
}
