import React, { useEffect } from "react";
import {View,Text,TouchableOpacity, FlatList,Image, SafeAreaView} from 'react-native';
import { getMovies, addFavorite } from "../../redux/action/action";
import { useSelector,useDispatch } from "react-redux";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Movies () {
    const {movies} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();
    const fetchMovies = () => dispatch(getMovies());
    const addToFavorites = movie => dispatch(addFavorite(movie));

    const handleAddFavorite = movie => {
        addToFavorites(movie);
    };
    
  
    useEffect(()=>{
        fetchMovies();
    },[]);

    return(
    <SafeAreaView style={{flex:1,margin:10,padding:10}}>  
      <View style={{flexDirection:'row',marginTop: 20,justifyContent:'space-between'}}>
        <Text style={{fontSize: 22}}>Popular Movies</Text>
            <Text>
              
            <MaterialIcons
                color="rgb(77, 255, 255)"
                size={32}
                name="add-shopping-cart"
            /> 
            </Text>
      </View>   
  <View style={{flex: 1, marginTop: 12}}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={{marginVertical: 12}}>
              <View style={{flexDirection: 'row', flex: 1}}>
            
                 <Image style={{width: 100, height: 150, borderRadius: 10}} source={{ uri: item.image }} />
                
                <View style={{flex: 1, marginLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 22, paddingRight: 15}}>
                      {item.title}
                    </Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <TouchableOpacity 
                      onPress={() => ('')}
                      style={{marginRight:60}}
                      >
                    <MaterialIcons 
                        color="green" 
                        name="thumb-up" 
                        size={32} 
                    />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      onPress={() => handleAddFavorite(item)}>
                      <MaterialIcons
                        color="orange"
                        size={32}
                        name="favorite-outline"
                      />
                    </TouchableOpacity>
                    </View>
                    </View>
                  </View>
                </View>
          );  
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </SafeAreaView>
    );
}