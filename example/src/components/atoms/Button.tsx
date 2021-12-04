import React from "react";
import {ButtonProps} from "../../types/components/ButtonTypes";
import ReactLoading from "react-loading";

const Button:(props: ButtonProps) => JSX.Element = (props: ButtonProps) => {
    const {onClick, title = '', isLoading = false} = props
    return(
        <div className='button-login' onClick={onClick}>
            {isLoading ?
                <ReactLoading type={'spin'} color={'#DDDDDD'} width={20} height={20} />
                :
                <span className={'button-text'}>{title}</span>}
        </div>
    )
}
export {Button}