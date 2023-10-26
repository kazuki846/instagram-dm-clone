import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../components/AppBar'
import FollowList from '../components/FollowList'
import UserContents from '../components/UserContents'
import Footer from '../components/Footer'

const Index = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AppBar pageFunctionTitle="Instagram" iconLeft="hearto" iconRight="message-circle" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FollowList userId='taka' />
        </ScrollView>
        <UserContents userId='taka' />
        <UserContents userId='taka' />
      </ScrollView>

      <Footer source="https://picsum.photos/seed/696/3000/2000" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default Index
