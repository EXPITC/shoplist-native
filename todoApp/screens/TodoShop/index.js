import React ,{ useEffect , useState ,useContext}from 'react'
import { Center, Text, } from 'native-base'
import {FlatList} from 'react-native'
import TodoComponent from '../../components/TodoShop'
import { uuidv7 } from 'uuidv7'
import { UserContext } from '../../Context/userContext'
import axios from 'axios'
import { handleError } from '../../config/api'
import { Head  ,List} from '../../components/TodoShop/TodoShop.styled'
import Icon from 'react-native-vector-icons/FontAwesome'

const TodoShop = ({navigation}) => {
    const { state, Trigger } = useContext(UserContext)
    const { isLogin, user } = state
    const {logout} = Trigger
    console.log(user.id)
    const [refresh, setRefresh] = useState(false)
    const [Items, setItems] = useState([])
    useEffect(() => {
        getTodos()
    }, [])
    // console.log(Items)
    const getTodos = () => {
        // setRefresh(true)
        axios.get(`http://1.2.0.252:5000/todo/allTodo/${user.id}`)
            .then(res => setItems(res.data.response))
            .catch(err => handleError(err))
        setRefresh(false)
    }
    const del = (id) => {
        setRefresh(true)
        axios.delete(`http://1.2.0.252:5000/todo/delTodo/${id}`)
            .then(res=> console.log(res))
            .catch(err => handleError(err))
        getTodos()
    }
    const add = (text) => {
        setRefresh(true)
        const config = {
            headers: {
                'Accept' : "application/json",
                'Content-Type': 'application/json'
            }
        }
        // const body = JSON.stringify()
        // console.log(body)
        if (!text) return getTodos()
        axios.post(`http://1.2.0.252:5000/todo/add`,{todo: text,id: user.id},config)
            .then(res=> console.log(res))
            .catch(err => handleError(err))
        getTodos()
    }
    console.log(refresh)
    // const _Text = ({item}) => {
    //     return (
    //         <List>
    //         <Text m='2' letterSpacing='2xl' >{item.todo}</Text>
    //         <Icon
    //             name='remove'
    //             color='firebrick'
    //             size={20}
    //                 onPress={() => { del(item.id); setRefresh(!refresh)}}
    //         />
    //         </List>
    //    )
    // }
    return (
        <>
            {/* <FlatList
                data={Items}
                renderItem={_Text}
                keyExtractor={item => item.id}
                // refreshing={refresh}
                // onRefresh={getTodos}
                extraData={Items}
            /> */}
            {refresh ? <Text>im loading</Text> : <TodoComponent value={{ Items, del, getTodos, add ,logout}} />}
        </>
    )
}

export default TodoShop