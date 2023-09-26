import { setUserStatus } from "@/redux/slices/userStatusSlice";
import Roles from "../Roles/Roles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { users } from "@/constants/mock";

export default function UserList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserStatus(users));
  }, [dispatch]);

  return (
    <div className="flex min-w-[240px] flex-col gap-5 bg-[#2b2d31] px-[8px] pt-6">
      <Roles />
    </div>
  );
}
