import React from "react";
import { FlatList, StyleSheet } from 'react-native';
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';

interface IProps {
    notificationsList: any
}

const NotificationsList = (props: IProps) => {
    return (
        <FlatList
            data={props.notificationsList}
            keyExtractor={(item, index) => {
                return index.toString();
            }}
            renderItem={({ item, index, separators }) => (
                <ListItem avatar style={styles.itemStyle} key={index}>
                    <Left>
                        <Thumbnail source={{ uri: item.imageUrl }} style={styles.avatarStyle} />
                    </Left>
                    <Body style={styles.bodyStyle}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text note style={styles.descriptionText}>{item.description}</Text>
                    </Body>
                    <Right>
                        <Text note style={styles.timeText}>{item.time}</Text>
                    </Right>
                </ListItem>
            )}
        />


    );
}

export default NotificationsList;

const styles = StyleSheet.create({
    itemStyle: {
        marginVertical: Metrics.HEIGHT * 0.01,
        marginLeft: Metrics.WIDTH * 0.04,
        marginRight: Metrics.WIDTH * 0.04
    },
    bodyStyle: {
        marginLeft: Metrics.WIDTH * 0.04,
    },
    avatarStyle: {
        width: Metrics.HEIGHT * 0.075, height: Metrics.HEIGHT * 0.075
    },
    nameText: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: Fonts.moderateScale(12)
    },
    timeText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.silver
    }
})