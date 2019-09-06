import React, { Component } from 'react'
import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    View,
    StatusBar
} from 'react-native'


//components
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
//configs
import imageLogo from "../assets/images/logo.png";
import colors from "../config/colors";
import strings from "../config/strings";
import constants from "../config/constants";
//Types
import User from '../types/User';
import { onSignIn } from '../navigation/auth';

export default class LoginScreen extends Component<{}, User>{
    passwordInputRef = React.createRef<FormTextInput>();

    readonly state: User = {
        email: "",
        password: "",
        emailTouched: false,
        passwordTouched: false
    };
    handleEmailChange = (email: string) => {
        this.setState({ email: email });
    };

    handlePasswordChange = (password: string) => {
        this.setState({ password: password });
    };

    handleEmailSubmitPress = () => {
        if (this.passwordInputRef.current) {
            this.passwordInputRef.current.focus();
        }
    };

    handleEmailBlur = () => {
        this.setState({ emailTouched: true });
    };

    handlePasswordBlur = () => {
        this.setState({ passwordTouched: true });
    };

    handleLoginPress = () => {
                
        onSignIn().then(() => this.props.navigation.navigate('App'));
    };

    render() {
        const {
            email,
            password,
            emailTouched,
            passwordTouched
        } = this.state;
        const emailError =
            !email && emailTouched
                ? strings.EMAIL_REQUIRED
                : undefined;
        const passwordError =
            !password && passwordTouched
                ? strings.PASSWORD_REQUIRED
                : undefined;
        return (
            <KeyboardAvoidingView
                style={styles.container}
                // On Android the keyboard behavior is handled
                // by Android itself, so we should disable it
                // by passing `undefined`.
                behavior={constants.IS_IOS ? "padding" : undefined}
            >
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <Image source={imageLogo} style={styles.logo} />
                <View style={styles.form}>
                    <FormTextInput
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                        onSubmitEditing={this.handleEmailSubmitPress}
                        placeholder={strings.EMAIL_PLACEHOLDER}
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onBlur={this.handleEmailBlur}
                        error={emailError}
                        // `blurOnSubmit` causes a keyboard glitch on
                        // Android when we want to manually focus the
                        // next input.
                        blurOnSubmit={constants.IS_IOS}
                    />
                    <FormTextInput
                        ref={this.passwordInputRef}
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        placeholder={strings.PASSWORD_PLACEHOLDER}
                        secureTextEntry={true}
                        returnKeyType="done"
                        onBlur={this.handlePasswordBlur}
                        error={passwordError}
                    />
                    <Button
                        label={strings.LOGIN}
                        onPress={this.handleLoginPress}
                        disabled={!email || !password}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    }
})
