import React, { useEffect, useState, useMemo } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import "../css/chat.css";

export const Chat = ({ socket, username, room, onCloseChat }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const stableSocket = useMemo(() => socket, [socket]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/room/${room}/messages`
        );
        setMessageList(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error.message);
      }
    };

    fetchMessages();
  }, [room]);

  useEffect(() => {
    const handleReceiveMessage = (data) => {
      setMessageList((prev) => [...prev, data]);
    };

    socket.on("receive_message", handleReceiveMessage);

    // Clean up the subscription when the component is unmounted
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [stableSocket]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("message", messageData);
      setMessageList((prev) => [...prev, messageData]);
      setCurrentMessage("");
    }
  };

  const handleCloseChat = () => {
    onCloseChat();
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
        <button onClick={handleCloseChat}>Close Chat</button>
      </div>

      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className="message"
              id={username === messageContent.author ? "other" : "you"}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>

      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Message..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};
