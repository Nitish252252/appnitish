
import { View, Text, SafeAreaView, ScrollView, Linking } from 'react-native'
import React from 'react'
import FlatCard from './Components/FlatCard'
import Scrol from './Components/Scrol'
import Fancy from './Components/Fancy'
import Action from './Components/Action'



const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard/>
      <Scrol/>
      <Fancy/>
      <Fancy/>
      <Action/>
     
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default App