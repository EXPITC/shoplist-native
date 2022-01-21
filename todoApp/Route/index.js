import React,{ useEffect, useState ,useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoShop from '../screens/TodoShop' 
import LogReg from '../screens/LogReg' 
import { NativeBaseProvider, Box } from 'native-base';
import {UserContext} from '../Context/userContext'

const screens = {
    LogReg: {
        screen: LogReg,
    },
    Todo: {
        screen: TodoShop
    }
}

const Stack = createNativeStackNavigator()

function Route() {
    const { state} = useContext(UserContext)
    const { isLogin } = state
    console.log(isLogin)
    return (
        <NavigationContainer
       >
            <NativeBaseProvider  >
                <Box safeArea />
                <Stack.Navigator  screenOptions={{ headerShown: false}} >
                    {isLogin ? 
                        <Stack.Screen
                        name="Todo"
                        component={TodoShop}
                        options={{ title: 'OverviewMain' }}
                    /> :
                    <Stack.Screen
                    name="Main"
                    component={LogReg}
                    options={{ title: 'Overview' }}
                    />}
                </Stack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    )
}
export default Route