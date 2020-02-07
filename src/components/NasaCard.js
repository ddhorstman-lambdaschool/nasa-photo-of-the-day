import React from "react";
import Header from "./Header";
import MediaContainer from "./MediaContainer";
//import TextContainer from "./TextContainer";
import { Card, CardText, CardBody, CardHeader } from "reactstrap";
export default function NasaCard(props) {
  const isLoading = props.isLoading;
  const { title, media_type, explanation, url } = props.data;
  return (
    <div>
      <Header title={"Astronomy Photo of the Day"} />
      {props.children}
      <Card
        style={{
          width: "80%",
          margin: "auto",
          opacity: `${isLoading ? 0.5 : 1}`
        }}
      >
        <CardHeader tag="h3">{title}</CardHeader>
        <CardBody>
          <MediaContainer type={media_type} url={url} title={title} />
          <CardText>{explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
