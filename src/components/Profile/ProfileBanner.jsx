import React from "react";
import { SiDiscord } from "react-icons/si";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { statusMap } from "../User/User";

export const ProfileBanner = ({ user }) => {
  return (
    <Stack>
      <Stack
        backgroundColor={user.backgroundBanner}
        sx={{ width: "600px", height: "106px" }}
      />
      {user.avatar ? (
        <img
          src={user.avatar}
          alt="user avatar"
          width="134"
          height="134"
          style={{
            backgroundColor: user.backgroundBanner,
            padding: "12px",
            borderRadius: "50%",
            border: "6px solid #232328",
            position: "absolute",
            top: "32px",
            left: "16px",
          }}
        />
      ) : (
        <SiDiscord
          color="white"
          style={{
            backgroundColor: user.backgroundBanner,
            borderRadius: "50%",
            padding: "28px",
            border: "7px solid #232428",
            position: "absolute",
            top: "32px",
            left: "16px",
          }}
          size={134}
        />
      )}
      <Stack
        sx={{
          position: "absolute",
          top: "126px",
          left: "110px",
          border: "7px solid #232428",
          backgroundColor: "#232428",
          borderRadius: "50%",
        }}
        size={38}
      >
        {statusMap[user.status]}
      </Stack>
    </Stack>
  );
};

ProfileBanner.propeTypes = {
  user: PropTypes.object.isRequired,
};
