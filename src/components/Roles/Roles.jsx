import { useSelector } from "react-redux";
import User from "../User/User";
import { BiMinus } from "react-icons/bi";

export default function Roles() {
  const users = useSelector((state) => state.userStatus.users);

  const roles = users
    .reduce(
      (result, user) => {
        if (user.status === "offline" || user.status === "invisible") {
          const statusGroup = result.find((group) => group.name === "offline");
          statusGroup.users.push({ ...user });
          return result;
        }
        if (!user.role) {
          const statusGroup = result.find((group) => group.name === "online");
          statusGroup.users.push({ ...user });
          return result;
        }

        let roleGroup = result.find((group) => group.name === user.role);

        if (!roleGroup) {
          result.push({ name: user.role, users: [] });
          roleGroup = result.find((group) => group.name === user.role);
        }

        if (roleGroup) {
          roleGroup.users.push({ ...user });
        }

        return result;
      },
      [
        { name: "offline", users: [] },
        { name: "online", users: [] },
      ]
    )
    .reverse();

  return roles.map((role) => (
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
                  role.name === "offline"
                    ? "opacity-30 transition-opacity hover:opacity-100"
                    : ""
                }
              >
                <User user={user} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ));
}
