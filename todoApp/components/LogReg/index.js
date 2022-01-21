import React, { useState ,useEffect } from 'react';
import {
    Stack,
    Input,
    Icon,
    Text,
    Heading,
    Center,
} from 'native-base'
import TopDecor from  './Decor'
import {LoginButton} from './LogReg.styled'
import { MaterialIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

const LogReg= ({Login, Register}) => {
    const [pageSwitch, setPageSwitch] = useState(false)
    const [show, setShow] = useState(false)
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const [check, setCheck] = useState('')
    useEffect(() => {
        console.log(check)
    },[check])
    const Send = (x) => {
        switch (pageSwitch) {
            case true: return Register(x)
            case false: return Login(x)
        }
    }
    const ValueHandler = (which, text) => {
        switch (which) {
            case 'user': return (
                setData({
                    ...data,
                    username: text
                })
            )
            case 'pass': return (
                setData({
                    ...data,
                    password: text
                })
            )
        }
    }
    return (
        <>
        <TopDecor/>
        <Center flex={1} style={{backgroundColor: 'transparent'}}>
        <Stack
            space={4}
            w={{
            base: "75%",
            md: "25%",
            }}
            alignItems="center"
            
        >
            <Heading textAlign="center" mb="5" mt="10" >
            {pageSwitch ? 'Create one here!🤙': 'Welcome to Shop List App 🎉'}
            </Heading>
            <Input
                w={{
                    base: "80%",
                    md: "25%",
                }}
                InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                }
                placeholder="Username"
                onChangeText={text => ValueHandler('user', text)}
            />
            <Input
                w={{
                base: "80%",
                md: "25%",
                }}
                type={show ? "text" : "password"}
                InputRightElement={
                <Icon
                    onPress={()=> setShow(!show)}
                    as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                    size={5}
                    mr="2"
                    color="muted.400"
                />
                }
                placeholder="Password"
                onChangeText={text => ValueHandler('pass', text)}
            />
            <LoginButton onPress={()=> Send(data)}>
            <LinearGradient
                colors={['#eb5521', '#b32db3']}
                style={{ width: '100%', height: '100%', flex: 1,justifyContent: 'center' ,alignItems: 'center'}}
            >
                            <Text m='2' letterSpacing="2xl" style={{ color: "white", fontSize: 20 }}>{pageSwitch ? 'Create' : 'Login'}</Text>
            </LinearGradient>
            </LoginButton >

                    <Text mt="5" m='2' textDecoration='underline'>{pageSwitch ? 'Already have an account , Login ' : `Don't have account , Create one `}
                        <Text fontWeight="bold" onPress={() => { setPageSwitch(!pageSwitch) }}>here 🥳</Text>
                    </Text>
        </Stack>
        </Center>
        </>
    )
}

export default LogReg