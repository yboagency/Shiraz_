import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 is next/image's implicit default (used by every Image that doesn't
    // set an explicit `quality` prop, e.g. the /menu dish photos). 85 is the
    // explicit value set on the four homepage image components. Next.js
    // 15.5+ requires every quality value actually in use to be allow-listed
    // here; from Next.js 16 this is enforced as a hard error, not a warning.
    qualities: [75, 85],
  },
};

export default nextConfig;
