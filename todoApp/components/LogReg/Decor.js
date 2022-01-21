import React from 'react'
import { Decor, DecorII, DecorIII, DecorIV, DecorV} from './LogReg.styled'
import { LinearGradient } from 'expo-linear-gradient';
import {Box} from 'native-base'

const TopDecor = () => {
    
    return (
        <Box style={{marginBottom:20, height: 200 }}>
        <DecorII >
        <LinearGradient
            colors={['#eb5521', '#b32db3']}
        >
        <DecorII/>
        </LinearGradient>
        </DecorII>
        <Decor/>
        <DecorIV/>
        <DecorIII/>
        <DecorV>
        <LinearGradient
            colors={['#eb5521', '#b32db3']}
        >
        <DecorV/>
        </LinearGradient>
        </DecorV>
        </Box>
    )
}

export default TopDecor