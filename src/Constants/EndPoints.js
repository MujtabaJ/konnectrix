import GLOBALS from "./Settings";

const EndPoint = {
  //BASE URL no. 1
  doesEmailExist: (email) => `${GLOBALS.BASE_URL}/api/Account/email/exists/${email}`,
  isEmailVerified: `${GLOBALS.BASE_URL}/api/Account/email/verified`,
  login: `${GLOBALS.BASE_URL}/api/Account/login`,
  refreshAccessToken: (token) => `${GLOBALS.BASE_URL}/api/Account/refresh/${token}`,
  logout: `${GLOBALS.BASE_URL}/api/Account/logout`,
  forgotPassword: `${GLOBALS.BASE_URL}/api/Account/forgot`,
  resetPassword: `${GLOBALS.BASE_URL}/api/Account/forgot/confirm`,
  registration: `${GLOBALS.BASE_URL}/api/Account/register`,

  //BASE URL no. 2
  //NETWORK
  getNetworksListByUser: (pageNo, pageSize) => `${GLOBALS.BASE_URL_2}/api/Networks/GetNetworksByUser/?Page=${pageNo}&PageSize=${pageSize}`,
  getNetworkDetails: (networkId, pageNo, pageSize) => `${GLOBALS.BASE_URL_2}/api/Networks/GetNetwork?NetworkId=${networkId}&Page=${pageNo}&PageSize=${pageSize}`,
  getNetworkPosts: (networkId, pageNo, pageSize) => `${GLOBALS.BASE_URL_2}/api/Posts/GetPostsByNetwork?NetworkId=${networkId}&Page=${pageNo}&PageSize=${pageSize}`,
  getNetworksList: (Page, PageSize) => `${GLOBALS.BASE_URL_2}/api/Networks/GetNetworks?Page=${Page}&PageSize=${PageSize}`,
  getNetworkConnect: (networkId) => `${GLOBALS.BASE_URL_2}/api/Requests/user/create?networkId=${networkId}`,
  createNetwork: `${GLOBALS.BASE_URL_2}/api/Networks/CreateNetwork`,
  createNetworkAdminRequest: `${GLOBALS.BASE_URL_2}/api/Networks/CreateNetworkAdminRequest`,
  getUserProfile: `${GLOBALS.BASE_URL_2}/api/UserProfile/GetUserProfile`,

  //POST
  createPost: `${GLOBALS.BASE_URL_2}/api/Posts/CreatePost`,
  getPosts: (pageNo, pageSize) => `${GLOBALS.BASE_URL_2}/api/Posts/GetPosts?Page=${pageNo}&PageSize=${pageSize}`,
  getSpecificPost: (postId) => `${GLOBALS.BASE_URL_2}/api/Posts/GetPost?PostId=${postId}`,
  commentPost: `${GLOBALS.BASE_URL_2}/api/Posts/CommentPost`,
  likeUnlikePost: `${GLOBALS.BASE_URL_2}/api/Posts/LikePost`,
  //User Profile
  updateUserProfilePic: `${GLOBALS.BASE_URL_2}/api/UserProfile/UpdateUserProfilePic`,
  updateUserProfile: `${GLOBALS.BASE_URL_2}/api/UserProfile/UpdateUserProfile`,
  updateUserEducation: `${GLOBALS.BASE_URL_2}/api/UserProfile/UpdateUserEducation`,
  updateUserExperience: `${GLOBALS.BASE_URL_2}/api/UserProfile/UpdateUserExperience`,

};

export default EndPoint;