import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

export function Button({text,onPress}){
	return(
		<TouchableOpacity 
			style = {styles.button}
			activeOpacity = {0.5}
			onPress = {onPress}
		>
			<Text style = {styles.button_text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  button:{
    marginTop: 20,
    backgroundColor: '#a3a3a3',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center'
  },
  button_text:{
    color: '#fafafa',
    fontSize: 20
  }
})