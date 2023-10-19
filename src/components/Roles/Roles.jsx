import { useSelector } from "react-redux";
import { User } from "@/components";
import { BiMinus } from "react-icons/bi";
import { Status } from "@/constants";
import { mapUserData } from "@/utils/user";

export default function Roles() {
  const users = useSelector((state) => state.server.currentServer.users);
  const sortedUsers = mapUserData(users);
  // TODO: create correct list of users

  return sortedUsers.map((role) => (
    <div key={role.name}>
      {role.users.length > 0 && (
        <div>
          <h2 className="flex items-center px-1.5 text-xs font-semibold uppercase text-[#959ba3]">
            {role.name}&nbsp;
            <BiMinus />
            &nbsp;{role.users.length}
          </h2>
          <ul className="flex flex-col">
            {role.users.map((user) => (
              <li
                key={user.userId}
                className={
                  role.name === Status.OFFLINE
                    ? "opacity-30 transition-opacity hover:opacity-100"
                    : ""
                }>
                <User user={user} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ));
}
