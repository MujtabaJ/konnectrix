import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { Metrics, Colors } from '../../Theme';

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255, 1)"
          source={require("./loader_6.json")}
          animationStyle={styles.lottie}
          speed={3}
          fontSize={Metrics.largeFont}
          //text={"PROCESSING....."}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: Metrics.WIDTH * 0.2,
    height: Metrics.HEIGHT * 0.2,
  }
});