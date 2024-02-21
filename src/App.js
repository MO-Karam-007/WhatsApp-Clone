import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import "./App.css"

function App()
{
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
