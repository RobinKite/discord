import { PropTypes } from "prop-types";
import Avatar from "@mui/material/Avatar";

import { BiSolidMicrophone } from "react-icons/bi";
import { BsHeadphones, BsGearFill } from "react-icons/bs";
import styles from "./Sidebar.module.css";

export function Sidebar({ fullname, username }) {
  return <aside className={styles.sidebar}>
    <div className={styles.panel}>
      <div className={styles.user}>
        <Avatar sx={{bgcolor: "#7076f1", width: "32px", height: "32px"}}/>
        <div>
          <p className={styles.fullname}>{fullname}</p>
          <p className={styles.username}>{username}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <BiSolidMicrophone className={styles.icon} size={20}/>
        <BsHeadphones className={styles.icon} size={22}/>
        <BsGearFill className={styles.icon} size={18}/>
      </div>
    </div>
  </aside>;
}

Sidebar.propTypes = {
  fullname: PropTypes.string,
  username: PropTypes.string
};
