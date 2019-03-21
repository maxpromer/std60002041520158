import React from 'react';
import { View, Text } from 'react-native';
import Menu from './Menu';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Menu name="หน้าแรก" />
                <View style={{ marginTop: 10 }}>
                    <Text style={{ 
                        fontSize: 24, 
                        color: "#0000FF",
                        textAlign: "center"
                    }}>Sonthaya Nongnuch</Text>
                </View>
            </View>
        );
    }
}
                