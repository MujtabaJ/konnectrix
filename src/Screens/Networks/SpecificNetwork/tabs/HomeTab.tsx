import React from "react";
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';
import ViewMoreText from 'react-native-view-more-text';
import PostComponent from '@Components/PostComponent';
import { mapDispatchToProps, mapStateToProps } from "../../../../Redux/Dispatchers/index";
import { connect } from 'react-redux';

interface IProps {
}

interface IState {
}

class HomeTab extends React.Component<any, any> {
    renderViewMore = () => {
        return (
            <Text onPress={() => this.props.setIndex(1)} style={{ ...styles.blueText }}>see more</Text>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.aboutContainer}>
                    <View style={styles.aboutDescriptionContainer}>
                        <Text style={styles.aboutText}>About</Text>
                        <ViewMoreText numberOfLines={3} renderViewMore={this.renderViewMore}>
                            <Text style={styles.aboutDescriptionText}>
                                {this.props.getNetworkDetails.about}
                            </Text>
                        </ViewMoreText>
                    </View>
                    <View style={styles.contactContainer}>
                        <View style={styles.websiteContainer}>
                            <Text style={styles.blackText}>Website</Text>
                            <Text style={{ ...styles.blueText }}> {this.props.getNetworkDetails.website}</Text>
                        </View>
                        <View style={styles.phoneNumberContainer}>
                            <Text style={styles.blackText}>Phone</Text>
                            <Text style={{ ...styles.blueText }}>{this.props.getNetworkDetails.phone}</Text>
                        </View>
                    </View>
                    <View style={styles.seeAllDetailsContainer}>
                        <Text style={{ ...styles.seeAllDetailsText }} onPress={() => this.props.setIndex(1)}>See all details</Text>
                    </View>
                </View> */}
                <View style={styles.postContainer}>
                    <PostComponent
                        postsList={this.props.networkPostsList}
                        isLoading={this.props.isLoading}
                        {...this.props}
                    />
                </View>
            </View>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    aboutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: Colors.grey,
        borderTopWidth: Fonts.moderateScale(12),
        borderBottomColor: Colors.grey,
        borderBottomWidth: Fonts.moderateScale(12),
    },
    postContainer:{
        borderTopColor: Colors.grey,
        borderTopWidth: Fonts.moderateScale(12),
    },
    aboutDescriptionContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05
    },
    contactContainer: {
        marginVertical: Metrics.HEIGHT * 0.03,
        borderWidth: Fonts.moderateScale(1),
        borderColor: Colors.grey,
        width: Metrics.WIDTH * 0.95,
        justifyContent: 'center',
    },
    websiteContainer: {
        marginVertical: Metrics.HEIGHT * 0.02,
        marginHorizontal: Metrics.WIDTH * 0.03,
    },
    phoneNumberContainer: {
        marginHorizontal: Metrics.WIDTH * 0.03,
        marginBottom: Metrics.HEIGHT * 0.02
    },
    seeAllDetailsContainer: {
        borderTopColor: Colors.black,
        borderTopWidth: Fonts.moderateScale(2),
        borderBottomColor: Colors.black,
        borderBottomWidth: Fonts.moderateScale(1),
        width: Metrics.WIDTH,
        alignItems: 'center'
    },
    aboutText: {
        fontSize: Fonts.moderateScale(14),
        color: Colors.black,
        fontWeight: 'bold',
        marginTop: Metrics.HEIGHT * 0.015,
        marginBottom: Metrics.HEIGHT * 0.005,
        textAlign: 'center'
    },
    aboutDescriptionText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.darkGrey,
        marginBottom: Metrics.HEIGHT * 0.005
    },
    blackText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black
    },
    blueText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue
    },
    seeAllDetailsText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue,
        marginVertical: Metrics.HEIGHT * 0.02,
    }
})