import React from 'react';
import {
  MenuButton,
  SubRoute,
  SubRouteMenu,
  SubRoutesContainer,
} from './style';
import { FaCaretDown } from 'react-icons/fa';

const Menu = ({ route }: any) => {
  return (
    <SubRouteMenu>
      <MenuButton>
        {route.name} <FaCaretDown />
      </MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute: any) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SubRouteMenu>
  );
};

export default Menu;
