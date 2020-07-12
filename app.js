const express = require ('express')
const app = express ()
const port = 3000

//set the template engine ejs
app.set(`view engine`,`ejs`)

//middlewares
app.use(express.static('public'))

//routes
app.get('/', (req, res) => {
    res.render('index')
})

server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//socket.io instatiation
const io = require ("socket.io")(server);

//listen on every connection

io.on("connection", (socket) => {
    console.log('New user connected')
    
    //default nick
    socket.nick = "Anonymous"

    //listen on change_nick
    socket.on('change_nick', (data)=>{
        socket.nick = data.nick
    })

    //listen on new_msg
    socket.on('new_msg', (data)=>{
        io.sockets.emit('new_msg', {msg : data.msg, nick : socket.nick});
    })    
})