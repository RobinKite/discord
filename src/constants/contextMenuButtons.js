export const buttons = [
  {
    text: "Profile",
    onClick: (e, rightClickedUser, resetContextMenu) => {
      console.log(rightClickedUser);
      alert(`click on ${rightClickedUser.userName}`);
    },
    isSpacer: false,
  },
  {
    text: "Test button",
    onClick: (e, rightClickedUser) => {
      console.log(rightClickedUser);
      alert(`click by ${rightClickedUser.userName}`);
    },
    isSpacer: false,
  },
  {
    isSpacer: true,
  },
  {
    text: "Button 1",
    onClick: (e, rightClickedUser) => {
      console.log(rightClickedUser);
      alert(`click by ${rightClickedUser.userName}`);
    },
    isSpacer: false,
  },
  {
    text: "Button 2",
    onClick: (e, rightClickedUser) => {
      console.log(rightClickedUser);
      alert(`click by ${rightClickedUser.userName}`);
    },
    isSpacer: false,
  },
  {
    text: "Button 3",
    onClick: (e, rightClickedUser) => {
      console.log(rightClickedUser);
      alert(`click by ${rightClickedUser.userName}`);
    },
    isSpacer: false,
  },
];
