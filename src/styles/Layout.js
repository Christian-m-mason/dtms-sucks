import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  height: 100vh;
  width: 100%;
  align-content: start;
`;
