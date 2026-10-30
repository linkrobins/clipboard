import app from 'flarum/forum/app';
import extractText from 'flarum/common/utils/extractText';

import getThemeContent from './themes';
import { copyText, showFallbackMessage } from './copy';

// flarum/emoji swaps each emoji in the post for an <img alt="...">, which
// innerText skips, so put the alt text back before reading the code.
function codeText(el: HTMLElement): string {
  const clone = el.cloneNode(true) as HTMLElement;

  clone.querySelectorAll('img[alt]').forEach((img) => {
    const alt = img.getAttribute('alt');
    if (alt) img.replaceWith(document.createTextNode(alt));
  });
  clone.querySelectorAll('br').forEach((br) => br.replaceWith('\n'));

  return clone.textContent || '';
}

export default function injectButtons(rootEl: Element, theme: string): void {
  const [idle, okHtml, errHtml] = getThemeContent(theme);

  rootEl.querySelectorAll('pre').forEach((pre) => {
    if (pre.classList.contains('copy-ready')) return;

    const btn = document.createElement('button');
    btn.className = `clipboard ${theme}`;
    btn.type = 'button';
    btn.innerHTML = idle;
    btn.setAttribute('aria-label', extractText(app.translator.trans('linkrobins-clipboard.forum.copy_code_aria')));

    if (theme === 'lingcoder' || theme === 'csdn') {
      pre.classList.add('sticky');
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const code = pre.querySelector('code');
      const text = codeText(code || pre)
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');

      copyText(text)
        .then(() => {
          btn.classList.add('succeed');
          if (okHtml) btn.innerHTML = okHtml;
          setTimeout(() => {
            btn.classList.remove('succeed');
            btn.innerHTML = idle;
          }, 1000);
        })
        .catch(() => {
          btn.classList.add('failed');
          if (errHtml) btn.innerHTML = errHtml;
          setTimeout(() => {
            btn.classList.remove('failed');
            btn.innerHTML = idle;
          }, 1500);
          showFallbackMessage();
        });
    });

    pre.insertBefore(btn, pre.firstChild);
    pre.classList.add('copy-ready');
  });
}
