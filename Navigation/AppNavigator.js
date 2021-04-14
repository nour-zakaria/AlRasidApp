
import First from '../Screens/First'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import LoginAdmin from '../Screens/LoginAdmin'
import   TicketAdmin from '../Screens/TicketAdmin'


import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
 First: {
    screen: First,
      navigationOptions: {
        headerShown: false
        }
    },
    Login: {
      screen: Login,
        navigationOptions: {
          headerShown: false
          }
      },
      Register: {
    screen: Register,
    navigationOptions: {
       headerShown: false
        }
    },
    LoginAdmin: {
    screen: LoginAdmin,
    navigationOptions: {
          headerShown: false
        }
    },
  
    TicketAdmin: {
      screen:   TicketAdmin,
      navigationOptions: {
            headerShown: false
          }
      },
 
  },
  {
    initialRouteName: 'First',
  }
);
export default createAppContainer(AppNavigator);
