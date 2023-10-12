import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, fillPopupContent } from "@/redux/slices/uiSlice";
import { formatRegistrationDate } from "@/utils";
import { useBbox } from "@/hooks/useBbox";
// import { useEffect, useState, useMemo } from "react";
import { getPosition } from "./positions";
import PopUpInner from "./PopUpInner";
import { useMemo } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const PopUp = () => {
  const user = useSelector((state) => state.ui.popupContent);
  const [calledAt, parentBBox] = useSelector((state) => state.ui.popupPosition);
  const [bbox, ref] = useBbox();
  const dispatch = useDispatch();

  const handleNoteChange = (ev) => {
    dispatch(fillPopupContent({ ...user, note: ev.target.value }));
  };

  const userRegistrationDate = formatRegistrationDate(
    user.userRegistrationDate
  );
  const serverRegistrationDate = formatRegistrationDate(
    user.serverRegistrationDate
  );

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  useOnClickOutside(ref, handleModalClose);

  const windowsHeight = window.innerHeight;

  const styled = useMemo(() => {
    return bbox.bottom + 20 > windowsHeight
      ? getPosition(calledAt, parentBBox).secondary
      : getPosition(calledAt, parentBBox).primary;
  }, [bbox, windowsHeight, calledAt, parentBBox]);

  return (
    <Stack
      ref={ref}
      sx={{
        width: "21rem",
        color: "#f2f3f5",
        backgroundColor: "#232428",
        borderRadius: "8px",
        overflow: "hidden",
        position: "fixed",
        zIndex: 12,
        ...styled,
      }}
    >
      <PopUpInner
        user={user}
        userRegistrationDate={userRegistrationDate}
        serverRegistrationDate={serverRegistrationDate}
        handleNoteChange={handleNoteChange}
      />
    </Stack>
  );
};

export default PopUp;
