import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Ticket({ navigation }) {

    const [counts, changes] = useState('رقم الهويه/هوية مقيم');
    const [phone, setPhone] = useState('');

    return (

        <View style={styles.container}>
            <View style={{
                backgroundColor: '#3C7E66', width: wp('100%'), height: hp('20%'),

            }}>



                <Image source={require('../Image/back.png')} style={styles.menu} />

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
                    <Text style={{ fontSize: wp('5%') }}> 1 </Text>
                    <Text style={{ fontSize: wp('5%') }}> 1 </Text>
                    <Text style={{ fontSize: wp('5%') }}> 1 </Text>
                    <Text style={{ fontSize: wp('5%') }}> 1 </Text>
                    <Text style={{ fontSize: wp('5%') }}> 1 </Text>


                </View>
                <View style={styles.card1_2}>
                    <View style={{ backgroundColor: 'red', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                    <View style={{ backgroundColor: '#3634B1', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                    <View style={{ backgroundColor: '#BFB816', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                    <View style={{ backgroundColor: '#0BD38A', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                    <View style={{ backgroundColor: '#C4C4C4', width: wp('7%'), height: hp('1.5%'), borderRadius: 10 }}></View>
                </View>
            </View>
            <ScrollView
              contentContainerStyle={{paddingBottom: hp('40%')}}
             style= {{width :wp ('100%') , height :hp ('80%') ,right :wp ('5%') , left :wp ('5%') }}>
            <View elevation={5} style={styles.card2}>

                <View style= {styles.card2_1}>
                    <View style={styles.state}/>

                  


                    <View style = {{left:wp ('20%')}}>
                        <Text style = {{fontSize:wp('5%'),fontFamily : 'Cairo-Bold',  left:wp ('4%')}}>رقم التذكرة : 4321 </Text>
                        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular', right:wp ('10%')}}> 4:40PM:10/11/2020</Text>
                        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular',  left:wp ('4%')}}>الجهة :وزارة التعليم-فرع القنفذة</Text>
                    </View>

                    <View>
                        <Text style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B' , top: hp('0.57%') , left : wp('8%')}}>الاولوية :متوسطة</Text>
                       <View style = {{ flex: 1,flexDirection: "row",flexWrap: "wrap",  top: hp('4.5%') , left : wp('9%')}}>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B'}}> الحالة :</Text>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'red'}}>مستبعدة</Text>
                         </View>
                    </View>


                </View>
            </View>
            <View elevation={5} style={styles.card3}>

                <View style= {styles.card2_1}>
                    <View style={styles.state2}/>

                  


                    <View style = {{left:wp ('20%')}}>
                        <Text style = {{fontSize:wp('5%'),fontFamily : 'Cairo-Bold',  left:wp ('4%')}}>رقم التذكرة : 4321 </Text>
                        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular', right:wp ('10%')}}> 4:40PM:10/11/2020</Text>
                        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular',  left:wp ('4%')}}>الجهة :وزارة التعليم-فرع القنفذة</Text>
                    </View>

                    <View>
                        <Text style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B' , top: hp('0.57%') , left : wp('8%')}}>الاولوية :متوسطة</Text>
                       <View style = {{ flex: 1,flexDirection: "row",flexWrap: "wrap",  top: hp('4.5%') , left : wp('5%')}}>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B'}}> الحالة :</Text>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#3634B1'}}>قيد التنفيذ</Text>
                         </View>
                    </View>


                </View>
            </View>
            <View elevation={5} style={styles.card4}>

                <View style= {styles.card2_1}>
                    <View style={styles.state3}/>

                  


                    <View style = {{left:wp ('20%')}}>
                        <Text style = {{fontSize:wp('5%'),fontFamily : 'Cairo-Bold',  left:wp ('4%')}}>رقم التذكرة : 4321 </Text>
                        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular', right:wp ('10%')}}> 4:40PM:10/11/2020</Text>
                        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular',  left:wp ('4%')}}>الجهة :وزارة التعليم-فرع القنفذة</Text>
                    </View>

                    <View>
                        <Text style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B' , top: hp('0.57%') , left : wp('8%')}}>الاولوية :متوسطة</Text>
                       <View style = {{ flex: 1,flexDirection: "row",flexWrap: "wrap",  top: hp('4.5%') , left : wp('9%')}}>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B'}}> الحالة :</Text>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#0BD38A'}}>تم الاصلاح</Text>
                         </View>
                    </View>


                </View>
            </View>
            <View elevation={5} style={styles.card5}>

                <View style= {styles.card2_1}>
                    <View style={styles.state4}/>

                  


                    <View style = {{left:wp ('20%')}}>
                        <Text style = {{fontSize:wp('5%'),fontFamily : 'Cairo-Bold',  left:wp ('4%')}}>رقم التذكرة : 4321 </Text>
                        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular', right:wp ('10%')}}> 4:40PM:10/11/2020</Text>
                        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular',  left:wp ('4%')}}>الجهة :وزارة التعليم-فرع القنفذة</Text>
                    </View>

                    <View>
                        <Text style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B' , top: hp('0.57%') , left : wp('8%')}}>الاولوية :متوسطة</Text>
                       <View style = {{ flex: 1,flexDirection: "row",flexWrap: "wrap",  top: hp('4.5%') , left : wp('5%')}}>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B'}}> الحالة :</Text>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#C4C4C4'}}>قيد الانتظار</Text>
                         </View>
                    </View>


                </View>
            </View>
            <View elevation={5} style={styles.card6}>

<View style= {styles.card2_1}>
    <View style={styles.state5}/>

  


    <View style = {{left:wp ('20%')}}>
        <Text style = {{fontSize:wp('5%'),fontFamily : 'Cairo-Bold',  left:wp ('4%')}}>رقم التذكرة : 4321 </Text>
        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular', right:wp ('10%')}}> 4:40PM:10/11/2020</Text>
        <Text style = {{fontSize:wp('3.5%'), fontFamily : 'Cairo-Regular',  left:wp ('4%')}}>الجهة :وزارة التعليم-فرع القنفذة</Text>
    </View>

    <View>
        <Text style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B' , top: hp('0.57%') , left : wp('8%')}}>الاولوية :متوسطة</Text>
       <View style = {{ flex: 1,flexDirection: "row",flexWrap: "wrap",  top: hp('4.5%') , left : wp('9%')}}>
        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B'}}> الحالة :</Text>
        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#BFB816'}}>مسندة</Text>
         </View>
    </View>


</View>
</View>
            </ScrollView>


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
        width: wp('90%'),
        height: hp('13%'),
        top: hp('15%'),
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



});