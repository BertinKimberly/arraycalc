const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const port=3000;
app.use(bodyParser.json());

function calculate(numbers,operator){
   
  let result;

  switch(operator){
    case 'add':
        result=numbers.reduce((acc,curr)=> acc + curr);
        console.log(`sum: ${result}`);
        break;
    case 'subtract':
        result=numbers.reduce((acc,curr)=> acc - curr);
        console.log(`Difference: ${result}`);
        break;
             
    case 'divide':
        result=numbers.reduce((acc,curr)=> acc / curr);
        console.log(`Quotient: ${result}`);
        break;
             
    case 'multiply':
        result=numbers.reduce((acc,curr)=> acc * curr);
        console.log(`sum: ${result}`);
        break;
    default:
        console.log('Invalid operator');
        break;
                 
  }
  return result;
}

app.get('/calculate',(req,res)=>{
    const {numbers,operator}=req.body;
    const result=calculate(numbers,operator);
    res.json({result: result});
});

app.post('/calculate',(req,res)=>{
    const {numbers,operator}=req.body;
    const result=calculate(numbers,operator);
    res.json({result: result});
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});