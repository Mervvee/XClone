import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return(
        <View style = {styles.cardWrapper}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper:{
        flex:1,
        height:100,
        margin:20,
        padding:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#aaa',
        justifyContent:'center',
        alignItems:'center',
    }
 });

export {Card}