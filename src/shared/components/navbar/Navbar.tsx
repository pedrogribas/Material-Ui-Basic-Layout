import { Mail, Notifications } from "@mui/icons-material";
import AnchorIcon from "@mui/icons-material/Anchor";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import { themeLight } from "../../../theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: themeLight.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({}) => ({
  display: "flex",
  gap: 20,
  alignItems: "center",
}));

interface INavbarProps {}

export const Navbar: FunctionComponent<INavbarProps> = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: themeLight.palette.primary.dark }}>
      <StyledToolbar>
        <AnchorIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              gap: 20,
              alignItems: "center",
              flexDirection: "row",
            },
          }}
        >
          <AnchorIcon />
          <Typography variant="h6">LogoName</Typography>
        </Box>
        <Search>
          <InputBase sx={{ width: "100%" }} placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
