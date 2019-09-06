import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Props from '../types/Props'
import colors from "../config/colors";

export default class Button extends Component<Props>{
    render() {
        const { disabled, label, onPress } = this.props;
        // If the button is disabled we lower its opacity
        const containerStyle = [
            styles.container,
            disabled
                ? styles.containerDisabled
                : styles.containerEnabled
        ];

        return (
            <TouchableOpacity
                style={containerStyle}
                onPress={onPress}
                disabled={disabled}
            >
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.DODGER_BLUE,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    containerEnabled: {
        opacity: 1
    },
    containerDisabled: {
        opacity: 0.3
    },
    text: {
        color: colors.WHITE,
        textAlign: "center",
        height: 20
    }
});