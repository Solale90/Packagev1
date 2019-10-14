import React, {useState} from 'react';
import {View, Text, Picker} from 'react-native';
import styles from '../styles/midstyles'

function Mid(){
  const [color, setColor] = useState('white');

  return (
    <View style={[styles.Mid, {backgroundColor: color}]}> 
      <Picker
          selectedValue={color}
          style={styles.Picker}
          onValueChange={(itemValue, itemIndex) =>
            setColor(itemValue)
          }>
        <Picker.Item label="Color1" value="white" />
        <Picker.Item label="Color2" value="pink" />
      </Picker>
      <Text style={styles.MidText}>Color</Text>
    </View>
  )
}


export default Mid;