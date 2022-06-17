import React from "react";
import { ButtonProps } from "./type";
import "./index.css";
import { ButtonDiv } from "./style";

const Button = ({
  text,
  type,
  onClick,
  Style,
  className,
  disabled,
  icon,
  width,
  background,
  color,
  borderRadius,
  fontSize,
  margin
}: ButtonProps) => {
  return (
    <ButtonDiv
      type={type}
      style={Style}
      title={text}
      className={className || "Button_Wrap"}
      onClick={onClick}
      disabled={disabled}
      width={width}
      background={background}
      color={color}
      borderRadius={borderRadius}
      fontSize={fontSize}
      margin={margin}
    >
      {icon}
      {text}
    </ButtonDiv>
  );
};

export default Button;
