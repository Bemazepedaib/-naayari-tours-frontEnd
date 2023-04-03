/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"],
    dangerouslyAllowSVG: true
  }
}


module.exports = nextConfig