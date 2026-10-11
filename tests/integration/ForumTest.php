<?php

/*
 * This file is part of linkrobins/clipboard.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace LinkRobins\Clipboard\Tests\integration;

use Flarum\Testing\integration\TestCase;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;

/**
 * The extension is front-end only; its PHP side is the settings it sends to
 * the browser and the stylesheet the forum compiles. These run weekly against
 * the newest Flarum 2.x, so a core change that breaks either fails here first.
 */
class ForumTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->extension('linkrobins-clipboard');
    }

    /** @return array<string, mixed> */
    private function forumAttributes(): array
    {
        $response = $this->send($this->request('GET', '/api'));
        $this->assertEquals(200, $response->getStatusCode());

        return json_decode($response->getBody()->getContents(), true)['data']['attributes'];
    }

    #[Test]
    public function the_forum_page_loads_with_the_extension_enabled(): void
    {
        // Rendering the forum compiles the extension's JS and LESS into the
        // forum assets; a stylesheet that does not compile fails the page.
        $response = $this->send($this->request('GET', '/'));

        $this->assertEquals(200, $response->getStatusCode());
    }

    #[Test]
    public function the_defaults_reach_the_forum(): void
    {
        $a = $this->forumAttributes();

        $this->assertSame('default', $a['linkrobinsClipboardTheme']);
        $this->assertTrue($a['linkrobinsClipboardCopyEnabled']);
        $this->assertTrue($a['linkrobinsClipboardShowCodeLang']);
    }

    #[Test]
    public function a_chosen_theme_is_sent_as_is(): void
    {
        $this->setting('linkrobins-clipboard.theme_name', 'dracula');

        $this->assertSame('dracula', $this->forumAttributes()['linkrobinsClipboardTheme']);
    }

    /** @return array<string, array{string, bool}> */
    public static function switches(): array
    {
        return [
            'on' => ['1', true],
            'off' => ['0', false],
            // Only an explicit "on" turns a switch on.
            'anything else' => ['yes', false],
        ];
    }

    #[Test]
    #[DataProvider('switches')]
    public function the_switches_are_sent_as_booleans(string $stored, bool $sent): void
    {
        $this->setting('linkrobins-clipboard.is_copy_enable', $stored);
        $this->setting('linkrobins-clipboard.is_show_codelang', $stored);

        $a = $this->forumAttributes();
        $this->assertSame($sent, $a['linkrobinsClipboardCopyEnabled']);
        $this->assertSame($sent, $a['linkrobinsClipboardShowCodeLang']);
    }
}
