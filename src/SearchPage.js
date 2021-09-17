import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./components/ChannelRow";
import VideoRow from "./components/VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.ytimg.com/an_webp/2Y2Tc_SuXLw/mqdefault_6s.webp?du=3000&sqp=CNDPkYoG&rs=AOn4CLDm9CMsQQ7fuRCSV5JuPmN6-J9idQ"
        channel=".Net core developer"
        verified
        subs="659k"
        noOfVideos={382}
        description="You can write .net core programs"
      />
      <hr />
      <VideoRow views="1.4M" subs="659k" description="Do you want to learn programming" timestamp="59 seconds" channel=".Net Developer" title="C# beginners tutorials" image="https://i.ytimg.com/vi/lwj2Krjdup8/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLA2NBaL3MuuhD1undwd3LXQdHSzzg" />
    </div>
  );
}

export default SearchPage;
