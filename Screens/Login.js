import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OutlineInput from 'react-native-outline-input';
export default function Login({ navigation }) {

    const [counts, changes] = useState('رقم الهويه/هوية مقيم');
    const [phone, setPhone] = useState('');

    return (

        <View style={styles.container}>

            <Image source={require('../Image/imL.png')} style={styles.logo} />
            <Image source={require('../Image/backL.png')} style={styles.back} />
            <View style={styles.center}>
                <Text style={{ fontSize: 20, fontFamily: 'Cairo-Bold', color: "#3C7E66" }}>تسجيل الدخول</Text>

                <View style={styles.behind}>
                    <View style={styles.behind2}>
                        <View style={{ top: 10,  backgroundColor: 'Transparent'  
    }}>
         {/* <Image source={require('../Image/pass.png')} style={styles.ImageStyle} /> */}
                            <OutlineInput

style= {{backgroundColor: 'Transparent'  }}

label="رقم الهوية/هوية المقيم"




                                onChangeText={(value) => {
                                    setPhone(value);
                                }}
                            />
                        </View>






                        <View style={{ marginTop: 30 }}>
                            <OutlineInput



                                label="كلمة المرور"



                                onChangeText={(value) => {
                                    setPhone(value);
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Text> رقم الهوية/هوية المقيم</Text>
                          
                        </View>

                      
                        <View style={{ top: 20 }}>
                            <TouchableOpacity
                                style={styles.button1}
                                onPress={() => this.props.navigation.navigate('Signup')}>
                            
                                <Text style={styles.textbtn}> تسجيل الدخول </Text>
                            </TouchableOpacity>

                            <View style={{ left: wp('20%') ,  width: wp('50%'),
        height: hp('10%')}}>
                              
                                <TouchableOpacity
                                    style={styles.button2}
                                    onPress={() => this.props.navigation.navigate('Signup')}>

                                    <Text style={styles.text2}>  تسجيل جديد</Text>
                                </TouchableOpacity>
                               



                                <Text style={styles.text3}>  ليس لديك حساب ؟ </Text>

                            </View>


                        </View>
                    </View>
                </View>

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

        backgroundColor: 'rgba(196,196,196,0.33)',
        width: '100%',
        height: '80%',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    behind: {

        backgroundColor: '#3C7E66',
        width: '100%',
        height: '100%',
        bottom: 100,
        borderRadius: 30,
        left: 0,
        top: 20,

    },
    logo: {

        top: hp('3%'),
        height: hp("20%"),
        width: wp("80%"),
        resizeMode: 'contain',

    },
    back: {
        bottom: hp('15%'),
        height: "5%",
        width: "10%",
        left: wp('40%'),
        resizeMode: 'contain',
    },

    behind2: {

        width: wp('90%'),
        height: hp('100%'),
       
        left: 20,
        top: 20,
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
        width: wp('80%'),
        height: hp('7%'),
        left: wp('4%'),

        backgroundColor: "rgba(0,0,0,0.25)"

    },
    textbtn: {
        textAlign: 'center',
        fontSize: wp('4%'),
        top: hp('1.5%'),
        fontWeight: '400',
        fontFamily: 'Cairo-Bold',
        color: "rgba(196,196,196,1)",
        fontStyle: 'normal',
    },
    text1: {
        fontSize: wp('4%'),
        fontWeight: '400',
        fontFamily: 'Cairo-Bold',
        color: "black",
        fontStyle: 'normal',
    },
    text2: {
        fontSize: wp('4%'),
        fontWeight: '400',
        fontFamily: 'Cairo-Bold',
        color: "rgba(85,158,132,1)",
        fontStyle: 'normal',

    },
    text3: {
        fontSize: wp('4%'),
        fontWeight: '400',
        fontFamily: 'Cairo-Bold',
        top: hp('7%'),
        fontStyle: 'normal',
    right: wp('10%'),
        width: wp('40%'),
        height: hp('10%'),
        color: "rgba(196,196,196,1)",

    },
    button2: {
        opacity: 1,
    
        position: 'absolute',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        width: wp('40%'),
        height: hp('10%'),
        left: wp('23%'),
        top: hp('7%'),
       

    },
});