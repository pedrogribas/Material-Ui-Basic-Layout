import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { PostCard } from "../postCard/PostCard";

interface IFeedProps {}

export const Feed: FunctionComponent<IFeedProps> = () => {
  return (
    <Box flex={4} p={2}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Box>
  );
};
