import { SiDiscord } from "react-icons/si";
import { Stack } from "@mui/material";
import { statusMap } from "@/constants/userStatus";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const ProfileBanner = ({ wrapperSX, imageSX, statusSX }) => {
  const user = useSelector((state) => state.profile.userProfile);

  return (
    user && (
      <Stack sx={{ position: "relative" }}>
        <Stack backgroundColor={user.bannerColor} sx={{ ...wrapperSX }} />
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="user avatar"
            style={{
              backgroundColor: user.bannerColor,
              borderRadius: "50%",
              padding: "12px",
              position: "absolute",
              ...imageSX,
            }}
          />
        ) : (
          <SiDiscord
            color="white"
            style={{
              backgroundColor: user.bannerColor,
              borderRadius: "50%",
              padding: "20px",
              position: "absolute",
              // top: "32px",
              // left: "16px",
              ...imageSX,
            }}
            size={134}
          />
        )}
        <Stack
          sx={{
            position: "absolute",
            border: "6px solid #232428",
            backgroundColor: "#232428",
            borderRadius: "50%",
            alignItems: "center",
            ...statusSX,
          }}
          // size={38}
        >
          {statusMap[user.status]}
        </Stack>
      </Stack>
    )
  );
};

ProfileBanner.propTypes = {
  imageSX: PropTypes.object,
  wrapperSX: PropTypes.object,
  statusSX: PropTypes.object,
};

ProfileBanner.defaultProps = {
  imageSX: {},
  wrapperSX: {},
  statusSX: {},
};
