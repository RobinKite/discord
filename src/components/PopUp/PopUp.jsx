import { styled } from "@mui/system";
import { Link, Stack, Tooltip, Typography } from "@mui/material";
import { statusMap } from "@/constants/statusMap";
import { SiDiscord } from "react-icons/si";
import { BsFillCircleFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fillPopupContent } from "@/redux/slices/uiSlice";
import { adjustText } from "@/utils";
import { formatRegistrationDate } from "@/utils/date";

const CustomNoteTextField = styled("input")({
  fontSize: "12px",
  color: "#dbdee1",
  width: "100%",
  border: "none",
  backgroundColor: "#111214",
  marginBottom: "24px",
  "&:focus": {
    outline: "none",
  },
});

const CustomMessageTextField = styled("input")({
  fontSize: "14px",
  color: "#dbdee1",
  width: "100%",
  borderRadius: "4px",
  border: "1px solid #2c2f33",
  backgroundColor: "#111214",
  padding: "12px 0 12px 12px",
  "&:focus": {
    outline: "none",
  },
});

const PopUp = () => {
  const user = useSelector((state) => state.ui.popupContent);
  const dispatch = useDispatch();

  const handleNoteChange = (ev) => {
    dispatch(fillPopupContent({ ...user, note: ev.target.value }));
    console.log(ev.target.value);
  };

  const userRegistrationDate = formatRegistrationDate(
    user.userRegistrationDate
  );
  const serverRegistrationDate = formatRegistrationDate(
    user.serverRegistrationDate
  );

  return (
    <Stack
      sx={{
        width: "340px",
        position: "absolute",
        top: 0,
        left: "-360px",
        color: "#f2f3f5",
        backgroundColor: "#232328",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Stack>
        <Stack sx={{ height: "60px", backgroundColor: "#5d64f4" }}></Stack>
        {user.avatar ? (
          user.avatar
        ) : (
          <SiDiscord
            className="bg-[#5d64f4] rounded-[50%] p-3 border-[6px] border-[#232328] absolute top-3 left-3"
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
          size={28}
        >
          {statusMap[user.status]}
        </Stack>
      </Stack>
      <Tooltip title={`Originally known as ${user.name}`}>
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
          }}
        >
          <Link
            href="#"
            sx={{
              backgroundColor: "#1abc9d",
              display: "inline-block",
              borderRadius: "50%",
              width: "16px",
              height: "16px",
              padding: "3.5px",
            }}
          >
            <FaHashtag color="black" size={9} />
          </Link>
        </Stack>
      </Tooltip>
      <Stack
        sx={{
          backgroundColor: "#111214",
          padding: 3,
          margin: "64px 16px 16px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{ fontSize: "20px", fontWeight: "700" }}
        >
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
          }}
        >
          Member Since
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: "12px" }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ fontSize: "14px", marginBottom: "6px" }}
          >
            <Tooltip title="Discord">
              <Stack>
                <SiDiscord className="w-7 h-5 rounded-[50%] text-[#b5bac1]" />
              </Stack>
            </Tooltip>
            <Typography variant="span" sx={{ color: "#dbdee1" }}>
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
              }}
            >
              {adjustText(user.serverName, 2, false).serverName}
            </Stack>
          </Tooltip>
          <Typography variant="span" sx={{ color: "#dbdee1" }}>
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
              }}
            >
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
                width: "86px",
              }}
            >
              <BsFillCircleFill className="text-[#5d64f4] m-1" size={12} />
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
          }}
        >
          Note
        </Typography>
        <CustomNoteTextField
          id="outlined-basic"
          placeholder="Click to add a note"
          size="small"
          onChange={handleNoteChange}
          value={user.note}
        />
        <CustomMessageTextField
          id="outlined-basic"
          placeholder={`Message @${user.name}`}
          size="small"
        />
      </Stack>
    </Stack>
  );
};

export default PopUp;
