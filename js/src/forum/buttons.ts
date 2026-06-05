import getThemeContent from './themes';
import { copyText, showFallbackMessage } from './copy';

export default function injectButtons(rootEl: Element, theme: string): void {
  const [idle, okHtml, errHtml] = getThemeContent(theme);

  rootEl.querySelectorAll('pre').forEach((pre) => {
    if (pre.classList.contains('copy-ready')) return;

    const btn = document.createElement('button');
    btn.className = `clipboard ${theme}`;
    btn.type = 'button';
    btn.innerHTML = idle;
    btn.setAttribute('aria-label', 'Copy code');

    if (theme === 'lingcoder' || theme === 'csdn') {
      pre.classList.add('sticky');
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const code = pre.querySelector('code');
      const text = (code ? code.innerText : pre.innerText).replace(/^\s+/, '').replace(/\s+$/, '');

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
