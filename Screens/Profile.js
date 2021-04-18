import React, { useState , useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Picker, TextInput,Modal } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import DeviceStorge from '../Service/DeviceStorge'
import Spinner from 'react-native-loading-spinner-overlay';
import { ConfirmDialog } from 'react-native-simple-dialogs';
export default function Profile({ navigation }) {

    const [name, setName] = useState("");
    const [id, setID] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [mobile, setMobile] = useState("");
    const [Done, IsDone] = useState(false)
    const [Error, IsError] = useState(false)
    const [error, setEror] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [dialogVisible, setdialogVisible] = useState(false)
    const [username, setusername] = useState("");
    
   
 

   const validateForm = () => {
        let isValid = true;
        const errors = {};
    
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   
        ;
    
        if (!name) {
          isValid = false;
         setdialogVisible(true);
         
        } 
        
        if (!email) {
          isValid = false;
          setdialogVisible(true);
        }
        else if (!(email.match(mailformat))) {
          isValid = false;
          setdialogVisible(true);
        }
    
        if (!pass) {
          isValid = false;
          setdialogVisible(true);
        } 
       
          if (!mobile) {
            isValid = false;
            setdialogVisible(true);
          } 
         
      setEror(errors)
        return isValid;
      }
   
    
     const getname = async() => {
      await DeviceStorge.getToken("username").then((UserName) => { setusername(UserName); console.log(UserName + "its user name") })
      await DeviceStorge.getToken("idnumber").then((userId) => { setID(userId); console.log(id +"ddd" ) })
    }
    
  useEffect(() => {
getname();



    }, [])
 

    const updateInfo = async () => {
      console.log(id +"ddd" )
       if(validateForm()) {
        setIsLoading(true)
           try {
          
           
           
            console.log(JSON.stringify({
              name: name,
              idNumber:id,
              phoneNumber:mobile,
              email: email,
              password:pass ,

          }))
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                idNumber:id ,
                phoneNumber:mobile,
                email: email,
                password:pass ,

            })
        };
        fetch('http://127.0.0.1:8889/updateUser', requestOptions)
            .then(response => response.json())
            .then(data => 
             {  console.log(data)

               if(data.result != "No user with this Id number"){
               setIsLoading(false)
                IsDone(true)
               setName('');setPass('');setID('');setMobile('');setEmail('');
                console.log(data)}
                else{
                  setIsLoading(false)
               IsError(true)
              setName('');setPass('');setID('');setMobile('');setEmail('');
               console.log(error)

                }

            }
                );
           } catch (error) {
            setIsLoading(false)
               IsError(true)
               setName('');setPass('');setID('');setMobile('');setEmail('');
               console.log(error)
           }
  
          setName('');setPass('');setID('');setMobile('');setEmail('');



  }
    }





    return (
       <KeyboardAvoidingScrollView>
             <ConfirmDialog
          message="قم بملأ الحقل"
          visible={dialogVisible}
          onTouchOutside={() => setdialogVisible(false)}
          positiveButton={{
            title: "ok",
            onPress: () => setdialogVisible(false)
          }}

        />
                 
 <Spinner
          visible={isLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
<Modal

visible={Error}

transparent={true}

animationType={"fade"}

onRequestClose={() => { IsError(!Error) }} >
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


  <View style={styles.Alert_Main_View}>




    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => { IsError(false); }}   >

      <Image
        source={require('../Image/Wrong.png')}
      >

      </Image>

    </TouchableOpacity>
    <TouchableOpacity
      style={styles.buttoncancel}
      onPress={() => { Isvsisible(false); }}
      activeOpacity={0.7}
    >

      <Text style={styles.cancel}>   حدث خطا لايوجد حساب بهذه المعلومات</Text>

    </TouchableOpacity>

  </View>
</View>


</Modal>

<Modal

visible={Done}

transparent={true}

animationType={"fade"}

onRequestClose={() => { IsDone(!Done) }} >
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


  <View style={styles.Alert_Main_View}>

    <TouchableOpacity
      // style={styles.buttonStyle} 
      onPress={() => { IsDone(false); }}
      activeOpacity={0.7}
    >

      <Image
        source={require('../Image/correct.png')}
      >

      </Image>

    </TouchableOpacity>



    <TouchableOpacity
      style={styles.buttoncancel}
      onPress={() => { IsDone(false); }}
      activeOpacity={0.7}
    >

      <Text style={styles.cancel}>تم الارسال</Text>

    </TouchableOpacity>

  </View>
</View>


</Modal>
            <View style={styles.container}>
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
                            onPress={() => navigation.toggleDrawer()}>

                            <Image source={require('../Image/backL.png')} style={styles.back} />
                        </TouchableOpacity>
                    </View>
                    <ImageBackground source={require('../Image/circle.png')} style={{ bottom: hp('2%') }}>
                        <Text style={styles.logo} >مرحبا {username} </Text>
                    </ImageBackground>
                </View>

                <Text style={{ fontSize: wp('5%'), fontFamily: 'Cairo-Bold', right: wp('15%'), top: hp('10%') }}>تعديل الملف الشخصي</Text>
                <View style={{ right: wp('44%'), top: hp('13%') }}>

                </View>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", flexWrap: "wrap", }} >

                    <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", flexWrap: "wrap", top: hp('20%') }}>
                        <Text style = {{ right: wp('5%'), fontSize: wp('4%'), bottom: hp('8%'),fontWeight: '400',fontFamily: 'Cairo-Bold',color: "black",fontStyle: 'normal',}}>الاسم:</Text>
                        <TextInput style={styles.input1}
                             onChangeText={(value) => { setName(value);}}
                             value={name}
                         >

                        </TextInput>
                        <Text style = {{ right: wp('5%'), fontSize: wp('4%'), bottom: hp('9%'),fontWeight: '400',fontFamily: 'Cairo-Bold',color: "black",fontStyle: 'normal',}}>الايميل:</Text>
                        <TextInput style={styles.input2}
                          onChangeText={(value) => { setEmail(value); }}
                          value={email}
                         >

                        </TextInput>
                        <Text style = {{ right: wp('5%'), fontSize: wp('4%'), bottom: hp('9%'),fontWeight: '400',fontFamily: 'Cairo-Bold',color: "black",fontStyle: 'normal',}}>كلمة المرور:</Text>
                        <TextInput style={styles.input3}
                         onChangeText={(value) => {
                            setPass(value);
                        }}
                        secureTextEntry={true}
                        
                   
                        value={pass} >

                        </TextInput>
                        <Text style = {{ right: wp('5%'), fontSize: wp('4%'), bottom: hp('9%'),fontWeight: '400',fontFamily: 'Cairo-Bold',color: "black",fontStyle: 'normal',}}>رقم الجوال:</Text>
                        <TextInput style={styles.input4}
                          onChangeText={(value) => {
                            setMobile(value);
                        }}
                        
                        
                        keyboardType={'numeric'}
                        value={mobile} >

                        </TextInput>


                    </View>

                    <TouchableOpacity
                            style={styles.button2}
                            onPress={() => updateInfo()}>

                            <Text style={styles.textbtn}> حفظ التغييرات </Text>
                        </TouchableOpacity>


                    <View style={styles.v4}>
                        {/* <View style={{ bottom: wp('50%') }}> */}
                        
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
        height: hp('65%'),
        borderRadius: 30,
        backgroundColor: 'red',

    },

    v1: {
        backgroundColor: 'rgba(85,158,132,0.31)',
        borderRadius: 15,
        width: wp('23%'),
        height: hp('5.5%'),

        bottom: hp('48%'),
        alignContent: 'center',
        alignItems: 'center'
    },
    v2: {
        backgroundColor: 'rgba(85,158,132,0.31)',
        borderRadius: 15,
        width: wp('80%'),
        height: hp('5.5%'),

        bottom: hp('46%'),

    },
    v3: {
        backgroundColor: 'rgba(85,158,132,0.31)',
        borderRadius: 15,
        width: wp('80%'),
        height: hp('5.5%'),

        bottom: hp('44%'),

    },
    v4: {
        backgroundColor: 'rgba(85,158,132,0.31)',
        borderRadius: 15,
        width: wp('20%'),
        height: hp('15%'),
        top: hp('15%'),
    },

    text1: {
        fontSize: wp('4%'),
        fontFamily: 'Cairo-Black',
        justifyContent: "flex-start"
    },
    text2: {
        left: wp('4%'),
        fontSize: wp('4%'),
        fontFamily: 'Cairo-Black',
        justifyContent: "flex-start"
    },
    input1:{
    
        bottom: hp('8%'),
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        borderRadius: 10,
        paddingLeft: 0,
        width: wp('70%'),
        height: hp('7%'),
       // left: wp('45%'),
        backgroundColor: "rgba(85,158,132,0.31)"

    },
    input2:{
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        borderRadius: 10,
        paddingLeft: 0,
        width: wp('70%'),
        height: hp('7%'),
        bottom: hp('8%'),
        backgroundColor: "rgba(85,158,132,0.31)"

       },
       input3:{
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        borderRadius: 10,
        paddingLeft: 0,
        width: wp('70%'),
        height: hp('7%'),
        bottom: hp('8%'),
        backgroundColor: "rgba(85,158,132,0.31)"

   
       },
       input4:{
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        borderRadius: 10,
        paddingLeft: 0,
        width: wp('70%'),
        height: hp('7%'),
        bottom: hp('8%'),
        backgroundColor: "rgba(85,158,132,0.31)"

   
       },
    button2: {
        opacity: 1,
        
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        borderRadius: 20,
        paddingLeft: 0,
        width: wp('70%'),
        height: hp('8%'),
        right: wp('45%'),
        top:hp('14%'),
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
    menu: {

        height: hp("5%"),
        width: wp("7%"),


    },
    Alert_Main_View: {

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        height: hp('40%'),
        width: wp('70%'),
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,

    },
    cancel: {
        fontSize: wp('4.5%'),
        color: "black",
        fontFamily: 'Cairo-Regular',
        // top:hp('5%') ,
        right: wp('15%')
    },
    buttoncancel: {
        color: "white",
        fontFamily: 'Cairo-Regular',
        top: hp('4%'),
        left: wp('15%')
    },


});