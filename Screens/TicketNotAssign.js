import React, { useState ,useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';

export default function TicketNotAssign ({ navigation }) {

    const [forword, isforword] = useState('');
    const [des, setdescription] = useState('');



    useEffect(() => {

        const data1 = navigation.getParam("dest", 'NO-User'); 
       const data2 = navigation.getParam("Description", 'NO-User'); 
       setdescription(data1)
       isforword(data2)
     


    }, [])





    return (
        <KeyboardAvoidingScrollView
        >
            <View style={styles.container}>
                <View style={{
                    backgroundColor: '#3C7E66', width: wp('100%'), height: hp('20%'),

                }}>
 <TouchableOpacity style = {{ left: wp('10%'),  top: hp('5%'), height: hp("4%"), width: wp("8%"),}} 
  onPress={() => navigation.toggleDrawer() }>
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
                        onPress={()=> navigation.navigate('TicketUser')}
                        >
                            <Image source={require('../Image/backL.png')} style={styles.back} />
                        </TouchableOpacity>
                    </View>
                    <ImageBackground source={require('../Image/circle.png')} style={{ bottom: hp('2%') }}>
                        <Text style={styles.logo} >?????????????? ?????????????? </Text>
                    </ImageBackground>
                </View>

                <Text style={{ fontSize: wp('5%'), fontFamily: 'Cairo-Bold', right: wp('30%'), top: hp('12%') }}>??????????</Text>
                <View style={{ right: wp('44%'), top: hp('13%') }}>
                    <View style={styles.state} />
                </View>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", flexWrap: "wrap", }} >

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", bottom: hp('50%') }}>
                        <Image source={require('../Image/pic.png')} />
                        <Image source={require('../Image/pic.png')} />
                        <View>
                        <Text style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B' , top: hp('0.57%') , left : wp('6%')}}>???????????????? :????????????</Text>
                       <View style = {{ flex: 1,flexDirection: "row",flexWrap: "wrap",  top: hp('2%') , left : wp('5%')}}>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'#7D7B7B'}}> ???????????? :</Text>
                        <Text  style = {{fontSize:wp('3.5%'),fontFamily : 'Cairo-Black', color:'red'}}> ??????????????</Text>
                         </View>
                    </View>
                    </View>
                  <View style = {styles.v1}>
                      <Text style = {styles.text1}> ??????????</Text>
                  </View>
                
                  <View style = {styles.v2}>
                      <Text style = {styles.text2}>?????????? : {forword} </Text>
                  </View>
                  <View style = {styles.v3}>
                      <Text style = {styles.text2}> ????????????</Text>
                  </View>
                  <View style = {styles.v4}>
                      <Text style = {styles.text2}> ??????????</Text>
                      <Text style = {styles.text2}> {des}</Text>
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
       
        height: hp("5%"),
        width: wp("7%"),


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
        alignContent:'center',
        alignItems:'center'
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
      fontSize : wp('4%'),
        fontFamily: 'Cairo-Black',
        justifyContent: "flex-start"
    },
    text2: {  
        left: wp('4%'),
        fontSize : wp('4%'),
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


});