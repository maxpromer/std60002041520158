import React from 'react';
import { View, Text, Image } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={{ 
                backgroundColor: "#FF0000", 
                padding: 16, 
                elevation: 5,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center"
            }}>
                <Text style={{ 
                    textAlign: "left", 
                    fontSize: 32, 
                    color: "#FFF" 
                }}>{this.props.name}</Text>
                <Image
                    style={{
                        width: 32, 
                        height: 32
                    }}
                    source={require('../img/info.png')}
                />
            </View>
        )
    }
}
