import { 
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native'
import React, {useEffect,useState}from 'react'

const Activity = () => {
	return (
		<View style={styles.container}>
			<Text>Activity</Text>
		</View>
	)
}

export default Activity


const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent:"center",
		alignItems:"center",
	}
})