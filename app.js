const express = require ('express')
const app = express ()
const port = 3000

//set the template engine ejs
app.set(`view engine`,`ejs`)

//middlewares
app.use(express.static('public'))

//routes
app.get('/', (req, res) => {
    res.send('Hello')
})

server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//socket.io instatiation
const io = require ("socket.io")(server);

//listen on every connection

io.on("connection", (socket) => {
    console.log('New user connected')
})