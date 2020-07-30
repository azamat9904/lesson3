import React, {useEffect, useState} from 'react';
import s from './Textarea.module.scss';
type Props = {
    className?:string,
    placeholder?:string,
    onChange?:(value:string)=>void,
    name?:string,
    required?:boolean
}

const Textarea:React.FunctionComponent<Props> = ({className,placeholder,onChange,name,required})=>{
    const [value,setValue] = useState<string>('');
    const [empty,setEmpty] = useState<boolean>(false);
    const [touched,setTouched] = useState<boolean>(false);

    useEffect(()=>{
        setTouched(true);
        if(!touched) return;

        if(required && !value){
            setEmpty(true);
            return ;
        }

        setEmpty(false);
    },[value]);

    const changeHandler = (value:string)=>{
        setValue(value);
        if(onChange) onChange(value);
    };

    return (
        <div className={s.formContainer + ' ' + className}>
            <textarea className={s.formControl} placeholder={placeholder} name={name} onChange={(event)=>changeHandler(event.target.value)} />
            {empty && <span className={s.formError}>*Textarea empty</span> }
        </div>
    )
};
export default Textarea;
