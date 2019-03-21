import React from 'react';
import { View, Text } from 'react-native';

export default class Menu extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: "#FF0000", padding: 10, elevation: 5 }}>
                <Text style={{ textAlign: "center", fontSize: 38, color: "#FFF" }}>{this.props.name}</Text>
            </View>
        )
    }
}