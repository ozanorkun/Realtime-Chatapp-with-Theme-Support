import { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import { sendColor } from "../../socketService";
import styles from "./index.module.css";
import onlineIcon from "../../icons/onlineIcon.png";

function SettingBar() {
  const { numberOfConnections, setColor, color } = useContext(ChatContext);

  const colorHandler = () => {
    sendColor(color);
  };

  return (
    <div style={{ backgroundColor: color }} className={styles.infoBar}>
      <div className={styles.leftInnerContainer}>
        {numberOfConnections ? (
          <>
            <img
              className={styles.onlineIcon}
              src={onlineIcon}
              alt="online icon"
            />
            <h5> {numberOfConnections} Kişi Çevrimiçi</h5>
          </>
        ) : (
          <h5>Çevrimiçi Kimse Yok</h5>
        )}
      </div>
      <div className={styles.rightInnerContainer}>
        <label htmlFor="colorPicker">Tema Rengi:</label>
        <input
          onChange={(e) => setColor(e.target.value)}
          type="color"
          id="colorPicker"
          name="colorPicker"
          value={color || "#eeeeee"}
        />

        <button onClick={colorHandler}>Değiştir</button>
      </div>
    </div>
  );
}

export default SettingBar;
