import React, {useEffect,useState} from 'react'
import {View,FlatList ,Image,Text, TouchableOpacity} from 'react-native'
import logo from '../../assets/logo.png'
import {Feather} from '@expo/vector-icons'
import {useNavigation, NavigationContainer} from '@react-navigation/native'

import style from './style'

import api from '../../services/api'

export default function Incidents(){

     const navigator =useNavigation();
     const[incidents,setIncidents] =useState([]);
     const[total,setTotal] =useState(0);
     const[page,setPage] = useState(1);
     const[load,setLoad] = useState(false)

     async function LoadIncidents(){
         if(load){
             return;
         }

         if(total>0 && incidents.length === total){
             return;
         }

         setLoad(true)
         const response = await api.get('incidents', {
             params:{page}
         });


         setIncidents([...incidents,...response.data])
         setTotal(response.headers['x-total-count'])
         setPage(page+1);
         setLoad(false);


     }

     useEffect(()=>{
       LoadIncidents();

     },[])

     function NavigateToDetail(incident){
         navigator.navigate('Detail',{incident})
     }

    return(
        <View style={style.container}>
        <View style={style.header}>
            <Image source={logo}/>
            <Text style={style.headerText}>
                Total de<Text style={style.headerTextBold}> {total} casos.</Text>
            </Text>
            </View>
            <Text style={style.title}>Bem vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia</Text>
            
            <FlatList
            data ={incidents}
            style={style.incidentList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator ={false}
            onEndReached={LoadIncidents}
            onEndReachedThreshold={0.2}
            renderItem ={({item:incident})=>(

                <View style={style.incident}>
             <Text style={style.incidentProperty}>ONG:</Text>
             <Text style={style.incidentValue}>{incident.name}</Text>

             <Text style={style.incidentProperty}>Caso:</Text>
             <Text style={style.incidentValue}>{incident.title}</Text>
             
             <Text style={style.incidentProperty}>Preço:</Text>
            <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR',{
                style:'currency',
                currency:'BRL'}).format(incident.value)}
                </Text>

             <TouchableOpacity style={style.detailButton} onPress={()=>NavigateToDetail(incident)}>
                 <Text style={style.detailButtonText}>Mais Informações</Text>
                 <Feather name="arrow-right" size={16} color="#e02041"></Feather>
             </TouchableOpacity>

             
            </View>

                
            )}
            
            
            /> 
            
            
            

            </View>
        
    )
}