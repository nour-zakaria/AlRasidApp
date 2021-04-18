import { View, Text, StyleSheet, TouchableOpacity ,FlatList,Image, ImageBackground} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from "react";
import { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { LogBox } from 'react-native';

import MapView, { Marker } from "react-native-maps";

export default function Map({ navigation }) {


  const [address, setadress] = useState('')
   const [region, setRegion] = useState({
    latitude: 51.5078788,
    longitude: -0.0877321,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });

  useEffect(() => {
  
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
  
  }, []);
  return (
    
   <View style={styles.container}>
       <MapView
       style={styles.map}
       region={region}
       onRegionChangeComplete={region => {setRegion(region) ; getAddress(); console.log('jjj'); console.log(address +"kkk")}}
     >
        <Marker coordinate={region}  draggable/>
     </MapView>
     <View style = {{width :wp('100%'), height : hp('15%') , top :hp ('5%')} }> 
      <View style = {{flex :1 ,flexDirection :'row' }}>
      <View style={{
                    width: wp('11%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: hp('7%'),
                    borderRadius: wp('10%'),
                    backgroundColor: 'white',
                    left: wp('80%') ,
                    top:hp('3%')
                }}>
                    <TouchableOpacity style={{
                        width: wp('11%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: hp('7%'),
                        borderRadius: wp('10%'),

                    }}
                    onPress={() => navigation.navigate('AppNavigator')}  >
                        <Image source={require('../Image/backL.png')} style={styles.back} />
                    </TouchableOpacity>
                </View>
       <TouchableOpacity style = {{top : hp('4%')}}  onPress={() => navigation.toggleDrawer() }>
       <Image source ={require('../Image/menu.png')}>

       </Image>
       </TouchableOpacity>
       </View>
          <GooglePlacesAutocomplete
          //  ref={ref}
          
            fetchDetails={true}
        styles={{
          textInputContainer: {
           
            width:wp('80%') , height:hp('20%') , top :hp('5%'), left :wp('10%')
          },
          textInput: {
          
            color: '#5d5d5d',
            fontSize: 16,
          
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      placeholder='الموقع'
      onPress={ ()=> (data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("ssssssssss"+ data);
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyCGb9T-Taw4gdhkRMCvtIm1MsxHBeVWrHs',
        language: 'en',
        types: '(cities)',
      }}
    />
 
    
       </View>
       <View style = {{width :wp('100%'), height : hp('50%') , top :hp ('50%') ,}}>
       <TouchableOpacity style = {styles.btn1}
       >
     <Text style = {styles.textbtn1}>حدد الموقع </Text>
   </TouchableOpacity>

   <TouchableOpacity style = {styles.btn2}
    onPress={() => navigation.navigate('Map2')}>
     <Text style = {styles.textbtn2}>متابعة  </Text>
   </TouchableOpacity>

       </View>
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
   // flex: 1,
    alignItems: 'center',
   
  },
  map: {
     position: 'absolute',
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn1 : {
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
    height: hp('7%'),
    left: wp('25%'),
    backgroundColor: "#3C7E66"
  } ,
  textbtn1 : {
    textAlign: 'center',
    fontSize: wp('4%'),
    top: hp('1.5%'),
    fontWeight: '400',
    fontFamily: 'Cairo-Bold',
    color: "white",
    fontStyle: 'normal',
  } ,
  btn2 : {
    opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    width :wp('100%'),
     height : hp('50%') ,
    paddingLeft: 0,
    // width: wp('50%'),
    // height: hp('7%'),
    borderRadius : 50,
     top:hp('10%'),
    backgroundColor: "#3C7E66", 
  } ,
  textbtn2 : {
    textAlign: 'center',
    fontSize: wp('7%'),
    top: hp('5%'),
    fontWeight: '400',
    fontFamily: 'Cairo-Bold',
    color: "white",
    fontStyle: 'normal',
  } ,
  back: {

    height: hp("4%"),
    width: wp("4%"),
},
 });
 