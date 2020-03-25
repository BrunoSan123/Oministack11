import * as express from 'express';
import * as BodyParser from 'body-parser';
import {WelcomeController} from './welcome.cotroller';

const app: express.Application =express();


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));

app.use('/welcome', WelcomeController);

const port = process.env.PORT||3000;


app.listen(port,()=>{
    console.log(`Escutando em localhost:${port}`);
})