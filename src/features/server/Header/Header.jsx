import PropTypes from "prop-types";
import { BiHash, BiSolidHelpCircle } from "react-icons/bi";
import styles from "./Header.module.css";

export function Header({ serverName, channelName }) {
  return <header className={styles.header}>
    <div className={styles.sidebar}>
      <h2 className={styles.title}>{serverName}</h2>
    </div>
    <div className={styles.chat}>
      <div className={styles.heading}>
        <BiHash className={styles.hashtag} size={24} />
        <h2 className={styles.title}>{channelName}</h2>
      </div>
      <div className={styles.actions}>
        <BiSolidHelpCircle className={styles.icon} size={24} />
      </div>
    </div>
  </header>;
}

Header.propTypes = {
  serverName: PropTypes.string,
  channelName: PropTypes.string
};
