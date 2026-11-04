# Link Robins Clipboard

Adds a copy-to-clipboard button to every code block in posts, plus an optional language label in the top-right of the block. Seven button styles to choose from.

Ported to Flarum 2 from [`ffans/clipboardjs`](https://github.com/ffans/clipboardjs) (MIT). Credit to Golden for the original.

## Features

- **Copy button on code blocks.** Hover over a code block in a post and a small button appears; click it and the code is on your clipboard. The button briefly flips to a checkmark (or "Copied", depending on the style) to confirm, and shows an error state if the copy fails. On a device that cannot copy programmatically, it tells the visitor which key combination to press instead.
- **Seven button styles.** Default, GitHub, LingCoder, CSDN, cnBlogs, Jian Shu and SegmentFault. Each has its own icons, colors and placement, picked in the admin panel. The LingCoder and CSDN styles use a text label rather than an icon.
- **Language label.** When a syntax highlighter marks a code block with a `language-X` class, the extension carries that class up to the block and shows the language name (`bash`, `python`, `javascript`...) in its top-right corner. This keeps working when the highlighter runs after the post has rendered. Names are shown for a built-in list of common languages.
- **Independent switches.** The copy button and the language label each have their own toggle, so you can use one without the other.
- **Posts you edit or load later.** Code blocks added by editing a post or by content that loads after the page are picked up too, with no polling.
- **Accessible.** Every button carries an "Copy code" label for screen readers, and the button text is translatable (there is an English and a Chinese language file).
- **No extra libraries.** It uses the browser's native clipboard API, with a hidden-textarea fallback for older browsers and non-secure (plain HTTP) pages.

## Settings

Admin, then Extensions, then Link Robins Clipboard.

| Setting | Default | What it does |
|---|---|---|
| Enable copy button on code blocks | On | Turns the copy button on or off. |
| Copy button style | Default | Default, GitHub, LingCoder, CSDN, cnBlogs, Jian Shu or SegmentFault. |
| Show language label on code blocks | On | Shows the detected language in the top-right of each code block. |

The extension adds no permissions and no database tables.

## Requirements

- Flarum 2.x
- PHP 8.3 or newer
- Optional: the language label reads a `language-X` class on the code block, as added by a syntax highlighter extension (highlight.js, Prism and similar). A code block with no such class gets no label; the copy button works regardless.

## Installation

```sh
composer require linkrobins/clipboard
```

Then toggle it on in the admin panel's **Extensions** page and open its settings to pick a style.

## Updating

```sh
composer update linkrobins/clipboard
php flarum cache:clear
```

## Notes

- The button copies the visible text of the code block, with leading and trailing blank space trimmed.
- Themes from the 1.x original still apply: the button keeps the `.clipboard` class, and the extension's own wrapper class is `LinkRobinsClipboard`.

## Differences from the 1.x original

- Targets `flarum/core ^2.0`.
- Settings use the `linkrobins-clipboard.*` prefix.
- The `clipboard` npm library is dropped in favor of the browser's native clipboard API.
- The old settings-saving listener is gone: it relied on a Flarum 1.x event that no longer exists, and `serializeToForum` covers the same job.

## License

MIT. Credit to [Golden / ffans](https://github.com/ffans) for the original implementation.
