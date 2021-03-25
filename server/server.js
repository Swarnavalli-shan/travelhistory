const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();

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

app.listen(5000);