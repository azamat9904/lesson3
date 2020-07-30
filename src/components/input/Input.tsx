import React, {FormEvent, Fragment, useEffect, useState} from 'react';
import s from './Input.module.scss';
import {callbackify} from "util";
type Props = {
    name: string,
    placeholder?: string;
    onChange?: (value:string) => void;
    type: 'text' | 'password' | 'email';
    className?:string,
    required?:boolean
}

const Input: React.FunctionComponent<Props> = ({name, placeholder, onChange, type,className,required}) => {
    const [value,setValue] = useState<string>('');
    const [empty,setEmpty] = useState<boolean>(false);
    const [invalid,setInvalid] = useState<boolean>(false);
    const [touched,setTouched] = useState<boolean>(false);
    const hasError = empty || invalid;

    const setStates = (isEmpty:boolean,isInvalid:boolean)=>{
        setEmpty(isEmpty);
        setInvalid(isInvalid);
    };

    const changeHandler = (value:string)=>{
        setValue(value);
        if(onChange) onChange(value);
    };

    useEffect(()=>{
        setTouched(true);

        if(!touched) return;

        if(required && !value){
            setStates(true,false);
            return;
        }

        if(required && value.match(/\s/g)){
            setStates(false,true);
            return;
        }

        setStates(false,false);

    },[value]);

    return (
            <div className={`${s.formContainer} ${!hasError ? className : ''}`}>
                <input
                    name = {name}
                    type={type}
                    placeholder={placeholder}
                    onChange={(event)=>changeHandler(event.target.value)}
                    className={s.formControl}
                />
                {empty && <span className = {s.formError}>* The field should not be empty</span>}
                {invalid && <span className = {s.formError}>* The field is invalid</span>}
            </div>
    );
};
export default Input;
