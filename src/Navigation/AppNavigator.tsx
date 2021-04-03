import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack'
import DrawerNavigation from "./DrawerNavigation";
import Splash from './../Screens/Splash';

import {
    HomeStack, ConnectionsStack, AddPostStack, PagesStack, MessangerStack, ForumStack,
    NotificationsStack, JobsStack, EventsStack, ProfileStack, NetworkStack
} from './AllStacks';

const RootStack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer >
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="AuthStack"
                    component={AuthStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="ConnectionsStack"
                    component={ConnectionsStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="AddPostStack"
                    component={AddPostStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="PagesStack"
                    component={PagesStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="MessangerStack"
                    component={MessangerStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="ForumStack"
                    component={ForumStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="NotificationsStack"
                    component={NotificationsStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="NetworkStack"
                    component={NetworkStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="JobsStack"
                    component={JobsStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="EventsStack"
                    component={EventsStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="ProfileStack"
                    component={ProfileStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />

            </RootStack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;