# NODE INICIAL PARA SERVER HTTP

### GIT

`- git log -`

`- git branch -`

`- git remote -v -`

### FORMA NATIVA DE CREAR SERVIDOR WEB EN NODE 

```javascript

const http = require('http');

// Manera nativa de crear servidor
http.createServer( (resquest, response) => {
    
    /// TODO

})
.listen(8081);

```

Ejemplo en archivo app-server-old.ks


### DEPENDECIAS USADAS

##### Paqute express

`- npm i express -`

Repositorio: https://www.npmjs.com/package/express 

Oficial: https://expressjs.com/


##### handlebars.js  - Agregar dinamismo -   Renderismo dentro del backend

`- npm install hbs -`


#### http Server

`- npm install --global http-server -`

https://www.npmjs.com/package/http-server


nota: 
  - para deploy de app
    
    Para levantar los server
   `- http-server -o -`



Repositorio: https://www.npmjs.com/package/handlebars

hbs para que node renderice: https://github.com/pillarjs/hbs instalamos este.

Nota: 
 - Se recomienda usarlo cuando son sitio chicos
 - Paquete usado para node

##### Dotenv  - variables de entorno

`- npm  i dotenv -`

### UTILIDADES | Serverless

- [Herokuinks](https://www.heroku.com/) 
- [Digital Ocean](https://try.digitalocean.com/developerbrand/)
- [Google Cloud](https://cloud.google.com/)
- [AWS](https://aws.amazon.com/es/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)
- [Azure](https://azure.microsoft.com/en-ca/free/search/)




##### FIN