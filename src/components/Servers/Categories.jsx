import { Button, List, styled } from "@mui/material";

const CategoryButton = styled(Button)(() => ({
  "&": {
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: 500,
    backgroundColor: "transparent",
    padding: "4px 8px",
    borderRadius: "8px",
    margin: "0 8px 4px 0",
    color: "#949ba4",
    "&:hover": { backgroundColor: "#4e50584c" },
    "&:focus": { backgroundColor: "#5865f2", color: "#fff" },
  },
}));

export const Categories = () => {
  return (
    <List
      sx={{
        color: "#949ba4",
        fontSize: "14px",
        fontWeight: 500,
        display: "inline-flex",
        flexWrap: "wrap",
        width: "848px",
      }}
    >
      <CategoryButton>All (0)</CategoryButton>
      <CategoryButton>Gaming (0)</CategoryButton>
      <CategoryButton>Entertainment (0)</CategoryButton>
      <CategoryButton>General Chatting (0)</CategoryButton>
      <CategoryButton>Content Creator (0)</CategoryButton>
      <CategoryButton>Anime & Manga (0)</CategoryButton>
      <CategoryButton>Memes (0)</CategoryButton>
      <CategoryButton>Cryptocurrency (0)</CategoryButton>
    </List>
  );
};
