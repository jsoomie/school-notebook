import { Box, CssBaseline, AppBar, Toolbar, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export const Menu = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ marginRight: "36px" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
