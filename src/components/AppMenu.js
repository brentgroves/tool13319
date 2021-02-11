import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Badge from "@material-ui/core/Badge";
import AppsIcon from "@material-ui/icons/Apps";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
// import * as common from "@bgroves/common";

export default function AppMenu({
  msalInstance,
  Push,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTooling = () => {
    setAnchorEl(null);
    // Push('/tooling');   Can't get external URL to work with router
    window.location.href = 'http://tooling/';  
  };
  // const handleEng = () => {
  //   setAnchorEl(null);
  //   // Push('/tooling');   Can't get external URL to work with router
  //   window.location.href = 'http://eng/';  
  // };
  const handleProd = () => {
    setAnchorEl(null);
    // Push('/tooling');   Can't get external URL to work with router
    window.location.href = 'http://prod/';  
  };
  const handleSuper = () => {
    setAnchorEl(null);
    // Push('/tooling');   Can't get external URL to work with router
    window.location.href = 'http://super/';  
  };
  const handleGM = () => {
    setAnchorEl(null);
    // Push('/tooling');   Can't get external URL to work with router
    window.location.href = 'http://gm/';  
  };
  const handleSignout = () => {
    Push('/');
    msalInstance.logout();    
  };


  return (
    <React.Fragment>
      <CssBaseline />

      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={0} color="secondary">
          <AppsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleTooling}>Tooling</MenuItem>
        {/* <MenuItem onClick={handleEng}>Eng</MenuItem> */}
        <MenuItem onClick={handleProd}>Prod</MenuItem>
        <MenuItem onClick={handleSuper}>Super</MenuItem>
        <MenuItem onClick={handleGM}>GM</MenuItem>
        <MenuItem onClick={handleSignout}>Sign Out</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
