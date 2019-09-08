import React, { Component } from 'react'
import { Button, View, Text } from 'react-native';


export default class ParteDiarioScreen extends Component {
 
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Partes Diario</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
                <Button
                    title="Go to Add Product"
                    onPress={() => this.props.navigation.navigate('Create')}
                />
                <Button
                    title="Go to Edit Product"
                    onPress={() => this.props.navigation.navigate('Edit')}
                />
            </View>
        )
    }
}
