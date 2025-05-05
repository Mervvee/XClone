import React from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

const Input = ({text , inputPlaceHolder, onChangeText, value, secureTextEntry}) => {
    const{inputWrapper, textStyle , inputStyle} = styles;
    return(
        <View style={inputWrapper}>
            <Text style={textStyle}>{text}</Text>
            <TextInput style={inputStyle}
                        secureTextEntry ={secureTextEntry}
                        placeholder={inputPlaceHolder}
                        onChangeText={onChangeText}
                        value={value}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        borderColor: '#bfb6b6',
        borderBottomWidth: 1,
        alignItems: 'center',
        margin: 10,
    },
    textStyle: {
        paddingLeft: 20,
        margin: 10,
        fontSize: 18,
        flexGrow: 1
    },
    inputStyle: {
        fontSize: 18,
        flexGrow: 2,
    },
});

export default Input;