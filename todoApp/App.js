import 'react-native-gesture-handler';
import React, { useState ,useMemo ,useEffect} from 'react';
import { UserContext } from './Context/userContext'

// import LogReg from './screens/LogReg'
import Route from './Route'

export default function App() {
  const [state, setState] = useState({
    isLogin: false,
    user: {}
  })

  const Trigger = useMemo(() => ({
    login: (payload) => {
      setState({
        isLogin: true,
        user: payload
      })
    },
    logout: () => {
      setState({
        isLogin: false,
        user: {}
      })
    }
  }))
  useEffect(() => {
    console.log(state.user)
  },[state])
  return (
    <UserContext.Provider value={{ state, Trigger }}>
      <Route />
    </UserContext.Provider>
  )
}