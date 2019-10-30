(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{341:function(n,e){n.exports={title:"1.5.20 Release",description:"Clue updates and world map transportation tooltips",author:"Adam",__content:'<p>This release adds many of the new clues released last week, with only beginner\nhot/cold and beginner map clues not done yet. Thanks to everyone working to get\nthose added.</p>\n<p>The hiscore plugin was updated for beginner clues:</p>\n<p><img src="/img/blog/1.5.20-Release/hiscore.png" alt="hiscore"/></p>\n<p>The world map plugin now adds tooltips to all transportation icons so you can\ntell what kind of transportation method it is:</p>\n<p><img src="/img/blog/1.5.20-Release/transport.png" alt="transport"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Add all new anagram, cipher, coordinate, cryptic, and emote clues</li>\n<li>Add support for music clues, and highlighting the correct track to play</li>\n<li>Add new wilderness hot cold spot in the Graveyard of Shadows</li>\n<li>Fix the hiscore plugin looking up clues and LMS rank</li>\n<li>Add beginner clues to the !clues chat command</li>\n<li>Add beginner clues to the loot tracker</li>\n<li>Fix status bars plugin sometimes not correctly showing the poison background\ncolor</li>\n<li>Fix NPC aggro plugin not showing the instructions after being toggled on</li>\n</ul>\n<p>An issue was fixed which prevented configuration from syncing across devices for\nusers with newly created RuneLite accounts (in the last 3-4 weeks). A side effect of\nfixing this caused the client to wipe its configuration for these users over the\nlast week. Sorry about that.</p>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 11 contributors this release!</p>\n<pre><code>Adam (16):\n      Revert &quot;pom: add reproducable build plugin&quot;\n      pom: add reproducable build plugin\n      http api: update for beginner clues\n      chat commands: add beginner clues\n      hiscore plugin: add beginner clues\n      config service: remove writing to sql\n      clue plugin: move widget highlights to plugin\n      clue plugin: add music clues\n      clue plugin: add beginner anagram clues\n      clue plugin: add beginner cryptic clues\n      clue plugin: add beginner emote clues\n      mixins: set thread name on client thread\n      clue plugin: fix text matching anagrams\n      clue plugin: fix emote clue overlay with no item requirements\n      config service: fix not upserting documents when setting config keys\n      devtools: add setstat command\n\nDaniel Robaina (1):\n      clue plugin: add easy cryptic clues\n\nHydrox6 (1):\n      loottracker: add support for beginner clues\n\nJordan Atwood (3):\n      clue plugin: Add new cipher clues\n      clue plugin: Add new cryptic clues\n      clue plugin: Add new coordinate clue descriptions\n\nScapeRune (3):\n      Fix item mapping of Saradomin&#39;s Blessed Sword and Saradomin&#39;s Tear (#8453)\n      clue scroll plugin: add new medium and master anagrams\n      npc aggro timer: fix instructions not showing up when plugin is turned on\n\nTheStonedTurtle (2):\n      LootTracker: Change rigid area to compound border\n      Fix status bar poison background color\n\nTomas Slusny (2):\n      Fix access control in clue scroll plugin\n      Properly use Lombok in MusicClue class\n\nWhitehooder (1):\n      clue plugin: add lvl 27 wilderness hot-cold clue location\n\nYuuki-chan (1):\n      Fix grammar in Skybox plugin description (#8496)\n\nbjornenalfa (1):\n      Remove duplicate coordinate clue\n\nksergio39 (1):\n      world map plugin: add tooltips for transportation icon\n</code></pre>'}}}]);
//# sourceMappingURL=85.67d33861.chunk.js.map