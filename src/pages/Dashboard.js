import React from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
} from "../components/Card";

export default function Dashboard() {
  return (
    <div>
      <CardWrapper>
        <CardHeader>
          <CardHeading>ACFT Status</CardHeading>
        </CardHeader>

        <CardBody></CardBody>
      </CardWrapper>
    </div>
  );
}
