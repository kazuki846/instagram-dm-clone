import { Image } from 'expo-image'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SimpleLineIcons, AntDesign, Feather, Octicons, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface Props {
	userId: string
}
const UserContents = (props: Props): JSX.Element => {
	const { userId } = props
	const [text, onChangeComment] = useState('')

	return (
		<View style={styles.userPost}>
			<View style={styles.userInfo}>
				<Image
          style={styles.icon}
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
				<View style={styles.userId}>
					<Text>{userId}</Text>
				</View>
				<View style={styles.option}>
					<SimpleLineIcons name="options" size={18} color="black" />
				</View>

			</View>
				<Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
				<View style={styles.barUnderImage}>
					<View style={styles.postActionBarLeft}>
						<AntDesign name="hearto" size={28} color="black" />
						<Feather name="message-circle" size={28} color="black" />
						<Octicons name="paper-airplane" size={28} color="black" />
					</View>
					<View style={styles.postActionBarRight}>
						<FontAwesome name="bookmark-o" size={28} color="black" />
					</View>
				</View>
				<View>
					<Text style={styles.like}>いいね！54件</Text>
					<Text style={styles.description}>山が、、連なっている、、、</Text>
					<View style={styles.comment}>
						<Image
							style={styles.commentImage}
							source="https://picsum.photos/seed/696/3000/2000"
							placeholder={blurhash}
							contentFit="cover"
							transition={1000}
						/>
						<TextInput
							onChangeText={onChangeComment}
							placeholder='コメントを追加...'
						/>
					</View>
					<Text style={styles.timestamp}>1日前</Text>
				</View>

		</View>
	)
}

const styles = StyleSheet.create({
	userPost: {
		marginBottom: 10
	},
	userInfo: {
		flexDirection: 'row',
		height: 60,
	},
	userId: {
		justifyContent: 'center',
		height: 60,
		paddingLeft: 15
	},
	icon: {
		width: 50,
    height: 50,
		left: 5,
		top: 5,
    borderRadius: 25
	},
	image: {
		width: '100%',
		height: 370
	},
	option: {
		justifyContent: 'center',
		height: 60,
		position: 'absolute',
		right: 10
	},
	barUnderImage: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 40,
		justifyContent: 'space-between'
	},
	postActionBarLeft: {
		flexDirection: 'row',
		width: '35%',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	postActionBarRight: {
		right: 15
	},
	like: {
		left: 15,
		marginTop: 5,
		marginBottom: 5
	},
	timestamp: {
		color: '#696969',
		left: 15,
		fontSize: 12
	},
	comment: {
		flexDirection: 'row',
		left: 15,
		marginTop: 5,
		marginBottom: 5
	},
	commentImage: {
		width: 30,
		height: 30,
		borderRadius: 15,
		marginRight: 8
	},
	description: {
		left: 15,
		marginBottom: 5
	}
})

export default UserContents
