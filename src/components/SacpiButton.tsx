import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const SacpiButton = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.customClick}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#633689',
        color: '#ffffff',
        padding: 10,
        marginTop: 16,
        marginLeft: 3,
        marginRight: 3,
    },
    text: {
        color: '#ffffff',
    }
});
export default SacpiButton;
