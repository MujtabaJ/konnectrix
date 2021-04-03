import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import PostCardItem from './PostCardItem';

class PostCardList extends React.Component<any, any> {

    convertDateToLocale = (date) => {
        return new Date(date).toLocaleString();
    }

    render() {
        return (
            this.props.postsList.length > 0 &&
            <FlatList
                data={this.props.postsList}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                renderItem={({ item, index, separators }) => (
                    <PostCardItem
                        postData={item}
                        onPressCommentIcon={() => this.props.onPressCommentIcon(item, index)}
                        onPressLike={() => this.props.onPressLike(item, index)}
                        enableCommentIcon={true}
                        isDisplayNetworkName={this.props.isDisplayNetworkName}
                        isShowBottomBorder={this.props.isShowBottomBorder}
                        postIndex={index}
                        key={index}
                        showMediaModal={this.props.showMediaModal}
                    />
                )}
            />
        )
    }
}

export default PostCardList;