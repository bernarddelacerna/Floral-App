import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View className="flex-1 bg-[#fa7cd4] items-center justify-start">
    <ScrollView  className="flex-1">
    

    <View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/1.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Assorted Rose</Text>
<Text>5$</Text>

</View>

<View className="flex-col justify-center, items-center ">

<Image source={require('../../assets/images/2.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Pink Rose</Text>
<Text>4$</Text>
</View> 

 </View>

 <View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/3.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Blue Tullips</Text>
<Text>6$</Text>
</View>

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/4.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Pink Tullips</Text>
<Text>6$</Text>
</View> 

</View>

<View className="flex-row justify-between">

<View className="flex-col justify-center, items-center">
<Image source={require('../../assets/images/5.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>White Tullips</Text>
<Text>7$</Text>
</View>

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/6.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>White and Pink Rose</Text>
<Text>5$</Text>
</View> 
 </View>
 
<View className="flex-row justify-between">
 </View>
    </ScrollView>
    

    </View>
  )
}

export default Home