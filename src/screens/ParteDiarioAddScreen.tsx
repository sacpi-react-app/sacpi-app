import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SacpiInputText from '../components/SacpiInputText';
import SacpiButton from '../components/SacpiButton';

export default class ParteDiarioAddScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_contact: '',
            user_address: '',
        };
    }

    register_user = () => {
        Alert.alert(
            'Success',
            'You are Registered Successfully',
            [
                {
                    text: 'Ok',
                    onPress: () =>

                        console.log("hola mundo")
                    // that.props.navigation.navigate('HomeScreen'),
                },
            ],
            { cancelable: false }
        );

    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView
                        behavior="padding"
                        style={{ flex: 1, justifyContent: 'space-between' }}>
                        <SacpiInputText
                            placeholder="Enter Name"
                            onChangeText={user_name => this.setState({ user_name })}
                            style={{ padding: 10 }}
                        />
                        <SacpiInputText
                            placeholder="Enter Contact No"
                            onChangeText={user_contact => this.setState({ user_contact })}
                            maxLength={10}
                            keyboardType="numeric"
                            style={{ padding: 10 }}
                        />
                        <SacpiInputText
                            placeholder="Enter Address"
                            onChangeText={user_address => this.setState({ user_address })}
                            maxLength={225}
                            numberOfLines={5}
                            multiline={true}
                            style={{ textAlignVertical: 'top', padding: 10 }}
                        />
                        <SacpiButton
                            title="Submit"
                            customClick={this.register_user.bind(this)}
                        />
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});