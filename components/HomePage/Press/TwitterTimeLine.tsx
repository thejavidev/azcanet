import React, { useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const TwitterTimeLine = () => {
  return (
    <>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="azcanet"
        options={{ height: 650 }}
      />
    </>
  );
};

export default TwitterTimeLine;
