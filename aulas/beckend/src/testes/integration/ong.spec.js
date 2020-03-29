const request = require('supertest')
const app = require('../../app')
const conection = require('../../database/connect')

beforeEach(async()=>{
  await conection.migrate.rollback() 
  await conection.migrate.latest()
})

afterAll( async ()=>{
  await conection.destroy()
})


describe('ONG',()=>{
    it('Deve criar uma nova ONG',async()=>{
        const response = await request(app).post('/ongs').send({
    name:"UniCeF",
	email:"null@test.com",
	whatsapp:"4566784560",
	city:"SantaCatarina",
	uf:"Sc"
        })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    })
})