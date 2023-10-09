import { SiDiscord } from "react-icons/si";
import { BsFillCircleFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { statusMap } from "@/constants/userStatus";
import { CustomMessageTextField, CustomNoteTextField } from "./styled";
import { Link, Stack, Tooltip, Typography } from "@mui/material";
import { adjustText } from "@/utils";
import PropTypes from "prop-types";

//TODO: change "add note" to "change status" if original user

const PopUpInner = ({
  user,
  userRegistrationDate,
  serverRegistrationDate,
  handleNoteChange,
}) => {
  return (
    <>
      <Stack>
        <Stack
          backgroundColor={user.bannerColor}
          sx={{ height: "60px" }}
        />
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="user avatar"
            width="86"
            style={{
              backgroundColor: user.bannerColor,
              padding: "12px",
              borderRadius: "50%",
              border: "6px solid #232328",
              position: "absolute",
              top: "12px",
              left: "12px",
            }}
          />
        ) : (
          <SiDiscord
            color="white"
            style={{
              backgroundColor: user.bannerColor,
              borderRadius: "50%",
              padding: "12px",
              border: "6px solid #232328",
              position: "absolute",
              top: "12px",
              left: "12px",
            }}
            size={86}
          />
        )}
        <Stack
          sx={{
            border: "6px solid #232428",
            backgroundColor: "#232428",
            position: "absolute",
            top: "70px",
            left: "66px",
            borderRadius: "50%",
          }}
          size={28}>
          {statusMap[user.status]}
        </Stack>
      </Stack>
      <Tooltip title={`Originally known as ${user.name} #${user.userId}`}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            bgcolor: "#111214",
            padding: 2,
            position: "absolute",
            right: "16px",
            top: "70px",
            borderRadius: "8px",
          }}>
          <Link
            href="#"
            sx={{
              backgroundColor: "#1abc9d",
              display: "inline-block",
              borderRadius: "50%",
              width: "16px",
              height: "16px",
              padding: "3.5px",
            }}>
            <FaHashtag
              color="black"
              size={9}
            />
          </Link>
        </Stack>
      </Tooltip>
      <Stack
        sx={{
          backgroundColor: "#111214",
          padding: 3,
          margin: "64px 16px 16px",
          borderRadius: "8px",
        }}>
        <Typography
          variant="h6"
          component="h1"
          sx={{ fontSize: "20px", fontWeight: "700" }}>
          {user.name}
        </Typography>
        <Typography sx={{ fontSize: "14px", marginBottom: 3 }}>
          {user.userName}
        </Typography>
        <Stack
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#2c2f33",
            mx: "auto",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            paddingTop: 3,
            marginBottom: "6px",
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
          }}>
          Member Since
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: "12px" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ fontSize: "14px", marginBottom: "6px" }}>
            <Tooltip title="Discord">
              <Stack>
                <SiDiscord
                  style={{ width: "28px", height: "20px", borderRadius: "50%" }}
                  color="#b5bac1"
                />
              </Stack>
            </Tooltip>
            <Typography
              variant="span"
              sx={{ color: "#dbdee1" }}>
              {userRegistrationDate}
            </Typography>
          </Stack>
          <Typography
            variant="span"
            sx={{
              bgcolor: "#34383c",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
            }}
          />
          <Tooltip title={`${user.serverName}`}>
            <Stack
              sx={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                color: "#dbdee1",
                bgcolor: "#34383c",
                textAlign: "center",
                fontSize: "8px",
                p: 0.5,
              }}>
              {adjustText(user.serverName, 2, false).serverName}
            </Stack>
          </Tooltip>
          <Typography
            variant="span"
            sx={{ color: "#dbdee1", fontSize: "14px" }}>
            {serverRegistrationDate}
          </Typography>
        </Stack>
        {user.role && (
          <>
            <Typography
              variant="h2"
              sx={{
                fontSize: "12px",
                textTransform: "uppercase",
                fontWeight: "700",
                marginBottom: 1.5,
              }}>
              Role
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                marginBottom: "12px",
                padding: "4px 8px 4px 4px",
                backgroundColor: "#1e1f22",
                borderRadius: "6px",
                width: "66px",
              }}>
              <BsFillCircleFill
                style={{ color: "#5d64f4", margin: "4px" }}
                size={12}
              />
              <Typography sx={{ fontSize: "12px" }}>{user.role}</Typography>
            </Stack>
          </>
        )}
        <Typography
          variant="h2"
          sx={{
            fontSize: "12px",
            textTransform: "uppercase",
            fontWeight: "700",
            marginBottom: 1.5,
          }}>
          Note
        </Typography>
        <CustomNoteTextField
          id="user-note"
          placeholder="Click to add a note"
          size="small"
          onChange={handleNoteChange}
          value={user.note}
        />
        <CustomMessageTextField
          id="user-message"
          placeholder={`Message @${user.name}`}
          size="small"
        />
      </Stack>
    </>
  );
};

PopUpInner.propTypes = {
  user: PropTypes.object.isRequired,
  userRegistrationDate: PropTypes.string.isRequired,
  serverRegistrationDate: PropTypes.string.isRequired,
  handleNoteChange: PropTypes.func.isRequired,
};

export default PopUpInner;
