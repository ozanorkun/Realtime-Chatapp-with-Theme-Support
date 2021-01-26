import ChatMessage from "../ChatMessage/ChatMessage";
import { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
//import UserActions from "../UserActions/UserActions";
import ScrollToBottom from "react-scroll-to-bottom";
import styles from "./index.module.css";

function ChatDashboard() {
  const { messages } = useContext(ChatContext);

  return (
    <ScrollToBottom className={styles.messages}>
      {messages.map((item, key) => (
        <ChatMessage key={key} message={item.message} name={item.name} />
      ))}
    </ScrollToBottom>
  );
}

export default ChatDashboard;
