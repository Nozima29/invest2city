import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Bid extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cont1}>
                    <View style={styles.image_container}>
                        <Image
                            style={styles.postdes_image}
                            source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
                        />
                    </View>
                    <Text style={styles.postdes_title}>React Native</Text>
                    <View style={styles.postdes_container}>
                            <Text style={styles.text}>Auksion otkazish vaqti:</Text>
                            <Text style={styles.text}>21.02.2020 09:00 дан 18:00 гача</Text>
                            <Text style={{width:'50%', paddingVertical:8,  fontSize:15}}>Arizalar qabul qilish vaqti:</Text>
                            <Text style={styles.text}>19.02.2020 13:00</Text>
                            <Text style={styles.text}>Savdolar o'tkazis turi:</Text>
                            <Text style={styles.text}>Ochiq auksion</Text> 
                            <Text style={{width:'50%', paddingVertical:8,fontSize:15}}>Eng Past Narx:</Text>
                            <Text style={styles.text}>159 375 000.00 UZS</Text> 
                    </View>
                    <View style={styles.counter}></View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont1: {
        flex: 1,
        backgroundColor: '#F5F3ED',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderBottomStartRadius: 80,
        borderBottomEndRadius: 80,
        overflow: 'hidden'
    },
    postdes_image: {
        width: '100%',
        height: '100%'
    },
    image_container: {
        alignContent: 'flex-start',
        width: '100%',
        height: 250,
    },
    postdes_container: {
        flex:2,
        flexDirection: 'row',
        flexWrap:'wrap',
        flexGrow:2,
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    postdes_title: {
        fontSize: 25,
        paddingBottom: 2,
        color: '#FEBC40',
        fontWeight: 'bold',
        padding: 5,
    },
    text:{
        paddingVertical:8,
        fontSize:15
    }
  

});