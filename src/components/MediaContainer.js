import React from "react";
export default props => {
  if (props.type === "image") return <img src={props.url} alt="APOD" />;
  if (props.type === "video")
    return (
      <iframe
        width="560"
        height="315"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; full-screen"
        title={props.title}
        allowFullScreen
        src={`${props.url}&autoplay=1`}
      />
    );
  return <div />;
};
