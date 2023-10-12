import { Modal } from "@/constants";
import { closeModal } from "@/redux/slices/uiSlice";
import { Dialog, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import DialogInner from "./DialogInner";
import { IoClose } from "react-icons/io5";
import { createServer } from "@/redux/slices/serverSlice";

const CreateServerModal = () => {
  const [step, setStep] = useState(1);
  const [option, setOption] = useState(null);
  const dispatch = useDispatch();

  const modalStack = useSelector((state) => state.ui.modalStack);
  const open = modalStack.includes(Modal.CREATE_SERVER);

  const inputRef = useRef(null);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setOption(null);
    setStep(step - 1);
  };

  const handleModalClose = () => {
    setStep(1);
    setOption(null);
    dispatch(closeModal());
  };

  const handleChooseCreate = () => {
    handleNext();
    setOption("create");
  };
  const handleChooseJoin = () => {
    handleNext();
    setOption("join");
  };

  const handleConfirmCreate = (values, actions) => {
    console.log(values);
    actions.resetForm();
    handleModalClose();
    dispatch(createServer(values));
  };

  const handleConfirmJoin = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const handleFileSelect = () => {
    inputRef.current.click();
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // onFileSelect(selectedFile);
    }
  };

  return (
    <Dialog
      onClose={handleModalClose}
      open={open}>
      <IconButton
        edge="end"
        color="#4e5058"
        onClick={handleModalClose}
        aria-label="close"
        sx={{
          position: "absolute",
          top: "0px",
          right: "12px",
          "&:hover": {
            bgcolor: "transparent",
          },
          "&:hover svg": {
            fill: "#313338",
          },
          "& svg": {
            transition: "fill",
            transitionDuration: "0.3s",
          },
        }}>
        <IoClose size={32} />
      </IconButton>
      <DialogInner
        inputRef={inputRef}
        handleFileSelect={handleFileSelect}
        handleFileChange={handleFileChange}
        handleBack={handleBack}
        handleChooseCreate={handleChooseCreate}
        handleChooseJoin={handleChooseJoin}
        handleModalClose={handleModalClose}
        handleConfirmCreate={handleConfirmCreate}
        handleConfirmJoin={handleConfirmJoin}
        step={step}
        option={option}
      />
    </Dialog>
  );
};

export default CreateServerModal;
