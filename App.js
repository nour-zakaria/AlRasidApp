
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
 import AppNavigator from './Navigation/AppNavigator'




import MyDrawerNavigator from './Navigation/MyDrawerNavigator'
import Map from './Screens/Map';




const App = createSwitchNavigator({
 
  AppNavigator: {
    screen: AppNavigator,
    navigationOptions: {
       headerShown: false
        }
    },

  
   
    MyDrawerNavigator: {
      screen: MyDrawerNavigator,
        navigationOptions: {
          headerShown: false
          }
      },
  
       initialRouteName: "AppNavigator"  
  }  
);  
export default createAppContainer(App); 

