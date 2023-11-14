export default function useServersContextMenuButtons() {
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
      text: "Invite people",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Mute server",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Notifycation settings",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Hide muted channels",
      onClick: (e) => {
        e.stopPropagation();
      },
      isCheckbox: true,
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Server settings",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Privacy settings",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Edit server profile",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Create channel",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Create Category",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      text: "Create event",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Leave server",
      onClick: (e) => {
        e.stopPropagation();
      },
      isSpacer: false,
    },
  ];
  return buttons;
}
