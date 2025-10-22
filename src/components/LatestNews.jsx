import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="font-bold" pauseOnHover={true}>
        <p className="pr-5">
          French ex-president Sarkozy begins jail sentence for campaign finance
          conspiracy
        </p>

        <p className="pr-5">
          Japan's first female leader: A historic moment with caveats
        </p>

        <p className="pr-5">
          Friendly Albanese-Trump meeting masks Australia's creeping doubts
          about US
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
