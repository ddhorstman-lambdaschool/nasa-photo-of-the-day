import React from "react";
import { Card, CardHeader } from "reactstrap";
export default props => (
  <Card>
    <CardHeader tag="h1">{props.title}</CardHeader>
  </Card>
);
