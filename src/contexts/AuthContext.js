import {createContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authData, setAuthData] = useState({
        token: 'sdsdsdsdsdsdewewewewe12121',
        user: {
            name: 'John Doe',
            email: 'sdasds@gmail.con'
        }
    });
    const [loading, setLoading] = useState(true);
 useEffect(() => {
     signIn().then( () => {
            console.log('>>>>>>',AsyncStorage.getItem('@AuthData'))
         }
      )
   AsyncStorage.getItem('@AuthData').then((res) => {
            console.log('>>>>>>',res)
        }
    )

        loadStorageData().then(() => {
            setLoading(false);
        });

 },[])
    const loadStorageData = async () => {
        const storageData = await AsyncStorage.getItem('@AuthData');
        if (storageData) {
            setAuthData(JSON.parse(storageData));
        }
        setLoading(false);
    }
    const signIn = async () => {
        await AsyncStorage.setItem('@AuthData', JSON.stringify(authData));
    }
    const signOut = async () => {
        await AsyncStorage.removeItem('@AuthData');
    }
    return (
        <AuthContext.Provider value={{authData,loading,signIn,signOut}}>
            {children}
        </AuthContext.Provider>
    )
}