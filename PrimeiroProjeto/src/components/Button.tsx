import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	TouchableOpacityProps
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
	text: string
}

export function Button({text, ...rest}: ButtonProps){
	return(
		<TouchableOpacity 
			style = {styles.button}
			activeOpacity = {0.5}
			{...rest}
		>
			<Text style = {styles.button_text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  button:{
    marginTop: 20,
    backgroundColor: '#06c',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center'
  },
  button_text:{
    color: '#fafafa',
    fontSize: 20
  }
})