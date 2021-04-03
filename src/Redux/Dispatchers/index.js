
import {
  insertUserId,insertPhoneNumber, insertEmail, insertFirstName, insertLastName, insertDateOfBirth, insertCountryName,
  insertOccupation, insertGender, insertEducationList, insertProfilePicture, insertExperienceList, insertAddress, resetProfile,
  insertabout, insertaboutDescription, insertcity, insertState1
} from '../Actions/ProfileActions';

import {
  insertErrorMsg, inserSuccessMsg, resetErrorMsg, resetSuccessMsg
} from '../Actions/GeneralActions';

import {
  insertNotificationsList
} from '../Actions/NotificationsActions';

import {
  insertTotalConnections, insertConnectionInvitationList, insertConnectionsList
} from '../Actions/ConnectionsAction';

import {
  insertUserConnectedNetworksList, resetNetworks
} from '../Actions/NetworksAction';
import {
  insertPublicNetworksList
} from '../Actions/NetworksAction';

import {
  insertFeedPostsList, insertUserPostsList, insertNetworkPostsList, resetPosts
} from '../Actions/PostsAction';

export const mapStateToProps = state => {
  return {
    //PROFILE
    
    firstName: state.Profile.firstName,
    lastName: state.Profile.lastName,
    countryName: state.Profile.countryName,
    occupation: state.Profile.occupation,
    dateOfBirth: state.Profile.dateOfBirth,
    gender: state.Profile.gender,
    phoneNumber: state.Profile.phoneNumber,
    emailAddress: state.Profile.emailAddress,
    address: state.Profile.address,
    educationList: state.Profile.educationList,
    experienceList: state.Profile.experienceList,
    profilePicture: state.Profile.profilePicture,

    about: state.Profile.about,
    aboutDescription: state.Profile.aboutDescription,
    city: state.Profile.city,
    state1: state.Profile.state1,
    userId: state.Profile.userId,

    //NETWORKS
    userConnectedNetworksList: state.Networks.userConnectedNetworksList,
    publicNetworksList: state.Networks.publicNetworksList,
    //NOTIFICATIONS
    notificationsList: state.Notifications.notificationsList,
    //CONNECTIONS
    totalConnections: state.Connections.totalConnections,
    connectionInvitationList: state.Connections.connectionInvitationList,
    connectionsList: state.Connections.connectionsList,
    //POSTS:
    feedPostsList: state.Posts.feedPostsList,
    userPostsList: state.Posts.userPostsList,
    networkPostsList: state.Posts.networkPostsList,
    //GENERAL
    errorMsg: state.General.errorMsg,
    successMsg: state.General.successMsg,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    //PROFILE
    
    setFirstName: firstName => dispatch(insertFirstName(firstName)),
    setLastName: lastName => dispatch(insertLastName(lastName)),
    setCountry: countryName => dispatch(insertCountryName(countryName)),
    setOccupation: occupation => dispatch(insertOccupation(occupation)),
    setDateOfBirth: dateOfBirth => dispatch(insertDateOfBirth(dateOfBirth)),
    setGender: gender => dispatch(insertGender(gender)),
    setPhoneNumber: phoneNumber => dispatch(insertPhoneNumber(phoneNumber)),
    setEmailAddress: emailAddress => dispatch(insertEmail(emailAddress)),
    setAddress: address => dispatch(insertAddress(address)),
    setEducationList: educationList => dispatch(insertEducationList(educationList)),
    setExperienceList: experienceList => dispatch(insertExperienceList(experienceList)),
    setProfilePicture: profilePicture => dispatch(insertProfilePicture(profilePicture)),

    setabout: about => dispatch(insertabout(about)),
    setaboutDescription: aboutDescription => dispatch(insertaboutDescription(aboutDescription)),
    setcity: city => dispatch(insertcity(city)),
    setState1: state1 => dispatch(insertState1(state1)),
    setUserId: userId => dispatch(insertUserId(userId)),


    resetProfile: () => dispatch(resetProfile()),
    //NETWORKS
    setUserConnectedNetworksList: userConnectedNetworksList => dispatch(insertUserConnectedNetworksList(userConnectedNetworksList)),
    setPublicNetworksList: publicNetworksList => dispatch(insertPublicNetworksList(publicNetworksList)),
    resetNetworks: () => dispatch(resetNetworks()),
    //NOTIFICATIONS
    setNotificationsList: notificationsList => dispatch(insertNotificationsList(notificationsList)),
    //CONNECTIONS
    setTotalConnections: totalConnections => dispatch(insertTotalConnections(totalConnections)),
    setConnectionInvitationList: connectionInvitationList => dispatch(insertConnectionInvitationList(connectionInvitationList)),
    setConnectionsList: connectionsList => dispatch(insertConnectionsList(connectionsList)),
    //POSTS
    setFeedPostsList: feedPostsList => dispatch(insertFeedPostsList(feedPostsList)),
    setUserPostsList: userPostsList => dispatch(insertUserPostsList(userPostsList)),
    setNetworkPostsList: networkPostsList => dispatch(insertNetworkPostsList(networkPostsList)),
    resetPosts: () => dispatch(resetPosts()),
    //GENERAL
    setErrorMsg: errorMsg => dispatch(insertErrorMsg(errorMsg)),
    setSuccessMsg: successMsg => dispatch(inserSuccessMsg(successMsg)),
    resetErrorMsg: () => dispatch(resetErrorMsg()),
    resetSuccessMsg: () => dispatch(resetSuccessMsg()),

  };
};