const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();

const travelDetails = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.all('*',function(req,res,next)
{
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

   // if ('OPTIONS' == req.method) return res.send(200);

    next();
});

app.get('/login',(req,res) => {
    res.send('from get page');
});

app.post('/login', (req,res) => {
    console.log('post test');
    console.log(req.body);
    if(req.body.uName == "travel" && req.body.password == "123")
    {   
        res.send('true');
    }
    else
    {
        res.send('false');
    }
});

app.get('/travel', (req,res) => {
    res.send(JSON.stringify(travelDetails));
});

app.post('/travel/add', (req,res) => {
    console.log(req.body);
    travelDetails.push(req.body);
    console.log('Array after adding:',travelDetails);
    res.send('Added');
});

app.post('/travel/delete', (req,res) => {
    const index=travelDetails.findIndex((o) => o.rowid === req.body.rowId);
    travelDetails.splice(index,1);
    console.log('Array after deleting:',travelDetails);
    res.send('Deleted');
});

app.post('/travel/update', (req,res) => {
    const index=travelDetails.findIndex((o) => o.rowid === req.body.rowid);
    travelDetails[index].from=req.body.from;
    travelDetails[index].to=req.body.to;
    travelDetails[index].address=req.body.address;
    travelDetails[index].country=req.body.country;
    travelDetails[index].reason=req.body.reason;
    res.send('UPDATED');
});
app.listen(5000);