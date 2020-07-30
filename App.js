import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from './src/screens/Home';

function App(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Séries inc." component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;