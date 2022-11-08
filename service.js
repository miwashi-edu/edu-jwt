const app = require('./server.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err)=> {
    console.log(`Server is listeing to port ${PORT}`);
})