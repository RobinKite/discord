import { Modal } from "@/constants";
import { openModal } from "@/redux/slices/uiSlice";
import { useDispatch } from "react-redux";

export default function useDirectMessageContextmenuButtons() {
  const dispatch = useDispatch();

  const handleOpenProfile = () => {
    dispatch(openModal(Modal.PROFILE));
  };

  const buttons = [
    {
      text: "Mark as read",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Profile",
      onClick: (e) => {
        e.stopPropagation();
        handleOpenProfile();
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
      text: "Add note",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Add Friend Nickname",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Close DM",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    // {
    //   text: "Invite to server",
    //   isSelector: true,
    //   isSpacer: false,
    // },
    {
      text: "Remove friend",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Block",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Mute",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
  ];

  return buttons;
}