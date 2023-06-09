import { useState, useEffect } from 'react';
// Import required components
import { StyleSheet, Text, View } from 'react-native';// Import Map and Marker
import ControlPanel from './components/ControlPanel';
import MapFrame from './components/MapFrame';
import * as Location from 'expo-location';


const App = () => {
  const [locationParams, setLocationParams] = useState({
    currLocation: {},
    radius: 5,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
      Location.requestForegroundPermissionsAsync()
      .then(({status}) => {
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
      })
      .then(() => {
        (Location.getCurrentPositionAsync({}))
      .then((location) => {
        if(location == null) {
          fusedLocationProviderClient.requestLocationUpdates(locationRequest, locationCallback, Looper.getMainLooper())
        } else {
          setLocationParams({
            ...locationParams, 
            currLocation: {latitude: 53.69123014148644, longitude: -2.5673851}, 
          });
        }
      })
      })
  }, []);

  if (locationParams.currLocation) {
    return (
      <>
      <View style={styles.parentContainer}>
        <MapFrame locationParams={locationParams} />
        <ControlPanel locationParams={locationParams} />
      </View>
      </>
    );
  }
};

export default App;


const styles = StyleSheet.create({
  parentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});