import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function Home(){
  const [newInput, setInput] = useState('')
  const [historyInput, setNewInput] = useState([])

  function handleAddNewInput(){
    if (newInput !== ''){
      setNewInput(before => [...before, newInput]);
      setInput('')
    }
  }

  return(
    <SafeAreaView style= {styles.container}>

      <Text style = {[styles.title, {padding:20}, {alignSelf: 'center'}]}>Bem vindo</Text>

      <TextInput 
        style = {styles.input}
        placeholder = 'Digite algo'
        placeholderTextColor = '#fefefe'
        onChangeText = {setInput}
        value = {newInput}
      />

      <Button text = {'Enter'} onPress = {handleAddNewInput}/>

      <Text style = {[styles.title, {marginTop: 20}]}>
        Histórico de digitação:
      </Text>

      {
        historyInput.map( input => (
          <Card content = {input}/>
        ))
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0066cc',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    alignContent: 'center'
  },
  input: {
    fontSize: 20,
    padding: 18,
    marginTop: 6,
    color: '#fff',
    backgroundColor: '#a0a',
    borderRadius: 7
  },
})