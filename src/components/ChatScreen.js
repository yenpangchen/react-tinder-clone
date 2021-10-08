import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function Chatscreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Deckard Shaw",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXAV6WRHlSfW54TTTTeNVagidqGT-bl5fcA&usqp=CAU",
      message: "Hey! How are you",
    },
    {
      name: "Deckard Shaw",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXAV6WRHlSfW54TTTTeNVagidqGT-bl5fcA&usqp=CAU",
      message: "Hows it going",
    },
    {
      message: "Hi! How are you Deckard",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH LUKE HOBBS ON 09/09/21
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default Chatscreen;
