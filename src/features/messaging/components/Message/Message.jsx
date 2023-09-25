import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { convertTimestampToDateString } from "@/utils";

export function Message({ authorName, avatarUrl, timestamp, text }) {
  return (
    <div className="mb-2 mt-5 flex max-w-full gap-x-4 py-1 pl-4 pr-12 text-sm text-[#dcdee1]">
      <Avatar sx={{ bgcolor: "#7076f1" }} src={avatarUrl} />
      <div className="grow">
        <h3>
          <span className="font-medium text-[#7076f1]">{authorName}</span>
          <span className="ml-2 text-xs text-[#959ba3]">
            {convertTimestampToDateString(timestamp)}
          </span>
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  authorName: PropTypes.string,
  avatarUrl: PropTypes.string,
  timestamp: PropTypes.number,
  text: PropTypes.string,
};
