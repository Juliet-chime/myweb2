import React from 'react'
import { InputField } from './style';

export interface InputProps {
    onChange?:any;
    value?:any;
    name?:any;
    id?:any;
    type?:any;
    placeholder?:any;
    required?:boolean;
    readonly?: boolean;
    disabled?: boolean;
    border?:any;
    width?:any;
    padding?:any;
    color?:any;
    min?:any;
    max?:any
    style?:any;
    colorDisable?:any;
    backgroundDisable?:any;
    filterDisable?:any;
}
const InputElement = ({value,id,name,onChange,placeholder,type,readonly,required,disabled,min,max,width,style,colorDisable, backgroundDisable,filterDisable}:InputProps) => {
  return (
    <InputField value={value} id={id} name={name} onChange={onChange} placeholder={placeholder} type={type} readOnly={readonly} disabled={disabled} required={required} min={min} max={max} width={width} style={style} colorDisable={colorDisable}  backgroundDisable={ backgroundDisable} filterDisable={filterDisable}/>
  )
}

export default InputElement