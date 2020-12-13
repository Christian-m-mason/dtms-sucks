import React from "react";
import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Readiness ACFT HTWT"
    "Gunnery Gunnery Gunnery";
  margin: 0 auto;
  grid-gap: 20px;
  padding: 0 50px;
  align-items: stretch;
`;

const Card = styled.div`
  height: 400px;
  width: 400px;
  margin: 10px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  cursor: pointer;
  h1 {
    font-size: 2rem;
    width: 100%;
  }
`;

const cardTiles = [
  { title: "Readiness" },
  { title: "ACFT" },
  { title: "HT/WT" },
  { title: "Individual Weapons" },
  { title: "Crew Served" },
  { title: "Platform Weapons" },
];

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem" }}>A Co. 1-103rd Inf Reg. </h1>
      <br />
      <CardGrid>
        {cardTiles.map((card, i) => {
          return (
            <Card key={i} wide={card.wide}>
              <h1>{card.title}</h1>
            </Card>
          );
        })}
      </CardGrid>
    </div>
  );
}
