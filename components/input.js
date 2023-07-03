import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default ({ title, ...rest }) => {
  return (
    <View style={ styles.wrapper }>
      <Text>{ title }</Text>
      <TextInput { ...rest }></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40
  }
})