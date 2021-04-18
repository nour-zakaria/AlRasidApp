import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OutlineInput from 'react-native-outline-input';
import Spinner from 'react-native-loading-spinner-overlay';
import DeviceStorge from '../Service/DeviceStorge'
import { ConfirmDialog } from 'react-native-simple-dialogs';
export default function Login({ navigation }) {



    const [id, setID] = useState("");
    const [pass, setPass] = useState("");



    const [error, setEror] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [dialogVisible, setdialogVisible] = useState(false)




    const validateForm = () => {
        let isValid = true;
        const errors = {};
        if (!pass) {
            isValid = false;
            errors.pass = "لم تدخل كلمة مرور بعد";
        } else if (pass.length < 6) {
            isValid = false;
            errors.pass = "كلمة المرور يجب ان تكون على الاقل 6 احرف ";
        }
        if (!id) {
            isValid = false;
            errors.id = "لم تدخل رقم الهوية بعد  "; } 
             else if (id.length != 10) {
            isValid = false;
            errors.id ="ؤقم الهوية يجب ان يتكون من 10 ارقام"
          } 
        

        setEror(errors)
        return isValid;
    }

    const signin = async () => {
   
       if(validateForm()) {
        setIsLoading(true)


        try {
            const response = await fetch("http://127.0.0.1:8889/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    idNumber: id,
                    password: pass

                })
            })
// Response => fail = {result : []} ,sucess = {result : [[1,'user' ,1234567891,user@gmai.com ,1234566]]}
            const res = await response.json()
            if(res.result != null){
                // user is exist in DB
                console.log("upload succes", res);
                         setPass(''); setID('');
                         //Store User Info In Local DB(Async Storage)
                         //res.result = [[1,'user' ,1234567891,user@gmai.com ,1234566]]
                         //res.result[0] =[1,'user' ,1234567891,user@gmai.com ,1234566]
                         //res.result[0][0]
                        console.log("upload succes", res.result[0][0]);
                        await DeviceStorge.storeToken("userid" ,res.result[0][0])
                        await DeviceStorge.storeToken("idnumber" , Number(res.result[0][2]))
                        await DeviceStorge.storeToken("username" ,res.result[0][1])
                        
                        console.log("upload succes", res);
                        setIsLoading(false)
                        navigation.navigate('Map');
            }
            else {
                //if uses doesnt exist in DB
                setIsLoading(false)
                console.log(error);
                setPass(''); setID('');
                setdialogVisible(true)
            

            }
           
                  
                   
               

        } catch (error) {
            setIsLoading(false)
            console.log(error);
            setPass(''); setID('');
            setdialogVisible(true)
          
        }
    }
       

    }


    return (

        <View style={styles.container}>
            <Spinner
                visible={isLoading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <ConfirmDialog
                message="الحساب غير موجود مسبقا"
                visible={dialogVisible}
                onTouchOutside={() => setdialogVisible(false)}
                positiveButton={{
                    title: "ok",
                    onPress: () => setdialogVisible(false)
                }}

            />
            <Image source={require('../Image/imL.png')} style={styles.logo} />
            <Image source={require('../Image/backL.png')} style={styles.back} />
            <View style={styles.center}>
                <Text style={{ fontSize: 20, fontFamily: 'Cairo-Bold', color: "#3C7E66" }}>تسجيل الدخول</Text>

                <View style={styles.behind}>
                    <View style={styles.behind2}>
                        <View style={{
                            top: 10, borderRadius:50
                        }}>

                            <OutlineInput
activeLabelColor= "rgba(196,196,196,1)"

                             

                                label="رقم الهوية/هوية المقيم"
                                onChangeText={(value) => { setID(value); }}
                                value={id}
                            />
                            <Text style={{ color: 'red', fontFamily: 'Cairo-Regular' }}>{error.id}</Text>
                        </View>


                        <View style={{ marginTop: 30 }}>
                            <OutlineInput
                                label="كلمة المرور"
                                onChangeText={(value) => { setPass(value); }}

                                value={pass}

                            />
                            <Text style={{ color: 'red', fontFamily: 'Cairo-Regular' }}>{error.pass}</Text>
                            <Text style={{color:'white',left:wp('55%'), fontSize: wp('3.5%'),fontFamily: 'Cairo-Bold',}}>  نسيت كلمة المرور؟</Text>
                        </View>
                      


                        <View style={{ top: 30 }}>
                            <TouchableOpacity
                                style={styles.button1}
                                onPress={() => signin()}>

                                <Text style={styles.textbtn}> تسجيل الدخول </Text>
                            </TouchableOpacity>

                            <View style={{
                                left: wp('20%'), width: wp('50%'),
                                height: hp('10%')
                            }}>

                                <TouchableOpacity
                                    style={styles.button2}
                                    onPress={() => navigation.navigate('Register')}>

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
        borderRadius: 30,

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