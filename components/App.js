import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Card from './Card';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header name="หน้าแรก" />
                <View style={{ marginTop: 20 }}>
                    <Card />
                </View>
            </View>
        );
    }
}
                