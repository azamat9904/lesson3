import React from 'react';
import s from './ChatWindow.module.scss';


const ChatWindow:React.FunctionComponent = ()=>{
    return (
        <div className={s.chatWindow}>
            <div className={s.chatWindowContent}>
                <div className={s.chatDialog}>
                    <span className={s.chatText}>Hello world</span>
                </div>
            </div>
        </div>
    )
};
export default ChatWindow;
