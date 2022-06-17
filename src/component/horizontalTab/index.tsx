import React, { useEffect, useState } from "react";
import { Wrapper, HorizontalTabList, ListItem } from "./style";

type SelectOption = {
  label?: string;
  value?: string;
};

export interface Props {
  border?: any;
  margin?: any;
  padding?: any;
  color?: any;
  display?: any;
  gap?: any;
  justifyContent?: any;
  background?: any;
  width?: any;
  testAlign?: any;
  options?: any;
  defaultValue?: string;
  onChange?: any;
  borderRadius?: any;
  type?: "button" | "submit" | "reset";
  buttonType?: "DEFAULT" | "SECONDARY" | "TRANSPARENT";
}

export default function HorizonalTab({
  options,
  onChange,
  defaultValue = "ALL",
  width,
  background,
  border,
  padding,
  color,
  display,
  gap,
  justifyContent,
  testAlign,
  margin,
  borderRadius,
  type,
  buttonType,
}: Props) {
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const onTabClicked = (value: string) => () => {
    onChange(value);
    setSelectedValue(value);
  };

  useEffect(() => {
    const selectedOption = options?.find(
      (opt: any) => opt?.value === selectedValue
    );
    setSelectedLabel(selectedOption?.label);
  }, [options, selectedValue]);

  return (
    <>
      <HorizontalTabList
        width={width}
        padding={padding}
        margin={margin}
        border={border}
        color={color}
        display={display}
        gap={gap}
        justifyContent={justifyContent}
        background={background}
        borderRadius={borderRadius}
      >
        {options?.map((option: any) => (
          <ListItem
            testAlign={testAlign}
            type={type}
            onClick={onTabClicked(option?.value)}
            key={option.value}
            className={selectedLabel === option.label ? "activeTab" : ""}
          >
            {option.label}
          </ListItem>
        ))}
      </HorizontalTabList>
    </>
  );
}
