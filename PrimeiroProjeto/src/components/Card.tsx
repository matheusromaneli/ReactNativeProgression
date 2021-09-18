import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	TouchableOpacityProps
} from 'react-native';

interface CardProps extends TouchableOpacityProps{
	content: string
}

export function Card({content, ...rest}: CardProps){
	return(
		<TouchableOpacity 
			style = {styles.historyList}
			{...rest}
		>
			<Text style = {styles.card_text}>
				{content}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	historyList:{
    color: '#fafafa',
    padding: 10,
	fontSize: 20,
    marginTop: 6,
    backgroundColor: '#666',
    borderRadius: 7
  },
	card_text:{
		color: '#fafafa',
    fontSize: 20
	}
})