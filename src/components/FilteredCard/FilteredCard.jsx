import midJourney from "@/assets/cardBanners/midJourney.jpeg";
import shipIcon from "@/assets/cardIcons/ship.webp";
import { Stack, Typography } from "@mui/material";
import Separator from "../Separator/Separator";

const FilteredCard = ({ card }) => {
  // const card = {
  //   serverId: "1",
  //   banner: midJourney,
  //   icon: shipIcon,
  //   title: "Midjourney",
  //   description:
  //     "The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
  //   isPublic: true,
  //   onlineUsers: 187,
  //   members: 455,
  // };

  return (
    <>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          width: "100%",
          height: "135px",
          cursor: "pointer",
          "&:hover": {
            // overflow: "clip",
          },
          "&:hover img": {
            transform: "scale(1.05)",
            transition: "transform 0.2s ease-out",
            // overflowClipMargin: "content-box",
            overflow: "hidden",
          },
        }}
      >
        <Stack sx={{ width: "240px", height: "135px", flexShrink: 0 }}>
          <img
            src={card.banner}
            style={{
              width: "240px",
              height: "100%",
              objectFit: "cover",
              // overflow: "clip",
              // overflowClipMargin: "content-box",
              borderRadius: "8px",
            }}
          />
        </Stack>
        <Stack sx={{ flexGrow: 1 }}>
          <Stack spacing={1.5} sx={{ p: 0 }}>
            <Stack
              sx={{ width: "32px", height: "32px", p: 0, borderRadius: "8px" }}
            >
              <img src={card.icon} style={{ borderRadius: "8px" }} />
            </Stack>
            <Stack sx={{ color: "#f2f3f5", fontSize: "16px", p: 0 }}>
              {card.title}
            </Stack>
            <Stack sx={{ color: "#dbdee1", fontSize: "14px", p: 0 }}>
              {card.description}
            </Stack>
            <Stack
              direction="row"
              alignItems="end"
              // justifyContent="center"
              spacing={2}
              sx={{
                color: "#b5bac1",
                fontSize: "12px",
                p: 0,
                // flexGrow: 1,
                mt: "auto",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>
                {card.onlineUsers} Online
              </Typography>
              {/* <Stack
              justifyContent="start"
              alignItems="start"
              sx={{
                width: "4px",
                height: "4px",
                bgcolor: "#4e5058",
                borderRadius: "50%",
              }}
            /> */}
              <Typography sx={{ fontSize: "12px" }}>
                {card.members} Members
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Separator />
    </>
  );
};

export default FilteredCard;
