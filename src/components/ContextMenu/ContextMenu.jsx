import React from "react";
import "./styles.css";

export const ContextMenu = ({
  positionY,
  positionX,
  isToggled,
  contextMenuRef,
  buttons,
  rightClickedUser,
}) => {
  return (
    <menu
      style={{
        top: positionY + 2 + "px",
        left: positionX + 2 + "px",
      }}
      className={`context-menu ${isToggled ? "active" : ""}`}
      ref={contextMenuRef}
    >
      {buttons.map((button, index) => {
        const handleClick = (e, user) => {
          e.stopPropagation();
          button.onClick(e, user);
        };
        if (button.isSpacer) return <hr key={index} />;
        return (
          <button onClick={(e) => handleClick(e, rightClickedUser)} key={index}>
            <span>{button.text}</span>
          </button>
        );
      })}
    </menu>
  );
};

// ContextMenu.propTypes = {};
