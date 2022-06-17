import { Link } from "react-router-dom";
import styled from "styled-components";
import { props } from "./types";

export const NavbarDiv = styled.nav`
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.116);
  // margin-bottom:700px;
  // @media (max-width: 768px) {
  //   margin-bottom:2000px;
  // }
`;

export const NavContainer = styled.div`
  padding: 0 10rem;
  height: 90px;
  //max-width: 1300px;
  // margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: flex;
  align-items: center;
  // display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarBrand = styled.h2`
  font-size: 3rem;
`;

export const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  color: black;
  align-items: center;
`;

export const ListMenu = styled.div`
  width: 700px;
  display: flex;
  gap: 1rem;
`;

export const NavRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5rem 1rem;
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

export const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;

//subRoutes style

export const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 12rem;
  z-index: -9;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const SubRouteMenu = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

export const MenuButton = styled.div`
  padding: 0.5rem;
  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

export const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  &:hover {
    transition: 0.3s ease-in;
    color: #6f07f6;
    background-color: #d0a7fc;
  }
`;

//expand style

export const ExpandMenuDiv = styled.div``;

export const ExpandMenuButton = styled.div`
  // font-size: 2.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExpandSubRoutesContainer = styled.div<props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
`;

export const ExpandSubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
`;

//drawer style

export const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const NavDrawer = styled.div<props>`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

export const DrawerRightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export const DrawerNavbarBrand = styled.h2`
  font-size: 3rem;
`;

export const DrawerNavRoutes = styled.div``;

export const DrawerNavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 1rem;
  padding: 0.5rem;
`;

export const DrawerLoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;

export const NavButtonHolder = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 600;
    margin-left: 30px;
  }
`;
