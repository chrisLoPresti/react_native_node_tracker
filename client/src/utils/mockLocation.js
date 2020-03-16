import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => ({
  timestamp: 10000000,
  coords: {
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitudeAccuracy: 5,
    altitude: 5,
    longitude: -74.077644 + increment * tenMetersWithDegrees,
    latitude: 40.728157 + increment * tenMetersWithDegrees
  }
});

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 2000);
