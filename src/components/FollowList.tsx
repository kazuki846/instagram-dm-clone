import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

const FollowList = (): JSX.Element => {
  return (
    <View style={styles.IconBar}>
      <View style={styles.AccountInfo}>
        <Image
          style={styles.AccountImage}
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Text style={styles.AccountId}>taka_rider3</Text>
      </View>

      <View style={styles.AccountInfo}>
        <Image
          style={styles.AccountImage}
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Text style={styles.AccountId}>taka_rider3</Text>
      </View>

      <View style={styles.AccountInfo}>
        <Image
          style={styles.AccountImage}
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Text style={styles.AccountId}>taka_rider3</Text>
      </View>

      <View style={styles.AccountInfo}>
        <Image
          style={styles.AccountImage}
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Text style={styles.AccountId}>taka_rider3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  IconBar: {
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  AccountInfo: {
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    height: 120,
    padding: 5,
    margin: 0
  },
  AccountImage: {
    width: 100,
    height: 100,
    backgroundColor: '#0553',
    borderRadius: 50
  },
  AccountId: {
    textAlign: 'center'
  }
})

export default FollowList
