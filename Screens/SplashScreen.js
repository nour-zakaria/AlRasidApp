
import React, { useState, useEffect } from 'react';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import DeviceStorge from '../Service/DeviceStorge'
import Splash from '../Image/splashsvg.svg';

const SplashScreen = props => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);     



  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimating(false);
  //     DeviceStorge.getToken().then(value =>{ 
  //       console.log(value);
  //    //  props.navigation.navigate( 'MyDrawerNavigator' );
  //    props.navigation.navigate( value === null ? 'AppNavigator' : 'MyDrawerNavigator' );
  //       }
      
  //     );
  //   }, 3000);
  // }, []);

  return (
    <View style={styles.container}>

  
				{/* Provide height and width props as per your need. */}
		
      <Image
          source={require("../Image/splash.png")}
        style={{ 
           opacity: 1,
          position: "absolute",
           height: hp('100%'),
        width: wp('100%'),
        bottom:1,
       
       
       
         }}
      /> 
        
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
   
  },
  activityIndicator: {
    alignItems: 'center',
    height: 100,
    top: hp('70%'),
  },

});