const generateUniqueId = require('../../util/generateUniqueId')


describe('Generate Unique ID',()=>{
    it('Deve gerar um ID unico',()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8)
    })
})