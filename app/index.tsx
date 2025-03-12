import { Text, View } from 'react-native';
import { NavigationItem } from './components'

export default function RootScreen() {
  return (
    <View className='flex-1 flex flex-col items-center'>
      <View className='h-12 bg-primary flex flex-row items-center px-3 w-full'>
        <Text className='text-2xl font-semibold text'>Home Manager</Text>
      </View>
      <View className='flex flex-row justify-center items-center px-4 mt-12 h-32'>
        <View className='bg-white h-full w-full shadow rounded-md p-3 flex flex-row gap-3 items-center'>
          <NavigationItem href='https://google.com' label='Stock' icon='hourglass-bottom' />
        </View>
      </View>
    </View>
  )
}