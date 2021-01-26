import ChatDashboard from "../ChatDashboard/ChatDashboard";
import SettingsBar from "../SettingsBar/SettingBar";
import ChatInput from "../ChatInput/ChatInput";
import styles from "./index.module.css";

function ChatPage() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <SettingsBar></SettingsBar>
        <ChatDashboard></ChatDashboard>
        <ChatInput></ChatInput>
      </div>
    </div>
  );
}

export default ChatPage;
