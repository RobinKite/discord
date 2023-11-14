import { setProfile } from "@/redux/slices/profileSlice";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function useContextMenu() {
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

  let location = useLocation();

  const handleOnContextMenu = (e, user) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setProfile(user));

    const contextMenuAttr = contextMenuRef.current.getBoundingClientRect();

    let x = e.clientX;
    let y = e.clientY;

    if (location.pathname.includes("/channels/@me")) {
      x = x + 4;
      y = y - 5;
    } else {
      x = e.clientX - contextMenuAttr.width - 4;
      y = e.clientY - 5;
    }

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
