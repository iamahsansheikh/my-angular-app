
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/my-angular-app'));

app.get("http://mytest-env.gk2ensxugp.us-east-2.elasticbeanstalk.com/api/persons", (req, res) => {
    res.json();
});

app.get("http://mytest-env.gk2ensxugp.us-east-2.elasticbeanstalk.com/api/persons/firstname", (req, res) => {
    res.json();
});

app.get("http://mytest-env.gk2ensxugp.us-east-2.elasticbeanstalk.com/api/persons/lastname", (req, res) => {
    res.json();
});

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/my-angular-app/index.html');
});

app.listen(process.env.PORT || 8080);