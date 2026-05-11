# Link Robins Clipboard

Adds a copy-to-clipboard button to every code block in posts, plus an optional language label in the top-right. Seven visual themes to choose from.

Ported to Flarum 2.0 from [`ffans/clipboardjs`](https://github.com/ffans/clipboardjs) (MIT). Credit to Golden for the original.

## What it does

Two features:

1. **Copy button on code blocks** — when a visitor hovers over a `<pre>` in a post, a small "copy" button appears. Click it; the code is on their clipboard. The button briefly flips to a checkmark to confirm. Seven button styles to match the look of GitHub, CSDN, Jianshu, etc.
2. **Language label on code blocks** — when a syntax highlighter (Prism, highlight.js, etc.) decorates `<code>` with a `language-X` class, the extension hoists that class onto the parent `<pre>` and the CSS shows the language name in the top-right of the block.

Both features have independent toggles in the admin settings; you can use one without the other.

## Requirements

- Flarum **2.0** or later
- PHP **8.2** or later
- Optional: a syntax highlighter extension (for the language label feature to have something to display)

## Installation

```
composer require linkrobins/clipboard
php flarum cache:clear
```

In Flarum admin → **Extensions**, find **Link Robins Clipboard** and enable it. Open its settings to pick a theme and toggle features.

## Settings

- **Enable copy button on code blocks** — turn the copy button on or off
- **Copy button style** — default, GitHub, LingCoder, CSDN, cnBlogs, Jian Shu, SegmentFault
- **Show language label on code blocks** — turn the language label on or off

## How it works under the hood

The extension extends `CommentPost.oncreate` and, after each post renders, walks the post DOM for `<pre>` elements. For each one not already decorated, it inserts a themed button. Click handlers use the modern native `navigator.clipboard.writeText()` API to copy code text, with a hidden-textarea + `document.execCommand('copy')` fallback for older browsers or non-secure contexts.

The language detection sets up a `MutationObserver` once per page that watches `<code>` elements for a `language-X` class. When one appears (after a syntax highlighter runs), the class is mirrored onto the parent `<pre>` so the CSS selectors in `_languages.less` can display the language name.

## What changed from the 1.x original

- Targets `flarum/core ^2.0`
- Renamed namespace: `linkrobins-clipboard.*`
- **Dropped the `clipboard` npm dependency** — modern browsers have a native clipboard API, and the original library is now obsolete
- **Dropped the `SaveSettings` listener** — it used `Flarum\Api\Event\Serializing` which was removed in Flarum 2.0, and its work is redundant with the `serializeToForum` extender calls already in `extend.php`
- **No webpack/JSX build** — vanilla JS, hand-written, no `node_modules`
- Uses `app.registry.for('linkrobins-clipboard')` (the 2.0 name) instead of `app.extensionData.for(...)`
- Setting type renamed `switch` → `boolean` (both work; `boolean` is the modern name)
- CSS class renamed to `LinkRobinsClipboard` (the `.clipboard` button class stays the same so themes from upstream still apply)

## License

MIT. Credit to [Golden / ffans](https://github.com/ffans) for the original implementation.
