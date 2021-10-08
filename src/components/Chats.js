import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="Chats">
      <Chat
        name="Luke Hobbs"
        message="Hey! How are you"
        profilePic="https://today.in-24.com/entertainment/content/uploads/2021/07/23/f795e513ff.jpg"
        timestamp="35 minutes ago"
      />
      <Chat
        name="Deckard Shaw"
        message="What's up🔥🤟"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXAV6WRHlSfW54TTTTeNVagidqGT-bl5fcA&usqp=CAU"
        timestamp="30 minutes ago"
      />
      <Chat
        name="Dominic Toretto"
        profilePic="https://i.pinimg.com/736x/c5/a8/a2/c5a8a27904e177379ccba91b2f1aa092.jpg"
      />
      <Chat
        name="Roman Pearce"
        profilePic="https://mindlifetv.com/wp-content/uploads/2021/07/Fast-and-Furious-9-How-could-Roman-survive-the-mines.jpg"
      />
    </div>
  );
}

export default Chats;
