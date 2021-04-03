import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
// import { AuthStack, RegistrationStack } from './AllStacks';
import Login from '../Screens/Login';
import Registration from '../Screens/Registration';
import ForgotPassword from "../Screens/ForgotPassword";
import ResetPassword from "../Screens/ForgotPassword/ResetPassword";
import Welcome from "../Screens/Welcome";
import NetworkJoinRequest from "../Screens/NetworkJoinRequest";


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Registration"
                component={Registration}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="NetworkJoinRequest"
                component={NetworkJoinRequest}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;