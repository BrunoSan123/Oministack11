import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator() 

import Incidentes from './paginas/incidents'
import Detail from './paginas/detail'

export default function Routes(){

    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="incidents" component={Incidentes}/>
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>

    )
}