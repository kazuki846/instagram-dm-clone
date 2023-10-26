import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather, Entypo } from '@expo/vector-icons'

interface Props {
  pageFunctionTitle: string
  iconLeft: keyof typeof AntDesign.glyphMap
  iconRight: keyof typeof Feather.glyphMap
}

const AppBar = (props: Props): JSX.Element => {
  const { pageFunctionTitle, iconRight, iconLeft } = props
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarLeft}>
          <Text style={styles.yourId}>{pageFunctionTitle}</Text>
          <Entypo name="chevron-small-down" size={24} color="black" />
      </View>
      <View style={styles.appbarRight}>
        <View style={styles.appbarIcon}>
          <AntDesign name={iconLeft} size={24} color="black" />
          <Feather name={iconRight} size={24} color="black" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  appbarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 10,
  },
  appbarRight: {
    position: 'absolute',
    width: 70,
    right: 25,
  },
  appbarIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  yourId: {
    fontSize: 28
  }

})

export default AppBar
