import './Sidebar.css'
import React,{ useContext, useState } from 'react'
import { assets } from "../../assets/assets";
import { Context } from '../../context/Context'

export default function Sidebar(){
    const [extended,setExtended]=useState(false);
    const{onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context)

    const loadPrompt=async (prompt)=>{
        setRecentPrompt(prompt)
      await onSent(prompt)
    }
    return(
        <div className="sidebar">
<div className="top">
<img  className ="menu" 
onClick={()=>setExtended(prev=>!prev)}
src={assets.menu_icon} alt="" />
<div onClick={()=>newChat()} className="new-chat">
    <img id="plus-icon"src={assets.plus_icon} alt="" />
   {extended? <p>New Chat</p>:null}
</div>
{extended
? <div className="recent">
    <p className='title'>Recent</p>
    {prevPrompts.map((item,index)=>{
        return(
 <div onClick={()=>loadPrompt(item)} className="recent-entry">
        <img id="message-icon" src={assets.message_icon} alt="" />
        <p>{item.slice(0,18)} ...</p>
    </div>
        )
    })}
   
</div>
:null
}

</div>
<div className="bottom">
<div className="bottom-item recent-entry">
    <img id="question-icon" src={assets.question_icon}alt="" />
   {extended?<p>Help</p>:null}
</div>

<div className="bottom-item recent-entry">
    <img id="history-icon" src={assets.history_icon}alt="" />
     {extended?<p>Activity</p>:null}
</div>

<div className="bottom-item recent-entry">
    <img id="setting-icon" src={assets.setting_icon}alt="" />
     {extended?<p>Setting</p>:null}
</div>
</div>
        </div>
    )
}