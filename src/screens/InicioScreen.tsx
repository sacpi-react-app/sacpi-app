import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default class InicioScreen extends Component {
    // static navigationOptions = {
    //     title: 'Inicio',
    //     headerStyle: {
    //         backgroundColor: '#f4511e',
    //       },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       }
    //   };




    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between' }}>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});