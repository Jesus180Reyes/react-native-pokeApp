import React from 'react'
import { Appbar } from 'react-native-paper'

export const CustomAppbar = () => {
  return (
    <Appbar.Header>
    <Appbar.Content title="Pokemon"  />
    <Appbar.Action icon="pokemon-go" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
  )
}
