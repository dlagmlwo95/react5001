import React from "react";
import YoutubeItem from "YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="list">
      <ul>
        {props.video.map((video) => (
          <YoutubeItem />
        ))}
      </ul>
    </div>
  );
};

export default YoutubeList;