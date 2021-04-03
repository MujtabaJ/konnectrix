import React from 'react';
import { StyleSheet, ToastAndroid, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import { Container, Content } from "native-base";
import HeaderComponent from '@Components/HeaderComponent';
import jsonData from '@Components/JsonData';
import { Translate } from '../../i18n/localization';
import { Colors, Fonts } from '../../Theme';
import JobsList from '@Components/JobsList';
import NetworkListComponent from '@Components/NetworkListComponent';
import PostComponent from '@Components/PostComponent';
import ViewAllComponent from '@Components/ViewAllComponent';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers/index";
import { getPostsController } from './../../Network/Controllers/postController';
import { getNetworksListByUserController } from '../../Network/Controllers/networkController';
import Loader from '@Components/Loader';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedPostsList: [],
      modalVisible: false,
      comment: "",
      jobsList: jsonData.jobsList,
      isRefreshing: false,
      page: 1,
      size: 5,
      loading: false
    };
  }

  fetchData = async () => {
    this.setState({ isRefreshing: true });
    // to get list of all networks joined by user we have to send page no. and page size of 0 values
    const pageNo = 1;
    const pageSize = 5;
    await getNetworksListByUserController(pageNo, pageSize, this.props);
    getPostsController(this.state.page, this.state.size, this.props).then(response => {
      this.setState({ feedPostsList: response.data.data })
    })
    this.setState({ isRefreshing: false });
  }

  handleLoadMore = async () => {
    setTimeout(() => {
      this.setState({ page: 1, size: this.state.size + 5 });
      getPostsController(this.state.page, this.state.size, this.props).then(response => {
        // this.setState({ feedPostsList: response.data.data, loading: false })
        // const feedPostsList = [...response.data.data, ...this.state.feedPostsList]
        this.setState({ feedPostsList: response.data.data, loading: false })
      }).catch((err) => {
        console.log(err);
      });
    }, 2500);
  }

  renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    this.setState({ loading: true });
    this.handleLoadMore()
    // return (
    //   <ActivityIndicator
    //     style={{ borderColor: '#000', justifyContent:'center' }}
    //   />
    // );
  };

  async componentDidMount() {
    const { navigation } = this.props;
    this.didFocusListener = navigation.addListener("focus", () => {
      this.props.navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true })
    });
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.feedPostsList.length !== prevProps.feedPostsList.length) {
      this.setState({ feedPostsList: this.props.feedPostsList })
    }
  }

  onJobApply = (jobStatus, index) => {
    let overrideJobsList = [...this.state.jobsList];
    if (jobStatus == "Apply") {
      overrideJobsList[index].jobStatus = "Applied"
      this.setState({ jobsList: overrideJobsList })
      this.showToastWithGravity("You have applied for this job successfully");
    } else {
      this.showToastWithGravity("You have been already applied for this job!");
    }
  }

  showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  onRefresh = () => {
    this.wait(500).then(() =>
      this.fetchData()
    )
  }

  render() {
    return (
      this.state.isRefreshing
        ?
        <Loader />
        :
        <Container >
          <HeaderComponent
            profilePicture={this.props.profilePicture}
            navigation={this.props.navigation}
            backIcon={false}
            menuIcon={true}
            bodyText={'Home'}
            right={true}
            placeholder={'Search'}
            onChangeText={text => this.onChangeText(text)}
          />

          <ScrollView
            onScroll={({ nativeEvent }) => {
              if (this.isCloseToBottom(nativeEvent)) {
                this.renderFooter()
                // this.handleLoadMore()
              }
            }}
            scrollEventThrottle={400}
            // contentContainerStyle={{flex: 1}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={() => this.onRefresh()}
              />
            }>
            {this.props.userConnectedNetworksList &&
              <NetworkListComponent
                isDisableViewAll={false}
                {...this.props}
              />
            }
            {this.state.feedPostsList.length === this.props.feedPostsList.length &&
              <PostComponent
                postsList={this.props.feedPostsList}
                profilePicture={this.props.profilePicture}
                isDisplayNetworkName={true}
                {...this.props}
              />
            }
            {/* <View>
            <ViewAllComponent
              heading={Translate("home.jobsrecommendedforyou")}
              navigate={'Jobs'}
              buttonTitle={Translate("home.viewall")}
            />
            <JobsList
              jobsListJson={this.state.jobsList}
              onJobApply={this.onJobApply}
            />
          </View> */}
          </ScrollView>
          {this.state.loading && <ActivityIndicator
            size="large" color={Colors.themeBlue}
          />
          }
        </Container>

    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobsTitle: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '4%',
    paddingBottom: '1%',
    marginEnd: "3%", marginStart: "3%",
    borderColor: Colors.blue,
    borderBottomWidth: 0.5
  },
  recommendedText: {
    fontSize: Fonts.moderateScale(12),
  },
  buttonViewAll: {
    color: Colors.blue,
    fontSize: Fonts.moderateScale(11),
  },
});