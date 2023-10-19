import { useState } from "react";
import PropTypes from "prop-types";
import { User } from "@/components";
import { SAMPLE_USERS } from "@/constants/mock";
import { filterFriendsByStatus, filterFriendsByText } from "@/utils/filters";

export function Friends({ status }) {
  const [inputValue, setInputValue] = useState("");
  const friends = filterFriendsByText(
    filterFriendsByStatus(SAMPLE_USERS, status),
    inputValue,
  );

  return (
    <div className="flex grow flex-col bg-[#313338] px-6 py-4">
      <input
        type="text"
        placeholder="Search"
        onChange={({ target }) => setInputValue(target.value)}
        value={inputValue}
        className="mb-6 rounded bg-[#1E1F22] px-3 py-2 text-sm text-[#DCDEE1] placeholder:text-gray-400 focus:outline-none"
      />
      <div className="mb-4">
        <h3 className="text-xs font-semibold uppercase text-[#B1B5BC]">
          {status} friends — {friends.length}
        </h3>
      </div>
      {friends.map((friend) => (
        // TODO: Restyle or use another component
        <div key={friend.userName} className="mb-3 rounded bg-[#2b2d31] p-2">
          <User user={friend} />
        </div>
      ))}
    </div>
  );
}

Friends.propTypes = {
  status: PropTypes.string.isRequired,
};
