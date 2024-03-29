import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <ColorCounter 
                onIncrease={() => setRed(red + COLOR_INCREMENT)} 
                onDecrease={() => setRed(red - COLOR_INCREMENT)} 
                color="Red" 
            />
            <ColorCounter
                onIncrease={() => setGreen(green + COLOR_INCREMENT)} 
                onDecrease={() => setGreen(green - COLOR_INCREMENT)} 
                color="Green" 
            />
            <ColorCounter
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)} 
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)} 
                color="Blue" 
            />
            <View style={{ 
                margin: 25,
                height: 250, 
                width: 310, 
                backgroundColor: `rgb(${red}, ${green}, ${blue})` }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;