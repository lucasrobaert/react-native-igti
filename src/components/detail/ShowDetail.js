import React,{useContext} from "react";
import {Text,View,StyleSheet,Image} from "react-native";
import {AppContext} from "../../context/AppContext"

const ShowDetail = ()=>{
    const {state} = useContext(AppContext);
    console.log(state.showList.find(item=>item.id===state.itemSelected))
    const {name, origin_country, overview,poster_path} = 
                            state.itemSelected?
                            state.showList.find(item=>item.id===state.itemSelected)
                                          :
                            {name:"",origin_country:"",overview:"",
                            poster_path:""};
    return (
        <>
        <View style={styles.parentStyle}>
            <View style={styles.viewStyle}>
            <Text>Nome:{name}</Text>
            <Text>Country:{origin_country}</Text>
            <Text>Network:{overview}</Text>
            <Image
            style={styles.pictureStyle}
            resizeMode={"contain"}
            source={poster_path?{uri:`https://image.tmdb.org/t/p/w500${poster_path}`}:null}
            />
            </View>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
  parentStyle:{
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center",
  },
  viewStyle:{
      alignSelf:"center",
      alignItems:"center",
  },
  pictureStyle:{
      height:200,
      width:300
  }
})
export default ShowDetail;