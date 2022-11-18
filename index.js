const App = require('./app')

const port = 4000

App.listen(port, ()=>{
    console.log("listening on port" + port)
})