import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { isSignedIn } from '../navigation/auth';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false
        };
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            isSignedIn()
                .then(res => {
                    this.setState({ signedIn: res, checkedSignIn: true })
                    if (res) {
                        this.props.navigation.navigate('App');
                    } else {
                        this.props.navigation.navigate('Auth');
                    }
                }).catch(err => alert("An error occurred"));
        }
    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <Text style={styles.textStyles}>Splash</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
});

