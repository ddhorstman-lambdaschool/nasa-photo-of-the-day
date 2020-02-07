import React from "react";
import { CardImg } from "reactstrap";
export default props => {
  if (props.type === "image") return <CardImg src={props.url} alt="APOD" />;
  if (props.type === "video") {
    const videoID = props.url.slice(
      props.url.indexOf("embed") + 6,
      props.url.indexOf("?")
    );
    return (
      <iframe
        width="560"
        height="315"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; full-screen"
        title={props.title}
        allowFullScreen
        src={`${
          props.url
        }&autoplay=1&controls=0&loop=1&modestbranding=1&playlist=${videoID}&showinfo=0`}
      />
    );
  }
  return <div />;
};
