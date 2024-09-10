import { useState } from "react";
import axios from 'axios';   

export function Box () {

    const [to , setto] = useState("");
    const [from , setfrom] = useState("");  
    const [amount , setamount] = useState (''); 
    const [result, setresult] = useState (''); 
    const [conversion_rate, setconversion_rate] = useState ('');         




    return (

        <>
   <input type="text" placeholder="Currency Converted To" onChange={(e)=>{setfrom(e.target.value)}}/>  
        <input type="text" placeholder="Currency From" onChange={(e)=>{setto(e.target.value)}}/>  
     

        <input type="text" placeholder="Amount" onChange={(e)=>{setamount(e.target.value)}}/>        


        <button
        onClick={async ()=>{

            const responce = await axios.post('http://localhost:3044/convert', {from: from, to: to, amount: amount});
            console.log(responce.data); 
            setresult(responce.data.conversion_result);  
            setconversion_rate(responce.data.conversion_rate); 



        }}>Convert Currency </button> 

        {result && conversion_rate && (

<h3> {amount} was converted to {result} with a conversion Rate of {conversion_rate}</h3>
        )}    

       

        
        
        </>
    );

}






