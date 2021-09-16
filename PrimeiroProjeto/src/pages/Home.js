import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  TextInput,
  TouchableOpacity
} from 'react-native';

export function Home(){
  return(
    <SafeAreaView style= {styles.container}>

      <Text style = {styles.title}>Bem vindo</Text>

      <TextInput 
        style = {styles.input}
        placeholder = 'Digite algo'
        placeholderTextColor = '#fefefe'  
      />

      <TouchableOpacity 
        style = {styles.button}
        activeOpacity = {0.5}
      >
        <Text style = {styles.button_text}>Buscar</Text>
      </TouchableOpacity>

      <Text styles = {[styles.title, {marginTop: 20}]}>
        Histórico de digitação
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0066cc',
    paddingVertical: 20,
    paddingHorizontal: 40
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666'
  },
  input: {
    padding: 15,
    marginTop: 6,
    color: '#fff'
  },
  button:{
    backgroundColor: 'a3a3a3',
    padding: 10,
    borderRadius: 7,
    alignItem: center
  },
  button_text:{
    color: '#fafafa',
    fontSize: 15
  }
})