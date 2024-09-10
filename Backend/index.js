require ('dotenv').config();    
const express = require('express');  
const app = express();   
const PORT = process.env.PORT || 3099;  
const axios = require('axios');  


const cors = require('cors');    

app.use(cors());     
app.use(express.json());  

const CONVERT_API = 'https://v6.exchangerate-api.com/v6/'; 
const API_KEY = process.env.API_KEY;    


app.post ('/convert' , async function (req,res){

  
const {from, to, amount} = req.body;     
try{

    const url = `${CONVERT_API}/${API_KEY}/pair/${from}/${to}/${amount}`; 
    const response = await axios.get(url);     
    if(response.data.result === 'error'){

        res.status(411).json({message: 'Invalid currency code'});    
    }

    console.log(response.data.result);
    
    res.json({

        result: response.data.result,    
        conversion_rate: response.data.conversion_rate,      
        conversion_result: response.data.conversion_result,  
        
    });     
} catch (error) {

    console.log(error); 
    console.log(API_KEY); 

    res.status(500).json({message: 'Server Error'});    
}

  
      

});


app.listen(PORT, () => {    
    console.log(`Server is running on port: ${PORT}`);    
}    )
