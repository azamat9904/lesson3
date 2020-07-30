import React, {FormEvent, useState} from 'react';
import ChatWindow from "../../components/chat-window/ChatWindow";
import s from './Chat.module.scss';
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";


const Chat:React.FunctionComponent = ()=>{
    const [value,setValue] = useState();

    const submitHandler = (event:FormEvent)=>{
        event.preventDefault();
        console.log(value);
    };

    const changeHandler = (value:string)=>{
        setValue(value);
    };

    return (
        <div className={s.chatContainer}>
            <div className={s.chat}>
                <ChatWindow/>
                <form onSubmit={submitHandler}>
                    <Textarea name = "chatTextarea" placeholder="Enter your text"  required={true} onChange={((value)=>changeHandler(value))}/>
                    <Button className={s.button} text="Send Message" type={'submit'}/>
                </form>
            </div>
        </div>
    )
};
export default Chat;
