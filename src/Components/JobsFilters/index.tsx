import { Badge, Body, Button, Card, CardItem, Icon, Input, Left, Right, Text, Thumbnail, View } from 'native-base';
import React from 'react';
import { Colors } from '../../Theme';

import { Translate } from '../../i18n/localization';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';


const JobsFilters = (props) => {

    return (
        <View style={styles.filtercontainer}>
            <ScrollView
                horizontal
            >
                <Button transparent>
                    <Icon  name="filter" />
                </Button>
                <Button primary><Text> Primary </Text></Button>
                <Button success><Text> Success </Text></Button>
                <Button info><Text> Info </Text></Button>
                <Button warning><Text> Warning </Text></Button>
                <Button danger><Text> Danger </Text></Button>
                <Button dark><Text> Dark </Text></Button>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    filtercontainer: { flexDirection: 'row', padding: 10 },
});

export default JobsFilters;