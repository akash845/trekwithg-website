/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Only used for the local "photo coming soon" placeholder graphic.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
