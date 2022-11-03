const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

function delay(duration){
    start = Date.now()
    while(Date.now - start < duration
        ){
        //event loop is blocked
    }
}

app.get('/', (req,res)=>{
    res.send(`Performance example ${process.pid}`)
});

app.get('/timer', (req,res)=>{
    delay(4000);
    res.send(`Beep Beep Beep! ${process.pid}`);
});

console.log('Worker proces has started');
app.listen(PORT, ()=>{
    console.log('Server is running')
});

