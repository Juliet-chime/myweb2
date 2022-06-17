import React from 'react'
import { InputField } from './style';

interface Props {
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
    min?:any;
    max?:any
}
const InputElement = ({value,id,name,onChange,placeholder,type,readonly,required,disabled,min,max}:Props) => {
  return (
    <InputField value={value} id={id} name={name} onChange={onChange} placeholder={placeholder} type={type} readOnly={readonly} disabled={disabled} required={required} min={min} max={max}/>
  )
}

export default InputElement