import React, {useState, useEffect, useContext} from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {useShows} from '../../hooks/useShows'
import { AppContext } from "../../context/AppContext";


const ShowList = () => {
    const {shows} = useShows();
    const {dispatch} = useContext(AppContext);


    return(
        <>
            <View style={styles.listStyle}>
                <FlatList
                    data={shows.sort((show1,show2)=>(""+show1.name).localeCompare(show2.name))}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>
                        <TouchableOpacity
                        onPress={()=>dispatch({type:"setItemSelected",payload:item.id})}
                        >
                            <View style={styles.buttonStyle}>
                                <Text>{item.name}</Text>
                            </View>
                            
                        </TouchableOpacity>}
                    />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'gray',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "#dcdcdc"
    },
    listStyle:{
        marginTop: 50,

    }
})

export default ShowList;