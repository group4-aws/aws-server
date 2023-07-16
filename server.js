const express=require('express')
const app=express();
const port=3000

function welcomeHandler(req, res) {
  res.status(200).send("hi from home");
}
function aboutUs(req, res) {
  res.status(200).send("hi from aboutUs");
}

app.get('/',welcomeHandler)
app.get('/aboutus',aboutUs)
app.listen(port, () => {
    console.log(`server port is ${port}`);
  });


  