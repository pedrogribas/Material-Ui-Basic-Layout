import { Mail, Notifications } from "@mui/icons-material";
import AnchorIcon from "@mui/icons-material/Anchor";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
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
  display: "none",
  gap: 20,
  alignItems: "center",
  [themeLight.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({}) => ({
  display: "flex",
  gap: 10,
  alignItems: "center",
  [themeLight.breakpoints.up("sm")]: {
    display: "none",
  },
}));

interface INavbarProps {}

export const Navbar: FunctionComponent<INavbarProps> = () => {
  const [open, setOpen] = useState(false);
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
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Typography variant="body1" color="initial">
            John
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
