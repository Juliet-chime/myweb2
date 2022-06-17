import React, { useState } from "react";
import {
  ExpandMenuButton,
  ExpandMenuDiv,
  ExpandSubRoute,
  ExpandSubRoutesContainer,
} from "./style";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const ExpandMenu = ({ route }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <ExpandMenuDiv>
      <ExpandMenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </ExpandMenuButton>
      <ExpandSubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes.map((subRoute: any) => (
          <ExpandSubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </ExpandSubRoute>
        ))}
      </ExpandSubRoutesContainer>
    </ExpandMenuDiv>
  );
};

export default ExpandMenu;
