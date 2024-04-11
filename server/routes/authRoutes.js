const express=require('express');
const router=express.Router();
const cors= require('cors');
const {test,registerPlace,}=require('../controllers/authControllers')


// middleware 
router.use(
    cors({
    credentials: true,
    origin: 'http://localhost:3000'
    })
)
router.get('/',test)
router.post('/add-places',registerPlace)
module.exports=router