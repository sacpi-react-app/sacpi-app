import React, { Component } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import styles from './ParteDiarioStyle';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default class ParteDiarioList extends Component {
    onPress = () => {
        alert('Pressed');
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    contentContainerStyle={styles.list}
                    renderItem={({ item, index }) => (
                        <Card style={styles.card}>
                            <View style={styles.cardView}>
                                <View style={styles.nameView}>
                                    {/* <Avatar large isGroup /> */}
                                    <Text style={styles.nameText}>{item.name}</Text>
                                    <Text style={styles.last}>
                                        Active {item.last_active}
                                    </Text>
                                </View>
                                <View style={styles.footer}>
                                    <Text numberOflines={2} style={styles.members}>
                                        {item.members}
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                />
            </SafeAreaView>
        );
    }
}

const data = [
    {
        name: 'React Native Community',
        last_active: '15 days ago',
        members: 'Vicky, Alex Jacob, Bob, William + 320'
    },
    {
        name: 'Android Developers Forum',
        last_active: '30 days ago',
        members: 'Vicky, Alex, Bob, William + 256'
    },
    {
        name: 'iOs Developers',
        last_active: '30 days ago',
        members: 'Tom Jacob, Alex Jacob,Thomas Paul + 400'
    },
    {
        name: 'Buddies',
        last_active: '10 days ago',
        members: 'Vicky, Alex, Bob, William + 356'
    },
    {
        name: 'Birthday Celebration',
        last_active: '5 days ago',
        members: 'Tom Alex, Jacob Samuel, Sam, +12'
    },
    {
        name: 'College Buddies',
        last_active: '24 days ago',
        members: 'Vicky, Alex, Bob, William + 10'
    },
    {
        name: 'Memories',
        last_active: '1 day ago',
        members: 'Tom Manuel, Jacob Augustin,Sam TOny +2'
    },
    {
        name: 'Secret Group',
        last_active: '28 days ago',
        members: 'Tom Alex,Jacob Mathews,Sam Tony'
    }
];
