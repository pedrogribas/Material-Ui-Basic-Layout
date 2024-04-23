import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { themeLight } from "../../../theme";

interface ISidebarProps {}

export const Sidebar: FunctionComponent<ISidebarProps> = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      bgcolor={themeLight.palette.primary.main}
    >
      Sidebar
    </Box>
  );
};
