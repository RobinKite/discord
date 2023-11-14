import { InputBase, Stack } from "@mui/material";
import { Button } from "@/components/Button/Button";
import { useState } from "react";
import { add_friend_input, input_button, input_wrapper } from "./stylesSX";

export default function AddFriendSearchLine() {
  const [value, setValue] = useState("");

  const onSendMessageButtonClick = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    <Stack sx={input_wrapper}>
      <InputBase
        placeholder="You can add friends with their Discords usernames."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        sx={add_friend_input}
      />
      <Button
        disabled={!value}
        onClick={onSendMessageButtonClick}
        sx={[
          input_button,
          {
            cursor: value ? "pointer" : "not-allowed",
            opacity: value ? "1" : "0.5",
          },
        ]}
      >
        Send friend request
      </Button>
    </Stack>
  );
}
