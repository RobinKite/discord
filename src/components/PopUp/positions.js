/* eslint-disable indent */
import { PopUpPositions } from "@/constants";

export const getPosition = (calledAt, parentBBox) => {
  switch (calledAt) {
    case PopUpPositions.USER_LIST:
      return {
        primary: {
          top: parentBBox.top,
          right: parentBBox.width + 25,
        },
        secondary: {
          right: parentBBox.width + 25,
          bottom: "10px",
        },
      };
    case PopUpPositions.CHAT:
      return {
        primary: {
          top: parentBBox.top,
          left: parentBBox.x + parentBBox.width + 10,
        },
        secondary: {
          left: parentBBox.x + parentBBox.width + 10,
          bottom: "10px",
        },
      };
    case PopUpPositions.SIDEBAR:
      return {
        primary: {
          left: parentBBox.x - 20,
          bottom: parentBBox.height + 5,
        },
        secondary: {
          left: parentBBox.x - 20,
          bottom: parentBBox.height + 5,
        },
      };
    default:
      return {
        primary: {},
        secondary: {},
      };
  }
};
