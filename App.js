/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import styles from './styles/appstyles';
import Main from './Comps/Main';

function App(){
  return (
    <View style={styles.app}> 
      <Main/>
    </View>
  );
}

export default App;
