import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { themeLight } from "../../../theme";

interface IFeedProps {}

export const Feed: FunctionComponent<IFeedProps> = () => {
  return (
    <Box flex={4} p={2} bgcolor={themeLight.palette.primary.light}>
      Feed
    </Box>
  );
};
