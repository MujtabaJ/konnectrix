import React from 'react';
import { TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import { Title, Header, Right, Left, Body, Icon } from 'native-base';
import styles from './styles';
import { Colors } from '../../Theme/index';

interface IProps {
    closeIcon?: boolean,
    backIcon?: boolean,
    bodyText?: string,
    rightText?: string,
    isRightTextDisabled?: boolean
    rightLoader?: boolean,
    navigation?: any
    rightOnPress?: () => void
    isModal?: boolean
    closeModal?: () => void
}

const ModalHeader = (props: IProps) => {
    return (
        <React.Fragment>
            <Header style={styles.headerStyle}>
                <StatusBar backgroundColor='white' barStyle='dark-content' />
                {(props.closeIcon || props.backIcon) &&
                    <TouchableOpacity onPress={() =>  props.isModal ? props.closeModal() : props.navigation.goBack()} style={styles.left}>
                        <Left>
                            <Icon name={props.closeIcon ? 'times' : 'chevron-left'} type='FontAwesome' style={styles.iconStyle} />
                        </Left>
                    </TouchableOpacity>
                }
                <Body style={styles.body}>
                    {props.bodyText !== undefined &&
                        <Title style={styles.titleHeader}>{props.bodyText}</Title>
                    }
                </Body>
                <Right style={styles.right}>
                    {props.rightText !== undefined && props.rightLoader !== true &&
                        <TouchableOpacity onPress={props.rightOnPress} disabled={props.isRightTextDisabled}>
                            <Title style={props.isRightTextDisabled ? styles.rightTextDisabled : styles.rightText}>{props.rightText}</Title>
                        </TouchableOpacity>
                    }
                    {props.rightLoader &&
                        <ActivityIndicator size="large" color={Colors.blue} />
                    }
                </Right>
            </Header>
        </React.Fragment>
    );
}

export default ModalHeader;
