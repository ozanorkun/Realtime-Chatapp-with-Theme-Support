import { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import styles from "./index.module.css";

function ChatMessage({ message, name }) {
  const { color } = useContext(ChatContext);

  return name === window.sessionStorage.getItem("myName") ? (
    <div className={[styles.messageContainer, styles.justifyEnd].join(" ")}>
      <p className={[styles.sentText, styles.pr10].join(" ")}>{name}</p>
      <div
        style={{
          backgroundColor: color,
        }}
        className={styles.messageBox}
      >
        <p className={[styles.messageText, styles.colorWhite].join(" ")}>
          {message}
        </p>
      </div>
    </div>
  ) : (
    <div className={[styles.messageContainer, styles.justifyStart].join(" ")}>
      <div className={[styles.messageBox, styles.backgroundLight].join(" ")}>
        <p className={[styles.messageText, styles.colorDark].join(" ")}>
          {message}
        </p>
      </div>
      <p className={[styles.sentText, styles.pl10].join(" ")}>{name}</p>
    </div>
  );
}

export default ChatMessage;
