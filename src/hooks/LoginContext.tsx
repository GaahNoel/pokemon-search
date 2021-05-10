import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { createContext, useState, ReactNode } from 'react';
import { FirebaseDB } from '../config/firebase';
import { LoginProps, LoginData, FavoriteType } from '../types/index';


export const LoginContext = createContext({} as LoginData);

export function LoginProvider({ children }: LoginProps) {
  const [isLogged, setIsLogged] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [favorite, setFavorite] = useState(''); 


  const checkFavorite = async (email: string) => {
    const response = await FirebaseDB.collection('favorite').where('email', '==', email).get();
    const parsedData = [] as any;

    response.forEach(doc => {
      parsedData.push(doc.data());
    });
    
    if(!parsedData[0]) {
      return false;
    } 

    const { pokemon } = parsedData[0];
    setFavorite(pokemon);

    return pokemon;
  }

  function changeIsLogged(param: boolean) {
    setIsLogged(param);
  }

  function changeUserEmail(email: string) {
    setUserEmail(email);
  }

  async function changeFavorite(pokemon: string) {
    try{
      const response = await FirebaseDB.collection('favorite').where('email', '==', userEmail).get();

      if(!response.docs[0])
        return;

      const doc = response.docs[0].id;
      await FirebaseDB.collection('favorite').doc(doc).update({
        pokemon,
      });

      setFavorite(pokemon);

    } catch(err) {
      alert('Error saving the new favorite');
    }
  }

  return (
    <LoginContext.Provider value={ {
      isLogged,
      changeIsLogged,
      userEmail,
      changeUserEmail,
      checkFavorite,
      favorite,
      changeFavorite,

    }}>
      
      {children}
    </LoginContext.Provider>
  )
}

export function useLogin(): LoginData {
  const context = useContext(LoginContext);
  return context;
}
