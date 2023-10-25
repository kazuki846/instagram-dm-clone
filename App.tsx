import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from './src/components/AppBar'
import FollowList from './src/components/FollowList'
import UserContents from './src/components/UserContents'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <AppBar pageFunctionTitle="Instagram" iconLeft="hearto" iconRight="message-circle" />
      <FollowList />
      <UserContents userId='taka_rider3' />
      <UserContents userId='taka_rider3' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default App
