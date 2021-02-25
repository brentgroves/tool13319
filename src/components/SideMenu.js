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
import AssignmentIcon from '@material-ui/icons/Assignment';

//https://v0.material-ui.com/#/components/list
//https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93

export default function SideMenu(params) {
  // eslint-disable-next-line
  const { Push } = params;

  const handleToolLife = () => {
    // Push('/toollife');
    alert(`Tool Life Issues`);
  };
  const handleRegrindHistory = () => {
    // Push('/machining_times');
    alert(`Regrind History`);
  };
  const handleSubscribeEmail = () => {
    // Push('/SubscribeEmail');
    alert(`SubscribeEmail`);
  };
  const handleTasks = () => {
    // Push('/machining_times');
    window.open(
      "https://tasks.office.com/busche-cnc.com/en-US/Home/Planner/",
      "_blank"
    );
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
      <ListItem button onClick={handleRegrindHistory}>
        <ListItemIcon>
          <AirplanemodeActiveIcon />
        </ListItemIcon>
        <ListItemText primary="Regrinds" />
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
      <Divider />
      <ListSubheader>Planner</ListSubheader>
      <Divider />
      <ListItem button onClick={handleTasks}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItem>
    </List>
  );
}
