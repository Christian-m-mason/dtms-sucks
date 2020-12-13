import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: stretch;
  height: 100%;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-areas:
    "side Header Header"
    "side Main Main"
    "side Main Main";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 100vh auto;
  background-color: #f2f2f2;
`;
