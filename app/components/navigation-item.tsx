import { Link } from 'expo-router'
import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

interface IProps {
  icon: keyof typeof MaterialIcons.glyphMap
  href: string;
  label: string;
}

export function NavigationItem({ icon, href, label }: IProps) {
  return <Link href={href as any}>
    <View className="flex flex-col gap-1 justify-center items-center">
      <View className="bg-gray-300 rounded-full w-16 h-16 flex justify-center items-center">
        <MaterialIcons name={icon} size={32} color="#222" />
      </View>
      <Text className="text-xs font-semibold">{label}</Text>
    </View>
  </Link>
}