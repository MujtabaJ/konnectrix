import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import { Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index';
import EducationCardForAccordion from '../EducationCardForAccordion';

interface IProps {
    navigation?: any;
    educationList?: any,
    isExpanded: boolean
}

interface IState {
    isLoading: boolean
    expanded: boolean
}

class EducationAccordion extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: false,
            expanded: props.isExpanded,
        };
    }
    render() {
        return (
            <View style={{ marginTop: Metrics.HEIGHT * 0.03 }}>
                <TouchableOpacity style={styles.row} onPress={() => this.setState({ expanded: !this.state.expanded })}>
                    <Text style={styles.title}>EDUCATION</Text>
                    <Icon style={styles.icon} type='FontAwesome' name={this.state.expanded ? 'chevron-up' : 'chevron-down'} />
                </TouchableOpacity>
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                        <FlatList
                            data={this.props.educationList}
                            keyExtractor={(item, index) => {
                                return index.toString();
                            }}
                            renderItem={({ item, index }) => (
                                <EducationCardForAccordion
                                    key={index}
                                    item={item}
                                    onPressEdit={() => this.props.navigation.navigate("AddEducation", { selectedItemIndex: index })}
                                />
                            )}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate("AddEducation")}>
                                <Text style={styles.addButtonText}>Add Education</Text>
                                <Icon style={styles.plusIcon} type='FontAwesome' name={'plus-circle'} />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}

export default EducationAccordion;

const styles = StyleSheet.create({
    title: {
        fontSize: Fonts.moderateScale(14),
        color: Colors.themeBlue,
        marginLeft: Metrics.WIDTH * 0.05,
    },
    icon: {
        fontSize: Fonts.moderateScale(14),
        marginRight: Metrics.WIDTH * 0.05,
        color: Colors.themeBlue
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Metrics.HEIGHT * 0.075,
        marginLeft: Metrics.WIDTH * 0.05,
        marginRight: Metrics.WIDTH * 0.05,
        alignItems: 'center',
        backgroundColor: Colors.oceanBlue,
    },
    child: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Metrics.HEIGHT * 0.02,
        marginBottom: Metrics.HEIGHT * 0.01,
        height: Metrics.HEIGHT * 0.05,
        width: Metrics.WIDTH * 0.9,
        borderRadius: Fonts.moderateScale(4),
        borderColor: Colors.blue,
        borderWidth: Fonts.moderateScale(2),
    },
    addButtonText: {
        color: Colors.blue,
        fontSize: Fonts.moderateScale(12),
        textAlign: 'center',
        marginLeft: Metrics.WIDTH * 0.05
    },
    plusIcon: {
        fontSize: Fonts.moderateScale(22),
        color: Colors.blue,
        textAlign: 'center',
        marginRight: Metrics.WIDTH * 0.05
    },
});