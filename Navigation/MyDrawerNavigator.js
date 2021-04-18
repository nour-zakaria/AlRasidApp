

import {createDrawerNavigator} from 'react-navigation-drawer'
import { createStackNavigator } from "react-navigation-stack";

import Drawer from '../component/Drawer'
import Map from '../Screens/Map'
 import Map2 from '../Screens/Map2'
import AddTicket from '../Screens/AddTicket'
import TicketUser from '../Screens/TicketUser';
import TicketInfo from '../Screens/TicketInfo';
import TicketNotAssign from '../Screens/TicketNotAssign';
import TicketDone from '../Screens/TicketDone';
import Profile from '../Screens/Profile';



import { widthPercentageToDP } from 'react-native-responsive-screen';





const FirstActivity_StackNavigator = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions: {
      headerShown:false
    },


  },
  Map2: {
    screen: Map2,
    navigationOptions: {
      headerShown:false
    }, },
    
    AddTicket: {
      screen: AddTicket,
      navigationOptions: {
        headerShown:false
      }, },
      TicketUser: {
        screen: TicketUser,
        navigationOptions: {
          headerShown:false
        }, },
        TicketInfo: {
          screen: TicketInfo,
          navigationOptions: {
            headerShown:false
          }, },
          TicketNotAssign: {
            screen: TicketNotAssign,
            navigationOptions: {
              headerShown:false
            }, },
            TicketDone: {
              screen: TicketDone,
              navigationOptions: {
                headerShown:false
              }, },
              Profile: {
                screen: Profile,
                navigationOptions: {
                  headerShown:false
                }, },
  
  
});


const MyDrawerNavigator = createDrawerNavigator(
  {
    

    NavScreen1: {
      screen: FirstActivity_StackNavigator,
     
    
   
      },


   
   },

  {
    drawerPosition: 'right',
    contentComponent: Drawer,
    drawerOpenRoute: 'DrawerRightOpen',
    drawerCloseRoute: 'DrawerRightClose',
    drawerToggleRoute: 'DrawerRightToggle',
    drawerWidth:  widthPercentageToDP('58.93%'),
}


  
  
);
export default MyDrawerNavigator;