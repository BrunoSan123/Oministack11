import React,{useEffect,useState} from 'react'
import logo  from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2}  from 'react-icons/fi'
import './style.css'
import api from '../../services/api'


export default function Profiler(){
  const history = useHistory();
  const[incidents,setIncidents] =useState([])
  const ongName=localStorage.getItem('ongName')
  const ongId =localStorage.getItem('ongId')
  useEffect(()=>{
    api.get('profile',{
      headers:{
        authorization:ongId
      } 
    }).then(response =>{
        setIncidents(response.data)
    })


  },[ongId])

  async function handleDeleteIncident(id){
    try{
        await api.delete(`incidents/${id}`,{
          headers:{
            authorization:ongId
          }
        })
        setIncidents(incidents.filter(incident=>incident.id!==id))

    }catch(err){
      alert('ERRO AO DELETAR CASO, TENTE NOVAMENTE!')
    }
  }
    

  function handleLogout(){
    localStorage.clear();
    history.push('/')
  }
    return(
     <div className="profile-container">
            <header>
              <img src={logo} alt="Be the hero"/> 
              <span>Bem vindo a {ongName}</span>

              <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
              <button type="button" onClick={handleLogout}>
              <FiPower size={18} color="#e02041"/>
              </button>
              
            </header>
            <h1>Casos Registrados</h1>
            <ul>
              {incidents.map(incident=>(
              <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>DESCRIÇÃO</strong>
                <p>{incident.description}</p>
                <strong>VALOR:</strong>
                <p>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(incident.value)}</p>
                <button type="button" onClick={()=>handleDeleteIncident(incident.id)}>
                  <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
              </li>
               ))}
              
            </ul>
     </div>

    );
}