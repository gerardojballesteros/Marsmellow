import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Category = () => {
    const tags = [
        {
            id: 1,
            name: 'Todo'
        },
        {
            id: 2,
            name: 'Perseverance'
        },
        {
            id: 3,
            name: 'Curiosity'
        },
        {
            id: 4,
            name: 'Opportunity'
        },
        {
            id: 5,
            name: 'Spirit'
        }
    ];


    return (
       <View style={styleCategory.category}>
            <View style={styleCategory.titleCategory}>
                <Text style={styleCategory.titleTextCategory}>
                    Mira el planeta rojo
                </Text>
                <Text style={styleCategory.subTextCategory}>
                    Como nadie hasta ahora lo ha visto.
                </Text>
            </View>

            <View style={styleCategory.contentRef}>
                
            </View>

            <View style={styleCategory.categoryTags}>
               <ScrollView horizontal>
               {
                    tags.map(tags => {
                        return(
                            <Text style={styleCategory.tags} key={tags.id} >
                                {tags.name}
                                </Text>
                        )
                    })
                }
               </ScrollView>
            </View>
       </View>
    )
}
export default Category;

const styleCategory = StyleSheet.create({
    category: {
        height: 'auto',
        marginTop: 40,
    },
    titleTextCategory: {
        color: 'white',
        fontSize: 36,
        letterSpacing: -0.6,
        textAlign: 'center',
        fontFamily: 'MyriadProRegular',
    },
    subTextCategory: {
        fontSize: 20,
        marginTop: 4,
        fontFamily: 'MyriadProRegular',
        letterSpacing: -0.6,
        color: 'white',
        textAlign: 'center'
    },
    categoryTags: {
        flexDirection: 'row',
        marginTop: 40,
        alignContent: 'flex-start'
    },
    tags: {
        margin: 7,
        fontSize: 20,
        color: 'black',
        fontFamily: 'MyriadProRegular',
        backgroundColor: 'rgba(240, 240, 240, 1)',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 10,
        overflow: 'hidden',
        
    }
});