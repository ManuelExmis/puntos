import React from 'react'
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native'

export default ({ puntos, closeModal }) => {
  return (
    <>
      <View style={ styles.list }>
        <FlatList 
          data={ puntos.map(x => x.name) }
          renderItem={ ({ item }) => <View style={ styles.item }><Text>{item}</Text></View> }
          keyExtractor={ item => item }
        />
      </View>
      <View style={ styles.buttom }>
        <Button title='Cerrar' onPress={ closeModal } />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 250
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    padding: 10,
    justifyContent: 'center'
  },
  buttom: {
    paddingBottom: 20,
    //justifyContent: 'center',
    alignItems: 'center'
  }
})