import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

export default class ParteDiarioAddScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text> Add New PD</Text>
                <TextInput />
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