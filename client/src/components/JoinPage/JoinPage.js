import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ChatContext from "../../contexts/ChatContext";
import { nanoid } from "nanoid";
import { sendName } from "../../socketService";
import styles from "./index.module.css";

function JoinPage() {
  const history = useHistory();
  const { name, setName } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendName(name);
    window.sessionStorage.setItem("myName", name);
    history.push("/chat");
  };

  return (
    <div className={styles.joinGlobalContainer}>
      <div className={styles.joinContainer}>
        <h1 className={styles.heading}>GİRİŞ</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="İsim"
            className={styles.joinInput}
            type="text"
            required
            onChange={(e) => setName(`${e.target.value}_${nanoid(5)}`)}
          />

          <button className={`${styles.button} ${styles.mt20}`} type="submit">
            Sohbete Katıl
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinPage;
