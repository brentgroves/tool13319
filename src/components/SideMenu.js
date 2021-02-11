import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SpeedIcon from "@material-ui/icons/Speed";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import EmailIcon from "@material-ui/icons/Email";

//https://v0.material-ui.com/#/components/list
//https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93

export default function SideMenu(params) {
  // eslint-disable-next-line
  const { Push } = params;

  const handleToolLife = () => {
    // Push('/toollife');
    alert(`Tool Life Issues`);
  };
  const handleMachiningTimes = () => {
    // Push('/machining_times');
    alert(`Machining times issues`);
  };
  const handleSubscribeEmail = () => {
    // Push('/SubscribeEmail');
    alert(`SubscribeEmail`);
  };
  return (
    <List>
      <ListSubheader>Issues</ListSubheader>
      <Divider />
      <ListItem button onClick={handleToolLife}>
        <ListItemIcon>
          <SpeedIcon />
        </ListItemIcon>
        <ListItemText primary="Tool Life" />
      </ListItem>
      <ListItem button onClick={handleMachiningTimes}>
        <ListItemIcon>
          <AirplanemodeActiveIcon />
        </ListItemIcon>
        <ListItemText primary="Machining Time" />
      </ListItem>
      {/* <ListItem button onClick={handleIssuesPlant8}>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText primary="Plant 9" />
      </ListItem> */}
      <Divider />
      <ListSubheader>Post</ListSubheader>
      <Divider />
      <ListItem button onClick={handleSubscribeEmail}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Email" />
      </ListItem>
    </List>
  );
}
