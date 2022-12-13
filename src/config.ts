import type{ NavItems } from './types'

const base = import.meta.env.BASE_URL.slice(0, -1)

export const NAV_ITEMS: NavItems = {
    home: {
        path: `${base}/`,
        title: 'home'
    },
    blog: {
        path: `${base}/blog`,
        title: 'blog'
    },
    tags: {
        path: `${base}/tags`,
        title: 'tags'
    },
    media: {
        path: `${base}/media`,
        title: 'media'
    },
    about: {
        path: `${base}/about`,
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Ink',
    title: 'Astro - Ink',
    description: 'Crisp, minimal, personal blog theme for Astro',
    url: 'https://astro-ink.vercel.app',
    githubUrl: 'https://github.com/one-aalam/astro-ink',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
