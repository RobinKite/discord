import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { convertTimestampToDateString } from "@/utils";

export function ChatMessage({ authorName, avatarUrl, timestamp, text }) {
  return (
    <div className="flex gap-x-4 py-1 pr-12 pl-4 mt-5 text-[#dcdee1]">
      <Avatar
        sx={{ bgcolor: "#7076f1" }}
        src={avatarUrl}
      />
      <div className="grow">
        <h3>
          <span className="text-[#7076f1] font-medium">{authorName}</span>
          <small className="ml-2 text-[#959ba3]">
            {convertTimestampToDateString(timestamp)}
          </small>
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

ChatMessage.propTypes = {
  authorName: PropTypes.string,
  avatarUrl: PropTypes.string,
  timestamp: PropTypes.number,
  text: PropTypes.string,
};
