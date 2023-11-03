import { Stack, Typography } from "@mui/material";
import { BsCircleFill } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { EditButton, Title } from "../StyledElements";
import Pencil from "@/assets/pencil.png";
import Stopwatch from "../StopWatch/StopWatch";

const ProfileReview = () => {
  return (
    <Stack
      sx={{
        width: "340px",
        bgcolor: "#1e1f22",
        borderRadius: "8px",
        position: "relative",
      }}>
      <Stack
        sx={{
          height: "60px",
          bgcolor: "#f45db0",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}></Stack>
      <SiDiscord
        size={86}
        color="white"
        style={{
          backgroundColor: "#5865f2",
          borderRadius: "50%",
          padding: "12px",
          border: "6px solid #1e1f22",
          position: "absolute",
          top: "12px",
          left: "12px",
        }}
      />
      <BsCircleFill
        color="#23a55a"
        size={28}
        style={{
          border: "6px solid #1e1f22",
          borderRadius: "50%",
          position: "absolute",
          top: "70px",
          left: "66px",
        }}
      />
      <Stack
        sx={{
          backgroundColor: "#111214",
          padding: "0 12px",
          margin: "48px 16px 16px",
          borderRadius: "8px",
          color: "#fff",
        }}>
        <Typography
          variant="h6"
          component="h1"
          sx={{ fontSize: "20px", fontWeight: "700" }}>
          tadimm
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>tadimm</Typography>
        <Stack
          variant="span"
          sx={{
            marginY: "12px",
            boxSizing: "border-box",
            display: "block",
            height: "1px",
            bgcolor: "#949ba448",
            content: "''",
          }}
        />
        <Title component="h4">Customising My Profile</Title>
        <Stack sx={{ paddingBottom: "12px" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ mb: "12px" }}>
            <img
              src={Pencil}
              style={{
                width: "64px",
                background: "#3c45a5",
                borderRadius: "8px",
                padding: "8px",
              }}
            />
            <Stack>
              <Typography sx={{ fontSize: "14px" }}>User Profile</Typography>
              <Stopwatch />
            </Stack>
          </Stack>
          <EditButton>Example Button</EditButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileReview;
