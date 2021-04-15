import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, ImageBackground, ScrollView, TextInput, Picker } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from "react";
import * as ImagePicker from "react-native-image-picker"
import Spinner from 'react-native-loading-spinner-overlay';
import DeviceStorge from '../Service/DeviceStorge'
import { ConfirmDialog } from 'react-native-simple-dialogs';
export default function AddTicket({ navigation }) {
  const [Alert_Visibility, Isvsisible] = useState(false);
  const [uri, Seturi] = useState("");
  const [base64, Setbas64] = useState("");
  const [Desc, setDesc] = useState("");
  const [Done, IsDone] = useState(false)
  const [Error, IsError] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [dialogVisible, setdialogVisible] = useState(false)
  const [select1, isSelect1] = useState("");
  const [key1, SetKey1] = useState("");
  const [key2, SetKey2] = useState("");
  const [build, Isbuild] = useState(false);
  const [street, Isstreet] = useState(false);
  const [colorb, setcolorb] = useState('#3C7E66');
  const [selectedValue1, setSelectedValue1] = useState("java");
  const [selectedValue2, setSelectedValue2] = useState("java");

  const [colorst, setcolorst] = useState('rgba(85,158,132,0.31)')
  const [affect, setaffect] = useState("");
  const [id, setid] = useState("")

  validate = () => {
    let isValid = true;
    if (!base64) {
      setdialogVisible(true)
      isValid = false;
    }
    return isValid;

  }

  const SendData = async () => {

  

    if (validate()) {
      await DeviceStorge.getToken("userid").then((userId) => { setid(userId); parseInt(id) })
      if (build) {
        setaffect('building')
        try {
          setIsLoading(true);
          console.log(JSON.stringify({description: Desc,reportBy: parseInt(id),affectedFacility: affect,agency:parseInt(key2),}))

          fetch("http://127.0.0.1:8889/predictBuilding", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
  
              description: Desc,
              image: base64,
              reportBy:parseInt(id),
              affectedFacility: affect,
                agency:parseInt(key2),
                buildingType:parseInt(key1)
  
            })
          }).then(res => { res.json(); 
            setIsLoading(false)
            IsDone(true)
           
            Setbas64(''); setDesc('');
          })
            .catch(res => {
              setIsLoading(false)
              console.log(res)
              IsError(true);
              Setbas64(''); setDesc('');
  
            })
  
        } catch (error) {
          setIsLoading(false)
          console.log(error)
          IsError(true);
          Setbas64(''); setDesc('');
        }
  
      }
      else {
        setaffect('road')
        setIsLoading(true);
        try {

console.log(JSON.stringify({description: Desc,reportBy: parseInt(id),affectedFacility: affect,agency:parseInt(key2),}))
          fetch("http://127.0.0.1:8889/predictRoad", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
  
              description: Desc,
              image: base64,
              reportBy: parseInt(id),
              affectedFacility: affect,
              agency:parseInt(key2),
  
            })
          }).then(res => { res.json();})
          .then(data => {
            setIsLoading(false)
            IsDone(true)
           setDesc('');
          }) 
          

            .catch(res => {
              console.log(res)
              setIsLoading(false);
              IsError(true);
             setDesc('');
             
            })
  
        } catch (error) {
          console.log(error)
          setIsLoading(false);
          IsError(true);
           setDesc('');
        }
      }
      
      
    

    }
  }



  const changecolor1 = () => {
    setcolorb('white');
    setcolorst('rgba(85,158,132,0.31)')

  }
  const changecolor2 = () => {
    setcolorst('white');
    setcolorb('rgba(85,158,132,0.31)')

  }


  const cameraLaunch = () => {
    let options = {
      mediaType: 'photo',
      noData: true, // IMPORTANT TO MAKE IT FASTER
      cameraRoll: false,

      includeBase64: true,
      maxWidth: 200,
      maxHeight: 200,
      storageOptions: {
        cameraRoll: true,
        skipBackup: true,
        path: null,
      },
    };
    ImagePicker.launchCamera(options, (res) => {
     // console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {

        // console.log(res.base64);

        Seturi(res.uri)
        Setbas64(res.base64);

      }
    });
  }

  const imageGalleryLaunch = () => {
    let options = {
      mediaType: 'photo',
      noData: true, // IMPORTANT TO MAKE IT FASTER
      cameraRoll: false,

      includeBase64: true,
      maxWidth: 200,
      maxHeight: 200,
      storageOptions: {
        cameraRoll: true,
        skipBackup: true,
        path: null,
      },
    };
    ImagePicker.launchImageLibrary(options, (res) => {
      //console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {

        // console.log('response', JSON.stringify(res));
        Seturi(res.uri)
        Setbas64(res.base64);


      }
    });
  }
  const renderFileUri = () => {
    if (uri) {

      return (
        <View>
          <Image
            source={{ uri: uri }}
            style={styles.images}

          />

        </View>
      );
    } else {
      return <Image
        source={require('../Image/dummy.png')}
        style={styles.images}
      />
    }
  }


  return (


    <View style={styles.container}>
      <View style={{
        backgroundColor: '#3C7E66', width: wp('100%'), height: hp('11%'),

      }}>
        <Spinner
          visible={isLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <ConfirmDialog
          message="قم بادراج صورة"
          visible={dialogVisible}
          onTouchOutside={() => setdialogVisible(false)}
          positiveButton={{
            title: "ok",
            onPress: () => setdialogVisible(false)
          }}

        />




        <TouchableOpacity style={{ left: wp('10%'), top: hp('5%'), height: hp("4%"), width: wp("8%"), }}
          onPress={() => navigation.toggleDrawer()}>
          <Image source={require('../Image/menu2.png')} style={styles.menu} />

        </TouchableOpacity>

        <View style={{
          width: wp('11%'),
          // top:hp('20%'),
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
            onPress={() => navigation.navigate('Map')}
          >
            <Image source={require('../Image/backL.png')} style={styles.back} />
          </TouchableOpacity>
        </View>
        <ImageBackground source={require('../Image/circle.png')} style={{ bottom: hp('3%') }}>
          <Text style={styles.logo} >معلومات التذكرة </Text>
        </ImageBackground>
      </View>


      <View style={{ right: wp('44%'), top: hp('13%') }}>

      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: hp('10%') }}>


        <View style={{ width: wp('100%'), height: hp('45%'), top: hp('12%'), }}>

          <View
            style={{ left: wp('20%') }}>
            {renderFileUri()}


          </View>
          <TouchableOpacity style={styles.cam}
            onPress={() => { Isvsisible(true) }}    >
            <Text style={styles.textcam}> التقط صورة</Text>
          </TouchableOpacity>


        </View>

        <Modal

          visible={Alert_Visibility}

          transparent={true}

          animationType={"fade"}

          onRequestClose={() => { Isvsisible(!Alert_Visibility) }} >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


            <View style={styles.Alert}>



              <Text style={styles.title}>اختر صورة</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => { Isvsisible(false); cameraLaunch() }}   >

                <Text style={styles.TextStyle}> التقط صورة من خلال الكامير </Text>

              </TouchableOpacity>



              <TouchableOpacity
                // style={styles.buttonStyle} 
                onPress={() => { Isvsisible(false); imageGalleryLaunch() }}
                activeOpacity={0.7}
              >

                <Text style={styles.TextStyle}> التقط صورة من خلال ملفات الصور </Text>

              </TouchableOpacity>



              <TouchableOpacity
                style={styles.buttoncancel}
                onPress={() => { Isvsisible(false); }}
                activeOpacity={0.7}
              >

                <Text style={styles.cancel}> الغاء </Text>

              </TouchableOpacity>

            </View>
          </View>


        </Modal>

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

                <Text style={styles.cancel}> تم الارسال </Text>

              </TouchableOpacity>

            </View>
          </View>


        </Modal>
        <View style={{ width: wp('100%'), height: hp('70%'), top: hp('12%'), }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', right: wp('15%') }}>
            <TouchableOpacity style={{ opacity: 1, margin: 0, padding: 0, borderRadius: 25, width: wp('25%'), height: hp('7%'), left: wp('20%'), backgroundColor: colorb, }}

              onPress={() => { Isstreet(false); Isbuild(true); changecolor1(); }}    >
              <Text style={styles.textcam}>  مباني</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ opacity: 1, margin: 0, padding: 0, borderRadius: 25, width: wp('25%'), height: hp('7%'), right: wp('20%'), backgroundColor: colorst, }}



              onPress={() => { Isstreet(true); Isbuild(false); changecolor2() }}    >
              <Text style={styles.textcam}>  شوارع</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={{ bottom: hp('5%') }}>
              <View
                style={{
                  left: wp("5%"), borderColor: '#F1F1F1', width: wp('80%'), height: hp('7%'), borderRadius: 20, textAlign: "center", bottom: hp('20%'), backgroundColor: 'rgba(85,158,132,0.31)'
                }}>
                <Picker


                  selectedValue={selectedValue1}
                  style={{ width: wp('80%'), height: hp('7%'), }}
                  onValueChange={(itemValue, itemIndex) => { setSelectedValue1(itemValue), SetKey1(itemIndex) }}
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
              <View
                style={{
                  left: wp("5%"), borderColor: '#F1F1F1', width: wp('80%'), height: hp('7%'), borderRadius: 20, textAlign: "center", bottom: hp('18%'), backgroundColor: 'rgba(85,158,132,0.31)'
                }}>
                <Picker


                  selectedValue={selectedValue2}
                  style={{ width: wp('80%'), height: hp('7%') }}
                  onValueChange={(itemValue, itemIndex) => { setSelectedValue2(itemValue), SetKey2(itemIndex) }}
                >

                  <Picker.Item label="الجهة التابعة" value="الجهة التابعة" style={styles.datastyle} />
                  <Picker.Item label="وزارة التعليم" value=" وزارة التعليم" style={styles.datastyle} />
                  <Picker.Item label="وزارة الصحة" value="وزارة الصحة" />
                  <Picker.Item label="البلدية" value="البلدية" />
                  <Picker.Item label="الهيئة العامة للسياحة والتراث" value="الهيئة العامة للسياحة والتراث" />
                </Picker>
              </View>
            </View>
            <View style={{ bottom: hp('15%') }}>
              <View style={{ left: wp("5%"), width: wp('80%'), height: hp('20%'), borderRadius: 20, bottom: hp('5%'), backgroundColor: 'rgba(85,158,132,0.31)' }}>
                <Text style={styles.datastyle}>الوصف</Text>
                <TextInput

                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => setDesc(text)}
                  value={Desc}
                />
              </View>
              <View style={{ top: wp('3%') }}>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => SendData()}>

                  <Text style={styles.textbtn}> ارسال </Text>
                </TouchableOpacity>
              </View>


            </View>
          </View>
        </View>
      </ScrollView>

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

  back: {

    height: hp("4%"),
    width: wp("5%"),
  },

  cam: {
    opacity: 1,
    // position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderRadius: 20,
    paddingLeft: 0,
    width: wp('40%'),
    height: hp('8%'),
    top: hp('5%'),
    left: wp('27%'),
    backgroundColor: "rgba(85,158,132,0.97)"

  },
  textcam: {
    textAlign: 'center',
    fontSize: wp('3.5%'),
    top: hp('1.5%'),
    fontWeight: '400',
    fontFamily: 'Cairo-Bold',
    color: "black",
    fontStyle: 'normal',
  },
  lib: {
    opacity: 1,
    // position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderRadius: 10,
    paddingLeft: 0,
    width: wp('50%'),
    height: hp('8%'),
    left: wp('50%'),
    backgroundColor: "rgba(85,158,132,0.97)"

  },

  textlib: {
    textAlign: 'center',
    fontSize: wp('3.5%'),
    top: hp('1.5%'),
    fontWeight: '400',
    fontFamily: 'Cairo-Bold',
    color: "black",
    fontStyle: 'normal',
  },



  TextStyle: {

    fontSize: wp('4.5%'),
    color: "white",
    marginTop: hp('5%'),
    bottom: wp('5%'),
    fontFamily: 'Cairo-Regular',
  },
  title: {
    fontSize: wp('4.5%'),
    color: "white",
    fontFamily: 'Cairo-Regular',
    bottom: hp('3%')
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
  Alert: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3C7E66",
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
  images: {
    width: wp('55%'),
    height: hp("30%"),
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,

  },
  datastyle: {
    fontFamily: 'Cairo-Regular',
    fontSize: wp('3.57%'),
    left: wp('5%')
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
    width: wp('60%'),
    height: hp('7%'),
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
  card3: {
    borderRadius: 17,
    width: wp('90%'),
    height: hp('13%'),
    top: hp('15%'),
    backgroundColor: 'white'
  },
  menu: {

    height: hp("5%"),
    width: wp("7%"),


  },

});