import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";

class Header extends Component {
    
    render() {
        const { header, headerText } = styles;
        return (
            <View style={header}>
                <Text style={headerText}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#161617',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#ffffff',
        shadowOpacity: 1,
        elevation: 2,
        position: 'relative'
    },
    headerText: {
        fontSize: 20,
        color: 'white'
    }
});

export {Header};