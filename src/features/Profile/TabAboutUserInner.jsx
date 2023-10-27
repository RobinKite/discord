import { setProfileNote } from "@/redux/slices/profileSlice";
import { Stack, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const CustomNoteTextField = styled("input")({
  fontSize: "12px",
  color: "#dbdee1",
  width: "100%",
  border: "none",
  backgroundColor: "#111214",
  marginBottom: "24px",
  "&:focus": {
    outline: "none",
  },
});

export const TabAboutUserInner = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.userProfile);
  const userNote = user.note || "";

  const handleNoteChange = (e) => {
    dispatch(setProfileNote(e.target.value));
  };

  return (
    <Stack>
      <Typography
        sx={{
          mb: "8px",
          fontSize: "12px",
          textTransform: "uppercase",
          fontWeight: 700,
        }}>
        Discord member since
      </Typography>
      <Typography
        sx={{
          mb: "16px",
          fontSize: "12px",
          fontWeight: 500,
        }}>
        {user.userRegistrationDate}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "12px",
          textTransform: "uppercase",
          fontWeight: 700,
          marginBottom: 1.5,
        }}>
        Note
      </Typography>
      <CustomNoteTextField
        id="user-note"
        placeholder="Click to add a note"
        size="small"
        onChange={handleNoteChange}
        value={userNote}
      />
    </Stack>
  );
};
