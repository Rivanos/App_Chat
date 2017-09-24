let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')


//Moteur de tempalte
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(session({
    secret:'SecretMana',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(require('./middleware/flash'))

// Routes
app.get('/', (request,response) => {
    let Message = require('./models/message')
    Message.all(function (messages){
        response.render('pages/index', {messages: messages})
    })
})
app.post('/', (request, response) =>{
    if (request.body.message === undefined || request.body.message === ''){
        request.flash('error', "Vous n'avez pas posté de message")
        response.redirect('/')
    }
    else{
        let Message = require('./models/message')
        Message.create(request.body.message, function (){
            request.flash('succes', 'Merci')
        response.redirect('/')
        })
    }
})
app.listen(8080)
