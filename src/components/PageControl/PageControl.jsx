import { IconButton, Link, Stack } from "@mui/material";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const PageControl = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: "20px", p: "4px" }}>
      <IconButton
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        size="small"
        sx={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#f2f3f5",
          borderRadius: "3px",
          padding: "8px",
          m: "4px",
          "&:hover": {
            bgcolor: "#232428",
          },
          "&:disabled": {
            color: "#c0c1c2",
          },
        }}>
        <IoIosArrowBack
          size={16}
          style={{ marginRight: "4px", fill: "current" }}
        />
        Back
      </IconButton>
      {[...Array(totalPages)].map((_, index) => (
        <Link
          key={index + 1}
          component="button"
          variant="body1"
          underline="none"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            backgroundColor:
              currentPage === index + 1 ? "#5865f2" : "transparent",
            color: currentPage === index + 1 ? "#ffffff" : "#f2f3f5",
            padding: "0 12px",
            borderRadius: "50%",
            margin: "4px",
            cursor: "pointer",
          }}
          onClick={() => onPageChange(index + 1)}>
          {index + 1}
        </Link>
      ))}
      <IconButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        size="small"
        sx={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#f2f3f5",
          borderRadius: "3px",
          padding: "8px",
          m: "4px",
          "&:hover": {
            bgcolor: "#232428",
          },
          "&:disabled": {
            color: "#a4a5a7",
          },
        }}>
        Next
        <IoIosArrowForward
          size={16}
          style={{ marginLeft: "4px", fill: "current" }}
        />
      </IconButton>
    </Stack>
  );
};

PageControl.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
};

export default PageControl;
