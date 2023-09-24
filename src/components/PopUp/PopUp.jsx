// import User from "../User/User";
// import Roles from "../Roles/Roles";
import React, { useState } from "react";
// import Box from "@mui/material/Box";
//import TextField from "@mui/material/TextField";

import { SiDiscord } from "react-icons/si";
import { BsFillCircleFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
// import { IoMdMoon } from "react-icons/io";
// import { BsRecordCircleFill } from "react-icons/bs";
import { darkServerIconBg } from "@/constants/designTokens";

import { styled } from "@mui/system";
import { Link, Tooltip } from "@mui/material";

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
  const [user, setUser] = useState({
    name: "Tetiana",
    userName: "tadimm",
    registrationDate: "07.07.2007",
    role: "front-end",
    note: "",
  });

  const handleNoteChange = (ev) => {
    setUser((prevUser) => ({ ...prevUser, note: ev.target.value }));
  };

  const formatRegistrationdate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="w-[340px] absolute top-[30%] left-[40%] text-[#f2f3f5] bg-[#232328] rounded-lg overflow-hidden">
      <div>
        <div className="h-[60px] bg-[#5d64f4]"></div>
        <SiDiscord
          className="bg-[#5d64f4] rounded-[50%] p-3 border-[6px] border-[#232328] absolute top-3 left-3"
          size={86}
        />
        <BsFillCircleFill
          className="text-[#23A559] border-[6px] border-[#232328] absolute top-[70px] left-[66px] rounded-[50%]"
          size={28}
        />
      </div>
      <Tooltip
        title={`Originally known as Tetiana`}
        arrow
        placement="top"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "common.black",
              "& .MuiTooltip-arrow": {
                color: "common.black",
              },
            },
          },
        }}
      >
        <div className="bg-[#111214] p-2 flex justify-center items-center absolute right-4 top-[70px] rounded-[8px]">
          <Link
            href="#"
            className="bg-[#1abc9d] inline-block rounded-[50%] w-[16px] h-[16px] p-[3.5px]"
          >
            <FaHashtag className="text-black" size={9} />
          </Link>
        </div>
      </Tooltip>
      <div className="bg-[#111214] p-3 mt-16 mb-4 ml-4 mr-4 rounded-lg">
        <h1 className="text-xl font-semibold">{user.name}</h1>
        <p className="text-sm mb-3">{user.userName}</p>
        <div className={`w-[100%] h-[1px] bg-[${darkServerIconBg}] mx-auto`} />
        <h2 className="pt-3 font-bold text-xs mb-1.5 uppercase">
          Member Since
        </h2>
        <div className="flex align-center gap-x-2 text-sm mb-1.5">
          <SiDiscord className="w-7 h-5 rounded-[50%] text-[#b5bac1]" />
          <span className="text-[#dbdee1]">
            {formatRegistrationdate(user.registrationDate)}
          </span>
        </div>
        <h2 className="text-sm uppercase font-bold mb-1.5">Role</h2>
        <div className="inline-flex items-center mb-3 pt-1 pr-2 pb-1 pl-1 bg-[#1E1F22] rounded-md">
          <BsFillCircleFill className="text-[#5d64f4] m-1" size={12} />
          <p className="text-xs">{user.role}</p>
        </div>
        <h2 className="text-xs uppercase font-bold mb-1.5">Note</h2>
        <CustomNoteTextField
          id="outlined-basic"
          placeholder="Click to add a note"
          size="small"
          onChange={handleNoteChange}
        />
        <CustomMessageTextField
          id="outlined-basic"
          placeholder={`Message @${user.name}`}
          size="small"
        />
      </div>
    </div>
  );
};

export default PopUp;
