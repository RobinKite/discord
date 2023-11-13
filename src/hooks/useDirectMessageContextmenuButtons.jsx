export default function useDirectMessageContextmenuButtons() {
  const buttons = [
    {
      text: "Profile",
      onClick: (e) => {
        e.stopPropagation();
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
      },
      isSpacer: false,
    },
  ];

  return buttons;
}
