import { StyleSheet, Text, View } from 'react-native'
import { Foundation, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import AccountImage from './AccountImage';

interface Props {
	source: string
}

const Footer = (props: Props):JSX.Element => {
	const size = 30
	const {source} = props
	return (
		<View style={styles.footer}>
			<Foundation name="home" size={size} color="black" />
			<Feather name="search" size={size} color="black" />
			<FontAwesome name="plus-square-o" size={size} color="black" />
			<MaterialCommunityIcons name="movie-open-play-outline" size={size} color="black" />
			<AccountImage source={source} style={{width: 28, height: 28, borderRadius: 14, marginRight: 0 }} />
		</View>
	)
}

const styles = StyleSheet.create({
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 50,
		paddingLeft: 30,
		paddingRight: 30
	}
})

export default Footer
