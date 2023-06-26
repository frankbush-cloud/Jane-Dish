import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handlevideo = () => {
    setPlayVideo(!playVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        loop
        type="video/mp4"
        controls={false}
        muted
      />

      <div className="app__video_overlay flex__center">
        <div
          className="app-video_overlay-circle flex__center"
          onClick={handlevideo}
        >
          {playVideo ? (
            <BsFillPauseFill color="white" fontSize={30} />
          ) : (
            <BsFillPlayFill color="white" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
