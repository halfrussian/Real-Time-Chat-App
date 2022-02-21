import React from "react";
import './App.css'
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <>
      <ChatEngine 
        height="100vh"
        projectID="4ec397e8-d4df-4f43-80f6-7c1438d92336"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
      />
    </>
  );
}

export default App;