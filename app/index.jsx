import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-[#f06090] h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="px-6 flex-1 justify-center items-center">
        
          <Image
            source={images.logo}
            className="w-[200] h-[200] mb-8"
            resizeMode="contain"
          />
          <Text className="text-2xl  text-pink-500 text-center mb-4">
            .
          </Text>

        

          
          <View className="flex-row w-full justify-center mb-20">
        <Link href="/auth/login" asChild>
          <TouchableOpacity
            className="bg-[#97407d] items-center justify-center py-4 px-10 rounded-full shadow-lg flex-row"
            style={{
              elevation: 5,
              borderWidth: 2,
              borderColor: '#37b5e7',
            }}
          >
            <Text className="text-lg text-white font-semibold">Shop Flowers</Text>
          </TouchableOpacity>
        </Link>
      </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
