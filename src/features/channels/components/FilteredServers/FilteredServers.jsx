import {
  Stack,
  IconButton,
  styled,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useEffect, useRef, useState } from "react";
import NoServersFound from "@/components/NoServersFound/NoServersFound";
import { SAMPLE_CARDS } from "@/constants/mock";
import FilteredCard from "@/components/FilteredCard/FilteredCard";
import PageControl from "@/components/PageControl/PageControl";
import { Link, useLocation } from "react-router-dom";
import ServerCard from "@/components/ServerCard/ServerCard";

const DiscoverTextField = styled(TextField)`
  .MuiInputBase-root {
    font-size: 16px;
    color: #dbdee1;
    width: 100%;
    max-width: 720px;
    height: 50px;
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: #4e5058;
    outline: 0;
    &:focus {
      outline: none;
      border: 1px solid #5865f2;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.33), 0 0 0 2px #00000033;
    }
  }
`;
const FilteredServers = () => {
  const location = useLocation();
  const queryFromGuildDiscovery = new URLSearchParams(location.search).get(
    "query"
  );
  const containerRef = useRef(null);
  // const refWidth = containerRef?.current.getBoundingClientRect().width || 0;
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [query, setQuery] = useState(queryFromGuildDiscovery || "");

  const totalPages = 3;

  const [isWideContainer, setIsWideContainer] = useState(true);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setQuery(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  useEffect(() => {
    setQuery(queryFromGuildDiscovery || "");
  }, [queryFromGuildDiscovery]);

  useEffect(() => {
    const updateContainerWidth = () => {
      const width = containerRef?.current?.getBoundingClientRect().width || 0;
      setContainerWidth(width);
      setIsWideContainer(width > 500);
    };
    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);
  return (
    <>
      <Stack
        ref={containerRef}
        spacing={3}
        sx={{
          p: {
            xs: "8px",
            md: "32px",
            maxHeight: "100vh",
            overflow: "auto",
            width: "100%",
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton
            component={Link}
            to={`/guild-discovery?query=${encodeURIComponent(inputValue)}`}
          >
            <ArrowBackRoundedIcon
              sx={{ color: "#b5bac1", "&:hover": { color: "#dbdee1" } }}
            />
          </IconButton>
          <Typography
            variant="h2"
            sx={{ color: "#b5bac1", fontSize: "24px", fontWeight: 600 }}
          >
            {`${SAMPLE_CARDS.length} Communities for "${decodeURIComponent(
              query
            )}"`}
          </Typography>
        </Stack>
        <DiscoverTextField
          value={query}
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
            width: "100%",
            maxWidth: "720px",
          }}
        >
          {SAMPLE_CARDS.map(
            (card) =>
              containerWidth > 500 ? (
                <FilteredCard key={card.serverId} card={card} />
              ) : (
                <ServerCard key={card.serverId} card={card} />
              )
            // <FilteredCard key={card.serverId} card={card} />
          )}
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
