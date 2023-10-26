import React from 'react'
import { StyleSheet, View } from 'react-native'
import AccountIcon from './AccountIcon'

interface Props {
  userId: string
}

const FollowList = (props: Props): JSX.Element => {
  const { userId } = props
  return (
    <View style={styles.IconBar}>
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
      <AccountIcon userId='taka' source="https://picsum.photos/seed/696/3000/2000" />
    </View>
  )
}

const styles = StyleSheet.create({
  IconBar: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default FollowList
