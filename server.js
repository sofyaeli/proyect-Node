
  const Arena = require("bull-arena");
 const Bull = require("bull");
const { queues } = require("./workers/queues"); 

const express = require("express")
const connectDb = require("./db/db")



// Importamos las rutas

const userRoutes = require("./routes/userRoutes")
const authRoutes= require("./routes/authRoutes")
const sessionRoutes= require("./routes/sessionRoutes")


const app = express()
const PORT= 3010

// Middleware

app.use(express.json()) 

// Rutas de Autenticacion



// Iniciamos la db.

connectDb()

// Inicializamos el servidor y lo ponemos en escucha en el puerto que pusimos arriba.

const arenaConfig =  Arena({
    Bull,
    queues,
},
 {
  basePath: "/arena",
  disableListen: true
 }
);

app.use('', arenaConfig); 

app.use("/api/auth", authRoutes)

// Rutas de Usuarios

app.use("/api/users", userRoutes) // Creamos las rutas de usuario en la ruta /api/users

// Rutas del usuario actual

app.use("/api/session", sessionRoutes)

app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto: "+ PORT)
})



module.exports = app