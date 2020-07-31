import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import ShowDetails from '../components/detail/ShowDetail';
import ShowList from '../components/list/ShowList';

const Shows = () => {
    return(
        <View style={styles.parentStyle}>
            <View style={styles.listStyle}>
                <ShowList/>
            </View>
            <View style={styles.detailsStyle}>
                <ShowDetails/>
            </View>
        </View>
    );
}

export default Shows;

const styles = StyleSheet.create({
    parentStyle:{
        flex:1,
    },
    listStyle:{
        flex:2,
        marginTop: 40
    },
    detailsStyle:{
        flex:1
    }
})