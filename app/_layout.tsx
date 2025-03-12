import '@/globals.css'
import { Slot } from "expo-router";
import { StatusBar, Text, View, StatusBarStyle } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return <SafeAreaProvider>
    <StatusBar
      className='bg-transparent'
      animated={true}
      translucent={true}
      hidden={false}
    />
    <View className='flex-1 bg-light'>
      <View className='h-12 bg-primary-dark' />
      <Slot />
    </View>
  </SafeAreaProvider>
}