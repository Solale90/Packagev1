import React from 'react';
import {View, Text} from 'react-native';
import Top from './Top';
import Mid from './Mid';
import Bot from './Bot';
import styles from '../styles/mainstyles';

function Main(){
    return (
      <View style={styles.main}>
        <Top />
        <Mid />
        <Bot />
      </View>
    )
}


export default Main;