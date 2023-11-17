/* eslint-disable indent */
import {
  Button,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { DiscoverSVG, UploadSVG } from "./SVG";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { IoChevronForwardSharp } from "react-icons/io5";

const Label = styled(InputLabel)(() => ({
  "&": {
    transform: "translate(0, -18px) scale(1)",
    color: "#4e5058",
  },
}));

const Input = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    color: "#313338",
    padding: "0",
    backgroundColor: "rgba(0,0,0,0.08)",
  },
  "& .MuiInputBase-input": { paddingLeft: "8px", paddingRight: "8px" },
  "& fieldset": {
    border: "none",
  },
}));

export const DialogInner = ({
  inputRef,
  handleFileSelect,
  handleFileChange,
  handleBack,
  handleChooseCreate,
  handleChooseJoin,
  handleModalClose,
  handleConfirmCreate,
  handleConfirmJoin,
  step,
  option,
}) => {
  const initialValuesCreateForm = {
    title: "",
  };
  const initialValuesJoinForm = {
    inviteLink: "",
  };

  switch (step) {
    case 1:
      return (
        <>
          <DialogTitle
            align={"center"}
            sx={{
              fontWeight: "bold",
              color: "#060607",
              fontSize: "24px",
              marginBottom: "8px",
              paddingBottom: 0,
            }}
          >
            Create a server
          </DialogTitle>

          <DialogContent sx={{ padding: "16px" }}>
            <Typography
              align={"center"}
              sx={{ color: "#4e5058", marginBottom: "24px" }}
            >
              Your server is where you and your friends hang out. Make yours and
              start talking.
            </Typography>
            <Button
              fullWidth
              sx={{
                backgroundColor: "#6d6f78",
                color: "#fff",
                fontSize: "14px",
                "&:hover": { backgroundColor: "#4e5058" },
                textTransform: "none",
              }}
              onClick={handleChooseCreate}
            >
              Create my own
            </Button>
          </DialogContent>
          <DialogContent sx={{ padding: "16px", paddingTop: 0 }}>
            <Typography
              align={"center"}
              sx={{
                fontWeight: "bold",
                color: "#060607",
                fontSize: "20px",
                marginBottom: "8px",
              }}
              variant={"h2"}
            >
              Have an invite already?
            </Typography>
            <Button
              fullWidth
              sx={{
                backgroundColor: "#6d6f78",
                color: "#fff",
                fontSize: "14px",
                "&:hover": { backgroundColor: "#4e5058" },
                textTransform: "none",
              }}
              onClick={handleChooseJoin}
            >
              Join a server
            </Button>
          </DialogContent>
        </>
      );
    case 2:
      return (
        <>
          {option === "create" && (
            <>
              <DialogTitle
                align={"center"}
                sx={{
                  fontWeight: "bold",
                  color: "#060607",
                  fontSize: "24px",
                  marginBottom: "8px",
                  paddingBottom: 0,
                }}
              >
                Customize your server
              </DialogTitle>
              <DialogContent>
                <Typography color="#4e5058" align="center">
                  Give your new server a personality with a name and an icon.
                  You can always change it later.
                </Typography>
                <Formik
                  initialValues={initialValuesCreateForm}
                  onSubmit={handleConfirmCreate}
                >
                  {(form) => (
                    <Form>
                      <FormControl fullWidth variant="standard">
                        <IconButton
                          sx={{
                            "&:hover": {
                              bgcolor: "transparent",
                            },
                          }}
                          onClick={handleFileSelect}
                        >
                          <UploadSVG />
                        </IconButton>
                        <input
                          id="image"
                          ref={inputRef}
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                          type="file"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </FormControl>
                      <FormControl
                        fullWidth
                        variant="standard"
                        required
                        sx={{ marginTop: "18px" }}
                      >
                        <Label shrink htmlFor="title">
                          Server name
                        </Label>
                        <Field as={Input} id="title" label="" name="title" />
                      </FormControl>
                      <Typography
                        color="#5c5e66"
                        fontSize="12px"
                        sx={{ marginBottom: "16px" }}
                      >
                        By creating a server, you agree to Discord&apos;s
                        Community Guidelines.
                      </Typography>
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          // bgcolor: "#f2f3f5",
                        }}
                      >
                        <Button
                          variant="text"
                          onClick={handleBack}
                          sx={{
                            textTransform: "none",
                            color: "#80848e",
                            bgcolor: "transparent",
                            padding: 0,
                            minWidth: "fit-content",
                            "&:hover": {
                              bgcolor: "transparent",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Back
                        </Button>
                        <Button
                          disabled={!form.isValid}
                          type="submit"
                          sx={{ textTransform: "none", padding: "10px 28px" }}
                        >
                          Create
                        </Button>
                      </Stack>
                    </Form>
                  )}
                </Formik>
              </DialogContent>
            </>
          )}
          {option === "join" && (
            <>
              <DialogTitle
                align={"center"}
                sx={{
                  fontWeight: "bold",
                  color: "#060607",
                  fontSize: "24px",
                  marginBottom: "8px",
                  paddingBottom: 0,
                }}
              >
                Join a Server
              </DialogTitle>
              <DialogContent>
                <Typography
                  color="#4e5058"
                  align="center"
                  sx={{ marginBottom: "16px" }}
                >
                  Enter an invite below to join an existing server
                </Typography>
                <Formik
                  initialValues={initialValuesJoinForm}
                  onSubmit={handleConfirmJoin}
                >
                  {(form) => (
                    <Form>
                      <FormControl
                        fullWidth
                        variant="standard"
                        required
                        sx={{ marginTop: "18px", marginBottom: "12px" }}
                      >
                        <Label shrink htmlFor="inviteLink">
                          Invite link
                        </Label>
                        <Field
                          as={Input}
                          label=""
                          id="inviteLink"
                          name="inviteLink"
                        />
                      </FormControl>
                      <Typography
                        variant="h2"
                        color="#4e5058"
                        fontWeight="bold"
                        fontSize="12px"
                        sx={{
                          marginBottom: "8px",
                          textTransform: "uppercase",
                        }}
                      >
                        Invites should look like
                      </Typography>
                      <Typography
                        color="#5c5e66"
                        fontSize="14px"
                        sx={{ marginBottom: "16px" }}
                      >
                        hTKzmak
                      </Typography>
                      <Button
                        component={NavLink}
                        to="/" //TODO: Add link to Discover servers
                        color="inherit"
                        startIcon={<DiscoverSVG />}
                        endIcon={
                          <IoChevronForwardSharp color="#4f5660" size="20" />
                        }
                        sx={{
                          marginBottom: "16px",
                          textTransform: "none",
                          whiteSpace: "nowrap",
                          backgroundColor: "#f2f3f5",
                          padding: "12px",
                          borderRadius: "8px",
                          "&:hover": {
                            bgcolor: "#80848e29",
                          },
                        }}
                      >
                        <Stack>
                          <Typography
                            variant="h3"
                            color="#060607"
                            fontSize="16px"
                            fontWeight="bold"
                          >
                            Don&apos;t have an invite?
                          </Typography>
                          <Typography color="#313338" fontSize="12px">
                            Check out Discoverable communities in Server
                            Discovery.
                          </Typography>
                        </Stack>
                      </Button>
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          // bgcolor: "#f2f3f5",
                        }}
                      >
                        <Button
                          variant="text"
                          onClick={handleBack}
                          sx={{
                            textTransform: "none",
                            color: "#80848e",
                            bgcolor: "transparent",
                            padding: 0,
                            minWidth: "fit-content",
                            "&:hover": {
                              bgcolor: "transparent",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Back
                        </Button>
                        <Button
                          disabled={!form.isValid}
                          type="submit"
                          sx={{ textTransform: "none", padding: "10px 16px" }}
                          onClick={() => {
                            handleModalClose();
                          }}
                        >
                          Join Server
                        </Button>
                      </Stack>
                    </Form>
                  )}
                </Formik>
              </DialogContent>
            </>
          )}
        </>
      );
    default:
      return null;
  }
};

DialogInner.propTypes = {
  inputRef: PropTypes.any,
  handleFileSelect: PropTypes.func,
  handleFileChange: PropTypes.func,
  handleBack: PropTypes.func,
  handleChooseCreate: PropTypes.func,
  handleChooseJoin: PropTypes.func,
  handleModalClose: PropTypes.func,
  handleConfirmCreate: PropTypes.func,
  handleConfirmJoin: PropTypes.func,
  option: PropTypes.string,
  step: PropTypes.number,
};
