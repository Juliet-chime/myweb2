import React from "react";
import ExpandMenu from "./ExpandMenu";
import { props } from "./types";
import {
  Backdrop,
  DrawerNavbarBrand,
  DrawerNavRoute,
  DrawerNavRoutes,
  DrawerRightNav,
  NavDrawer,
} from "./style";
import Button from "../button/Button";

const Drawer = ({ isOpen, toggleDrawer, routes }: props) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <NavDrawer isOpen={isOpen}>
        <DrawerRightNav>
          <DrawerNavbarBrand>LOGO</DrawerNavbarBrand>
          <DrawerNavRoutes>
            {routes.map((route: any) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <DrawerNavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </DrawerNavRoute>
              );
            })}
          </DrawerNavRoutes>
          <div>
            <Button
              buttonType="primary"
              type="submit"
              text="Login"
              onClick={() => console.log("hello")}
            />
          </div>
        </DrawerRightNav>
      </NavDrawer>
    </>
  );
};

export default Drawer;
