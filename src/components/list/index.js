import React, {useState, useEffect, useContext} from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {useShows} from '../../hooks/useShows'
import { AppContext } from "../../context/AppContext";

import {RootSafeAreaView, Container, Card, Title, Photo, Info, Meta, MetaText} from './styles';


const ShowList = () => {
    const {shows} = useShows();
    const {dispatch} = useContext(AppContext);


    return(
        <>
        <RootSafeAreaView>
            <Container>
                <FlatList
                    data={shows.sort((show1,show2)=>(""+show1.name).localeCompare(show2.name))}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>
                        <TouchableOpacity
                        onPress={()=>dispatch({type:"setItemSelected",payload:item.id})}
                        >
                            <Card>
                                <Photo 
                                    resizeMode={"contain"}
                                    source={item.backdrop_path?{uri:`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}:null}/>
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Meta>
                                        <MetaText>Idioma Original:</MetaText>
                                        <MetaText>{item.original_language}</MetaText>
                                    </Meta>
                                    <Meta>
                                        <MetaText>Nome Original: </MetaText>
                                        <MetaText>{item.original_name}</MetaText>
                                    </Meta>
                                    <Meta>
                                        <MetaText>Popularidade: </MetaText>
                                        <MetaText>{item.popularity}</MetaText>
                                    </Meta>
                                </Info>
                                
                            </Card>
                            
                        </TouchableOpacity>}
                    />
            </Container>
        </RootSafeAreaView>
        </>
    )
}

export default ShowList;