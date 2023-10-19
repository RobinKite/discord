import {
  Grid,
  IconButton,
  Input,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import ServerCard from "../ServerCard/ServerCard";
import { NavLink, useNavigate } from "react-router-dom";
import footerImage from "../../assets/footer_image.svg";
import headerImage from "../../assets/discover_header.svg";
import { SAMPLE_CARDS } from "@/constants/mock";
import { useEffect, useState } from "react";
import { textAlign } from "@mui/system";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// const DiscoverTextField = styled("input")({
//   fontSize: "16px",
//   color: "#313338",
//   width: { xs: "500px", md: "560px" },
//   borderRadius: "3px",
//   border: "2px solid transparent",
//   backgroundColor: "#fff",
//   padding: "6px",
//   "&:focus": {
//     outline: "none",
//     boxShadow: "0 0 0 1px #5b43f0, 0 0 0 2px #bdb3f9, 0 0 0 3px #bdb3f9",
//   },
// });

const DiscoverTextField = {
  fontSize: "16px",
  color: "#313338",
  width: { xs: "80vw", md: "560px" },
  borderRadius: "3px",
  border: "2px solid transparent",
  backgroundColor: "#fff",
  padding: "6px",
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 1px #5b43f0, 0 0 0 2px #bdb3f9, 0 0 0 3px #bdb3f9",
  },
};

const GuildDiscovery = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputClear = () => {
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      navigate(`/filtered-servers?query=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <Stack
      spacing={6}
      sx={{
        padding: "32px 16px 32px 32px",
        width: "100%",
        maxHeight: "100vh",
        overflow: "auto",
      }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{
          background: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingY: "110px",
          borderRadius: "8px",
        }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            width: "100%",
            minWidth: "360px",
            maxWidth: "720px",
            margin: "0 240px",
          }}>
          <Typography
            variant="h1"
            sx={{ color: "#fff", fontSize: "20px", fontWeight: 600 }}>
            Find your community on Discord
          </Typography>
          <Typography
            sx={{ color: "#fff", fontSize: "14px", textAlign: "center" }}>
            From gaming, to music, to learning, theres a place for you.
          </Typography>
          <Stack sx={{ position: "relative" }}>
            <NavLink
              to={
                inputValue
                  ? `/filtered-servers?query=${encodeURIComponent(inputValue)}`
                  : null
              }>
              <Input
                sx={DiscoverTextField}
                placeholder="Explore communities"
                disableUnderline
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </NavLink>
            {inputValue ? (
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Typography sx={{ color: "#a9a7a7", fontSize: "12px" }}>
                  "Enter" to Search
                </Typography>
                <IconButton
                  onClick={handleInputClear}
                  sx={{
                    bgcolor: "#4e5058",
                    width: "25px",
                    p: "0 4px",
                    "&:hover": { bgcolor: "#313338" },
                  }}>
                  <RxCross2 color="#fff" />
                </IconButton>
              </Stack>
            ) : (
              <BiSearch
                fill="#4e505899"
                size={25}
                style={{ position: "absolute", top: "8px", right: "8px" }}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <Typography
          variant="h2"
          sx={{ color: "#f2f3f5", fontSize: "20px", fontWeight: 600 }}>
          Featured communities
        </Typography>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(248px, 1fr))",
            gap: "16px",
          }}>
          {SAMPLE_CARDS.map((card) => (
            <ServerCard key={card.serverId} card={card} />
          ))}
        </Grid>
      </Stack>
      <Stack alignItems="center" spacing={2}>
        <img src={footerImage} alt="footer" />
        <Typography
          variant="h2"
          sx={{ color: "#f2f3f5", fontSize: "16px", fontWeight: 600 }}>
          There are more communities out there!
        </Typography>
        <NavLink
          to="#"
          style={{
            color: "#00a8fc",
            fontSize: "14px",
            fontWeight: 500,
            "&:hover": { border: "1px solid #00a8fc" },
          }}>
          Try searching for them
        </NavLink>
      </Stack>
    </Stack>
  );
};

export default GuildDiscovery;
