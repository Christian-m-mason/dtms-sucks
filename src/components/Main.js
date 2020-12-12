import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "../pages/Dashboard";
import Calendar from "../pages/Calendar";
import Gunnery from "../pages/Calendar";
import Training from "../pages/Training";
import SoldierManager from "../pages/SoldierManager";
import TARGTS from "../pages/TARGTS";
import Settings from "../pages/Settings";
import PhysicalReadiness from "../pages/PhysicalReadiness";
import UnitManager from "../pages/UnitManager";

const MainLayout = styled.div`
  margin: 3rem;
`;

export default function Main() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/targts" component={TARGTS} />
        <Route path="/gunnery" component={Gunnery} />
        <Route path="/training" component={Training} />
        <Route path="/soldiers" component={SoldierManager} />
        <Route path="/prt" component={PhysicalReadiness} />
        <Route path="/unit" component={UnitManager} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </MainLayout>
  );
}
