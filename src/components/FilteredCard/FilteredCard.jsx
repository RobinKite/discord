import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Separator from "../Separator/Separator";

export const FilteredCard = ({ card }) => {
  return (
    <>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          width: "100%",
          height: "135px",
          cursor: "pointer",
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}>
        <Stack
          sx={{
            width: "240px",
            height: "135px",
            flexShrink: 0,
            overflow: "hidden",
            borderRadius: "8px",
          }}>
          <img
            src={card.banner}
            alt="banner"
            style={{
              width: "240px",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.2s ease-out",
            }}
          />
        </Stack>
        <Stack sx={{ flexGrow: 1 }}>
          <Stack sx={{ p: 0, height: "135px" }}>
            <Stack
              sx={{
                width: "32px",
                height: "32px",
                p: 0,
                borderRadius: "8px",
                mb: "6px",
              }}>
              <img src={card.icon} style={{ borderRadius: "8px" }} />
            </Stack>
            <Typography
              variant="h2"
              sx={{
                color: "#f2f3f5",
                fontSize: "16px",
                fontWeight: 700,
                p: 0,
                mb: "6px",
              }}>
              {card.title}
            </Typography>
            <Typography
              sx={{
                color: "#dbdee1",
                fontSize: "14px",
                p: 0,
                mb: "auto",
              }}>
              {card.description}
            </Typography>
            <Stack
              direction="row"
              alignItems="end"
              spacing={2}
              sx={{
                color: "#b5bac1",
                fontSize: "12px",
                p: 0,
              }}>
              <Typography sx={{ fontSize: "12px" }}>
                {card.onlineUsers} Online
              </Typography>
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

FilteredCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default FilteredCard;
