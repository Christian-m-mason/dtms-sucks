import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styles/Layout";

const HeaderStyles = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  align-content: flex-start;
`;

const HeaderItemGroup = styled.ul`
  white-space: nowrap;
  li {
    height: 100%;
    width: 100%;
    list-style: none;
    display: inline;
    white-space: nowrap;
  }
`;

const Search = styled.li`
  background-color: #fff;
  border-radius: 20px;
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

const HeaderItem = styled.li`
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
