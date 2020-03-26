const express =require('express');
const ongController =require('./controllers/ongControllers');
const incidentController = require('./controllers/incidentCotroller');
const ProfileControler =require('./controllers/ProfileControler');
const session =require('./controllers/SessionControler')
const routes =express.Router();

routes.post('/sessions',session.create);


routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.get('/profile',ProfileControler.index);


routes.get('/incidents',incidentController.index);
routes.post('/incidents',incidentController.create)
routes.delete('/incidents/:id',incidentController.delete)

module.exports =routes;