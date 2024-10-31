import "react-native-gesture-handler";

import React from 'react';
import { SafeAreaView,StyleSheet,Text } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootStack } from './src/navigators';

const App = () => {
 
  return (
    <GestureHandlerRootView style={styles.container}>
      <RootStack/>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  
});


