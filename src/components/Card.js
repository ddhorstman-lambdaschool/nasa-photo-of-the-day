import React from "react";
import Header from "./Header";
import MediaContainer from "./MediaContainer";
import TextContainer from "./TextContainer";
export default function Card(props) {
  const { title, media_type, explanation, url } = props.data;
  return (
    <div>
      <Header title={title} />
      <MediaContainer type={media_type} url={url} title={title} />
      <TextContainer text={explanation} />
    </div>
  );
}
