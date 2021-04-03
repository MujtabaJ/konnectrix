import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//AUTH
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
//REGISTRATION
import Registration from '../Screens/Registration';
//HOME
import Home from '../Screens/Home';
//CONNECTIONS
import Connections from '../Screens/Connections';
//PAGES
import CreatePage from '../Screens/Pages/CreatePage';
//FORUM
import CreateForum from '../Screens/Forum/CreateForum';
//NOTIFICATIONS
import Notifications from '../Screens/Notifications'
//JOBS
import JobApply from '../Screens/Jobs/JobApply';
import JobDetail from '../Screens/Jobs/JobDetail';
import Jobs from '../Screens/Jobs/Jobs';
//PROFILE
import Profile from '../Screens/Profile';
import EducationExperienceAccordions from '../Screens/Profile/components/EducationExperienceAccordions';
import AboutAccordion from '../Screens/Profile/components/About/AboutAccordion';
import AddEducation from '../Screens/Profile/components/Education/AddEducation';
import AddExperience from '../Screens/Profile/components/Experience/AddExperience';
// Create Networks
import CreateNetwork from "../Screens/Networks/CreateNetwork";
import MyNetworks from "../Screens/Networks/MyNetworks";
import SpecificNetwork from "../Screens/Networks/SpecificNetwork";
//ADD
import AddPost from '../Screens/Posts/AddPost';

// import CommentViewComponent from "../Components/CommentViewComponent";

const Stack = createStackNavigator();


export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="NetworkStack" component={NetworkStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const ConnectionsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Connections" component={Connections} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const PagesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CreatePage" component={CreatePage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
//MessengersStack typo
export const MessangerStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messanger Screen" component={Connections} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const ForumStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CreateForum" component={CreateForum} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const NotificationsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const JobsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Jobs" component={Jobs} options={{ headerShown: false }} />
            <Stack.Screen name="JobApply" component={JobApply} options={{ headerShown: false }} />
            <Stack.Screen name="JobDetail" component={JobDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const NetworkStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyNetworks" component={MyNetworks} options={{ headerShown: false }} />
            <Stack.Screen name="CreateNetwork" component={CreateNetwork} options={{ headerShown: false }} />
            <Stack.Screen name="SpecificNetwork" component={SpecificNetwork} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const EventsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Events" component={Jobs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="EducationExperienceAccordions" component={EducationExperienceAccordions} options={{ headerShown: false }} />
            <Stack.Screen name="AboutAccordion" component={AboutAccordion} options={{ headerShown: false }} />
            <Stack.Screen name="AddEducation" component={AddEducation} options={{ headerShown: false }} />
            <Stack.Screen name="AddExperience" component={AddExperience} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const AddPostStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AddPost" component={AddPost} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};