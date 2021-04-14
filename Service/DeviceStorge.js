import AsyncStorage from '@react-native-community/async-storage';

const DeviceStorge = {

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

    storeToken: async (key,value) => {

        try {
            const userData = JSON.stringify(value);

            return await AsyncStorage.setItem(key,userData);
        } catch (e) {
            console.log("Something went wrong", error);
            throw e;
        }
    } ,
    deleteToken: async (key) => {
   
        try {
            let result =  await AsyncStorage.removeItem(key)
         
        } catch (err) {
          console.log(`The error issssss: ${err}`)
        }
      }

}


export default DeviceStorge;