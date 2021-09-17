import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  Text, 
  TextInput,
  StyleSheet,
  FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface InputData {
  id: string,
  content: string
}

export function Home(){
  const [newInput, setInput] = useState('')
  const [historyInput, setNewInput] = useState<InputData[]>([])
  const [grettings, setGrettings] = useState('')

  function handleAddNewInput(){
    if (newInput !== ''){
      const data = {
        id: String(new Date().getTime()),
        content: newInput
      }
      setNewInput(before => [...before, data]);
      setInput('')
    }
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 6){
      setGrettings('Boa madrugada');
    }
    else if(currentHour < 12){
      setGrettings('Bom Dia');
    }
    else if(currentHour < 18){
      setGrettings('Boa Tarde');
    }
    else{
      setGrettings('Boa Noite');
    }
  }, [])

  return(
    <SafeAreaView style= {styles.container}>

      <Text style = {[styles.title, {padding:20}, {alignSelf: 'center'}]}>Bem vindo</Text>
      <Text style = {[styles.title, {fontSize: 20, marginBottom: 10}]}> { grettings } </Text>
      <TextInput 
        style = {styles.input}
        placeholder = 'Digite algo'
        placeholderTextColor = '#fefefe'
        onChangeText = {setInput}
        value = {newInput}
      />

      <Button text = 'Enter' onPress = {handleAddNewInput}/>

      <Text style = {[styles.title, {marginTop: 20}]}>
        Histórico de digitação:
      </Text>

      <FlatList
        data = {historyInput}
        keyExtractor = {item => item.id}
        renderItem = {({ item }) => (
          <Card key={item.id} content = {item.content}/>
        )}
        inverted = {true}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fafafa',
    alignContent: 'center'
  },
  input: {
    fontSize: 20,
    padding: 18,
    marginTop: 6,
    color: '#fafafa',
    backgroundColor: '#666',
    borderRadius: 7
  },
})