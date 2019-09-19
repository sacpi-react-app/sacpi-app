import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './Style';
import imageLogo from "../assets/images/avatar.png";
export default class Avatar extends Component {
    render() {
        return (
            <View style={styles.avatarView}>
                <Image source={imageLogo} style={styles.avatar} />
            </View>
        );
    }
}
