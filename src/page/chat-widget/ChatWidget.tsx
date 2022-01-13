import React, { useCallback, useState } from "react";
import { useGetMessagesQuery } from "../../store/api";
import "./chat-widget.css";

export const ChatWidget: React.FC = ({}) => {
  const { data: messsages, error, isFetching } = useGetMessagesQuery("redux");
  const [message, setMessage] = useState("");

  const handleClick = useCallback(() => {
    console.log(message);
  }, [message]);

  const handleChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  return (
    <div className="chat-widget-container">
      <h1>Chat widget</h1>
      <div className="message-container">
        {messsages?.map((message) => (
          <div className="chat-message" key={message.id}>
            <p>
              <span>{message.userName}:</span>
              <span>{message.text}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input value={message} onChange={handleChange} />
        <button onClick={handleClick} type="button">
          Send
        </button>
      </div>
    </div>
  );
};
