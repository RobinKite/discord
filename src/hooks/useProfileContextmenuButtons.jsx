import { Modal } from "@/constants";
import { openModal } from "@/redux/slices/uiSlice";
import { useDispatch } from "react-redux";

export function useProfileContextMenuButtons() {
  const dispatch = useDispatch();

  const handleOpenProfile = () => {
    dispatch(openModal(Modal.PROFILE));
  };

  const buttons = [
    {
      text: "Profile",
      onClick: (e) => {
        e.stopPropagation();
        handleOpenProfile();
      },
      isSpacer: false,
    },
    {
      text: "Mention",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      text: "Message",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      text: "Call",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      text: "Edit note",
      onClick: (e) => {
        e.stopPropagation();
        handleOpenProfile();
      },
      isSpacer: false,
    },
    {
      text: "Add Friend Nickname",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Mute",
      onClick: (e, user) => {
        e.stopPropagation();
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isCheckbox: true,
      isSpacer: false,
    },
    {
      text: "Mute Soundboard",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isCheckbox: true,
      isSpacer: false,
    },
    {
      text: "Invite to server",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isSelector: true,
      isSpacer: false,
    },
    {
      text: "Remote Friend",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isSpacer: false,
    },
    {
      text: "Block",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Role",
      onClick: (e, user) => {
        console.log(user);
      },
      isSelector: true,
      isSpacer: false,
    },
  ];

  return buttons;
}
