import { setUserStatus } from "@/redux/slices/userStatusSlice";
import Roles from "../Roles/Roles";
import { useDispatch } from "react-redux";
import { users } from "@/constants/mock";

export default function UserList() {
  const dispatch = useDispatch();
  dispatch(setUserStatus(users));

  return (
    <div className="flex min-w-[240px] flex-col gap-5 bg-[#2b2d31] px-[8px] pt-6">
      <Roles />
    </div>
  );
}
