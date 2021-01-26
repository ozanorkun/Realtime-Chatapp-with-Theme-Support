import { useContext, useState } from "react";
import ChatContext from "../../contexts/ChatContext";
import { sendMessage } from "../../socketService";
import styles from "./index.module.css";

function ChatInput() {
  const [message, setMessage] = useState([]);

  const { name, messages, setMessages, color } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({ message: message, name: name });
    setMessages([...messages, { message: message, name: name }]);
    setMessage("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          placeholder="Bir mesaj yazın..."
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
        />
        <button
          style={{
            backgroundColor: color,
          }}
          className={styles.sendButton}
          onClick={handleSubmit}
        >
          Gönder
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
