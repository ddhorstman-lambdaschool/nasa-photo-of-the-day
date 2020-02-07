import React from "react";
import { Card, CardHeader } from "reactstrap";
export default props => (
  <Card style={{ margin: "0px 10px 10px" }}>
    <CardHeader tag="h1">{props.title}</CardHeader>
  </Card>
);
