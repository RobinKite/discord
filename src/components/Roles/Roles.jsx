import { useDispatch, useSelector } from "react-redux";
import User from "../User/User";
import { BiMinus } from "react-icons/bi";
import { Status } from "@/constants";
import { mapUserData } from "@/utils/user";
import { useRef, useState } from "react";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { setProfile } from "@/redux/slices/profileSlice";

export default function Roles() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.server.currentServer.users);
  const sortedUsers = mapUserData(users);
  // TODO: create correct list of users

  const contextMenuRef = useRef(null);
  const [contextMenu, setContextMenu] = useState({
    user: null,
    position: {
      x: 0,
      y: 0,
    },
    toggled: false,
  });

  const handleOnContextMenu = (e, user) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setProfile(user));

    const contextMenuAttr = contextMenuRef.current.getBoundingClientRect();
    let x = e.clientX - contextMenuAttr.width - 4;
    let y = e.clientY - 5;

    setContextMenu({
      user,
      position: { x, y },
      toggled: true,
    });
  };

  const resetContextMenu = () => {
    setContextMenu({
      user: null,
      position: {
        x: 0,
        y: 0,
      },
      toggled: false,
    });
  };

  useOnClickOutside(contextMenuRef, resetContextMenu);

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
                }
                onContextMenu={(e) => handleOnContextMenu(e, user)}
              >
                <User user={user} />
              </li>
            ))}
          </ul>
          <ContextMenu
            contextMenuRef={contextMenuRef}
            isToggled={contextMenu.toggled}
            positionX={contextMenu.position.x}
            positionY={contextMenu.position.y}
          />
        </div>
      )}
    </div>
  ));
}
