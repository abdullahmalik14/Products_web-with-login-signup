import React from 'react'
import './App.css'
import Routers from './config/Routes'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import { set_user_auth } from './store/slices/user_data_slice'


const App = () => {

  const dispatch = useDispatch()


  const check_user = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user hai', uid)
        dispatch(set_user_auth(true))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(set_user_auth(false))
        console.log('user available nh hai', user)
      }
    });
  }

  check_user()

  return (
  
    <Routers/>
  )
}

export default App