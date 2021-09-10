// importando handlearbar
const hbs = require('hbs');

// importndo dotenv
require('dotenv').config();

// Importando express
const express = require('express')
const app = express()


const port = process.env.PORT;  // de esta manera cualquier hsting detectara cual usar

// usuo de marstical
hbs.registerPartials(__dirname + '/views/partials',  (err) => {
  console.log(err)
});

// Establecer el renderizado handlebar
app.set('view engine', 'hbs');

// servir contenido estatico 
app.use(express.static('public')) // Espeficamos el path de la ruta 

app.get('/',(req, res) => {
    // Renderizamos la vista
    res.render('home' , {
       // Enviamos argumentos al hbs
       nombre: 'Luis Gomez',
       titulo: 'Cursos de node'
    });
     
      // enviamos mensaje
    //  res.send('Home page')
  })
  
app.get('/elements',(req, res) => {

    res.render('elements',{
      nombre: 'Luis Gomez',
      titulo: 'Cursos de node'
    });

   // res.sendFile(__dirname + '/public/elements.html');
  })
  
app.get('/generic',(req, res) => {
    res.render('generic',{
      nombre: 'Luis Gomez',
      titulo: 'Cursos de node'
    });

   // res.sendFile(__dirname + '/public/generic.html');
  })




/**
 * Nota: al estar hablitado los archivos statico automaticamente las ruta estan casada con las carptas
 */
app.get('/rutas2',(req, res) => {
  res.send('Home page')
})

app.get('/hola-mundo', (req, res)  => {
    res.send('Hola mundo es su respuesta')
  })

app.get('*', (req, res) =>{
      //Servimos archivo en una ruta especifica
      res.sendFile(__dirname + '/public/404.html');
        // __dirname: capturamos la ruta de donde esta el archivo

      // enviamos string
     //res.send('404 | Page no faund')
})

//  FORMAR 1
// app.listen(8080)

// FORMA 2
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});