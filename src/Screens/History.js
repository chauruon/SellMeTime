import { 
	View, 
	Text,
	StyleSheet,
} from 'react-native'
import React from 'react'

const History = () => {
	return (
		<View style={styles.container}>
			<Text>History</Text>
		</View>
	)
}

export default History

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})