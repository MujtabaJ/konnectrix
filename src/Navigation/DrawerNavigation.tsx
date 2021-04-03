import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from "./BottomTabNavigation";
import SideDrawerContent from "../Components/SideDrawer";
import { ForumStack, NotificationsStack, JobsStack, EventsStack } from './AllStacks';
import { Metrics } from "../Theme";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SideDrawerContent {...props} />} drawerStyle={{ width: "80%", maxWidth: Metrics.maxWidthDrawer }}  >
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{ swipeEnabled: false }} />
      <Drawer.Screen name="Forum" component={ForumStack} options={{ swipeEnabled: false }} />
      <Drawer.Screen name="Notifications" component={NotificationsStack} options={{ swipeEnabled: false }} />
      <Drawer.Screen name="Jobs" component={JobsStack} options={{ swipeEnabled: false }} />
      <Drawer.Screen name="Events" component={EventsStack} options={{ swipeEnabled: false }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;