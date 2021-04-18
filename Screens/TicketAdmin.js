import React, { useState , useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DeviceStorge from '../Service/DeviceStorge'
export default function TicketAdmin({ navigation }) {

    const [List, SetList] = useState([]);
    const [id, setid] = useState("")
    const [count1, setcount1] = useState(0);
    const [count2, setcount2] = useState(0);
    const [count3, setcount3] = useState(0);
    const [count4, setcount4] = useState(0);
    const [count5, setcount5] = useState(0);
  
    const gettStatus = () => {
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        var count4 = 0;
        var count5 = 0;
        let index = [];
        for (var i = 0; i < List.length; i++) {
            index[i] = List[i][4];
        }

        for (var i = 0; i < index.length; i++) {
            if (index[i] == 1) {


                count1++;
            }
            else if (index[i] == 2) {
                count2++;
            }
            else if (index[i] == 3) {
                count3++;
            }
            else if (index[i] == 4) {
                count4++;
            }
            else if (index[i] == 5) {
                count5++;
            }


        }

        setcount1(count1);
        setcount2(count2);
        setcount3(count3);
        setcount4(count4);
        setcount5(count5);


    }


    const getTicket = async () => {
       
     
        await DeviceStorge.getToken('userid').then((userId) => { setid(userId); console.log(id + "its user id") })

        try {

                         fetch('http://127.0.0.1:8889/report_tickets',{
                             method: 'GET',
                            headers: {

                                Accept: 'application/json',
                             'Content-Type': 'application/json'
                             }
                     })
                        .then(response => response.json())
                        .then(data => {
               console.log(data);
            SetList(data.result);
            gettStatus();

                              
                        })
                       .catch(err => console.error(err));

        }


        catch (error) {

            console.log(error);
        }




    }

    useEffect(() => {

        console.log('mounted or updated');
        getTicket();
        gettStatus();


    }, [List])


    return (

        <View style={styles.container}>
            <View style={{
                backgroundColor: '#3C7E66', width: wp('100%'), height: hp('20%'),

            }}>



<TouchableOpacity style={{ left: wp('10%'), top: hp('5%'), height: hp("4%"), width: wp("8%"), }}
                    onPress={() => navigation.toggleDrawer()}>
                    <Image source={require('../Image/menu.png')} style={styles.menu} />

                </TouchableOpacity>

                <View style={{
                    width: wp('11%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: hp('7%'),
                    borderRadius: wp('10%'),
                    backgroundColor: "#3C7E66",
                    left: wp('80%')
                }}>
                    <TouchableOpacity style={{
                        width: wp('11%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: hp('7%'),
                        borderRadius: wp('10%'),

                    }}>
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
                <View style={styles.card1_1}>
                    <Text style={{ fontSize: wp('5%') }}> {count5} </Text>
                    <Text style={{ fontSize: wp('5%') }}> {count3} </Text>
                    <Text style={{ fontSize: wp('5%') }}> {count2}  </Text>
                    <Text style={{ fontSize: wp('5%') }}> {count4}  </Text>
                    <Text style={{ fontSize: wp('5%') }}> {count1}  </Text>


                </View>
                <View style={styles.card1_2}>
                    <View style={{ backgroundColor: 'red', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                    <View style={{ backgroundColor: '#3634B1', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                    <View style={{ backgroundColor: '#BFB816', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                    <View style={{ backgroundColor: '#0BD38A', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                    <View style={{ backgroundColor: '#C4C4C4', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                </View>
            </View>
            <View style={styles.viewflat}>

<FlatList
    style={styles.flatstyle}
    data={List}

    keyExtractor={(item, index) => console.log("index")}
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
        else if (item[5] == 4) {  forward = ' الهيئة العامة  '; }


        return (


            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', top: hp('6%') }} >
                
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
    menu: {
        left: wp('10%'),
        top: hp('5%'),
        height: hp("4%"),
        width: wp("5%"),


    },
    back: {

        height: hp("4%"),
        width: wp("5%"),
    },
    card1: {
        borderRadius: 17,
        width: wp('90%'),
        height: hp('10%'),
        top: hp('5%'),
        backgroundColor: 'white'
    },
    card1_1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",

    },
    card1_2: {
        flex: 1,

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
    card2_1 : {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    state: {
        width: wp('4%'),
        height: hp('13%'),
        borderRadius: 30,
        backgroundColor: 'red'
    } ,
    state2: {
        width: wp('4%'),
        height: hp('13%'),
        borderRadius: 30,
        backgroundColor: '#3634B1'
    } ,
    state3: {
        width: wp('4%'),
        height: hp('13%'),
        borderRadius: 30,
        backgroundColor: '#0BD38A'
    } ,
    state4: {
        width: wp('4%'),
        height: hp('13%'),
        borderRadius: 30,
        backgroundColor: '#C4C4C4'
    } ,
    state5: {
        width: wp('4%'),
        height: hp('13%'),
        borderRadius: 30,
        backgroundColor: '#BFB816'
    } ,
   
    card3: {
        borderRadius: 17,
        width: wp('80%'),
        height: hp('13%'),
        marginBottom: hp('5%'),
        backgroundColor: 'white'
    },
    card4: {
        borderRadius: 17,
        width: wp('90%'),
        height: hp('13%'),
        top: hp('20%'),
        backgroundColor: 'white'
    },
    card5: {
        borderRadius: 17,
        width: wp('90%'),
        height: hp('13%'),
        top: hp('25%'),
        backgroundColor: 'white'
    },
    card6: {
        borderRadius: 17,
        width: wp('90%'),
        height: hp('13%'),
        top: hp('30%'),
        backgroundColor: 'white'
    },

    viewflat: {
        height: hp('100%'),
        width: wp('100%'),
        left: wp('10%'),
        paddingBottom: hp('40%')
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