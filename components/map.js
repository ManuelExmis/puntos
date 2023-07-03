import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import MapViewDirection from 'react-native-maps-directions'

export default ({ longPress, puntos, pointsFilter }) => {

  const initialRegion={
    latitude: 12.123215,
    longitude: -86.312997,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  return (
    <MapView
      style={ styles.map }
      onLongPress={ longPress }
      initialRegion={ initialRegion }
    >
      {
        pointsFilter && <>
          {/* <Polyline 
            coordinates={ puntos.map(x => x.coordinate) }
             strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            // strokeColors={[
            //   '#7F0000',
            //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            //   '#B24112',
            //   '#E5845C',
            //   '#238C23',
            //   '#7F0000',
            // ]}
             strokeWidth={2}
          /> */}

          {
            puntos.map((x, index) =>           
            <Marker 
              key={ index }
              coordinate={ x.coordinate } 
              title={ x.name }          
              /> 
            )
          }

          {
            puntos.length >= 2 && (
              <MapViewDirection 
                origin={ puntos[0].coordinate }
                waypoints={ puntos.length > 2 ? puntos.slice(1, -1).map(x => x.coordinate): undefined }
                destination={ puntos[puntos.length-1].coordinate }
                apikey='AIzaSyC3bh8hoPZWFB4yyAZHN0PLWbcvwjV16kI'
                strokeWidth={ 3 }
                strokeColor='hotpink'
                optimizeWaypoints={ true }
                
                onStart={ (params) => {
                  console.log(`Iniciando ruta entre ${ params.origin } y ${ params.destination }`)
                } }
                
                onReady={ (result) => {
                  console.log(`Distance ${ result.distance } km`)
                  console.log(`Distance ${ result.duration } min`)


                } }

                onError={(errroMessage) => {
                  console.log('Error al cargar mapviewdirection, ' + errroMessage)
                }}
              />
            )
          }
        </>
      }

      {/* {
        pointsFilter && puntos.map((x, index) =>           
          <Marker 
            key={ index }
            coordinate={ x.coordinate } 
            title={ x.name }          
          />
        )
      } */}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 50,
    width: Dimensions.get('window').width
  }
})