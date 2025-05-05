import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const MyButton = ({title, onPress, color}) => {
    return (
        <View style={styles.buttonWrapper}>
            <Button 
                onPress={onPress} 
                color={color} 
                title={title}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
        borderRadius: 0.4,
        justifyContent: 'center'
    },
    button: {
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'black',
    }
});

export { MyButton };