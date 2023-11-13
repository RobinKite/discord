import { setProfile } from "@/redux/slices/profileSlice";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function useContextmenu() {
  const dispatch = useDispatch();
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

  return { contextMenuRef, contextMenu, handleOnContextMenu, resetContextMenu };
}
