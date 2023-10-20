import { Stack, Typography } from "@mui/material";
import { BsCircleFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

const ServerCard = ({ card }) => {
  return (
    <Stack
      sx={{
        bgcolor: "#232428",
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 4px 8px #1e1f22",
          bgcolor: "#1f2023",
          overflow: "clip",
        },
        "&:hover img": {
          transform: "scale(1.007)",
          transition: "all 0.4s",
        },
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "143px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <img
          src={card.banner}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
        />
      </Stack>
      <Stack
        sx={{
          padding: "32px 16px 16px",
          flexGrow: 1,
          position: "relative",
          "&:hover": { transform: "translateY(-1px)", transition: "all 0.3s" },
        }}
      >
        <Stack
          sx={{
            position: "absolute",
            top: "-30px",
            left: "16px",
            width: "48px",
            height: "50px",
            backgroundColor: "#232428",
            borderRadius: "14px",
          }}
        >
          <img
            src={card.icon}
            alt="icon"
            style={{
              padding: "4px",
              objectFit: "cover",
              borderRadius: "14px",
            }}
          />
        </Stack>
        <Stack direction="row" sx={{ position: "relative" }}>
          <Stack
            sx={{
              bgcolor: "#fff",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              top: "4px",
              left: "4px",
              position: "relative",
              mr: "12px",
            }}
          />
          <Stack sx={{ position: "absolute" }}>
            <MdVerified fill="#23a559" />
          </Stack>
          <Typography
            variant="h3"
            sx={{
              color: "#f2f3f5",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {card.title}
          </Typography>
        </Stack>
        <Typography
          sx={{ color: "#b5bac1", fontSize: "14px", margin: "4px 0 16px" }}
        >
          {card.description}
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          alignItems="end"
          sx={{ flexGrow: 1 }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <BsCircleFill size={8} color="#23a559" />
            <Typography sx={{ fontSize: "12px", color: "#b5bac1" }}>
              {card.onlineUsers} Online
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <BsCircleFill size={8} color="#c4c9ce" />
            <Typography sx={{ fontSize: "12px", color: "#b5bac1" }}>
              {card.members} Members
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServerCard;
