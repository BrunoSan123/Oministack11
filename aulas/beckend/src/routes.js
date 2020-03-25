const express =require('express');

const routes =express.Router();
const crypto =require('crypto');
const connection = require('./database/connect');

routes.post('/ongs',async (req,res)=>{
    const {name,email,whatsapp,city,Paraíba}= req.body;

    const id =crypto.randomBytes(4).toString('HEX');

   await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    

    return res.json({id})
})

module.exports =routes;