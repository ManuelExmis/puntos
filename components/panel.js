import React from 'react'
import { View, StyleSheet, Dimensions, Button } from 'react-native'

export default ({ onPressLeft, titleLeft, tooglePointFilter }) => {
  return (
    <View style={ styles.panel } > 
      <Button onPress={ onPressLeft } style={ styles.buttom } title={ titleLeft } />
      <Button style={ styles.buttom } onPress={ tooglePointFilter } title='Mostrar/Ocultar' />
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    //backgroundColor: '#000',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  buttom: {
  }
})