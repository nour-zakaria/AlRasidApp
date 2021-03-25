

import {createDrawerNavigator} from 'react-navigation-drawer'


import MenuContent from '../component/MenuContent'
import { createStackNavigator } from "react-navigation-stack";

import { widthPercentageToDP } from 'react-native-responsive-screen';





const FirstActivity_StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown:false
    },


  },
  Halls: {
    screen: Halls,
    navigationOptions: {
      headerShown:false
    }, },
    
  
  
});
// const SecondActivity_StackNavigator = createStackNavigator({
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       headerShown:false
//     }, }

  
// });

const MyDrawerNavigator = createDrawerNavigator(
  {
    //Drawer Optons and indexing

    NavScreen1: {
      screen: FirstActivity_StackNavigator,
     
    
    //  headerShown:false
      },
//     NavScreen2: {
//       screen: SecondActivity_StackNavigator,
// },
   

   
   },

  {
    drawerPosition: 'right',
    contentComponent: MenuContent,
    drawerOpenRoute: 'DrawerRightOpen',
    drawerCloseRoute: 'DrawerRightClose',
    drawerToggleRoute: 'DrawerRightToggle',
    drawerWidth:  widthPercentageToDP('58.93%'),
}


  
  
);
export default MyDrawerNavigator;