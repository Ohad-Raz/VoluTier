import React from "react";

import { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faRightFromBracket, faSun, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../../context/UserContext";
import Logo from "./LogoVoluntier.png"
import styles from "./Navbar.module.css"



export default function Navbar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [userAnchor,setUserAnchor]=useState(null)
    const navigate = useNavigate();
  
    const handleAnchorMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleUserMenuOpen=(event)=>{
      console.log("user open")
      setUserAnchor(event.currentTarget);
    }
  
    const handleMenuClose = () => {
      handleAnchorMenuClose()
      handleUserMenuClose()
    };
    const handleAnchorMenuClose = () => {
      
      setAnchorEl(null);
    };
    const handleUserMenuClose = () => {
      setUserAnchor(null);
    };
    
  
    const handleNavigate = (path) => {
      navigate(path);
      handleMenuClose();
    };
  
    const { UserObj,UserID ,logOut} = useContext(UserContext);
    console.log(UserID)

  

    const menuItems=[
      <MenuItem onClick={() => handleNavigate("/")}><img className={styles.logo} src={Logo}/></MenuItem>,
        <MenuItem onClick={() => handleNavigate("/")}>Home</MenuItem>,
        <MenuItem onClick={() => handleNavigate("/Feed")}>Feed</MenuItem>,
        <MenuItem onClick={() => handleNavigate("/leaderboard")}>Leaderboard</MenuItem>,
        
    ]




    return (
      <Box sx={{ flexGrow: 1 ,position:'sticky',top:0 ,zIndex:1000, width:"100%"}}>
       <AppBar
  sx={{
    background: "linear-gradient(to right, #145591, #2980b9)", // Gradient background
    color: "whitesmoke",
  }}
  position="static"
>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
              onClick={handleAnchorMenuOpen}
            >
              <FontAwesomeIcon  icon={faBars} />
  
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleAnchorMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
             {menuItems}
            </Menu>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {menuItems}
            </Box>
  
  
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex' }}>
  
  
  
            
            <Box sx={{ display: "flex", alignItems: "center" }} onClick={UserID ? handleUserMenuOpen : () => handleNavigate("/auth")}>
  {UserID ? (
    <p style={{ color: "#333" }}>{UserObj.username}</p>
  ) : (
    <Button
      variant="contained"
      sx={{
        color: "#333",
        backgroundColor: "#F0E68C", // Light gold
        backgroundImage: "linear-gradient(to bottom, #F0E68C, #E0E0E0)", // Gradient
        "&:hover": {
          backgroundColor: "#E0E0E0", // Darker gold on hover
          backgroundImage: "linear-gradient(to bottom, #E0E0E0, #B0E0E6)" // Light blue gradient on hover
        }
      }}
      onClick={() => handleNavigate("/auth")}
    >
      {"Login"}
    </Button>
  )}
  <IconButton size="large" edge="end" aria-label="account of current user" color="inherit">
    <FontAwesomeIcon icon={faUserCircle} />
  </IconButton>
</Box>
              <Menu
              id="menu-appbar"
              anchorEl={userAnchor}
              keepMounted
              open={Boolean(userAnchor)}
              onClose={handleUserMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={() => handleNavigate("/profile")}>Profile</MenuItem>
              <MenuItem onClick={logOut} sx={{display:"flex",columnGap:"1vw",alignItems:'center'}} ><span>Log Out</span> <FontAwesomeIcon icon={faRightFromBracket} />  </MenuItem>
            </Menu>


            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

