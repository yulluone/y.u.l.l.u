/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { TfiHome, TfiPencilAlt } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from 'react-icons/sl'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Home',
    slug: '/',
    Icon: TfiHome,
    number: '',
  },
  {
    name: 'Services',
    slug: '/services',
    Icon: SlBriefcase,
  },

  {
    name: 'Projects',
    slug: '/projects',
    Icon: SlTrophy,
  },

  // {
  //   name: 'Home (2)',
  //   slug: '/index-2',
  //   Icon: TfiHome,
  //   number: 2,
  // },
  // {
  //   name: 'Home (3)',
  //   slug: '/index-3',
  //   Icon: TfiHome,
  //   number: 3,
  // },
  // {
  //   name: 'Home (4)',
  //   slug: '/index-4',
  //   Icon: TfiHome,
  //   number: 4,
  // },
  {
    name: 'About',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: 'Articles',
    slug: '/blog',
    Icon: TfiPencilAlt,
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: SlEnvolope,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/yulluone',
    Icon: IoLogoTwitter,
  },
  // {
  //   name: 'Instagram',
  //   url: 'https://www.instagram.com/',
  //   Icon: IoLogoInstagram,
  // },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/joshua-yullu-068042192/',
    Icon: IoLogoLinkedin,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://fantastic-mover-3439.ck.page/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'yulluone@outlook.com',
    sender: 'muuoyullu@gmail.com',
    subject: 'EMAIL NOTIFICATION FROM WEBSITE',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  authorName: 'Joshua Yullu',
  siteName: 'Joshua Yullu',
  defaultTitle: 'Joshua Yullu Personal Site',
  titleTemplate: 'Joshua Yullu | %s',
  description: 'A fun site for an serious developer.',
  email: 'yulluone@outlook.com',
  locale: 'en_US',
  twitter: {
    handle: '@yulluone',
    site: '@yullu.me',
    cardType: 'summary_large_image',
  },
}
