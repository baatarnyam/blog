/** @type {import('next').NextConfig} */

// const NextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };

// module.exports = NextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};
