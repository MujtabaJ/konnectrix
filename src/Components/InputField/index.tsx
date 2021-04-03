import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from "../../Theme/index";
import { Icon } from "native-base";
import { IInputFieldProps } from "../../Types/Components";

const InputField = (props: IInputFieldProps) => {

  // Secure Entry State is managed here for password fields only
  const [secureEntry, setSecureEntry] = useState<boolean | undefined>(false)

  useEffect(() => {
    setSecureEntry(props.secureTextEntry)
  }, [])

  return (
    <View style={{ ...styles.input, ...props.containerStyle }}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.inputPlaceholderColor || Colors.inputPlaceholderColor}
        onChangeText={(text: string) => props.onChangeText(text)}
        value={props.value}
        onFocus={props.onFocus}
        keyboardType={props.keyboardType}
        style={styles.inputTextArea}
        secureTextEntry={secureEntry}
        maxLength={props.maxLength}
        {...props.numberOfLines}
      />
      {
        props.showRightIcon &&
        <TouchableOpacity style={styles.eyeContainer} onPress={() => { setSecureEntry(prevState => !prevState) }} >
          <Icon type="FontAwesome" name={secureEntry ? "eye" : "eye-slash"} style={styles.eye} />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: Metrics.inputHeight,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Metrics.HEIGHT * 0.01,
  },
  inputTextArea: {
    flex: 7,
    fontSize: Fonts.moderateScale(15),
    marginBottom: -Metrics.HEIGHT * 0.015,
    marginTop: -Metrics.HEIGHT * 0.015,
    // marginLeft: Metrics.WIDTH * 0.015
  },
  eyeContainer: {
    flex: 1,
    justifyContent: "center",
  },
  eye: {
    color: Colors.passwordEye,
    fontSize: Fonts.moderateScale(25),
  }
})

export default InputField;
