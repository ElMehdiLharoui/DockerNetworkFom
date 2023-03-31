var express = require("express");
const bankController = require("../controllers/bank.controllers");
var router = express.Router();
  

  //router.post('/', bankController.create);
  //router.get('/', bankController.getAll);
/*
router.get('/' ,(req,res)=>{

  res.send("hello from express");

});

router.get('/k/:id([0-9]{4})',(req,res)=>{

    res.send("hello from express"+req.params.id);
  
  });
  
router.get('*',(req,res)=>{

    res.send("non found");
  
  });*/
  
module.exports = router;