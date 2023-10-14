import {
  Stack,
  InputAdornment,
  IconButton,
  Input,
  styled,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import React, { useState } from "react";
import NoServersFound from "@/components/NoServersFound/NoServersFound";
import { SAMPLE_CARDS } from "@/constants/mock";
import FilteredCard from "@/components/FilteredCard/FilteredCard";
import Categories from "@/components/Servers/Categories";
import PageControl from "@/components/PageControl/PageControl";

const DiscoverTextField = styled(TextField)`
  .MuiInputBase-root {
    font-size: 16px;
    color: #dbdee1;
    width: 720px;
    height: 50px;
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: #4e5058;
    outline: 0;
    /* padding: 10px 6px 6px; */

    /* &:hover {

    } */
    &:focus {
      outline: none;
      border: 1px solid #5865f2;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.33), 0 0 0 2px #00000033;
    }
  }
`;
const FilteredServers = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 9;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };
  return (
    <>
      <Stack spacing={3} sx={{ p: "32px" }}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton>
            <ArrowBackRoundedIcon sx={{ color: "#b5bac1" }} />
          </IconButton>
          <Typography
            variant="h2"
            sx={{ color: "#b5bac1", fontSize: "24px", fontWeight: 600 }}
          >
            0 Communities for "aa"
          </Typography>
        </Stack>
        <DiscoverTextField
          value={inputValue}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: inputValue && (
              <IconButton onClick={handleClearInput}>
                <ClearIcon
                  fontSize="medium"
                  sx={{
                    bgcolor: "#b5bac1",
                    borderRadius: "50%",
                    p: "2px",
                    fontWeight: 900,
                  }}
                />
              </IconButton>
            ),
          }}
        />
        {/* {inputValue && (
          <IconButton onClick={handleClearInput}>
            <ClearIcon />
          </IconButton>
        )} */}
        {/* <NoServersFound /> */}
        {/* <Categories /> */}
        <Grid
          justifyContent="center"
          alignItems="center"
          sx={{
            gridTemplateColumns: "1fr",
            width: "720px",
          }}
        >
          {SAMPLE_CARDS.map((card) => (
            <FilteredCard key={card.serverId} card={card} />
          ))}
          <PageControl
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Grid>
      </Stack>
    </>
  );
};

export default FilteredServers;
