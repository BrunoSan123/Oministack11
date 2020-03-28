import React,{useState} from 'react' 
import './style.css'
import logo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

export default function Register(){
    const[name, setName] =useState('')
    const[email, setEmail] =useState('')
    const[whatsapp, setWhatsapp] =useState('')
    const[city, setCity] =useState('')
    const[uf, setUf] =useState('')

    const history =useHistory()

 async function handleRegister(e){
   e.preventDefault()
  
   
   const data ={name,email,whatsapp,city,uf}

   try{
   const response = await api.post('ongs',data)

 alert(`Cadastro realizado com sucesso\n seu ID de acesso: ${response.data.id}`)
 history.push('/')
   }catch(err){
       alert('Erro no cadasttro! tente novamente')
   }
 }

 

    return(
        <div className="register-container">
            <div className="content">
                <section>
                  <img src={logo} alt="Be the Hero"/>
                  <h1>cadastro</h1>
                  <p>Faça seu cadastro, entre na plataforma, 
                      e ajude pessoas a resolverem problemas, e a fazer um mundo melhor</p>
                      
                      <Link className="back-link" to="/profile">
                      <FiArrowLeft size={16} color="#e02041"/>
                      Não tenho cadastro
                  </Link>
                </section>
                <form onSubmit={handleRegister}>
                  <input placeholder="Nome da Ong"
                  value={name}
                  onChange={e =>setName(e.target.value)}/>

                  <input type="email" placeholder="email"
                  value={email}
                  onChange={e =>setEmail(e.target.value)}/>

                  <input placeholder="whatsapp"
                  value={whatsapp}
                  onChange={e =>setWhatsapp(e.target.value)}/>

                  <div className="input-group">
                      <input placeholder="cidade"
                      value={city}
                      onChange={e =>setCity(e.target.value)}/>

                      <input placeholder="uf" style={{width: 80}}
                      value={uf}
                      onChange={e =>setUf(e.target.value)}/>
                      </div>
                      <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
