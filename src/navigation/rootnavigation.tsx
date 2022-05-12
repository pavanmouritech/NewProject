import React from "react";
import{NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Favorite from "../screens/Favorite/Favorite";
import Movies from "../screens/Movies/Movies";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

export default function RootNavigation () {
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="Favorite"
            activeColor="#80ffff"
            inactiveColor="#ff3333"
            barStyle={{ backgroundColor: '#ffff99' }}
            >
            <Tab.Screen name="Movies" component={Movies}
            options={{
                tabBarLabel : 'Movies',
                tabBarIcon : ({ color }) =>(
                    <MaterialIcons name="movie-filter" color={color} size={26}/>
                ),
            }}
            />
            <Tab.Screen name="Favorite" component={Favorite} 
             options={{
                tabBarLabel: 'Favorite',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="favorite" color={color} size={26} />
                ),
              }}
            />
            </Tab.Navigator>
        </NavigationContainer>
    );
} 