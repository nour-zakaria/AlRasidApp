import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OutlineInput from 'react-native-outline-input';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import DeviceStorge from '../Service/DeviceStorge'
export default function Register({ navigation }) {

  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setEror] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [dialogVisible, setdialogVisible] = useState(false)




  const validateForm = () => {
    let isValid = true;
    const errors = {};
    // const [error, setEror] = useState({});
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var mobileformat = /^[0-9\b]+$/
      ;

    if (!name) {
      isValid = false;
      errors.name = "لم تدخل الاسم  بعد"

    } else if (name.length < 3 || name.length > 15) {
      isValid = false;
      errors.name = "الاسم يجب ان يكون يتكون من 3 احرف على الاقل ولايزيد عن 15"
    }

    if (!email) {
      isValid = false;
      errors.email = 'لم تدخل بريدك الإلكتروني بعد'
    }
    else if (!(email.match(mailformat))) {
      isValid = false;
      errors.email = 'الرجاء ادخال البريد الالكرتوني بشكل صحيح'
    }

    if (!pass) {
      isValid = false;
      errors.pass = "لم تدخل كلمة مرور بعد";
    } else if (pass.length < 6) {
      isValid = false;
      errors.pass = "كلمة المرور يجب ان تكون على الاقل 6 احرف ";
    }
    if (!id) {
      isValid = false;
      errors.id = "لم تدخل رقم الهوية بعد  ";
    } else if (id.length != 10) {
      isValid = false;
      errors.id = "ؤقم الهوية يجب ان يتكون من 10 ارقام"
    }
    if (!mobile) {
      isValid = false;
      errors.mobile = "لم تدخل رقم  الهاتف بعد";}
    // } else if (mobileformat) {
    //   isValid = false;
    //   errors.mobile = "رقم الهاتق يجب ان لايحتوي على حروف";
    // }

    setEror(errors)
    return isValid;
  }









  const reg = async () => {
    if (validateForm()){
     

      try {
        setIsLoading(true)
        const response =  await  fetch("http://127.0.0.1:8889/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            idNumber: id,
            phoneNumber: mobile,
            email: email,
            password: pass

          })
        })
        const res = await response.json()
        console.log(res)
        console.log(res.name )
        if((res.name != 'This email or Id number is already exists in database')){
          setName(''); setPass(''); setID(''); setMobile(''); setEmail('');
            setIsLoading(false)
            navigation.navigate('Login');
           // console.log("register succes", res);
        }
        else{
          setIsLoading(false)
          console.log(error)
          setName(''); setPass(''); setID(''); setMobile(''); setEmail('');
          setdialogVisible(true)
        }
            
        

      }
      catch (error) {
        setName(''); setPass(''); setID(''); setMobile(''); setEmail('');
        setdialogVisible(true)
      }

  
    }

  }












  return (
    <KeyboardAvoidingScrollView>
      <View style={styles.container}>
        <Spinner
          visible={isLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <ConfirmDialog
          message="الحساب  موجود مسبقا"
          visible={dialogVisible}
          onTouchOutside={() => setdialogVisible(false)}
          positiveButton={{
            title: "ok",
            onPress: () => setdialogVisible(false)
          }}

        />
        <Image source={require('../Image/image-15.png')} style={styles.logo} />
        <Image source={require('../Image/back.png')} style={styles.back} />
        <View style={styles.center}>
          <Text style={{ fontSize: 20, fontFamily: 'Cairo-Bold', color: 'white' }}>تسجيل جديد</Text>

          <View style={styles.behind}>
            <View style={styles.behind2}>
              <View style={{ top: 10, }}>

                <OutlineInput
                  label="اسم المستخدم"
                  onChangeText={(value) => { setName(value); }}
                  value={name}
                />
                <Text style={{ color: 'red', fontFamily: 'Cairo-Regular' }}>{error.name}</Text>
              </View>


              <View style={{ marginTop: 30 }}>
                <OutlineInput
                  label="رقم الهوية/هوية المقيم"
                  onChangeText={(value) => { setID(value); }}
                  value={id} />
                <Text style={{ color: 'red', fontFamily: 'Cairo-Regular' }}>{error.id}</Text>
              </View>

              <View style={{ marginTop: 30 }}>
                <OutlineInput
                  label="البريد الالكتروني"
                  onChangeText={(value) => { setEmail(value); }}
                  value={email}
                />
                <Text style={{ color: 'red', fontFamily: 'Cairo-Regular' }}>{error.email}</Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <OutlineInput
                  label="كلمة المرور"
                  onChangeText={(value) => {
                    setPass(value);
                  }}
                  secureTextEntry={true}


                  value={pass}
                />
                <Text style={{ color: 'red', fontFamily: 'Cairo-Regular' }}>{error.pass}</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <OutlineInput
                  label="رقم الجوال"
                  onChangeText={(value) => {
                    setMobile(value);
                  }}


                  keyboardType={'numeric'}
                  value={mobile}
                />
                <Text style={{ color: 'red', fontFamily: 'Cairo-Regular' }}>{error.mobile}</Text>
              </View>

              <View style={{ top: 20 }}>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => reg()}>

                  <Text style={styles.textbtn}> دخول </Text>
                </TouchableOpacity>

                <View style={{
                  left: wp('20%'), width: wp('50%'),
                  height: hp('10%')
                }}>

                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate('Login')}>

                    <Text style={styles.text2}>  تسجيل دخول</Text>
                  </TouchableOpacity>




                  <Text style={styles.text3}> لديك حساب ؟</Text>

                </View>


              </View>
            </View>
          </View>

        </View>

      </View>
    </KeyboardAvoidingScrollView>);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3C7E66',

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

    backgroundColor: '#ffffff',
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

    backgroundColor: "#3C7E66"

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
    color: "black",
    fontStyle: 'normal',

  },
  text3: {
    fontSize: wp('4%'),
    fontWeight: '400',
    fontFamily: 'Cairo-Bold',
    top: hp('7%'),
    fontStyle: 'normal',

    width: wp('25%'),
    height: hp('10%'),
    color: "rgba(85,158,132,0.62)",

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
  spinnerTextStyle: {
    color: 'white'
  }

});