import React, { useState } from "react";
import { Icon, Container, Header, Content, Badge, Text, } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../Theme/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, ConnectionsStack, AddPostStack, NotificationsStack, JobsStack } from './AllStacks';
import { useSelector, useDispatch } from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  // const dispatch = useDispatch();
  // dispatch({ type: 'SET_NOTIFICATIONS_BADGE', payload: '2' });
  
  const notificationsBadge = useSelector(state => state.Notifications.notificationsBadge);

  return (
    <Tab.Navigator tabBarOptions={{
      labelStyle: { textTransform: "none", fontSize: Fonts.moderateScale(10), color: Colors.themeBlue }
    }}>
      <Tab.Screen name="Home" component={HomeStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name='home' type='FontAwesome' style={focused ? styles.activeIconStyle : styles.inactiveIconStyle} />
            </View>
          )
        }}
      />
      {/* <Tab.Screen name="Connections" component={ConnectionsStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: "Connections",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name='connectdevelop' type='FontAwesome' style={focused ? styles.activeIconStyle : styles.inactiveIconStyle} />
            </View>
          )
        }}
      /> */}
      <Tab.Screen name="AddPost" component={AddPostStack}
        options={{
          tabBarVisible: false,
          tabBarLabel: "Post",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name='plus-circle' type='FontAwesome' style={focused ? styles.activeIconStyle : styles.inactiveIconStyle} />
            </View>
          )
        }}
      />
      {/* <Tab.Screen name="Notifications" component={NotificationsStack}
        options={{
          tabBarBadge: notificationsBadge,
          tabBarVisible: true,
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name='bell' type='FontAwesome' style={focused ? styles.activeIconStyle : styles.inactiveIconStyle} />
            </View>
          )
        }}
      /> */}
      {/* <Tab.Screen name="Jobs" component={JobsStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: "Jobs",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name='briefcase' type='FontAwesome' style={focused ? styles.activeIconStyle : styles.inactiveIconStyle} />
            </View>
          )
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    // width: Metrics.WIDTH * 0.07,
    flexDirection: 'row'
  },
  activeIconStyle: {
    fontSize: Fonts.moderateScale(22),
    textAlign: 'center',
    color: Colors.themeBlue
  },
  inactiveIconStyle: {
    fontSize: Fonts.moderateScale(18),
    textAlign: 'center',
    color: Colors.grey
  },
  tabBarFont: {
    fontSize: Fonts.moderateScale(24),
  }
});

export default BottomTabNavigator;
