/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate-plugin";

const nextConfig = {
  ...nextTranslate(),
};

export default nextConfig;
