import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../redux/action/action';

export default function Favorite() {
  const { favorites } = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();
  const removeFromFavorites = (movie) => dispatch(removeFavorite(movie));

  const handleRemoveFavorite = (movie) => {
      removeFromFavorites(movie);
  };
  return (
    <View style={{ flex: 1, marginTop: 44, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 22 }}>Favorites</Text>
      <View style={{ flex: 1, marginTop: 8 }}>
        {favorites.length === 0 ? (
          <Text style={{ color: '#010101', fontSize: 18 }}>Add a movie to the list.</Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={{ marginVertical: 12 }}>
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Image
                      style={{ width: 100, height: 150, borderRadius: 10 }}
                      source={{ uri: item.image }}
                    />
                    <View style={{ flex: 1, marginLeft: 12 }}>
                          <View>
                            <Text style={{ fontSize: 22, paddingRight: 15 }}>{item.title}</Text>
                          </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <TouchableOpacity 
                      onPress={() => (item)}
                      style={{marginRight:60}}
                      >
                    <MaterialIcons 
                        color="green" 
                        name="thumb-up" 
                        size={32} 
                    />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      onPress={() => handleRemoveFavorite(item)}>
                      <MaterialIcons
                        color="orange"
                        size={32}
                        name="favorite"
                      />
                    </TouchableOpacity>
                    </View>                   
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}
