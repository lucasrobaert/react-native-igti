import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const NewShowScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text>Tela new shows!</Text>
        </View>
    );
}

export default NewShowScreen;

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})