import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/Cart/Cart';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>    
        <Stack.Navigator>
            <Stack.Screen name="Home" component={CartScreen} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}

export default MyStack;