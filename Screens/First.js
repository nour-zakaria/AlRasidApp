import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Image as ReactImage } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DeviceStorge from '../Service/DeviceStorge'
export default class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id :''
    };
  }
  async AssignedUser () {
  await DeviceStorge.getToken("userid").then((userId) => { this.setState({id:userId}) ;console.log(this.state.id) })
if(this.state.id != null){
  this.props.navigation.navigate('Map')
}
else {
  this.props.navigation.navigate('Login')
}
}





  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#CC5775"
          barStyle="dark-content"
          hidden={true}

        />

        <ReactImage
          source={require("../Image/splash.png")}
          style={styles.backgroundImage}
        />



        <TouchableOpacity   style={styles.button1}
          onPress={() =>
            this.props.navigation.navigate('LoginAdmin')

          }>
          <Text style={styles.text1} > تسجيل الدخول كموظف</Text>
        </TouchableOpacity>

        <TouchableOpacity  elevation={5} style={styles.button2}
          onPress={() =>
            this.AssignedUser()
          }>
          <Text style={styles.text2}  > تسجيل الدخول لرفع بلاغ   </Text>
        </TouchableOpacity>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    opacity: 1,
    position: "absolute",
    width: wp('100%'),
    height: hp('100%'),

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
    paddingLeft: 0,
    width: wp('70%'),
    height: hp('8%'),
    left: wp('19%'),
    top: hp('50 %'),
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
    backgroundColor: "white",
    borderRadius: 10



  },
  text1: {
    fontSize: wp('4.3%'),
    fontWeight: '400',
    fontFamily: 'Cairo-Bold',
    color: "rgba(60,126,102,1)",
    fontStyle: 'normal',
    left: wp('10%'),
    top: hp('1%'),

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
    width: wp('70%'),
    height: hp('8%'),
    left: wp('19%'),
    top: hp('60 %'),
    backgroundColor: "white",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
    borderRadius: 10

  },
  text2: {
    fontSize: wp('4%'),
    fontWeight: '400',
    fontFamily: 'Cairo-Bold',
    color: "rgba(60,126,102,1)",
    fontStyle: 'normal',
    top: hp('1%'),
    left: wp('10%'),
  },

});
