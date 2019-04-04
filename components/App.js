import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
// import Card from './Card';
import Login from './Login';
import {createStackNavigator, createAppContainer} from 'react-navigation';


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
/*
export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            next: false
        }
    }

    render() {
        return (
            <View>
                <Header name="Login" />
                this.state.next ? 
                    <Login it_state={this.state} />
                : <Login it_state={this.state} />
            </View>
        );
    }
}*/

const MainNavigator = createStackNavigator({
    Home: {
        screen: Login
    }
});
  
  const App = createAppContainer(MainNavigator);
  
  export default App;
                