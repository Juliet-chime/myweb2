import React from 'react'

interface Props {
    items?:any
    onChange?:any;
    value?:any;
    name?:any;
    id?:any;
    border?:any;
    width?:any;
    padding?:any
}

const Select = ({onChange,id,items,value,name,}:Props) => {
  return (
    <select name={name} id={name} onChange={onChange}>
        {items.map((item:any,index:any)=>(
        <option value={value} key={index}>{item.optionvalue}</option>
        ))}
    </select>
  )
}

export default Select