import React from "react";
import styled from "styled-components";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import { Card } from "react-bootstrap";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: stretch;
  min-width: 1400px;
`;

const data = [
  {
    subject: "ACFT",
    A: 75,
    fullMark: 100,
  },
  {
    subject: "HT/WT",
    A: 95,
    fullMark: 100,
  },
  {
    subject: "IWQ",
    A: 98,
    fullMark: 100,
  },
  {
    subject: "Gunnery",
    A: 55,
    fullMark: 100,
  },
  {
    subject: "Health",
    A: 95,
    fullMark: 100,
  },
  {
    subject: "METL",
    A: 75,
    fullMark: 100,
  },
];

export default function Dashboard() {
  return (
    <CardContainer>
      <Card
        style={{
          minWidth: "600px",
          height: "500px",
          padding: "30px",
          margin: "5px",
        }}
      >
        <h1>METL</h1>
        <Card.Body></Card.Body>
      </Card>
      <Card
        style={{
          minWidth: "600px",
          height: "500px",
          padding: "30px",
          margin: "5px",
        }}
      >
        <h1>ACFT</h1>
        <Card.Body></Card.Body>
      </Card>
      <Card
        style={{
          minWidth: "600px",
          height: "500px",
          padding: "30px",
          margin: "5px",
        }}
      >
        <h1>Readiness</h1>
        <Card.Body>
          <ResponsiveContainer width="100%" height={400} debounce="1">
            <RadarChart outerRadius={160} data={data}>
              <PolarAngleAxis dataKey="subject" radius={180} />
              <PolarRadiusAxis angle={30} radius="180%" domain={[0, 100]} />
              <PolarGrid />
              <Radar
                name="Readiness"
                dataKey="A"
                stroke="#ffd530"
                fill="#ffd530"
                fillOpacity={0.6}
              />{" "}
            </RadarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
      <Card
        style={{
          minWidth: "600px",
          height: "500px",
          padding: "30px",
          margin: "5px",
        }}
      >
        <h1>HT/WT</h1>
        <Card.Body></Card.Body>
      </Card>
      <Card
        style={{
          width: "1210px",
          minWidth: "600px",
          height: "500px",
          padding: "30px",
          margin: "5px",
        }}
      >
        <h1>Gunnery</h1>
        <Card.Body></Card.Body>
      </Card>
    </CardContainer>
  );
}
