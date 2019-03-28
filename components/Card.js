import React from 'react';
import { View, Button } from 'react-native';
import CardHeader from './CardHeader';
import FitImage from 'react-native-fit-image';

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
                <CardHeader 
                    img={"https://pbs.twimg.com/media/C-roeGjU0AA2f90.jpg"} 
                    title="เต & นิว" 
                    des="#เตนิว #โพก้า #ชาวบ้าน" />
                
                {/* Image */}
                <FitImage
                    resizeMode="contain"
                    source={{ uri: "https://pbs.twimg.com/media/DyJ6EDFU8AIwfQK.jpg:large" }} />
                
                <View style={{
                    alignItems: "center",
                    padding: 20,
                }}>
                    <View style={{ width: 100 }}>
                        <Button
                            title="Buy now" />
                    </View>
                </View>
            </View>
        );
    }
}