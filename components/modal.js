import React from 'react'
import { StyleSheet, Text, Modal, View, Dimensions } from 'react-native'

export default ({ children, visiblity }) => {
  return (
    <Modal 
        animationType='slide'
        transparent={true}
        visible={ visiblity }
      >
        <View style={ styles.center }>
          <View style={ styles.modalView }>
            { children }
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#ccc'
  },
  modalView: {
    minWidth: Dimensions.get('window').width - 50,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
})