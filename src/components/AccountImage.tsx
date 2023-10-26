import { StyleSheet, type ImageStyle } from 'react-native'
import {Image} from 'expo-image'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

	interface Props {
		source: string
		style?: ImageStyle
	}

const AccountImage = (props: Props):JSX.Element => {
	const {source, style} = props
	return (
		<Image
			style={[styles.AccountImage, style]}
			source={source}
			placeholder={blurhash}
			contentFit="cover"
			transition={1000}
		/>
	)
}

const styles = StyleSheet.create({
	AccountImage: {
    width: 100,
    height: 100,
    backgroundColor: '#0553',
    borderRadius: 50,
  }
})

export default AccountImage
