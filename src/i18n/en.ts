// All page copy lives here, shared by every design. To add a language, copy this
// file (e.g. es.ts), translate the values, and register it in index.ts.
export const en = {
  htmlLang: 'en',
  title: 'Dockry, a dock for macOS that changes with what you’re doing',
  description:
    'Dockry runs next to the macOS Dock and swaps its apps, widgets and desktop with a profile: one for work, one for after. Free, no account, no tracking.',

  nav: {
    profiles: 'Profiles',
    dock: 'Dock',
    widgets: 'Widgets',
    install: 'Install',
    github: 'GitHub',
    download: 'Download',
  },

  hero: {
    // Three lines; the middle one is the one each design plays with.
    headline: ['One dock', 'for every', 'mode you’re in.'],
    lead: 'Dockry is a dock for macOS that changes with what you’re doing. Give work and evenings their own apps, widgets and desktop, and switch between them with a click or a shortcut of your own.',
    download: 'Download for Mac',
    install: 'How to install',
    hint: 'Try it: switch profiles, and hover the dock',
    shotAlt: 'Dockry’s Work profile at the bottom of a Mac screen: pinned apps, open apps, a clock, a calendar and Claude usage',
  },

  specs: ['macOS 14+', 'Apple silicon & Intel', 'Free', 'No account', 'No tracking', 'Runs next to the Dock'],

  // The demo dock. Icons are drawn by the page (no app icons), named for what they stand for.
  demo: {
    profileHint: 'Switch profile',
    profiles: [
      {
        name: 'Work',
        color: '#3563E9',
        apps: ['Finder', 'Browser', 'Mail', 'Calendar', 'Notes', 'Terminal'],
        widgets: ['clock', 'date', 'claude'],
      },
      {
        name: 'Chill',
        color: '#F08A4B',
        apps: ['Finder', 'Music', 'Photos', 'Messages', 'TV'],
        widgets: ['spotify', 'clock', 'date'],
      },
    ],
    song: ['Midnight City', 'M83'],
  },

  profiles: {
    label: 'Profiles',
    title: 'Not one long row. One for each part of your day.',
    lead: 'A profile is a dock of its own: pinned apps, widgets, a color, and the desktop it lives on. Switching swaps all of it at once.',
    items: [
      ['Widgets', 'A clock, the date, Spotify, your Mac’s other users and Claude usage. Each profile picks its own.'],
      ['Claude usage', 'How much of your plan’s 5-hour and weekly limits you’ve used. Click for when each one resets.'],
      ['Yours to arrange', 'Drag apps, widgets and dividers into any order. Right-click to add a divider or a widget.'],
      ['Edit Profiles', 'Pinned apps, widgets, symbol, color and desktop for each profile, in one editor.'],
      ['Better than the Dock', 'Windows stop at its edge, every screen gets one, and the macOS Dock comes back when you quit.'],
    ],
  },

  dock: {
    label: 'The dock',
    title: 'Everything the macOS Dock does.',
    lead: 'It runs next to the system Dock instead of modifying it, and can hide that one while it runs. Quit Dockry and your Dock is back exactly as it was.',
    items: [
      ['Bottom, left or right', 'On every screen at the bottom; at the edge of your arrangement on the sides.'],
      ['16 to 128 points', 'Drag a separator to resize, as in the Dock.'],
      ['Magnification', 'Icons swell around the pointer and settle back when it leaves.'],
      ['Hides on its own', 'Or keeps its space: windows stop at its edge, like the Dock’s.'],
      ['Drag to reorder', 'The other icons make room as you drag.'],
      ['Follows your Dock', 'Sync size, position and hiding with the macOS Dock’s settings.'],
    ],
  },

  widgets: {
    label: 'Widgets',
    title: 'Small things, right where you look.',
    lead: 'Widgets sit after your apps and scale with the dock. On a side dock they turn into compact tiles.',
    items: [
      ['Clock', 'The time. Click for the Clock app.'],
      ['Calendar', 'Today’s date. Click for the whole month.'],
      ['Spotify', 'What’s playing, with a player and search that don’t bring Spotify to the front.'],
      ['Claude Usage', 'How much of your Claude plan’s 5-hour and weekly limits you’ve used.'],
      ['Switch User', 'Your Mac’s other accounts, one click away.'],
    ],
  },

  install: {
    label: 'Install',
    title: 'Get Dockry.',
    lead: 'Dockry is free and isn’t notarized by Apple, so macOS asks you to confirm it once per version. That’s the only catch.',
    steps: [
      'Download the latest <code>Dockry-X.Y.Z.dmg</code> from <a href="{releases}">GitHub Releases</a> and open it.',
      'Drag <strong>Dockry</strong> onto <strong>Applications</strong>, then eject the disk image.',
      'Open it. When macOS says it can’t be opened, click <strong>Done</strong>.',
      'In <strong>System Settings → Privacy &amp; Security</strong>, click <strong>Open Anyway</strong> next to “Dockry was blocked”, and confirm.',
      'Look for Dockry in the menu bar. Click the profile button at the start of the dock to switch, or give each profile a shortcut in <strong>Settings</strong>.',
    ],
    terminal: 'Or skip step 4 from the terminal:',
    command: 'xattr -dr com.apple.quarantine /Applications/Dockry.app',
    copy: 'Copy',
    copied: 'Copied',
  },

  footer: {
    tagline: 'A dock for macOS that changes with what you’re doing.',
    source: 'Source',
    releases: 'Releases',
    issues: 'Issues',
  },
};

export type Messages = typeof en;
