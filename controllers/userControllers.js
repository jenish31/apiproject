const router = require('express').Router();
const userModel = require('../models/usermodels');

router.post('/adduser',async(req, res) => {
    const body = req.body
    let fn = await userModel.getuser(body.firstname) 
    let ls = await userModel.getuser(body.lastname) 
    if (body.firstname == ""){          
        res.json({ success: false,firstname:"firstname required" })    
    }if(fn.length!==0){
        res.json({success:false,firstname:"user already exists"})
    }if(ls.length!==0||ls==""){ 
        res.json({success:false,firstname:"user u have entered is invalid !!"})
    }else{
        let usersList = await userModel.adduser(body)
        res.json({ success: true, data:usersList }) 
    }  
})

router.put('/updateuser/:id',async(req, res) => {
    const body = req.body;
    const id = req.params.id;
    let usersList = await userModel.updateuser(body,id)
    res.json({ success: true, data:usersList })
})
router.delete('/removeuser/:id',async(req, res) => {
    const id = req.params.id;
    let usersList = await userModel.removeuser(id)
    res.json({ success: true, data:usersList })
})

module.exports=router;
