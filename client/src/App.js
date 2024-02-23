import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import "./App.css"
import React, { useEffect } from "react";

function App()
{
  useEffect(() =>
  {
    // Once
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
    const pusher = new Pusher('690b6bfe90679fefc55a', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data)
    {
      alert(JSON.stringify(data));
    });

  }, [])
  return (
    <div className="App">
      <div className="back___body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
