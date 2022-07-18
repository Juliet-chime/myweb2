import React from 'react';
import Button from '../button/Button';
import logo from '../img/logo.png';
import { FaBars } from 'react-icons/fa';
import Menu from './Menu';
import {
  DrawerButton,
  ListMenu,
  NavbarDiv,
  NavButtonHolder,
  NavContainer,
  NavRoute,
  NavRoutes,
} from './style';

interface props {
  toggleDrawer?: () => void;
  routes?: any;
}

const Navbar = ({ toggleDrawer, routes }: props) => {
  return (
    <NavbarDiv>
      <NavContainer>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <DrawerButton onClick={toggleDrawer}>
            <FaBars style={{ color: 'black', fontSize: '18px' }} />
          </DrawerButton>
          <>
            <img src={logo} alt="" className="home-logo" width="60" />
          </>
        </div>
        <ListMenu>
          <NavRoutes>
            {routes.map((route: any) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <NavButtonHolder>
            <Button
              type="submit"
              text="Sign in / Sign up"
              onClick={() => console.log('hello')}
              width="100%"
              background="#56ccf2"
              borderRadius="8px"
              fontSize="14px"
              color="white"
            />
          </NavButtonHolder>
        </ListMenu>
      </NavContainer>
    </NavbarDiv>
  );
};

export default Navbar;
