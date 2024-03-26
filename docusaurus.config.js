// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'لقن',
  tagline: 'توثيق متقن',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ta9in.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ta9in', // Usually your GitHub org/user name.
  projectName: 'la9in', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ta9in/la9in/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ta9in/la9in/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'لقن',
        logo: {
          alt: 'شعار لقن',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'وثائق',
          },
          {to: '/blog', label: 'المدونة', position: 'left'},
          {
            href: 'https://github.com/Ta9in/la9in',
            label: 'الجيتهب',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'الوثائق',
            items: [
              {
                label: 'وثائق',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'المزيد',
            items: [
              {
                label: 'المدونة',
                to: '/blog',
              },
              {
                label: 'الجيتهب',
                href: 'https://github.com/Ta9in/la9in',
              },
            ],
          },
        ],
        copyright: `حقوق النشر محفوظة © ${new Date().getFullYear()} لمشروع لقن.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTAG_CODE',
        anonymizeIP: true,
      },
    ],
  ],
};

export default config;
