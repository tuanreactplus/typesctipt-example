import React from "react";
interface InputProps {
    placeholder?: string;
    onChange?: (e: { target: { value: string; }; }) => void;
    type: string;
    value?: string;
}
const Input:(props: InputProps) => JSX.Element = (props: InputProps) => {
    const { onChange, type='text', value, placeholder=''} = props
    return(
        <input className={'input-style'} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
    )
}
export {Input}