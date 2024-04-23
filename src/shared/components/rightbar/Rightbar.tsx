import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { themeLight } from "../../../theme";

interface IRightBarProps {}

export const Rightbar: FunctionComponent<IRightBarProps> = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      bgcolor={themeLight.palette.primary.main}
    >
      Rightbar
    </Box>
  );
};
