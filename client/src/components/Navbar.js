import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { Link } from "react-router-dom";
//import navbar css
import "./Navbar.css";
import "./theme.css";
import defaultImg from "../assets/default.svg";

const pages = ["EXPLORE", "POST"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isExplore = (page) => {
    if (page === "EXPLORE") {
      return "/";
    } else {
      return "/" + page.toLowerCase();
    }
  };

  return (
    <AppBar position="static" className="navbar" sx={{ boxShadow: "inherit" }}>
      <Container maxWidth="xl" className="yellowbg">
        <Toolbar disableGutters>
          {/* <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          /> */}
          <img
            src={defaultImg}
            className="logoBig"
            alt="logo"
            style={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              width: "100px",
              height: "100px",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            BREWMATE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={isExplore(page)}
                    style={{ textDecoration: "none" }}
                    key={page}
                  >
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          /> */}
          <img
            src={defaultImg}
            alt="logo"
            className="logoSmall"
            style={{
              mr: 1,
              width: "100px",
              height: "100px",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            {/* <div
              style={{
                border: "3px solid black",
                paddingLeft: "5px",
                backgroundColor: "white",
              }}
            > */}
            BREWMATE
            {/* </div> */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                to={isExplore(page)}
                style={{ textDecoration: "none" }}
                key={page}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
