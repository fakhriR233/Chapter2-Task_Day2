const express = require('express')

const app = express()

const port = 8000

app.set('view engine', 'hbs'); //set view engine

app.use('/assets', express.static(__dirname + '/assets'))

app.use(express.urlencoded({extended: false}))

app.get('/', function(request,response){
    response.render('index')
})

app.get('/contact-me', function (request,response){
    response.render('contact-me')
})

app.get('/add-project', function (request,response){
    response.render('add-project')
})

app.get('/project-detail', function (request,response){
    response.render('project-detail')
})

app.post('/add-project', function(request,response) {
    console.log(request.body);

})

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
})