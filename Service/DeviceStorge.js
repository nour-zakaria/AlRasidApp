import AsyncStorage from '@react-native-community/async-storage';

const DeviceStorge = {

   getToken: async () => {
        try {
             let result =await AsyncStorage.getItem("uid");
            //  console.log(result + "dfgsdf");
            //  console.log(JSON.parse(result));
             return result;
        } 
        catch (e) {
             throw e;
        } 
    },

    storeToken: async (value) => {

        try {
            const userData = JSON.stringify(value);

            return await AsyncStorage.setItem("uid",userData);
        } catch (e) {
            console.log("Something went wrong", error);
            throw e;
        }
    } ,
    deleteToken: async () => {
   
        try {
            let result =  await AsyncStorage.removeItem("uid")
         
        } catch (err) {
          console.log(`The error is: ${err}`)
        }
      }

}


export default DeviceStorge;