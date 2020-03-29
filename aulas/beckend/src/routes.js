const express =require('express');
const ongController =require('./controllers/ongControllers');
const incidentController = require('./controllers/incidentCotroller');
const ProfileControler =require('./controllers/ProfileControler');
const session =require('./controllers/SessionControler')
const routes =express.Router();
const { celebrate,Segments,Joi} = require('celebrate')
routes.post('/sessions',session.create);


routes.get('/ongs',ongController.index);
routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)


    })
}),ongController.create);

routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),ProfileControler.index);


routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page: Joi.number()
    })
}),incidentController.index);
routes.post('/incidents',incidentController.create)
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id: Joi.number().required()
    })
}),incidentController.delete)

module.exports =routes;