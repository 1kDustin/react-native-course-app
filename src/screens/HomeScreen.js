import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => { //we are pulling only the navigation property from props on line 10 and 14
  return (
  <View>
    <Text style={styles.text}>My First ReactNative App!</Text>
    <Button 
      title="Go to Components Demo"
      onPress={() => navigation.navigate('Components')}
    />
    
    <Button 
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
    />

    <Button
    title="Go to Image Screen"
    onPress={() => navigation.navigate('ImageScreen')}
    />

<Button
    title="Go to Counter Demo"
    onPress={() => navigation.navigate('Counter')}
    />

<Button
    title="Go to Color Screen"
    onPress={() => navigation.navigate('Color')}
    />

<Button
    title="Go to Square Screen"
    onPress={() => navigation.navigate('Square')}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;