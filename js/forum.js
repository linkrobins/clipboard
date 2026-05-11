'use strict';

(function () {

    function getThemeContent(theme) {
        var copyLabel    = app.translator.trans('linkrobins-clipboard.forum.action_copy');
        var okLabel      = app.translator.trans('linkrobins-clipboard.forum.ok_btn');
        var errorLabel   = app.translator.trans('linkrobins-clipboard.forum.error_btn');

        switch (theme) {
            case 'github':
                return [
                    '<svg aria-hidden="true" role="img" class="clipboard-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>',
                    '<svg aria-hidden="true" role="img" class="clipboard-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>',
                    '<svg aria-hidden="true" role="img" class="clipboard-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>',
                ];
            case 'lingcoder':
            case 'csdn':
                return [
                    '<span class="label">' + copyLabel + '</span>',
                    '<span class="success">' + okLabel + '</span>',
                    '<span class="error">' + errorLabel + '</span>',
                ];
            case 'cnblog':
                return [
                    '<i class="fas fa-code"></i>',
                    '<i class="fas fa-check"></i>',
                    '<i class="fas fa-times"></i>',
                ];
            case 'jianshu':
                return [
                    '<svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg>',
                    '<svg aria-hidden="true" role="img" class="clipboard-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;vertical-align:text-bottom"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>',
                    '<svg aria-hidden="true" role="img" class="clipboard-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;vertical-align:text-bottom"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>',
                ];
            case 'segmentfault':
                return [
                    '<i class="fas fa-copy"></i>',
                    '<i class="fas fa-check"></i>',
                    '<i class="fas fa-times"></i>',
                ];
            default:
                return [
                    '<svg viewBox="0 0 1024 1024" width="14.5" height="15.5" fill="currentColor"><path d="M192 768h256v64H192v-64zm320-384H192v64h320v-64zm128 192V448L448 640l192 192V704h320V576H640zm-288-64H192v64h160v-64zM192 704h160v-64H192v64zm576 64h64v128c-1 18-7 33-19 45s-27 18-45 19H128c-35 0-64-29-64-64V192c0-35 29-64 64-64h192C320 57 377 0 448 0s128 57 128 128h192c35 0 64 29 64 64v320h-64V320H128v576h640V768zM192 256h512c0-35-29-64-64-64h-64c-35 0-64-29-64-64s-29-64-64-64-64 29-64 64-29 64-64 64h-64c-35 0-64 29-64 64z"></path></svg>',
                    null,
                    null,
                ];
        }
    }

    function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext !== false) {
            return navigator.clipboard.writeText(text);
        }
        return new Promise(function (resolve, reject) {
            try {
                var ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.top = '-9999px';
                ta.style.left = '-9999px';
                document.body.appendChild(ta);
                ta.focus();
                ta.select();
                var ok = document.execCommand('copy');
                document.body.removeChild(ta);
                if (ok) resolve(); else reject(new Error('execCommand returned false'));
            } catch (err) {
                reject(err);
            }
        });
    }

    function showFallbackMessage(action) {
        var actionKey = (action === 'cut' ? 'X' : 'C');
        var actionLabel = (action === 'copy')
            ? app.translator.trans('linkrobins-clipboard.forum.action_copy')
            : app.translator.trans('linkrobins-clipboard.forum.action_cut');
        var prefix = /iPhone|iPad/i.test(navigator.userAgent)
            ? app.translator.trans('linkrobins-clipboard.forum.no_support') + ' :('
            : null;

        var msg;
        if (prefix) {
            msg = prefix;
        } else {
            var combo = /Mac/i.test(navigator.userAgent) ? '⌘-' + actionKey : 'Ctrl-' + actionKey;
            msg = app.translator.trans('linkrobins-clipboard.forum.msg', {
                actionKey: combo,
                action:    actionLabel,
            });
            if (Array.isArray(msg)) msg = msg.join('');
        }
        try { alert(msg); } catch (e) { /* alerts can be blocked */ }
    }

    var _languageObserverStarted = false;
    function startCodeLangObserver() {
        if (_languageObserverStarted) return;
        _languageObserverStarted = true;

        var MO = window.MutationObserver || window.WebKitMutationObserver;
        if (!MO) return;

        function hoistFromExistingLanguages() {
            var codes = document.querySelectorAll('pre > code[class*="language-"]');
            codes.forEach(function (code) {
                var pre = code.parentNode;
                if (!pre || pre.className.indexOf('language-') !== -1) return;
                var match = code.className.match(/language-[\w-]+/);
                if (match) pre.classList.add(match[0]);
            });
        }

        hoistFromExistingLanguages();

        var observer = new MO(function (mutations) {
            mutations.forEach(function (m) {
                if (m.type === 'attributes' && m.attributeName === 'class') {
                    var code = m.target;
                    if (code && code.tagName === 'CODE') {
                        var pre = code.parentNode;
                        if (pre && pre.tagName === 'PRE' && pre.className.indexOf('language-') === -1) {
                            var match = code.className.match(/language-[\w-]+/);
                            if (match) pre.classList.add(match[0]);
                        }
                    }
                }
            });
        });

        document.querySelectorAll('pre code').forEach(function (el) {
            observer.observe(el, { attributes: true, attributeFilter: ['class'] });
        });

        setInterval(function () {
            document.querySelectorAll('pre code').forEach(function (el) {
                try { observer.observe(el, { attributes: true, attributeFilter: ['class'] }); } catch (e) {}
            });
            hoistFromExistingLanguages();
        }, 5000);
    }

    function injectButtons(rootEl, theme, copyEnabled) {
        if (!copyEnabled) return;

        var content = getThemeContent(theme);
        var idle    = content[0];
        var okHtml  = content[1];
        var errHtml = content[2];

        var pres = rootEl.querySelectorAll('pre');
        for (var i = 0; i < pres.length; i++) {
            var pre = pres[i];
            if (pre.classList.contains('copy-ready')) continue;

            var btn = document.createElement('button');
            btn.className     = 'clipboard ' + theme;
            btn.type          = 'button';
            btn.innerHTML     = idle;
            btn.setAttribute('aria-label', 'Copy code');

            if (theme === 'lingcoder' || theme === 'csdn') {
                pre.classList.add('sticky');
            }

            (function (btnEl, preEl, idleHTML, successHTML, failureHTML) {
                btnEl.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var code = preEl.querySelector('code');
                    var text = code ? code.innerText : preEl.innerText;
                    text = text.replace(/^\s+/, '').replace(/\s+$/, '');

                    copyText(text).then(function () {
                        btnEl.classList.add('succeed');
                        if (successHTML) btnEl.innerHTML = successHTML;
                        setTimeout(function () {
                            btnEl.classList.remove('succeed');
                            btnEl.innerHTML = idleHTML;
                        }, 1000);
                    }).catch(function () {
                        btnEl.classList.add('failed');
                        if (failureHTML) btnEl.innerHTML = failureHTML;
                        setTimeout(function () {
                            btnEl.classList.remove('failed');
                            btnEl.innerHTML = idleHTML;
                        }, 1500);
                        showFallbackMessage('copy');
                    });
                });
            })(btn, pre, idle, okHtml, errHtml);

            pre.insertBefore(btn, pre.firstChild);
            pre.classList.add('copy-ready');
        }
    }

    app.initializers.add('linkrobins/clipboard', function () {
        try {
            var extend;
            try {
                var extMod = flarum.reg.get('core', 'common/extend');
                extend = extMod && extMod.extend;
            } catch (e) {}
            if (typeof extend !== 'function') {
                console.error('[linkrobins/clipboard] extend() helper not found');
                return;
            }

            extend('flarum/forum/components/CommentPost', 'oncreate', function () {
                try {
                    var theme = app.forum.attribute('linkrobinsClipboardTheme') || 'default';
                    if (theme === '') theme = 'default';

                    var copyEnabled  = !!app.forum.attribute('linkrobinsClipboardCopyEnabled');
                    var showCodeLang = !!app.forum.attribute('linkrobinsClipboardShowCodeLang');

                    var root = this.element;
                    if (root) injectButtons(root, theme, copyEnabled);

                    if (showCodeLang) startCodeLangObserver();
                } catch (e) {
                    console.error('[linkrobins/clipboard] post-render handler failed:', e);
                }
            });
        } catch (e) {
            console.error('[linkrobins/clipboard] init failed:', e);
        }
    });

})();

module.exports = {};
