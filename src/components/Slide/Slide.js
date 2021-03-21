import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Rovers } from './img/rovers.jpeg'

const Slide = () => {

    const news = [
        {
            id: 1,
            news: 'Conoce más sobre el Perseverance',
            img: `${Rovers}`
        }
    ];


    return (
        <View style={styleSlide.slide}>
            <View style={styleSlide.News}>
                {
                    news.map(items => {
                       <Image source={ items.img } style={styleSlide.itemsNews}></Image>
                    })
                }
            </View>
        </View>
    )
}

export default Slide

const styleSlide = StyleSheet.create({
    slide: {},
    itemsNews: {
        width: 100,
        height: 100
    }
});