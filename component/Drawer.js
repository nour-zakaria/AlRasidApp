import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const menuData = [
  { icon: require ('../Image/profile.png'), name: "حسابي", screenName: "Home", key: 1 },
  { icon: require ('../Image/ticket.png'), name: "التذاكر", screenName: "About", key: 2 },
  { icon: require ('../Image/help.png'), name: "مساعدة",screenName: "Contact", key: 3 } ,
  { icon: require ('../Image/logout.png'), name: "تسجيل خروج",screenName: "Contact", key: 4}
];

class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
              navigation={this.props.navigation}
              screenName={item.screenName}
              icon={item.icon}
              name={item.name}
              key={item.key}
            />
          )}
        />
      </View>
    );
  }
}

const DrawerItem = ({ navigation, icon, name, screenName }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
    }
  >
    <Image source={icon}  color="#333" style={{ margin: 20 }} />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingTop: 70
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize:wp('4%'),
    fontFamily : 'Cairo-Bold', 
    fontWeight: "300",
    color : 'rgba(60,126,102,1)',
    margin: 15
  }
});

export default Drawer;