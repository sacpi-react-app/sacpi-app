import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import Form from '../components/Form';
import { onSignOut } from '../navigation/auth';
import { ScrollView } from 'react-native-gesture-handler';

export default class InicioScreen extends Component<{}>  {
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
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                    <Text> hoLA MUNDO</Text>
                    <Button
                        title="Logout"                       
                        onPress={() => onSignOut().then(t => { console.log("salida") })} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});