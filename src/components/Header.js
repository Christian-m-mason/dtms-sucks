import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyles = styled.div`
  grid-area: Header;
  display: flex;
  background-color: #d2d2d2;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  align-content: flex-start;
`;

const HeaderItemGroup = styled.div`
  display: flex;
  min-width: 600px;
`;

const Search = styled.div`
  background-color: #fff;
  border-radius: 20px;
  height: 35px;
  input {
    height: 35px;
    width: 300px;
    border: none;
    outline: 0;
    padding-left: 20px;
    font-weight: bold;
    border-radius: 20px;
    transition: 2s;
  }
`;

const HeaderItem = styled.div`
  color: #121212;
  font-size: 1rem;
  margin: auto 0px auto 20px;
  padding: 2px;

  cursor: pointer;
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.primary};
    padding: 2px 2px 0px 2px;
  }
`;

/*
const BreadCrumbs = styled.ul`
  list-style: none;
  padding: 0;
  & > li:after {
    content: "${(props) => props.separator || "/"}";
    padding: 0 8px;
    font-size: 1.5rem;
  }
`;

const Crumb = styled.li`
  display: inline-block;
  font-size: 1.5rem;
  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  div {
    font-size: 1.5rem;
    color: #121212;
    text-decoration: none;
    padding: 2px;
    &:hover,
    &:active {
      border-bottom: 2px solid ${(props) => props.theme.primary};
      padding: 2px 2px 0px 2px;
    }
  }
`;
*/
export default function Header({ unitData }) {
  function handleSearchChange(e) {
    console.log(e.target.value);
  }

  return (
    <HeaderStyles>
      {/*
      <BreadCrumbs separator="&rarr;">
       <Crumb>
          <div>{unitData.unitName}</div>
        </Crumb>
      </BreadCrumbs> */}
      <HeaderItemGroup>
        <Search>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
          />
        </Search>
        <HeaderItem>SSG Christian Mason</HeaderItem>
        <HeaderItem>Log Out</HeaderItem>
      </HeaderItemGroup>
    </HeaderStyles>
  );
}
