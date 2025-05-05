import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Input, MyButton } from './common';
import { auth } from "../firebaseConfig"; // auth nesnesini içe aktar
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        bgColor: 'black',
        color: 'white',
        error: '',
        loading: false
    };


    onButtonClicked = () => {
        const { email, password } = this.state;
        this.setState({
            error: '',
            loading: true
        });
    
        signInWithEmailAndPassword(auth, email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this));
            });
    };

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFailed() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
    }

    render() {
        const { error } = this.state;
        const errMsg = error ? (
            <Text style={styles.errorStyle}>
                {error}
            </Text>
        ) : null;

        return (
            <View>
                <View>
                    <Input text='E-mail' inputPlaceHolder='Enter Email'
                        onChangeText={(text) => {
                            this.setState({ email: text });
                        }}
                        value={this.state.email} />
                </View>
                <View>
                    <Input text='Password' inputPlaceHolder='Enter Password'
                        onChangeText={(text) => {
                            this.setState({ password: text });
                        }}
                        secureTextEntry
                        value={this.state.password} />
                </View>
                {errMsg}
                <MyButton
                    title='Login'
                    onPress={this.onButtonClicked.bind(this)}
                    color='black'
                />
            </View>
        );
    }
}

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
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    errorStyle: {
        alignSelf: 'center',
        color: 'red',
        paddingTop: 5
    }
});

export default LoginForm;