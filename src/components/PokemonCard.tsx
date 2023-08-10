import React from 'react'
import { TouchableWithoutFeedback, View, Image, Text, Alert, StyleSheet } from 'react-native';
import { PokemonsResponse } from '../interfaces/pokemons_response_interface';
interface Props {
    pokemons: PokemonsResponse
}
export const PokemonCard = ({pokemons}:Props) => {
    const onPressPokemon = (name:string) => {
        Alert.alert(name);
      } 
  return (
    
    <View style={styles.pokemonContainer}>
     
    {
        pokemons?.results.map((pokemon,i) => {

          return <TouchableWithoutFeedback onPress={()=> onPressPokemon(pokemon.name)} key={pokemon.name}>
            <View key={pokemon.name} style={styles.pokemonCard}>
          <Image  height={100} width={100}  source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}}/>
           <Text style={styles.pokemonContent}>{pokemon.name}</Text>
          </View> 
          </TouchableWithoutFeedback>
          
        })
    
}  
    </View>


  );
}

const styles = StyleSheet.create({
    pokemonContainer: {
        display: "flex",
        flex: 2,
        flexDirection: "row",
        // backgroundColor: "red",
        margin: 10,
        marginBottom: 10,
        // flex: 1,
        flexWrap: "wrap",
      },
      pokemonContent: {
        fontSize: 20,
        textTransform: "capitalize"
    
      },
      pokemonCard: {
        backgroundColor: "#1111",
        borderRadius: 20,
        padding: 2,
        // height: 30,
        width: 120,
        margin: 20,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
        
        
        
      }
});
