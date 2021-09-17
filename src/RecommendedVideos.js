import React from "react";
import './RecommendedVideos.css';
import VideoCard from "./components/VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
      <VideoCard
      title="Become a web developer"
      views = "2.3M Views"
      timestamp ="3 days ago"
      channelImage = "https://www.youtube.com/channel/UCiXOai6BysQXfoynXWefbuw"
      channel = "Sonny Sangha"
      image = "https://yt3.ggpht.com/sm5X7OXSU1mLZP9qY9LFW8kHoYybD0LDrYpRejqSp_pnztUY-taKNbuMkfT28sCWcMe472Vz0w=s88-c-k-c0x00ffffff-no-rj"
       />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
