import React, {FormEvent, useState} from 'react';
import Input from "../../components/input/Input";
import Button from '../../components/button/Button';
import {useHistory} from 'react-router-dom';
import s from './Home.module.scss';

const Home:React.FunctionComponent = ()=>{
    const [fields,setFields] = useState<{'username':string,'password':string} | null>();
    const history = useHistory();

    const changeHandler = (field:string,value:string)=>{
        setFields({
            ...fields,
            [field]:value
        } as any);
    };

    const submitForm = (event:FormEvent)=>{
        event.preventDefault();
        history.push('/chat');
    };

    return (
        <div className={s.homePage}>
           <div className={s.homePageContainer}>
               <form onSubmit={submitForm}>
                   <Input
                       placeholder={'Enter your email'}
                       name={'email'}
                       type={'email'}
                       className={s.inputSpace}
                       onChange={(value)=>changeHandler('username',value)}
                       required={true}
                   />
                   <Input
                       placeholder={'Enter your password'}
                       name={'password'}
                       type={'password'}
                       onChange={(value)=>changeHandler('password',value)}
                       required = {false}
                   />
                   <Button className={s.homeBtn} text={'Login'} type={'submit'} />
               </form>
           </div>
        </div>
    )
};
export default Home;
