import React from 'react'
import {View,Text,TouchableOpacity,Image,Linking} from 'react-native'
import { Feather} from '@expo/vector-icons'
import logo from '../../assets/logo.png'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import style from './style'

export default function Detail(){

    const navigator = useNavigation();
    const Route = useRoute();
    const incidents = Route.params.incident;
    const message = `Olá ${incidents.name}, estou entrando em contato com vcs para dizer que vcs são muito lindos`

    function Volta(){
        navigator.goBack();
    }

    function Mail(){

       MailComposer.composeAsync({
           subject:`Heroi do caso:${incidents.title}`,
           recipients:[incidents.email],
           body: message

       })
    }

    function Whatsapp(){
        Linking.openURL(`whatsapp://send?phone=5583996292062;text=${message}`);

    }

    return(
        <View style={style.container}>
            <View style={style.header}>
            <Image source={logo}/>
            <TouchableOpacity onPress={Volta}>
                <Feather name='arrow-left' size={26} color="#e82041"/>
            </TouchableOpacity>
            
            </View>

            <View style={style.incident}>

            <Text style={[style.incidentProperty,{marginTop:0}]}>ONG:</Text>
    <Text style={style.incidentValue}>{incidents.name} de {incidents.city}/{incidents.uf}</Text>

             <Text style={style.incidentProperty}>Caso:</Text>
             <Text style={style.incidentValue}>{incidents.title}</Text>
             
             <Text style={style.incidentProperty}>Preço:</Text>
             <Text style={style.incidentValue}>{incidents.value}</Text>


            </View>
            <View style={style.contentBox}>
                <Text style={style.heroTitle}>Salve o dia</Text>
                <Text style={style.heroTitle}>Seja o herói desse caso</Text>
                <Text style={style.heroDescription}>Entre em contato</Text>

                <View style={style.actions}>
                <TouchableOpacity style={style.action} onPress={Whatsapp}>
                    <Text style={style.actionText}>Whatsapp</Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.action} onPress={Mail}>
                    <Text style={style.actionText}>Email</Text>

                </TouchableOpacity>

                </View>


            </View>
        </View>
    )
}