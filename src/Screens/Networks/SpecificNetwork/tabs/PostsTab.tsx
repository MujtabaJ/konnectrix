import React, { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';
// import PostViewComponent from '@Components/PostViewComponent';
import { getNetworkPostsController } from '../../../../Network/Controllers/postController';
import PostComponent from '@Components/PostComponent';

class PostsTab extends React.Component<any, any> {

    //const [getNetworkPosts, setNetworkPosts] = useState<any>({});
    // useEffect(() => {
    //     const pageNo = 0;
    //     const pageSize = 0;
    //     async function fetchData() {
    //         if (props.networkID !== undefined) {
    //             const response = await getNetworkPostsController(props.networkID, pageNo, pageSize)
    //             setNetworkPosts(response);
    //         }
    //     }
    //     fetchData();
    // }, [])

    constructor(props) {
        super(props)

        this.state = {
            networkPostsList: []
        }
    }
    async componentDidMount() {
        // const pageNo = 0;
        // const pageSize = 0;
        // const response =await getNetworkPostsController(this.props.networkID, pageNo, pageSize)
        // this.setState({ networkPostsList: response});
    }
    render() {
        return (
            <View style={styles.container}>
                <PostComponent
                    postsList={this.props.reduxProps.Posts.networkPostsList}
                    isLoading={this.props.isLoading}
                    {...this.props}
                />
            </View>
        )
    }
}

export default PostsTab;

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        borderTopColor: Colors.grey,
        borderTopWidth: Fonts.moderateScale(12),
        borderBottomColor: Colors.grey,
        borderBottomWidth: Fonts.moderateScale(4),
    },
})