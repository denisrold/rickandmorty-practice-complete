require("dotenv").config();
//  En resumen, esta línea de código carga las variables de entorno definidas en el archivo
// .env del proyecto para que puedan ser utilizadas por la aplicación Node.js.
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const cors = require("cors");
const { sequelize } = require("./DB_connection");

const PORT = process.env.PORT || 3001; //sera el que me probean o sino sera 3001
/*process.env.PORT hace referencia a la variable de entorno PORT que se ha definido 
en algún lugar de la configuración del sistema. Si se ha definido en el archivo .env, 
la línea const PORT = process.env.PORT se encargará de leer el valor de la variable 
PORT del archivo .env y asignarlo a la constante PORT.

De esta manera, la aplicación puede acceder a las variables de entorno definidas en
 el sistema operativo o en el archivo .env y utilizarlas en el código para configurar 
 y personalizar la aplicación. */

const server = express();
server.use(cors()); //NOTA MENTAL: PONER EL USE CORS ARRIBA EN POSICION.
server.use(express.json());
server.use("/", router);
server.use(morgan("dev"));

//server.use("/rickandmorty", router);
/**En resumen, la función server.use(router) establece una conexión entre nuestra instancia de server
 * y las rutas definidas en el objeto router, de tal manera que cualquier solicitud HTTP que llegue
 *  a nuestra aplicación pueda ser manejada por las funciones correspondientes definidas en el objeto router. */
sequelize
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`${PORT}`);
    });
  })
  .catch((error) => console.log(error));

//http://localhost:3001/5       param: forma parte de la ruta--> su presencia o ausencia define una ruta u otra.
//
//http://localhost:3001?id=5    query: no forma parte de la ruta. Es informacion adicional.
