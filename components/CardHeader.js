import React from 'react';
import { View, Text, Image } from 'react-native';

export default class Card extends React.Component {
    render() {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
            }}>
                <Image
                    style={{
                        width: 50, 
                        height: 50,
                        borderRadius: 50
                    }}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <View style={{
                    marginLeft: 10
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>สนธยา นงนุช</Text>
                    <Text style={{ fontSize: 14 }}>เมื่อ 10 นาที ที่แล้ว</Text>
                </View>
            </View>
        );
    }
}