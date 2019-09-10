import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const SacpiInputText = props => {
    return (
        <View style={style.container}>
            <TextInput
                underlineColorAndroid="transparent"
                placeholder={props.placeholder}
                placeholderTextColor="gray"
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                returnKeyType={props.returnKeyType}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
                style={props.style}
                blurOnSubmit={false}
                value={props.value}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginLeft: 3,
        marginRight: 3,
        marginTop: 2,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 5        
    }
});

export default SacpiInputText
