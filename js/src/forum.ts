import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';

import injectButtons from './forum/buttons';
import processCodeLang from './forum/codeLang';

app.initializers.add('linkrobins/clipboard', () => {
  // String-path form so the extension applies whether CommentPost is in an
  // eager or lazy-loaded chunk. onupdate is included so code blocks added by
  // post edits / content refreshes are processed too (this used to be covered
  // by a global 5-second DOM poll).
  extend('flarum/forum/components/CommentPost', ['oncreate', 'onupdate'], function (this: any) {
    const root = this.element as Element | undefined;
    if (!root) return;

    const theme = (app.forum.attribute('linkrobinsClipboardTheme') as string) || 'default';
    const copyEnabled = !!app.forum.attribute('linkrobinsClipboardCopyEnabled');
    const showCodeLang = !!app.forum.attribute('linkrobinsClipboardShowCodeLang');

    if (copyEnabled) injectButtons(root, theme);
    if (showCodeLang) processCodeLang(root);
  });
});
