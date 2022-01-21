import React,{useEffect ,useState ,useContext} from 'react';
import LogReg from '../../components/LogReg'
import { UserContext } from '../../Context/userContext'
import {API, handleError} from '../../config/api'
import axios from 'axios'


export default function ({ navigation, refresh }) {
    const { state, Trigger} = useContext(UserContext)
    const { isLogin } = state
    const { login } = Trigger
    const  [data, setData] = useState(null)
    const Login = async (x) => {
       try {
        const config = {
            headers: {
                'Accept' : "application/json",
                'Content-Type': 'application/json'
            }
        }
        await axios.post('http://1.2.0.252:5000/todo/login', x, config)
            .then(res => { setData(res.data) })
            .catch(err => handleError(err))
        switch(data?.status){
            case 'login':
                return login(data)
            case 'failed':
                return alert.alert('')
        }
        } catch (err) {
            handleError(err)
        }
    }
    const Register = async (x) => {
        try {
            const config = {
                headers: {
                    'Accept' : "application/json",
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(x)
            await axios.post('http://1.2.0.252:5000/todo/register', x, config)
                .then(res => { setData(res.data) })
                .catch(err => handleError(err))
            switch(data?.status){
                case 0:
                    return login(data)
                case 'failed':
                    return alert.alert('')
            }
            } catch (err) {
                handleError(err)
            }
    }
    
    return (
        <>
            <LogReg Login={Login} Register={Register} style={{backgroundColor: 'black'}}/>
        </>
    )
}