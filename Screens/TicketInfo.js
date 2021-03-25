import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import Textarea from 'react-native-textarea';
export default function TicketInfo({ navigation }) {

    const [counts, changes] = useState('رقم الهويه/هوية مقيم');
    const [phone, setPhone] = useState('');

    return (
        <KeyboardAvoidingScrollView
        >
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
                        <Text style={styles.logo} >معلومات التذكرة </Text>
                    </ImageBackground>
                </View>

                <Text style={{ fontSize: wp('5%'), fontFamily: 'Cairo-Bold', right: wp('30%'), top: hp('12%') }}>الصور</Text>
                <View style={{ right: wp('43%'), top: hp('13%') }}>
                    <View style={styles.state} />
                </View>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", flexWrap: "wrap", }} >

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", bottom: hp('35%') }}>
                        <Image source={require('../Image/pic.png')} />
                        <Image source={require('../Image/pic.png')} />
                        <View>
                        <Text style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B' , top: hp('0.57%') , left : wp('6%')}}>الاولوية :متوسطة</Text>
                       <View style = {{ flex: 1,flexDirection: "row",flexWrap: "wrap",  top: hp('2%') , left : wp('5%')}}>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B'}}> الحالة :</Text>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#0BD38A'}}>تم الاصلاح</Text>
                         </View>
                    </View>
                    </View>
                    <View style={styles.textAreaContainer} >
                        <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Black', left: wp('5%') }}>تعليق</Text>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"

                            numberOfLines={5}
                            multiline={true}
                        />
                    </View>
                    <View style ={{  flex: 1,flexDirection: "row",justifyContent: "space-around",flexWrap: "wrap", bottom :hp('27%')}}>
<Image source = {require('../Image/star.png')}/>
<Image source = {require('../Image/star.png')}/>
<Image source = {require('../Image/star.png')}/>
<Image source = {require('../Image/star.png')}/>
    

                    </View>
                    <View style={{ bottom: wp('40%') }}>
                            <TouchableOpacity
                                style={styles.button1}
                                onPress={() => this.props.navigation.navigate('Signup')}>
                            
                                <Text style={styles.textbtn}> تقييم </Text>
                            </TouchableOpacity>
                            </View>

                </View>

            </View>
        </KeyboardAvoidingScrollView>
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
        fontSize: wp('6%'),
        fontWeight: '500',
        fontFamily: 'Cairo-SemiBold',
        color: "white",
        fontStyle: 'normal',
        left: wp('30%'),
        top: ('20%'),
        height: hp("20%"),

        width: wp("50%"),



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

    state: {
        width: wp('4%'),
        height: hp('50%'),
        borderRadius: 30,
        backgroundColor: '#059D66',

    },
    input: {




        left: wp('3%'),

    },

    area: {



        width: wp('75%'),
        height: hp('15%'),
        borderRadius: 20,
        bottom: hp('25%'),

    },

    textAreaContainer: {
        backgroundColor: 'rgba(85,158,132,0.31)',
        borderRadius: 20,
        width: wp('75%'),
        height: hp('15%'),
        padding: 5,
        bottom: hp('30%'),
    },
    textArea: {
        height: 300,
        width: wp('75%'),
        height: hp('10%'),
        borderRadius: 20,
        right: wp('1%'),

        fontFamily: 'Cairo-Black',
        justifyContent: "flex-start"
    },
    button1: {
        opacity: 1,
        position: 'absolute',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        borderRadius: 30,
        paddingLeft: 0,
        width: wp('50%'),
        height: hp('8%'),
        left: wp('15%'),
        backgroundColor: "rgba(85,158,132,0.97)"

    },
    textbtn: {
        textAlign: 'center',
        fontSize: wp('4%'),
        top: hp('1.5%'),
        fontWeight: '400',
        fontFamily: 'Cairo-Bold',
        color: "black",
        fontStyle: 'normal',
    },


});