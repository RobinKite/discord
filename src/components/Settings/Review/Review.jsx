import { Stack, Typography } from "@mui/material";
import { BsCircleFill } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { EditButton, MainButton, Title } from "../StyledElements";

const Review = () => {
  return (
    <Stack
      sx={{
        width: "660px",
        bgcolor: "#1e1f22",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          height: "100px",
          bgcolor: "#f45db0",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      ></Stack>
      <SiDiscord
        size={86}
        color="white"
        style={{
          backgroundColor: "#5865f2",
          borderRadius: "50%",
          padding: "12px",
          border: "6px solid #1e1f22",
          position: "absolute",
          top: "80px",
          left: "20px",
        }}
      />
      <BsCircleFill
        color="#23a55a"
        size={28}
        style={{
          border: "6px solid #1e1f22",
          borderRadius: "50%",
          position: "absolute",
          top: "136px",
          left: "76px",
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ p: "16px 16px 0 120px" }}
      >
        <Typography
          variant="span"
          sx={{ color: "#f2f3f5", fontSize: "20px", fontWeight: 600 }}
        >
          tadimm
        </Typography>
        <MainButton>Edit User Profile</MainButton>
      </Stack>
      <Stack
        sx={{
          bgcolor: "#2b2d31",
          p: "16px",
          m: "8px 16px 16px",
          borderRadius: "8px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mb: "24px" }}
        >
          <Stack>
            <Title>Display Name</Title>
            <Typography sx={{ color: "#f2f3f5", fontSize: "16px" }}>
              tadimm
            </Typography>
          </Stack>
          <EditButton>Edit</EditButton>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Title>UserName</Title>
            <Typography sx={{ color: "#f2f3f5", fontSize: "16px" }}>
              tadimm
            </Typography>
          </Stack>
          <EditButton>Edit</EditButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mt: "24px" }}
        >
          <Stack>
            <Title>Email</Title>
            <Typography sx={{ color: "#f2f3f5", fontSize: "16px" }}>
              td@gmail.com
            </Typography>
          </Stack>
          <EditButton>Edit</EditButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mt: "24px" }}
        >
          <Stack>
            <Title>Phone Number</Title>
            <Typography sx={{ color: "#f2f3f5", fontSize: "16px" }}>
              You haven&apos;t added a phone number yet.
            </Typography>
          </Stack>
          <EditButton>Edit</EditButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Review;
