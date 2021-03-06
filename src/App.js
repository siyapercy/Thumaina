import React from "react";
import "./App.css";
/*
import "./Auctions.css";
import "./Bets.css";
import "./Casual.css";
import "./Fundraiser.css";
import "./Pawns.css";
import "./Jobs.css";
import "./MeetUps.css";
import "./Live.css";
*/
import "./Wallet.css";
import "./PostType.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Posts from "./components/Posts";
import ChatBar from "./components/ChatBar";
import ChatBox from "./components/ChatBox";

function App() {
  const [state, setState] = React.useState(false);
  const [current, setCurrent] = React.useState({});
  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };
  const closeChat = () => {
    setState(false);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="facebook">
        <SideBar />
        <Posts />
        <ChatBar openChat={openChat} />
        <ChatBox state={state} current={current} closeChat={closeChat} />
      </div>
    </div>
  );
}

export default App;
