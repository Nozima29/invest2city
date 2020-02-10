import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import Posts from './Posts';

export default class Bid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDuration: 0,
            isLoading: true,
            datasource: []
        };
    }
    bid = () => {
        alert('Submitted succeesfully')
        this.props.navigation.goBack()
    }
    componentWillMount(){
        var that = this;
        var date = moment()
            .utcOffset('+05:30')
            .format('YYYY-MM-DD hh:mm:ss');
        var expirydate = '2020-08-23 04:00:45';//You can set your own date-time

        var diffr = moment.duration(moment(expirydate).diff(moment(date)));
        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        that.setState({ totalDuration: d });
    }
    componentDidMount() {        
        return fetch('https://my-json-server.typicode.com/Nozima29/json-server/post')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(  
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () { }
        );
      })
      .catch(error => {
        console.error(error);
      });
        
    }

    render() {
        if (this.state.isLoading) {
            return (
              <View style={styles.container}>
                <ActivityIndicator size="large" color="black" animating />
              </View>
            );
          }
        return (
        
        <FlatList 
          data={this.state.dataSource}
          renderItem={({ item }) => (
            
            <View style={styles.container}>
            
                <View style={styles.cont1}>  
                    <View style={styles.image_container}>
                    <Image
                        style={styles.postdes_image}
                        source={{ uri: item.post_img }}
                    />
                    </View>
                    
                    <View style={styles.postdes_container}>
                    <Text style={styles.postdes_title}>{item.title}</Text>
                    <Text style={styles.postdes_text}>{item.description}</Text>
                    <Text style={styles.postdes_detail}>{item.address}</Text>
                    <Text style={styles.postdes_detail}>{item.bid_end_date}</Text>
                    <Text style={styles.postdes_price}>{item.init_price}</Text>
                    
                    </View>
         
        </View>
                    <View style={styles.counter}>
                        
                            <CountDown
                                until={this.state.totalDuration}                                
                                timetoShow={('H', 'M', 'S')}                                
                                onFinish={() => alert('finished')}                                
                                onPress={() => alert('hello')}                                
                                size={20}
                            />
                        
                    </View>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => alert('Bid set succeesfully')}>
                        <Text style={styles.submitButtonText}>Buy</Text>
                    </TouchableOpacity>
                </View>
            
                )}
    />        
                
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 2,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    postdes_title: {
        fontSize: 25,
        paddingBottom: 2,
        color: '#FEBC40',
        fontWeight: 'bold',
        padding: 5,
    },
    text: {
        paddingVertical: 8,
        fontSize: 15
    },

    submitButton: {
        backgroundColor: '#FEBC40',
        margin: 30,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        fontSize: 16,
        height:50,
        width: '70%',
        
    },
    submitButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },

});