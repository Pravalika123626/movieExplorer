import React from "react";
import krishnaflute from "../assets/krishnaflute.mp4";

const MovieTrailer: React.FC = () => {
  

  
  return (
    <div
      className="trailer">
      <video
         autoPlay
        muted
        playsInline
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      >
        <source src={krishnaflute} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MovieTrailer;


