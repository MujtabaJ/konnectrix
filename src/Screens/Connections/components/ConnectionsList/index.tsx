import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';
import ConnectionInformation from '../ConnectionInformation';
import ButtonRow from '../ButtonRow';

interface IProps {
    connectionsList: any
    onPressButton: (val) => void
}

const ConnectionsList = (props: IProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.connectionsList}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                renderItem={({ item, index, separators }) => (
                    <View key={index}>
                        <ConnectionInformation
                            imageUrl={item.imageUrl}
                            name={item.name}
                            title={item.title}
                            description={item.description}
                        />
                        <ButtonRow
                            leftButtonTitle={'Connected'}
                            rightButtonTitle={'Remove'}
                            onPressButton={(val) => props.onPressButton(val)}
                        />
                    </View>
                )}
            />

        </View>
    );
}

export default ConnectionsList;

const styles = StyleSheet.create({
    container: {
        paddingVertical: Metrics.WIDTH * 0.03,
        borderBottomWidth: Metrics.HEIGHT * 0.001,
        borderBottomColor: Colors.blue
    },
    topContainer: {
        flexDirection: 'row',
        marginBottom: Metrics.HEIGHT * 0.02
    },
    ignoreButton: {
        borderColor: Colors.black,
        color: Colors.black
    },
    avatarStyle: {
        width: Metrics.HEIGHT * 0.075, height: Metrics.HEIGHT * 0.075
    },
    nameText: {
        fontSize: Fonts.moderateScale(12),
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: Fonts.moderateScale(12),
    },
    descriptionText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue
    },
    buttonsRow: {
        flexDirection: 'row',
        flex: 0.6,
        justifyContent: 'space-evenly'
    }
})