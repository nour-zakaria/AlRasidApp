import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { Image as ReactImage } from 'react-native';
import DeviceStorge from '../Service/DeviceStorge'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class MenuContent extends Component {
  constructor() {
    super();
    this.state = {
      
     
    };


    this.items = [
      {
        navOptionThumb: require ('../Image/profile.png'),
        navOptionName: 'حسابي',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: require ('../Image/ticket.png'),
        navOptionName: 'التذاكر',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: require ('../Image/help.png'),
        navOptionName: '  مساعدة ',
        screenToNavigate: 'help',
      },
      {
        navOptionThumb: require ('../Image/logout.png'),
        navOptionName: ' تسجيل خروج ',
        screenToNavigate: 'Logout',
      },
    ];
  }
   async componentDidMount ( ){
  
  }
  
  async DrawerItem(item) {

    if (item == 'Logout') {
     
  

      this.props.navigation.navigate('First')

    }
    else if (item == 'NavScreen1') {
      console.log(item)
      this.props.navigation.navigate('Home')
    }
    else if (item == 'NavScreen2') {   console.log(item) ;this.props.navigation.navigate('Profile') }
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>


        <ImageBackground
          source={require('../Image/backL.png')}
          style={styles.drawup}
        // imageStyle={{ borderRadius: 20}} 
        >
         
        </ImageBackground>
     
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                backgroundColor: 'rgba(229,229,229,1)',
                top: hp('30%'),
               
              }}
              key={key}>
              <View style={{flex :1,
                 backgroundColor: 'rgba(229,229,229,1)', }}>
               
              </View>
              <Image  source= {item.navOptionThumb}>
                
              </Image>
              <Text
                style={{
                  fontFamily :'Cairo-Regular',
                  fontSize: wp('4.5%'),
                 paddingTop : 15,
                  color: '#656363',
                   right : wp('7%'),
                 // color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.DrawerItem(item.screenToNavigate)
                
                }}>
                {item.navOptionName}
              </Text>
             
           
            </View>
            
          ))}
          
        </View>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    flex: 1,
    //  width: '100%',
    //  height: '100%',
     backgroundColor: 'rgba(229,229,229,1)',
    // alignItems: 'center',
    // paddingTop: 20,
  },

  setting: {
    bottom: hp('10%')
  },
  home: {
    width: wp('8%'),
    height: hp('8%'),
    bottom: hp('21%'),
    left: wp('42%')

  },
  drawup: {
    top : hp('5%'),
   left : wp('40%'),
    width: wp('5%'),
    height: hp('5.5%')
  },
  drawdown: {
    top: hp('42%'),
    width: wp('62%'),
    height: hp('30%')
  },
  text1: {
    fontFamily: 'Cairo-Regular',
    fontSize: wp('4.73%'),
    right: wp('10%'),
    top: hp('6%'),
    color: '#656363'
  },
  text2: {
    fontFamily: 'Cairo-Regular',
    fontSize: wp('4.73%'),
    right: wp('10%'),
    top: hp('7%'),
    color: '#656363'
  },
  text3: {
    fontFamily: 'Cairo-Regular',
    fontSize: wp('4.73%'),
    right: wp('10%'),
    top: hp('8%'),
    color: '#656363'
  },
  text4 : {
    fontFamily: 'Cairo-Regular',
    // fontStyle : 'Bold',
    // fontWeight : 'bold',
    width:wp('30%'),
    height : hp('4%'),
    fontSize: wp('6%'),
    fontWeight: "bold",
    left: wp('8%'),
    top: hp('6%'),
    color: '#656363'
  } ,
  text5 : {
    fontFamily: 'Cairo-Regular',
    fontSize: wp('3%'),
    
    right: wp('37%'),
    top: hp('6%'),
    color: '#656363'
  } ,
  profile : {
    width: wp('17.9%') ,
     height : hp('9.59%') ,
    left: wp('36%'),
   bottom: hp('1%'), 
  }

});

// import React from 'react';

// //Import all required component
// import { View, StyleSheet, Text, Alert } from 'react-native';

// import {AsyncStorage} from 'react-native';

// const MenuContent = props => {
//   let items = [
//     {
//       navOptionName: 'Home ',
//       screenToNavigate: 'Home',
//     },
//     {
//       navOptionName: 'Halls',
//       screenToNavigate: 'Halls',
//     },
//     {
//       navOptionName: 'Logout',
//       screenToNavigate: 'logout',
//     },
//   ];

//   const handleClick = (index, screenToNavigate) => {
//     if (screenToNavigate == 'logout') {
//       props.navigation.toggleDrawer();
//       Alert.alert(
//         'Logout',
//         'Are you sure? You want to logout?',
//         [
//           {
//             text: 'Cancel',
//             onPress: () => {
//               return null;
//             },
//           },
//           {
//             text: 'Confirm',
//             onPress: () => {
//               AsyncStorage.clear();
//               props.navigation.navigate('Auth');
//               console.log('logout');
//             },
//           },
//         ],
//         { cancelable: false }
//       );
//     } else {
//       console.log(screenToNavigate)
//       props.navigation.toggleDrawer();
//        global.currentScreenIndex = screenToNavigate;
//      props.navigation.navigate(screenToNavigate);
//     }
//   };
//   return (
//     <View style={stylesSidebar.sideMenuContainer}>
//       <View style={stylesSidebar.profileHeader}>
//         <View style={stylesSidebar.profileHeaderPicCircle}>
//           <Text style={{ fontSize: 25, color: '#307ecc' }}>
//             {'About React'.charAt(0)}
//           </Text>
//         </View>
//         <Text style={stylesSidebar.profileHeaderText}>AboutReact</Text>
//       </View>
//       <View style={stylesSidebar.profileHeaderLine} />
//       <View style={{ width: '100%', flex: 1 }}>
//         {items.map((item, key) => (
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               padding: 20,
//               color: 'white',
//               backgroundColor:
//                 global.currentScreenIndex === item.screenToNavigate
//                   ? '#4b9ff2'
//                   : '#307ecc',
//             }}
//             key={key}
//             onStartShouldSetResponder={() =>
//               handleClick(key, item.screenToNavigate)
//             }>
//             <Text style={{ fontSize: 15, color: 'white' }}>
//               {item.navOptionName}
//             </Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const stylesSidebar = StyleSheet.create({
//   sideMenuContainer: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#307ecc',
//     paddingTop: 40,
//     color: 'white',
//   },
//   profileHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#307ecc',
//     padding: 15,
//     textAlign: 'center',
//   },
//   profileHeaderPicCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 60 / 2,
//     color: 'white',
//     backgroundColor: '#ffffff',
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileHeaderText: {
//     color: 'white',
//     alignSelf: 'center',
//     paddingHorizontal: 10,
//     fontWeight: 'bold',
//   },
//   profileHeaderLine: {
//     height: 1,
//     marginHorizontal: 20,
//     backgroundColor: '#e2e2e2',
//     marginTop: 15,
//     marginBottom: 10,
//   },
// });
// export default MenuContent;