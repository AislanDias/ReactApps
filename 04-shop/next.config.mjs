/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   images: {
  //     allowFutureImage: true
  //   }
  // }
  images: {
    remotePatterns: [
      'files.stripe.com'
    ]
  }
};

export default nextConfig;
