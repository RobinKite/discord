import { InputBase, Stack } from "@mui/material";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

export default function AddFriendSearchLine() {
  const [value, setValue] = useState("");

  const onSendMessageButtonClick = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    <Stack
      sx={{
        minHeight: "48px",
        alignItems: "center",
        borderRadius: "8px",
        display: "flex",
        marginTop: "16px",
        padding: "0",
        position: "relative",
      }}
    >
      <InputBase
        placeholder="You can add friends with their Discords usernames."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        sx={{
          m: "0",
          borderRadius: "8px",
          p: "0",
          minHeight: "100%",
          width: "100%",
          fontSize: "16px",
          fontWeight: 400,
          letterSpacing: " 0.04em",
          lineHeight: "20px",

          "& .MuiInputBase-input": {
            borderRadius: "8px",
            p: "10px 27% 10px 10px",
            width: "100%",
            "&:focus": { outline: "1px solid #00a8fc" },
          },
        }}
      />
      <Button
        disabled={!value}
        onClick={onSendMessageButtonClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translate(0, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "0",
          p: "2px 16px",
          width: "24%",
          minHeight: "28px",
          textTransform: "capitalize",
          cursor: value ? "pointer" : "not-allowed",
          opacity: value ? "1" : "0.5",

          "&:hover": {
            backgroundColor: "#5865f2",
          },

          "&:disabled": {
            cursor: "not-allowed",
          },
        }}
      >
        Send friend request
      </Button>
    </Stack>
  );
}
