import React from 'react';
type Props = {
    className?:string;
    type?:'button'|'submit'|'reset';
    callBack?:()=>void;
    text:string
}

const Button:React.FunctionComponent<Props> = ({className,type,callBack,text})=>{
    return (
        <div className="btnContainer">
            <button type = {type} className={className} onClick={callBack}>{text}</button>
        </div>
    )
};
export default Button;
