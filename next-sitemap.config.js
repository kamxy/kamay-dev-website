/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://kamay.dev',
    generateRobotsTxt: false, // We already created a custom robots.txt
    generateIndexSitemap: false,
    outDir: 'public',
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/404'],
} 