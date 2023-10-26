import { StyleSheet, Text, View } from 'react-native'
import AccountImage from './AccountImage'

interface Props {
	userId: string
	source: string
}

const AccountIcon = (props: Props): JSX.Element => {
	const {userId, source} = props
	return (
		<View style={styles.AccountInfo}>
			<AccountImage source={source} style={null} />
			<Text style={styles.AccountId}>{userId}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	AccountInfo: {
    justifyContent: 'center',
		alignItems: 'center',
    height: 120,
		marginRight: 10
  },
  AccountId: {
    textAlign: 'center'
  }
})

export default AccountIcon
