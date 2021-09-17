import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

export function Card({content}){
	return(
		<TouchableOpacity style = {styles.historyList}>
			<Text style = {styles.card_text}>
				{content}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	historyList:{
    color: '#fafafa',
    backgroundColor: '#a0a',
    padding: 10,
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 15,
    alignContent: 'center',
    borderRadius:7
  },
	card_text:{
		color: '#fafafa',
    fontSize: 20
	}
})