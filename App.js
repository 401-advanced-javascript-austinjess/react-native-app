import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// "plist": {
//   "NSLocationWhenInUsageDescription": "Testing message changes"
// }

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});

class App extends React.Component {
  state = {
    location: null
  };

  componentDidMount() {
    this.checkPermission();
  }

  checkPermission = async () => {
    // const ios = { scope: 'whenInUse' };
    const {
      status
      // permissions: {
      //   location: { ios }
      // }
    } = await Permissions.getAsync(Permissions.LOCATION);
    if (status === 'undetermined') {
      alert(`Hey look I'm a function that isn't doing my job!`);
      Linking.openURL('app-settings:');
      return;
    } else {
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The Snitcher</Text>
        {/* <Button
          title="Request Permission"
          type="standard"
          onPress={this.checkPermission}
        /> */}
      </View>
    );
  }
}

export default App;
