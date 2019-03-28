import React from 'react';
import { View, Text, Image } from 'react-native';
import CardHeader from './CardHeader';

export default class Card extends React.Component {
    render() {
        return (
            <View style={{
                backgroundColor: "#FFF",
                marginLeft: 14,
                marginRight: 14,
                marginBottom: 30,
                elevation: 4
            }}>
                <CardHeader />
            </View>
        );
    }
}