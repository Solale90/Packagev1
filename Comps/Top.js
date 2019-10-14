import React,{useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/topstyles'

function Top(){
    const [daySwitch, setDaySwitch] = useState(false);
    const [textMode, settextMode] = useState('Day Mode');
    const [style, setStyle] = useState({
      backgroundColor: 'white',
      color: 'black'
    });

    function onToggleSwitch(value) {
      setDaySwitch(value);
      if (daySwitch) {
        settextMode('Day Mode');
        setStyle({
          backgroundColor: 'white',
          color: 'black'
        });
      } else {
        settextMode('Night Mode');
        setStyle({
          backgroundColor: 'black',
          color: 'white'
        });
      }
    }

    return (
      <View style={[styles.Top, style]}>
          <Text style={[styles.TopText, style]}>{textMode}</Text>
          <Switch onValueChange = {onToggleSwitch}
                  value = {daySwitch}/>
      </View>
    )
}

export default Top;