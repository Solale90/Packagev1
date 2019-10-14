import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from '../styles/botstyles'

function Bot(){
  const [text, setText] = useState('Text here');

    return (
      <View style={styles.Bot}>
        <TextInput
          style={styles.BotText}
          onChangeText={text => setText(text)}
          value={text}
        />
        <Button title="Send" onPress={() => alert('You send: '+ text)}/>
      </View>
    )
}

export default Bot;