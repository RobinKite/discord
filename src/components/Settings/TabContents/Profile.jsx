import { useState } from "react";
import SettingsLine from "../SettingsLine";
import {
  Input,
  Stack,
  TextField,
  Typography,
  FormControl,
  MenuItem,
} from "@mui/material";
import {
  CustomSelect,
  MainButton,
  Title,
  UserTextField,
} from "../StyledElements";
import ProfileReview from "../ProfileReview/ProfileReview";
import { BsPencilFill } from "react-icons/bs";

export const ProfileTabContent = () => {
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "35px",
        alignItems: "start",
      }}
    >
      <Stack>
        <Stack direction="column">
          <Title>Display Name</Title>
          <UserTextField id="display-name" size="small" placeholder="tadimm" />
          <SettingsLine />
        </Stack>
        <Stack>
          <Title>Pronouns</Title>
          <UserTextField
            id="display-pronouns"
            size="small"
            placeholder="Add your pronouns"
          />
          <SettingsLine />
        </Stack>
        <Stack>
          <Title>Avatar</Title>
          <Stack direction="row" spacing={2}>
            <MainButton>Change Avatar</MainButton>
            <MainButton>Remove Avatar</MainButton>
          </Stack>
          <SettingsLine />
        </Stack>
        <Stack sx={{ position: "relative" }}>
          <Title>Banner Color</Title>
          <Input
            type="color"
            autoFocus="false"
            disableUnderline
            sx={{
              width: "70px",
              height: "50px",
              bgcolor: "#f45cb0",
              borderRadius: "4px",
              border: "none",
              p: 0,
              "& input": {
                opacity: 0,
                cursor: "pointer",
                height: "100%",
                width: "100%",
              },
            }}
          />
          <BsPencilFill
            size={10.5}
            style={{
              color: "#fff",
              position: "absolute",
              top: "32px",
              left: "54px",
            }}
          />
          <SettingsLine />
        </Stack>
        <Stack>
          <Title>About me</Title>
          <Typography sx={{ color: "#b5bac1", fontSize: "14px", mb: "16px" }}>
            You can use markdown and links if you&apos;d like.
          </Typography>
          <TextField
            id="standard-textarea"
            multiline
            variant="filled"
            rows={5}
            sx={{
              width: "270px",
              bgcolor: "#1e1f22",
              color: "#b5bac1",
            }}
          />
          <SettingsLine />
        </Stack>
        <Stack>
          <Title>Language</Title>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <CustomSelect
              id="demo-select-small"
              value={language}
              onChange={handleChange}
            >
              <MenuItem value={"ua"}>Ukrainian</MenuItem>
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"fr"}>French</MenuItem>
              <MenuItem value={"de"}>German</MenuItem>
              <MenuItem value={"es"}>Spanish</MenuItem>
              <MenuItem value={"it"}>Italian</MenuItem>
            </CustomSelect>
          </FormControl>
        </Stack>
      </Stack>
      <ProfileReview />
    </Stack>
  );
};
