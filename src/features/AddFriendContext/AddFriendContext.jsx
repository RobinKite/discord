import { Button, Stack, Typography } from "@mui/material";
import addFriendsImage from "../../assets/add_friends.svg";
import AddFriendSearchLine from "./AddFriendSearchInpyt";
import ExploreIcon from "@mui/icons-material/Explore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

export default function AddFriendContext() {
  const navigate = useNavigate();
  const onExploreServersButtonClick = (e) => {
    e.preventDefault();
    navigate("/guild-discovery");
  };

  return (
    <>
      <Stack
        direction="column"
        sx={{
          flexGrow: 1,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            padding: "20px 30px",
            width: "100%",
            flexShrink: 0,
            borderBottom: "1px solid #4e50587a",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: "8px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "1.25",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Add friend
          </Typography>
          <Typography sx={{ color: "#B5BAC1" }}>
            You can add friends with their Diskord usernames.
          </Typography>
          <AddFriendSearchLine />
        </Stack>
        <Stack sx={{ display: "flex", flexGrow: 1 }}>
          <Typography
            variant="h2"
            sx={{
              mb: "8px",
              padding: "20px 30px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "1.25",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Other places to make friends
          </Typography>
          <Stack sx={{ p: "0 20px" }}>
            <Button
              onClick={onExploreServersButtonClick}
              sx={{
                width: {
                  xs: "200px",
                  md: "378px",
                },
                minHeight: "55px",
                border: "1px solid rgba(78, 80, 88, 0.48)",
                borderRadius: "8px",
                p: "1px 16px",
                justifyContent: "space-between",

                textTransform: "capitalize",
                backgroundColor: "rgb(43, 45, 49)",
                transition: "background-color 250ms linear",

                "&:hover": {
                  backgroundColor: "rgba(78, 80, 88, 0.3)",
                },
              }}
            >
              <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                <Stack
                  sx={{
                    mr: "8px",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#23A559",
                  }}
                >
                  <ExploreIcon sx={{ fill: "#fff" }} />
                </Stack>
                Explore discoverable servers
              </Stack>
              <KeyboardArrowRightIcon />
            </Button>
          </Stack>
          <Stack sx={{ m: "0 auto", maxWidth: "376px" }}>
            <img src={addFriendsImage} alt="friend" />
            <Typography
              sx={{
                mt: "48px",
                fontSize: "14px",
                lineHeight: "1.29",
                fontWeight: "400",
                color: "#B5BAC1",
              }}
            >
              Wumpus is waiting on friends. You don&#39;t have to, though!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
