import Router from 'express';


const routes = new Router();

routes.get('/', (req,res)=>{
  res.send({message: 'Hello Omni3'});
});

export default routes;