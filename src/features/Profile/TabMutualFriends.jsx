import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { User } from "@/components/User/User";

export const TabMutualFriends = () => {
  const userMutualFriends = useSelector(
    (state) => state.profile.userProfile.mutualFriends
  );

  return userMutualFriends.length ? (
    userMutualFriends.map((friend) => {
      return <User user={friend} key={friend.userName} styles="bg-[#111214]" />;
    })
  ) : (
    <Typography sx={{ fontSize: "14px" }}>Have not mutual friends</Typography>
  );
};
