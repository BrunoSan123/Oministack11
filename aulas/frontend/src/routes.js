import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom';

import Logon from './paginas/logon'
import Register from './paginas/Register'
import Profiler from './paginas/Profile'
import newIncident from './paginas/newIncident'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profiler}/>
            <Route path="/incidents/new" component={newIncident}/>

        </Switch>
        </BrowserRouter>
    )
}