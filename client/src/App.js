import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import "./App.css"
import React, { useState, useEffect } from "react";
import Pusher from 'pusher-js'
import axios from './url/axios'

function App()
{
  const [msgs, setMsgs] = useState([])
  useEffect(() =>
  {
    console.log(`I am running `);
    axios.get('/v1/msg').then(res =>
    {
      console.log(`Res`, res.data.data);
      setMsgs(res.data.data)
    })
  }, [])
  useEffect(() =>
  {
    // Once
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
    const pusher = new Pusher('690b6bfe90679fefc55a', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) =>
    {
      // alert(JSON.stringify(data))
      setMsgs([...msgs, data])
      // console.log('MSG', msgs)
    });

    return () =>
    {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [msgs])

  // console.log(`Messages : `, msgs.data);
  return (
    <div className="App">
      <div className="back___body">
        <Sidebar />
        <Chat msg={msgs} />
      </div>
    </div>
  );
}

export default App;
