import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarStyles = styled.div`
  grid-area: side;
  height: 100%;
  background-color: #383838;
  box-shadow: ${(props) => props.theme.boxShadows[1]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarBrand = styled.div`
  background-color: #ffd530;
  color: #000;
  font-size: 2rem;
  font-weight: bold;

  text-align: center;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadows[1]};
  z-index: 10;
`;

const SidebarItem = styled(NavLink)`
  font-size: 1rem;
  width: 100%;
  padding: 10px 0px 10px 15px;
  border-bottom: 1px solid gray;
  text-decoration: none;
  color: white;

  &.active {
    background-color: #000;
  }

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

export default function Sidebar() {
  return (
    <SidebarStyles>
      <SidebarBrand>
        <span>DTMS-Sucks</span>
      </SidebarBrand>
      <SidebarItem
        exact
        activeClassName="active"
        to="/"
        style={{ borderTop: "1px solid gray" }}
      >
        Dashboard
      </SidebarItem>

      <SidebarItem activeClassName="active" to="/calendar">
        Calendar
      </SidebarItem>
      <SidebarItem activeClassName="active" to="/targts">
        TARGTS
      </SidebarItem>
      <SidebarItem activeClassName="active" to="/gunnery">
        Gunnery
      </SidebarItem>
      <SidebarItem activeClassName="active" to="/training">
        Training
      </SidebarItem>
      <SidebarItem activeClassName="active" to="/prt">
        Physical Readiness
      </SidebarItem>
      <SidebarItem activeClassName="active" to="/soldiers">
        Soldier Manager
      </SidebarItem>
      <SidebarItem activeClassName="active" to="/unit">
        Unit Manager
      </SidebarItem>
      <SidebarItem activeClassName="active" to="/settings">
        Settings
      </SidebarItem>
    </SidebarStyles>
  );
}
