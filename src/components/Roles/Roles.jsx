import { useSelector } from "react-redux";
import { User } from "@/components";
import { BiMinus } from "react-icons/bi";
import { Status } from "@/constants";
import { mapUserData } from "@/utils/user";
import { PopUpPositions } from "@/constants";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useProfileContextMenuButtons } from "@/hooks/useProfileContextmenuButtons";
import useContextMenu from "@/hooks/useContextMenu";

export default function Roles() {
  const users = useSelector((state) => state.server.currentServer.users);
  const sortedUsers = mapUserData(users);

  const { contextMenuRef, contextMenu, handleOnContextMenu, resetContextMenu } =
    useContextMenu();
  const contextmenuButtons = useProfileContextMenuButtons();

  useOnClickOutside(contextMenuRef, resetContextMenu);

  return sortedUsers.map((role) => (
    <div key={role.name}>
      {role.users.length > 0 && (
        <>
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
                <User user={user} position={PopUpPositions.USER_LIST} />
              </li>
            ))}
          </ul>
          <ContextMenu
            contextMenuRef={contextMenuRef}
            isToggled={contextMenu.toggled}
            positionX={contextMenu.position.x}
            positionY={contextMenu.position.y}
            buttons={contextmenuButtons}
          />
        </>
      )}
    </div>
  ));
}
