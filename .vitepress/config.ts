import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tomos-y-tumbas/',
  title: 'Tomos y Tumbas',
  description: 'The ruleset of Tomos y Tumbas TTRPG',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Intro', link: '/rules/introduction' },
    ],

    sidebar: [
      {
        text: 'Rule set',
        items: [
          { text: 'Introduction', link: '/rules/introduction' },
          { text: 'Core', link: '/rules/core' },
          { text: 'Character creation', link: '/rules/character_creation' },
          { text: 'Combat', link: '/rules/combat' },
          { text: 'Magic', link: '/rules/magic' },
          { text: 'Equipment', link: '/rules/equipment' },
          { text: 'Archetypes', link: '/rules/archetypes' },
          { text: 'NPCs', link: '/rules/npcs' },
          { text: 'Bestiary', link: '/rules/bestiary' },
          { text: 'GMing', link: '/rules/gming' },
          { text: 'Adventures', link: '/rules/adventures' },
          { text: 'Example of play', link: '/rules/example_of_play' },
        ],
      },
    ],

    /* socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ], */
  },
})
