import React, { useState , useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Picker, TextInput , Modal } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import DeviceStorge from '../Service/DeviceStorge'
import { LogBox } from 'react-native';
export default function TicketInfo({ navigation }) {
    const [Done, IsDone] = useState(false)
    const [Error, IsError] = useState(false)
    const [forword, isforword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [proi, setpriority] = useState('');
    const [status, setstatus] = useState('');
    const [des, setdescription] = useState('');
    const [color, setcolor] = useState('');
    const [location, setLocation] = useState('');
    const [id, setid] = useState("")
    const [idTicket, setidTicket] = useState("")
    const [key1, SetKey1] = useState("");
    const [key2, SetKey2] = useState("");
    const [selectedValue, setSelectedValue] = useState(" المنشأةالمتضررة");

    useEffect(() => {
       LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
     LogBox.ignoreAllLogs();
   // await DeviceStorge.getToken("location").then((loc) => { setLocation(loc)  ; console.log(loc + "its location")})


        const data1 = navigation.getParam("dest", 'NO-User'); 
       const data2 = navigation.getParam("priority", 'NO-User'); 
       const data3 = navigation.getParam("status", 'NO-User'); 
       const data4 = navigation.getParam("Description", 'NO-User'); 
       const data5 = navigation.getParam("backgound", 'NO-User'); 
       const data6 = navigation.getParam("id", 'NO-User'); 

       isforword(data1)
    setpriority(data2)
     setstatus(data3)
      setdescription(data4)
     setcolor(data5)
    //  setLocation(location)
    setidTicket(data6)



    }, [])

    const UpdateTicket = async () => {

        await DeviceStorge.getToken("userid").then((userId) => { setid(userId); console.log(id + "its user id") })
        setIsLoading(true)
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: parseInt(idTicket),
                    description: des,
                    reportBy: parseInt(id),
                    agency: 1
                })
            };
            fetch('http://127.0.0.1:8889/updateTicket', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.result != "No ticket with this Id"){  setIsLoading(false);IsDone(true) ;console.log(data);}
                else { setIsLoading(false);IsError(true) ;console.log(data);}
                 })

            .catch(err => { setIsLoading(false);IsError(true); console.log( err)
              });

        } catch (error) {
            setIsLoading(false);
            IsError(true)

        }

      


    }
    const DeleteTicket = async () => {

        setIsLoading(true)
        try {
console.log(idTicket)

            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: parseInt(idTicket),
                   
                })
            };
          await  fetch('http://127.0.0.1:8889/deleteTicket', requestOptions)
               
                .then(response => response.json())
                .then(data => {
                    if(data.result != "No ticket with this Id"){  setIsLoading(false);IsDone(true) ;console.log(data); navigation.navigate('TicketUser');}
                    else { setIsLoading(false);IsError(true) ;console.log(data);}
                     })
 
                .catch(err => {  setIsLoading(false);IsError(true); console.log( err)
                  });
                
              
                   

        } 
        catch (error) {
            setIsLoading(false);
            IsError(true)

        }
 
       


    }





    return (
        <KeyboardAvoidingScrollView
        >

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

                            <Text style={styles.cancel}>حدث خطأ </Text>

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
                            onPress={() => navigation.navigate('TicketUser')}>

                            <Image source={require('../Image/backL.png')} style={styles.back} />
                        </TouchableOpacity>
                    </View>
                    <ImageBackground source={require('../Image/circle.png')} style={{ bottom: hp('2%') }}>
                        <Text style={styles.logo} >معلومات التذكرة </Text>
                    </ImageBackground>
                </View>

                <Text style={{ fontSize: wp('5%'), fontFamily: 'Cairo-Bold', right: wp('30%'), top: hp('12%') }}>الصور</Text>
                <View style={{ right: wp('44%'), top: hp('13%') }}>
                    <View style={{width: wp('4%'), height: hp('65%'), borderRadius: 30,backgroundColor: color,}} />
                </View>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", flexWrap: "wrap", }} >

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", bottom: hp('50%') }}>
                        <Image source={require('../Image/pic.png')} />
                        <Image source={require('../Image/pic.png')} />
                        <View>
                            <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Black', color: '#7D7B7B', top: hp('0.57%'), left: wp('6%') }}>الاولوية :{proi}</Text>
                            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", top: hp('2%'), left: wp('5%') }}>
                                <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Black', color: '#7D7B7B' }}> الحالة :</Text>
                                <Text style={{ fontSize: wp('3.5%'), fontFamily: 'Cairo-Black', color: color }}> {status}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.v1}>
                        <Text style={styles.text1}> مباني</Text>
                    </View>

                    <View style={styles.v2}>
                        <Picker


                            selectedValue={selectedValue}
                            style={{ width: wp('80%'), height: hp('7%'), }}
                            onValueChange={(itemValue, itemIndex) => { setSelectedValue(itemValue), SetKey1(itemIndex) }}
                        >
                            <Picker.Item label="المنشأة المتضررة" value="المنشأة المتضررة" style={styles.datastyle} />
                            <Picker.Item label="مستشفى" value="مستشفى" style={styles.datastyle} />
                            <Picker.Item label="مسجد" value="مسجد" />
                            <Picker.Item label="متحف" value="متحف" />
                            <Picker.Item label="فندق" value="فندق" />
                            <Picker.Item label="مبنى حكومي" value="مبنى حكومي" />
                            <Picker.Item label="مدرسة" value="مدرسة" />
                        </Picker>
                    </View>
                    <View style={styles.v3}>
                        <TextInput
                            placeholder='الموقع'
                          //  placeholderTextColor='balck'
                            onChangeText={(value) => { setLocation(value); }}

                            value={location}

                        >

                        </TextInput>

                    </View>
                    <View style={styles.v4}>
                        <TextInput
                            placeholder={des}
                           // placeholderTextColor='balck'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => setdescription(text)}
                            value={des}
                        />

                    </View>


                    <View style={{ bottom: wp('60%') }}>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={() => UpdateTicket()}>

                            <Text style={styles.textbtn}> تعديل </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ bottom: wp('60%') }}>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={() => DeleteTicket()}>

                            <Text style={styles.textbtn}> حذف </Text>
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
        width: wp('80%'),
        height: hp('15%'),
        bottom: hp('42%'),
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
        width: wp('30%'),
        height: hp('8%'),
        left: wp('45%'),
        backgroundColor: "rgba(85,158,132,0.97)"

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
        borderRadius: 30,
        paddingLeft: 0,
        width: wp('30%'),
        height: hp('8%'),
        right: wp('45%'),
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