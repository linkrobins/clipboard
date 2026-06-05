import app from 'flarum/forum/app';
import extractText from 'flarum/common/utils/extractText';

export function copyText(text: string): Promise<void> {
  if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext !== false) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.top = '-9999px';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if (ok) resolve();
      else reject(new Error('execCommand returned false'));
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Tell the user how to copy manually when programmatic copy is unavailable.
 */
export function showFallbackMessage(): void {
  let msg: string;

  if (/iPhone|iPad/i.test(navigator.userAgent)) {
    msg = `${extractText(app.translator.trans('linkrobins-clipboard.forum.no_support'))} :(`;
  } else {
    const combo = /Mac/i.test(navigator.userAgent) ? '⌘-C' : 'Ctrl-C';
    msg = extractText(
      app.translator.trans('linkrobins-clipboard.forum.msg', {
        actionKey: combo,
        action: extractText(app.translator.trans('linkrobins-clipboard.forum.action_copy')),
      })
    );
  }

  try {
    alert(msg);
  } catch (e) {
    // alerts can be blocked
  }
}
