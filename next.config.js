/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["bloximages.newyork1.vip.townnews.com", "i.ytimg.com", "image.cnbcfm.com", "i.kinja-img.com", "images.barrons.com", "ktla.com", "i.insider.com", "www.kitco.com", "s.yimg.com", "images.mktw.net", "assets3.cbsnewsstatic.com", "images.wsj.net", "static01.nyt.com"]
  },
  trailingSlash: true,
  
}

module.exports = nextConfig
