const connection =require('../database/connect')

module.exports={
    async create(req,res){
        const {id} = req.body;
       // console.log(req.body)
        const ong = await connection('ongs')
        .where('id',id)
        .select('name')
        .first();

        if(!ong){
            return res.status(400).json({error: 'Ong not found'});
        }

        return res.json(ong)

    }
}