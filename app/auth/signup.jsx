import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, Redirect, router } from 'expo-router';


const SignUp = () => {
  const [form, setForm]=useState({
    username:'',
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{}
  return (
    <SafeAreaView className="bg-[#FCE4EC] h-full">
      <ScrollView>
          <View className="w-full justify-center items-center h-full px-4 my-1">
          <Image source={images.floral}
                resizemode='contain'
                className="w-[190px] h-[159px] "
              />
              <Text className="text-3xl text-gray-600 mt-5 font-u_regular ">Register</Text>
              <FormField
                  title="Username"
                  value={form.username}
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                  otherStyles="mt-5"
              />
             <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-5"
                  keyboardType="email-address"
              />
              <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-5"
              />
              <CustomButton
                  title="Sign In"
                  handlePress={() => router.push('/auth/login')}
                  containerStyles="w-full mt-7"
                  isLoading={isSubmitting}
              />
        <View className="flex justify-center pt-5 flex-row      gap-2">
            <Text className="text-lg font-pregular">
              Already have an account?
            </Text>   
            <Link
              href="/auth/login"
              className="text-lg font-u_bold text-gray-500  underline"
            >
              Login
            </Link>
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default SignUp