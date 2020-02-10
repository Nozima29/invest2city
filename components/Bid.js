import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default class Bid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDuration: 0,
        };
    }
    bid = () => {
        alert('Submitted succeesfully')
        this.props.navigation.goBack()
    }
    componentDidMount() {
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cont1}>
                    <View style={styles.image_container}>
                        <Image
                            style={styles.postdes_image}
                            source={{ uri: '../images/PicsArt_09-26-10.44.03.jpg' }}
                        />
                    </View>
                    <Text style={styles.postdes_title}>React Native</Text>
                    <View style={styles.postdes_container}>
                        <Text style={styles.text}>Auksion otkazish vaqti:</Text>
                        <Text style={styles.text}>21.02.2020 09:00 дан 18:00 гача</Text>
                        <Text style={{ width: '50%', paddingVertical: 8, fontSize: 15 }}>Arizalar qabul qilish vaqti:</Text>
                        <Text style={styles.text}>19.02.2020 13:00</Text>
                        <Text style={{ width: '50%', paddingVertical: 8, fontSize: 15 }}>Eng Past Narx:</Text>
                        <Text style={styles.text}>159 375 000.00 UZS</Text>
                    </View>
                    <View style={styles.counter}>
                        <View >
                            <CountDown
                                until={this.state.totalDuration}
                                //duration of countdown in seconds
                                timetoShow={('H', 'M', 'S')}
                                //formate to show
                                onFinish={() => alert('finished')}
                                //on Finish call
                                onPress={() => alert('hello')}
                                //on Press call
                                size={20}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => alert('Submitted succeesfully')}>
                        <Text style={styles.submitButtonText}>Buy</Text>
                    </TouchableOpacity>
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
        height: 50,
        width: '70%',

    },
    submitButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },


});