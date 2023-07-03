import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input, Lista } from './components'

export default function App() {

  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  
  const [nombre, setNombre] = useState('')

  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisilityFilter] = useState('new_punto') // new_punto, all_puntos
  const [pointsFilter, setPointsFilter] = useState(false)

  const handleLongPress = ({ nativeEvent } ) => {
    setVisilityFilter('new_punto')
    setPuntoTemp( nativeEvent.coordinate )
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre }
    setPuntos( puntos.concat(newPunto) )
    setVisibility(false)
    setNombre('')
  }

  const cancelSubmit = () => {
    setVisibility(false)
    setPuntoTemp('')
    setNombre('')
  }

  const handleLista = () => {
    setVisilityFilter('all_puntos')
    setVisibility(true)
  }

  const tooglePointFilter = () => setPointsFilter(!pointsFilter)

  return (
    <View style={styles.container}>
      <Map longPress={ handleLongPress } puntos={ puntos } pointsFilter={ pointsFilter } />
      <Modal visiblity={ visibility } >
        {
          visibilityFilter === 'new_punto' 
          ? <View style={ styles.form } >
              <Input title='Nombre:' placeholder='Nombre del punto' onChangeText={ handleChangeText } />
              <View style={ styles.buttomForm }>
                <Button title='Cancelar' onPress={ cancelSubmit } />          
                <Button title='Aceptar' onPress={ handleSubmit } />
              </View>
            </View>
          : <Lista puntos={ puntos } closeModal={ () => setVisibility(false) } />
        }
      </Modal>
      <Panel onPressLeft={ handleLista } titleLeft='Lista' tooglePointFilter={ tooglePointFilter } />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 15
  },
  buttomForm: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  }
});
