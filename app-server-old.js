const http = require('http');

// Manera nativa de crear servidor
http.createServer( (resquest, response) => {
    // request > solicitud del usuario
    // response > 

    console.log(resquest)

    // Tipo de respuesta y formato
   // response.writeHead(200, {'Content-Type': 'application/json'}); // text/plain

     // Le indica al navegador que se va descargar y que nombre va llear 
 
    response.setHeader("Content-Disposition", "attachment; filename=\"datos.csv\"");

    // Espeficiamos el tipo de trespuesta
    response.writeHead(200, {'Content-Type': 'application/csv'}); //

    const persona = {
        id: 1,
        name: 'Fernando'
    }


    // Escribiendo respuesta
    // response.write( JSON.stringify(persona))
    response.write( 'id, nombre \n')
    response.write( '1, Fernando\n')
    response.write( '2, Maria\n')
    response.write( '3, Juan\n')

    // Termine de escribir mi respuesta
    response.end();
})
.listen(8081);

console.log(`Escuchando el puerto 8080`);