import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarStyles = styled.div`
  min-width: 250px;
  height: 100vh;
  min-height: 1000px;
  background-color: #383838;
  box-shadow: ${(props) => props.theme.boxShadows[1]};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
`;

const SidebarBrand = styled.div`
  background-color: #ffd530;
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 60px;
  text-align: center;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadows[1]};
  z-index: 10;
  align-content: flex-start;
`;

const SidebarItem = styled(Link)`
  font-size: 1rem;
  width: 100%;
  padding: 10px 0px 10px 15px;
  border-bottom: 1px solid gray;
  text-decoration: none;
  color: white;
`;

export default function Sidebar() {
  return (
    <SidebarStyles>
      <SidebarBrand>
        <span>643rd MP Co.</span>
      </SidebarBrand>
      <SidebarItem to="/" style={{ borderTop: "1px solid gray" }}>
        Dashboard
      </SidebarItem>

      <SidebarItem to="/calendar">Calendar</SidebarItem>
      <SidebarItem to="/targts">TARGTS</SidebarItem>
      <SidebarItem to="/gunnery">Gunnery</SidebarItem>
      <SidebarItem to="/training">Training</SidebarItem>
      <SidebarItem to="/prt">Physical Readiness</SidebarItem>
      <SidebarItem to="/soldiers">Soldier Manager</SidebarItem>
      <SidebarItem to="/unit">Unit Manager</SidebarItem>
      <SidebarItem to="/settings">Settings</SidebarItem>
    </SidebarStyles>
  );
}
