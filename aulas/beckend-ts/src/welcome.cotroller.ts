import{Router,Request,Response} from 'express' 

const router: Router = Router()

router.get('/', (req:Request,res:Response)=>{
    res.send('<h1>Rota funcionando</h1>');
});

router.get('/:name',(req:Request,res:Response)=>{
    let {name}=req.params;


    res.send(`Olá,${name}`);

})

export const WelcomeController:Router=router;