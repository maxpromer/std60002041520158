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
                    source={{ uri: this.props.img }}
                />
                <View style={{
                    marginLeft: 10
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{this.props.title}</Text>
                    <Text style={{ fontSize: 14 }}>{this.props.des}</Text>
                </View>
            </View>
        );
    }
}