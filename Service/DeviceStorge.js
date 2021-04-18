import AsyncStorage from '@react-native-community/async-storage';
    

// Local DataBase


const DeviceStorge = {
// getToken('username')
   getToken: async (key) => {
        try {
             let result =await AsyncStorage.getItem(key);
            //  console.log(result + "dfgsdf");
             console.log(JSON.parse(result));
             return result;
        } 
        catch (e) {
             throw e;
        } 
    },
// storeToken('username', user) , ('idnumber',1234567891)
 
    storeToken: async (key,value) => {

        try {
            const userData = JSON.stringify(value);

            return await AsyncStorage.setItem(key,userData);
        } catch (e) {
            console.log("Something went wrong", error);
            throw e;
        }
    } ,
    //deleteToken('usernmae')
    deleteToken: async (key) => {
   
        try {
            let result =  await AsyncStorage.removeItem(key)
         
        } catch (err) {
          console.log(`The error issssss: ${err}`)
        }
      }

}


export default DeviceStorge;