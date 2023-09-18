import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { convertTimestampToDateString } from "@/utils";
import styles from "./ChatMessage.module.css";

export function ChatMessage({ authorName, avatarUrl, timestamp, text }) {
  return <div className={styles.message}>
    <Avatar sx={{bgcolor: "#7076f1"}} src={avatarUrl} />
    <div className={styles.content}>
      <h3 className={styles.heading}>
        <span className={styles.title}>{authorName}</span>
        <small className={styles.datetime}>{convertTimestampToDateString(timestamp)}</small>
      </h3>
      <p className={styles.text}>{text}</p>
    </div>
  </div>;
}

ChatMessage.propTypes = {
  authorName: PropTypes.string,
  avatarUrl: PropTypes.string,
  timestamp: PropTypes.number,
  text: PropTypes.string
};
