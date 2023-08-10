import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, SafeAreaView,  ScrollView } from 'react-native';
import { PokemonsResponse } from '../interfaces/pokemons_response_interface';
import { PokemonCard } from '../components/PokemonCard';
import Constants from 'expo-constants';
import { Appbar } from 'react-native-paper';
import { CustomAppbar } from '../components/CustomAppBar';
export  const HomePage = () => {
  const [pokemons, setPokemons] = useState<PokemonsResponse>();

  const getPokemons = async():Promise<PokemonsResponse> => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
    const data:PokemonsResponse = await resp.json();
    setPokemons(data);
    return data;
  }


  useEffect(() => {
    getPokemons();
  
  }, []);

  
  
  return (
  <ScrollView>
    <CustomAppbar />
    <SafeAreaView style={styles.homeContainer}>

       <PokemonCard pokemons={pokemons!}/>

    </SafeAreaView>
  </ScrollView>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  pokemonContent: {
    marginTop: Constants.statusBarHeight,
    fontSize: 20,
    textTransform: "capitalize"

  },
 
});
