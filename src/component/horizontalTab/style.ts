import styled from "styled-components";
import { Props } from ".";

export const Wrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin: 0 auto 40px auto;
  width: 100%;
`;

export const HorizontalTabList = styled.div<Props>`
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  font-size: 16px;
  font-weight: 500;
  display: ${(props) => props.display};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  cursor: pointer;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  ::-webkit-scrollbar {
    visibility: hidden;
  }
  @media (max-width: 1024px) {
    // padding:10px;
  }
`;

export const ListItem = styled.button<Props>`
  list-style: none;
  line-height: 28px;
  width: ${(props) => props.width};
  text-align: ${(props) => props.testAlign};
  padding: ${(props) =>
    props.type === "submit"
      ? "2px"
      : props.type === "button"
      ? "5px 10px"
      : props.type};
  border-radius: ${(props) =>
    props.type === "submit"
      ? "none"
      : props.type === "button"
      ? "8px"
      : props.type};
  background: none;
  border: none;
  outline: none;
  border: ${(props) =>
    props.type === "submit"
      ? "none"
      : props.type === "button"
      ? "1px solid #56ccf2"
      : props.type};
  color: ${(props) =>
    props.type === "submit"
      ? "rgba(255, 255, 255, 0.4)"
      : props.type === "button"
      ? "#56ccf2"
      : props.type};
  font-weight: 700;
  &:hover {
    color: ${(props) =>
      props.type === "submit"
        ? "#cacaca"
        : props.type === "button"
        ? "white"
        : props.type};
    background-color: ${(props) =>
      props.type === "submit"
        ? "none"
        : props.type === "button"
        ? "#56ccf2"
        : props.type};
  }

  &.activeTab {
    background-color: ${(props) =>
      props.type === "submit"
        ? "none"
        : props.type === "button"
        ? "#56ccf2"
        : props.type};
    border-bottom: ${(props) =>
      props.type === "submit"
        ? "3px solid #56ccf2"
        : props.type === "button"
        ? "none"
        : props.type};
    color: ${(props) =>
      props.type === "submit"
        ? "white"
        : props.type === "button"
        ? "white"
        : "rgba(255, 255, 255, 0.4)"};
    &:hover {
      background: transparent;
      border-bottom: ${(props) =>
        props.type === "submit"
          ? "3px solid #56ccf2"
          : props.type === "button"
          ? "none"
          : props.type};
      border: ${(props) =>
        props.type === "submit"
          ? "none"
          : props.type === "button"
          ? "1px solid #56ccf2"
          : props.type};
    }
  }
`;
