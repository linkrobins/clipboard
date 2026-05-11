<?php

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/forum.js')
        ->css(__DIR__ . '/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Settings())
        ->default('linkrobins-clipboard.theme_name',       'default')
        ->default('linkrobins-clipboard.is_copy_enable',   '1')
        ->default('linkrobins-clipboard.is_show_codelang', '1')
        ->serializeToForum('linkrobinsClipboardTheme',        'linkrobins-clipboard.theme_name')
        ->serializeToForum('linkrobinsClipboardCopyEnabled',  'linkrobins-clipboard.is_copy_enable', function ($value) {
            return $value === '1' || $value === 1 || $value === true;
        })
        ->serializeToForum('linkrobinsClipboardShowCodeLang', 'linkrobins-clipboard.is_show_codelang', function ($value) {
            return $value === '1' || $value === 1 || $value === true;
        }),
];
