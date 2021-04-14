import React, { useState, useEffect , useCallback} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';
import DeviceStorge from '../Service/DeviceStorge'

export default function TicketUser({ navigation }) {
    const [value, setValue] = useState('initial');
    const [isLoading, setIsLoading] = useState(false)
    const [List, SetList] = useState([]);
    const [assign, Isassign] = useState(0);
    const [noassign, notassign] = useState(0);

    const [id, setid] = useState("")

    const gettStatus = () => {
        setValue("2")
        var count = 0;
        var count2 = 0;
        let index = [];
        for (var i = 0; i < List.length; i++) {
            index[i] = List[i][4];
        }

        for (var i = 0; i < index.length; i++) {
            if (index[i] == 1) {


                count++;
            }
            else if (index[i] == 2) {
                count++;
            }
            else if (index[i] == 3) {
                count++;
            }
            else if (index[i] == 4) {
                count++;
            }
            else if (index[i] == 5) {
                count2++;
            }


        }

        Isassign(count);
        notassign(count2);


    }

    const   getTicket =   useCallback( async ()=>{
    // const getTicket = async () => {
        //const data = { "result": [[8, "desc", "11 April, 2021", "High", 2], [9, "yestitss", "11 April, 2021", "High", 2], [10, "desc1hhhh", "11 April, 2021", "High", 1], [2, "yestitss", "11 April, 2021", "High", 4], [5, "yestitss", "11 April, 2021", "High", 5], [4, "yestitss", "11 April, 2021", "High", 1], [6, "yestitss", "11 April, 2021", "High", 1]] }
console.log(`${id}`)

        await DeviceStorge.getToken("userid").then((userId) => { setid(userId); console.log(id) })

        try {
          //  setIsLoading(true)

                       await fetch(`http://127.0.0.1:8889/convert?id=${id}`,{
                             method: 'GET',
                           
                            headers: {

                                Accept: 'application/json',
                             'Content-Type': 'application/json'
                             }
                     })
                        .then(response => response.json())
                        .then(data => {
                          //  setIsLoading(false)
            console.log(data)
            SetList(data.name);
            setValue("1")
           

                              
                        })
                       .catch(err => console.error(err));

        }


        catch (error) {

            console.log(error);
        }




    },[List])
  
    useEffect(() => { 
          console.log('mounted or updated');
    getTicket();
    gettStatus();}
   , [List]);
 
  



    return (


        <View style={styles.container}>
       <Spinner
                visible={isLoading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <View style={{
                backgroundColor: '#3C7E66', width: wp('100%'), height: hp('20%'),

            }}>
                <TouchableOpacity style={{ left: wp('10%'), top: hp('5%'), height: hp("4%"), width: wp("8%"), }}
                    onPress={() => navigation.toggleDrawer()}>
                    <Image source={require('../Image/menu2.png')} style={styles.menu} />

                </TouchableOpacity>

                <View style={{
                    width: wp('11%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: hp('7%'),
                    borderRadius: wp('10%'),
                    backgroundColor: 'white',
                    left: wp('80%')
                }}>
                    <TouchableOpacity style={{
                        width: wp('11%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: hp('7%'),
                        borderRadius: wp('10%'),

                    }}

                        onPress={() => navigation.navigate('AddTicket')}
                    >

                        <Image source={require('../Image/backL.png')} style={styles.back} />
                    </TouchableOpacity>
                </View>
                <ImageBackground source={require('../Image/circle.png')} style={{ bottom: hp('2%') }}>
                    <Text style={styles.logo} > التذاكر</Text>
                </ImageBackground>
            </View>

            <View
                elevation={5} style={styles.card1}
            >
                <View>
                    <TouchableOpacity style={{ width: wp('15%'), height: hp('7%'), left: wp('75%'), top: hp("10%") }}
                        onPress={() => navigation.navigate('AddTicket')}>
                        <Image

                            source={require('../Image/plus.png')}>

                        </Image>
                    </TouchableOpacity>

                </View>
                <View style={{ bottom: hp('5%'), left: wp('5%') }}>
                    <Text style={{ fontSize: wp('5%'), color: 'rgba(85,158,132,0.62)', fontFamily: 'Cairo-Bold', }}> التذاكر المرسلة : {assign} </Text>




                    <Text style={{ fontSize: wp('5%'), color: 'rgba(85,158,132,0.62)', fontFamily: 'Cairo-Bold', }}> التذاكر المستبعدة : {noassign} </Text>



                </View>
            </View>
            <View style={styles.viewflat}>

                <FlatList
                    style={styles.flatstyle}
                    data={List}

                  //  keyExtractor={(item, index) => console.log(index)}
                    renderItem={({ item }) => {
                        let state = '';
                        let forward = '';
                        let backgound = '';

                        if (item[4] == 1) { backgound = '#C4C4C4'; state = 'قيد الانتظار' }
                        else if (item[4] == 2) { state = ' مسندة'; backgound = '#BFB816' }
                        else if (item[4] == 3) { state = 'قيد التنفيذ'; backgound = '#3634B1' }
                        else if (item[4] == 4) { state = 'تم الاصلاح '; backgound = '#0BD38A' }
                        else if (item[4] == 5) { state = ' مستبعدة'; backgound = 'red' }

                        if (item[5] == 1) { forward = 'وزارة التعليم' }
                        else if (item[5] == 2) { forward = ' وزارة الصحة';}
                        else if (item[5] == 3) { forward = ' البلدية';  }
                        else if (item[5] == 4) {  forward = ' الهيئة العامة للسياحة والتراث '; }
                      


                        return (


                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', top: hp('6%') }} >
                                <TouchableOpacity
                                    onPress={() => {
                                        if (item[4] == 5) {
                                            navigation.navigate('TicketNotAssign', {
                                                priority: item[3],
                                                status: state,
                                                location: 'yses',
                                                Description: item[1],
                                                backgound: backgound,
                                                 dest :forward

                                            })
                                            console.log('yess')
                                        }
                                        else if (item[4] == 4) {
                                            navigation.navigate('TicketDone', {
                                                priority: item[3],
                                                status: state,
                                                backgound: backgound


                                            })
                                        }
                                        else {
                                            navigation.navigate('TicketInfo', {
                                                priority: item[3],
                                                status: state,
                                                location: 'yses',
                                                Description: item[1],
                                                // dest :forward,
                                                backgound: backgound ,
                                                id : item[0]

                                            })
                                            console.log('noo')
                                        }

                                    }}

                                >
                                    <View elevation={5} style={styles.card3}>

                                        <View style={styles.card2_1}>
                                            <View style={{ width: wp('4%'), height: hp('13%'), borderRadius: 30, backgroundColor: backgound }} />

                                            <View style={{ left: wp('20%') }}>
                                                <Text style={{ fontSize: wp('4%'), fontFamily: 'Cairo-Bold', left: wp('5%') }}>رقم التذكرة : {item[0]} </Text>
                                                <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Regular', left: wp('3%') }}> {item[2]}</Text>
                                                <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Regular', left: wp('4%') }}>الجهة :{forward}</Text>
                                            </View>

                                            <View>
                                                <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Black', color: '#7D7B7B', top: hp('0.57%'), left: wp('8%') }}>الاولوية :{item[3]}</Text>
                                                <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", top: hp('4.5%'), left: wp('9%') }}>
                                                    <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Black', color: '#7D7B7B' }}> الحالة :</Text>
                                                    <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Black', color: backgound }}>{state}</Text>
                                                </View>
                                            </View>

                                        </View>


                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }} />

            </View>


        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    center: {

        backgroundColor: 'white',
        width: '100%',
        height: '80%',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },

    logo: {
        fontSize: wp('10%'),
        fontWeight: '500',
        fontFamily: 'Cairo-SemiBold',
        color: "white",
        fontStyle: 'normal',
        left: wp('35%'),
        bottom: ('50%'),
        height: hp("20%"),
        width: wp("30%"),



    },
  
    back: {

        height: hp("4%"),
        width: wp("5%"),
    },
    card1: {
        borderRadius: 17,
        width: wp('90%'),
        height: hp('15%'),
        top: hp('1%'),
        backgroundColor: 'white'
    },
    card1_1: {
        // flex: 1,

        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",

    },
    card1_2: {
        // flex: 1,
        bottom: hp('1%'),
        right: wp('7%'),
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",

    },
    card2: {
        borderRadius: 17,
        width: wp('90%'),
        height: hp('13%'),
        top: hp('10%'),
        backgroundColor: 'white'
    },
    card2_1: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    state: {

    },
    state2: {
        width: wp('4%'),
        height: hp('13%'),
        borderRadius: 30,
        backgroundColor: '#3634B1'
    },



    card3: {
        borderRadius: 17,
        width: wp('80%'),
        height: hp('13%'),
        marginBottom: hp('5%'),
        backgroundColor: 'white'
    },

    viewflat: {
        height: hp('100%'),
        width: wp('100%'),
        left: wp('10%'),
        paddingBottom: hp('50%')
    },
    flatstyle: {
        height: hp('200%'),
        width: wp('80%'),
        paddingBottom: hp('1%')
    },
    menu: {

        height: hp("5%"),
        width: wp("7%"),


    },



});