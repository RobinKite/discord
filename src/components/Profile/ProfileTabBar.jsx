import { List, ListItem, ListItemText, Stack } from "@mui/material";
import PropTypes from "prop-types";

export const ProfileTabBar = ({ activeTabId, handleTabClick, tabs }) => {
  return (
    <Stack sx={{ borderBottom: "1px solid #ffffff90" }}>
      <List
        sx={{
          mr: "auto",
          p: "0",
          gap: "40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr auto",
          justifyContent: "left",
        }}
      >
        {tabs.map((tab) => (
          <ListItem
            key={tab.id}
            sx={{
              p: 0,
              height: "46px",
              alignItems: "start",

              cursor: activeTabId !== tab.id ? "pointer" : "default",
              borderBottom:
                activeTabId === tab.id
                  ? "2px solid white"
                  : "2px solid transparent",
              transition: "borderBottomColor 250ms linear",
              "&:hover": {
                borderBottom: "2px solid white",
              },
            }}
            onClick={() => handleTabClick(tab.id)}
          >
            <ListItemText primary={tab.text} sx={{ fontSize: "14px" }} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

ProfileTabBar.propTypes = {
  activeTabId: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
