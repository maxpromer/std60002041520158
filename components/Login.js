import React from 'react';
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native';
import axios from 'axios';

let style = {
    input: {
        fontSize: 18, 
        borderBottomColor: "#CCC", 
        borderBottomWidth: 2,
        marginBottom: 20
    }
}

export default class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "" 
        };

        this.goLogin = function() {
            axios.post("http://128.199.240.120:9999/api/auth/login", {
                email: this.state.email,
                password: this.state.password
            }).then(async function (response) {
                alert("Logined !");

                console.log(response.data.data.token);
                try {
                    await AsyncStorage.setItem("login_token", response.data.data.token);
                } catch (error) {
                    alert("Save token error !");
                }
            })
            .catch(function (error) {
                alert("Login fail !")
            });
        }.bind(this);
    }

    render() {
        const {navigate} = this.props.navigation;
        
        return (
            <View style={{ paddingTop: 20 }}>
                <Text style={{ textAlign: "center", fontSize: 28, color: "#F39C12" }}>Login Form</Text>
                <View style={{ padding: 20 }}>
                    <TextInput
                        placeholder="Email"
                        autoComplete="email"
                        autoFocus
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        style={style.input}
                    />

                    <TextInput
                        placeholder="Password"
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        style={style.input}
                        secureTextEntry
                    />

                    <Button title="Login" onPress={this.goLogin} />
                </View>
            </View>
        );
    }
}
