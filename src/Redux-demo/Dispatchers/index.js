
import {
  insertPhoneNumber, insertEmail, insertFirstName, insertLastName, insertDateOfBirth, insertCountryName,
  insertOccupation, insertGender, insertEducationList, insertExperienceList, insertAddress, resetProfile
} from '../Actions/ProfileActions';

import {
  insertErrorMsg, inserSuccessMsg, resetErrorMsg, resetSuccessMsg
} from '../Actions/GeneralActions';

import {
  insertNotificationsList, insertNotificationsBadge
} from '../Actions/NotificationsActions';

import {
  getUsersList
} from '../Actions/UsersActions';

import { setNetworksList } from "../Actions/NetworkActions";

import {
  insertTotalConnections, insertConnectionInvitationList, insertConnectionsList
} from '../Actions/ConnectionsAction';

import {
  insertPostsList
} from '../Actions/PostsActions';

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
    //NOTIFICATIONS
    notificationsList: state.Notifications.notificationsList,
    notificationsBadge: state.Notifications.notificationsBadge,
    //CONNECTIONS
    totalConnections: state.Connections.totalConnections,
    connectionInvitationList: state.Connections.connectionInvitationList,
    connectionsList: state.Connections.connectionsList,
    //USERS
    usersList: state.Users.usersList,
    //NETWORKS
    networksList: state.Networks,
    //GENERAL
    errorMsg: state.General.errorMsg,
    successMsg: state.General.successMsg,
    //POSTS
    postsList: state.Posts.postsList
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
    resetProfile: () => {
      dispatch(resetProfile());
    },
    //NOTIFICATIONS
    setNotificationsList: notificationsList => dispatch(insertNotificationsList(notificationsList)),
    setNotificationsBadge: notificationsBadge => dispatch(insertNotificationsBadge(notificationsBadge)),
    //CONNECTIONS
    setTotalConnections: totalConnections => dispatch(insertTotalConnections(totalConnections)),
    setConnectionInvitationList: connectionInvitationList => dispatch(insertConnectionInvitationList(connectionInvitationList)),
    setConnectionsList: connectionsList => dispatch(insertConnectionsList(connectionsList)),
    //GENERAL
    setErrorMsg: errorMsg => dispatch(insertErrorMsg(errorMsg)),
    setSuccessMsg: successMsg => dispatch(inserSuccessMsg(successMsg)),
    resetErrorMsg: () => dispatch(resetErrorMsg()),
    resetSuccessMsg: () => dispatch(resetSuccessMsg()),
    //POSTS
    setPostsList: postsList => dispatch(insertPostsList(postsList)),
  };
};