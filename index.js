const express = require ('express');
const app = express();
//pra rodar o servidor usamos o listen
//subindo servidor não esquecer de colocar no script o start = nodemon index.js
app.listen(3000, () => {
    console.log('servidor ok')
});