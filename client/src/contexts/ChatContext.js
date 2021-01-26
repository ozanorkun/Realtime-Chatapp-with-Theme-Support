import { useState, createContext } from "react";

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [numberOfConnections, setNumberOfConnections] = useState();
  const [color, setColor] = useState("#2C6FFF");

  const values = {
    name,
    setName,
    messages,
    setMessages,
    numberOfConnections,
    setNumberOfConnections,
    color,
    setColor,
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatContext;
