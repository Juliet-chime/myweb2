export interface ButtonProps {
  buttonType?: 'primary' | 'secondary' | string;
  type?: any;
  text?: any;
  disabled?: boolean;
  onClick?: (props:any) => void;
  className?: string;
  icon?: any;
  Style?: any;
  width?: string;
  background?: string;
  color?: string;
  borderRadius?: string;
  fontSize?: string;
  margin?: string;
  smallWidth?:string;
}
