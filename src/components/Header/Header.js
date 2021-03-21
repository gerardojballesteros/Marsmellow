import React from 'react'
import { View, StyleSheet, Image } from 'react-native'


export const Header = () => {
    return (
       <View style={header.container}>
           <Image style={header.logo} 
           source={require('./img/logohorizontal.png')}
           />
       </View>
    )
}
const header = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        height: '12%',
        padding: 20,
        overflow: 'hidden',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    logo: {
        width: 150,
        height: 31,
        top: 9
    }
})

