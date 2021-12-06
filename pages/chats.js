import React,{ useContext,useEffect,useState} from "react";
import {useRouter} from "next/router";
import {Context} from "../context";
import dynamic from "next/dynamic";

import "../styles/chats.css";

const ChatEngine =  dynamic(( )=>import("react-chat-engine").then((module)=> module.ChatEngine)
);

const MessageFromSocial = dynamic(( )=>import("react-chat-engine").then((module)=> module.MessageFromSocial)
);

export default function Chats() {
  const {username,secret}=useContext(Context);
  const [showChat,setShowChat]=useState(false);
  const router = useRouter();

  useEffect(()=>{
    if(typeof document !== "null"){
      setShowChat(true);
    }
  })

  useEffect(()=>{
    if(username.length === 0 || secret.length === 0)
      router.push("/")
    });

  if(!showChat) return <div />

  return (<div className="background">
    <div className="shadow">
      <ChatEngine
        height="calc(100vh - 200px)"
        projectId="dd5c6394-c1cf-44b8-b5f3-5cecabc83027"
        userName={username}
        userSecret={secret}
        renderNewMessageForm={() => <MessageFromSocial/>}
      />
    </div>
  </div>)
}