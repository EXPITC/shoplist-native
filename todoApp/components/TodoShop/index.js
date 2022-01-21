import React,{useState ,useEffect} from 'react';
import {
    Stack,
    Input,
    Text,
    Heading,
    Center,
    View,
    FlatList
} from 'native-base'
import { Head  ,List ,Logout} from './TodoShop.styled'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from "@expo/vector-icons"
const TodoShop = ({value}) => {
    const [refreshII, setRefreshII] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const {Items , del , getTodos , add ,logout} = value
    const _Text = (item) => {
        return (
            <List key={item.id}>
            <Text m='2' letterSpacing='2xl' >{item.todo}</Text>
            <Icon
                name='remove'
                color='firebrick'
                size={20}
                    onPress={() => { del(item.id); setRefresh(!refresh)}}
            />
            </List>
       )
    }
    useEffect(() => {
        setTimeout(() => {
            setRefreshII(!refreshII)
        },500)
    },[refresh])
    const [text,setText]= useState('')
    const handleText = textValue => setText(textValue)
    return (
        <>
            <LinearGradient
                colors={['#eb5521', '#b32db3']}
                // style={{ width: '100%', height: '100%', flex: 1,justifyContent: 'center' ,alignItems: 'center'}}
            >
            <Center style={Head} mt={1} mb={3}>
                <Heading color="white" >Shop List</Heading>  
            </Center>
            <Input
                height={60}
                paddingLeft={8}
                fontSize={15}
                placeholderTextColor={'white'}
                style={{color: 'white'}}
                mb={4}
                onChangeText={text => {handleText(text)}}
                value={text}
                placeholder="add item..."
            ></Input>
            </LinearGradient>
            <List b onPress={() => { add(text); setText('');setRefresh(!refresh)}}>
            <Icon
                name='plus'
                color='darkslateblue'
                size={20}
            />
            <Text b fontSize={20} paddingLeft={3}>Add Item</Text>
            </List>
            {/* <FlatList
                data={Items}
                renderItem={_Text}
                keyExtractor={item => item.id}
                // refreshing={refresh}
                // onRefresh={getTodos}
                extraData={Items}
            /> */}
            {Items.map(item => {
                return _Text(item)
            })}
            <Logout onPress={logout}>
            <Icons
                    name='logout'
                    color='white'
                    size={20}
                />
                <Text b m='2' letterSpacing='2xl' bold italic fontSize={20} paddingLeft={3} style={{color:'white'}}>LOGOUT</Text>
            </Logout>
        </>
    )
}

export default TodoShop;