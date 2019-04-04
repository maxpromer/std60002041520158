import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
// import Card from './Card';
import Login from './Login';

/*
export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header name="อัลบั้ม" />
                <View style={{ marginTop: 20 }}>
                    <Card />
                </View>
            </View>
        );
    }
}
*/

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header name="Login" />

                <Login />
            </View>
        );
    }
}
                