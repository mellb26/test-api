import { StyleSheet, Text, View, Button } from 'react-native';// Import Map and Marker
// import {getExampleDataFromCS} from '../utils/fetchData'
// import { useState, useEffect } from 'react';

export default function ControlPanel({locationParams}) { 

    if (locationParams.currLocation != null) {
      return (
        <View style={styles.controlPanel}>
          <Text style={styles.h2}>Control Panel</Text>
          <Text>Latitude: </Text>
          <Text style={styles.value}>{locationParams.currLocation.latitude}</Text>
          <Text>Longitude: </Text>
          <Text style={styles.value}>{locationParams.currLocation.longitude}</Text>
        </View>
    )}
  }

const styles = StyleSheet.create({
    controlPanel: {
        width: "100%",
        height: "50%",
        backgroundColor: "white",
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      h2: {
        textAlign: "center",
        fontWeight: 800,
        textTransform: 'uppercase',
        paddingVertical: 25,
      },
      value: {
        paddingBottom: 10,
      }
    })